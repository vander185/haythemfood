// Notifications de l'écran cuisine Haythem Food (Web Push), même écran éteint ou page fermée.
//
// GET  ?vapid=1                      -> { pub } clé publique (créée et gardée ici au premier appel)
// POST { act:"sub", sub, wk }        -> enregistre l'appareil cuisine (wk = mot de passe Firebase de l'appareil)
// POST { act:"unsub", endpoint }     -> retire l'appareil
// POST { act:"new", k }              -> nouvelle commande k : prévient tous les appareils cuisine (une seule fois)
// POST { act:"csub", k, sub, t, b }  -> CLIENT : « me prévenir quand ma commande k est prête » (texte dans sa langue)
// POST { act:"ready", k }            -> la cuisine a mis la commande k sur « Prête » : prévient le(s) téléphone(s) du client
//                                        (envoyé seulement si Firebase confirme que la commande est bien prête)
// GET  ?wa=1                         -> { on } la notification WhatsApp est-elle activée ?
// POST { act:"wsub", k, tel, lang }  -> CLIENT : « me prévenir sur WhatsApp » (numéro gardé ici, jamais dans Firebase)
//
// WhatsApp (API Cloud de Meta) : secrets à ajouter dans Supabase -> Edge Functions -> Secrets :
//   WA_TOKEN    = jeton d'accès permanent (utilisateur système Meta Business)
//   WA_PHONE_ID = identifiant du numéro WhatsApp Business (« Phone number ID »)
//   WA_TPL      = nom du modèle de message validé par Meta (par défaut : commande_prete)
//   Modèle « Utilitaire », corps : « ✅ Haythem Food : votre commande N° {{1}} est prête ! Présentez ce numéro au comptoir. »
//   (créé en français, néerlandais et anglais)
//
// Les clés de notification restent dans la base (table push_cfg, accès réservé à cette fonction).

import webpush from "npm:web-push@3.6.7";

const FB = Deno.env.get("FB_DB") || "https://haythemfood-2f2e9-default-rtdb.europe-west1.firebasedatabase.app";
const SB = Deno.env.get("SUPABASE_URL") || "";
const SK = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info",
};
const out = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });

const db = (t: string, q: string, init: RequestInit = {}) =>
  fetch(`${SB}/rest/v1/${t}${q}`, {
    ...init,
    headers: { apikey: SK, Authorization: "Bearer " + SK, "Content-Type": "application/json", Prefer: "return=representation", ...(init.headers || {}) },
  });

let VAP: { pub: string; priv: string } | null = null;
async function vapid() {
  if (VAP) return VAP;
  const read = async () => { const r = await db("push_cfg", "?id=eq.1&select=pub,priv"); const j = r.ok ? await r.json() : []; return j[0] || null; };
  let v = await read();
  if (!v) {
    const k = webpush.generateVAPIDKeys();
    await db("push_cfg", "", { method: "POST", headers: { Prefer: "resolution=ignore-duplicates,return=minimal" }, body: JSON.stringify({ id: 1, pub: k.publicKey, priv: k.privateKey }) });
    v = await read();
  }
  if (!v) throw new Error("vapid");
  webpush.setVapidDetails("https://haythemfood.com", v.pub, v.priv);
  return (VAP = v);
}

/* Seul un appareil qui connaît le mot de passe Firebase peut s'inscrire :
   Firebase n'accepte l'écriture dans hs/<clé> que si c'est la bonne clé. */
async function isKitchen(wk: string) {
  if (!/^[0-9a-f]{64}$/.test(wk)) return false;
  // effacement d'un champ vide : ne change rien, mais Firebase le refuse sans le bon mot de passe
  const r = await fetch(`${FB}/hs/${wk}/_push_check.json`, { method: "DELETE" });
  return r.ok;
}

async function sendAll(payload: Record<string, unknown>) {
  await vapid();
  const r = await db("push_subs", "?select=endpoint,p256dh,auth");
  const subs: { endpoint: string; p256dh: string; auth: string }[] = r.ok ? await r.json() : [];
  let ok = 0;
  const errs: string[] = [];
  await Promise.all(subs.map(async (s) => {
    try {
      await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, JSON.stringify(payload), { TTL: 900, urgency: "high" });
      ok++;
    } catch (e) {
      const code = (e as { statusCode?: number }).statusCode;
      errs.push(String(code || (e as Error).message || e).slice(0, 80));
      if (code === 404 || code === 410) await db("push_subs", "?endpoint=eq." + encodeURIComponent(s.endpoint), { method: "DELETE" });
    }
  }));
  return { ok, n: subs.length, errs };
}

/* Prévient le téléphone du client que sa commande est prête, puis oublie l'abonnement (une seule fois) */
async function readyNotify(k: string, o: { no?: string }) {
  await vapid();
  const r = await db("push_cust", "?k=eq." + encodeURIComponent(k) + "&select=endpoint,p256dh,auth,t,b");
  const subs: { endpoint: string; p256dh: string; auth: string; t: string; b: string }[] = r.ok ? await r.json() : [];
  let ok = 0;
  await Promise.all(subs.map(async (s) => {
    try {
      await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
        JSON.stringify({ c: 1, k, t: s.t || `✅ N° ${o.no} · Votre commande est prête !`, b: s.b || "Présentez ce numéro au comptoir." }),
        { TTL: 1800, urgency: "high" });
      ok++;
    } catch (_) { /* téléphone injoignable : rien */ }
  }));
  if (subs.length) await db("push_cust", "?k=eq." + encodeURIComponent(k), { method: "DELETE" });
  const w = await waNotify(k, o).catch(() => ({ wa: 0 }));
  return { ok, n: subs.length, ...w };
}

/* ---------- WhatsApp ---------- */
const WA_TOKEN = Deno.env.get("WA_TOKEN") || "", WA_PHONE_ID = Deno.env.get("WA_PHONE_ID") || "", WA_TPL = Deno.env.get("WA_TPL") || "commande_prete";
const waOn = () => !!(WA_TOKEN && WA_PHONE_ID);
function normTel(x: unknown) {
  let t = String(x || "").replace(/[\s.\-\/()]/g, "");
  if (t.startsWith("00")) t = "+" + t.slice(2);
  else if (/^0\d{8,9}$/.test(t)) t = "+32" + t.slice(1);   // numéro belge : 04xx xx xx xx
  return /^\+\d{8,15}$/.test(t) ? t : "";
}
async function waNotify(k: string, o: { no?: string }) {
  const r = await db("push_wa", "?k=eq." + encodeURIComponent(k) + "&select=tel,lang");
  const rows: { tel: string; lang: string }[] = r.ok ? await r.json() : [];
  if (!rows.length) return { wa: 0 };
  let ok = 0;
  if (waOn()) {
    await Promise.all(rows.map(async (x) => {
      const lang = ({ fr: "fr", nl: "nl", en: "en" } as Record<string, string>)[x.lang] || "fr";
      const res = await fetch(`https://graph.facebook.com/v21.0/${WA_PHONE_ID}/messages`, {
        method: "POST",
        headers: { Authorization: "Bearer " + WA_TOKEN, "Content-Type": "application/json" },
        body: JSON.stringify({
          messaging_product: "whatsapp", to: x.tel.replace("+", ""), type: "template",
          template: { name: WA_TPL, language: { code: lang }, components: [{ type: "body", parameters: [{ type: "text", text: String(o.no || "") }] }] },
        }),
      }).catch(() => null);
      if (res && res.ok) ok++;
    }));
  }
  await db("push_wa", "?k=eq." + encodeURIComponent(k), { method: "DELETE" });
  return { wa: ok };
}

const eur = (n: number) => (+n || 0).toFixed(2).replace(".", ",") + " €";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  try {
    if (req.method === "GET") {
      if (new URL(req.url).searchParams.has("vapid")) return out({ pub: (await vapid()).pub });
      if (new URL(req.url).searchParams.has("wa")) return out({ on: waOn() });
      return out({ error: "method" }, 405);
    }
    if (req.method !== "POST") return out({ error: "method" }, 405);
    const b = await req.json().catch(() => ({}));

    if (b.act === "sub") {
      const s = b.sub || {};
      if (!/^https:\/\//.test(String(s.endpoint || "")) || !s.keys || !s.keys.p256dh || !s.keys.auth) return out({ error: "sub" }, 400);
      if (!(await isKitchen(String(b.wk || "")))) return out({ error: "auth" }, 403);
      const sub = { endpoint: s.endpoint, keys: { p256dh: s.keys.p256dh, auth: s.keys.auth } };
      const r = await db("push_subs", "", {
        method: "POST", headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify({ endpoint: s.endpoint, p256dh: s.keys.p256dh, auth: s.keys.auth }),
      });
      if (!r.ok) return out({ error: "store" }, 500);
      await vapid();
      try { await webpush.sendNotification(sub, JSON.stringify({ t: "🔔 Notifications activées", b: "Les nouvelles commandes sonneront ici, même écran éteint.", k: "test" }), { TTL: 300, urgency: "high" }); } catch (_) { /* rien */ }
      return out({ ok: true });
    }

    if (b.act === "unsub") {
      const e = String(b.endpoint || "");
      if (/^https:\/\//.test(e)) await db("push_subs", "?endpoint=eq." + encodeURIComponent(e), { method: "DELETE" });
      return out({ ok: true });
    }

    if (b.act === "new") {
      const k = String(b.k || "");
      if (!/^[-\w]{10,40}$/.test(k)) return out({ error: "k" }, 400);
      const o = await fetch(`${FB}/orders/${k}.json`).then((r) => r.json()).catch(() => null);
      if (!o || !o.no || Math.abs(Date.now() - (+o.t || 0)) > 30 * 60000) return out({ ok: false, skip: "order" });
      // une seule notification par commande, même si on prévient plusieurs fois
      const c = await db("push_sent", "", { method: "POST", headers: { Prefer: "resolution=ignore-duplicates,return=representation" }, body: JSON.stringify({ k }) });
      const got = c.ok ? await c.json() : [];
      if (!got.length) return out({ ok: false, skip: "dup" });
      if (Math.random() < 0.05) await db("push_sent", "?at=lt." + new Date(Date.now() - 3 * 864e5).toISOString(), { method: "DELETE" });
      const l: { q?: number; n?: string; p?: number }[] = Array.isArray(o.l) ? o.l : [];
      const tot = l.reduce((s, x) => s + (+(x.p || 0)), 0);
      const what = l.slice(0, 4).map((x) => `${x.q || 1}× ${x.n || ""}`).join(", ") + (l.length > 4 ? "…" : "");
      const paid = o.pd ? "✅ Payé en ligne" : String(o.pay || "");
      const from = o.src === "borne" ? "Borne" : "Site";
      const r = await sendAll({
        t: `🔔 Nouvelle commande N° ${o.no}`,
        b: `${what}\n${o.mode || "Sur place"} · ${eur(tot)} · ${paid} · ${from}`,
        k,
      });
      return out({ ok: true, ...r });
    }
    if (b.act === "csub") {
      const k = String(b.k || ""), s = b.sub || {};
      if (!/^[-\w]{10,40}$/.test(k)) return out({ error: "k" }, 400);
      if (!/^https:\/\//.test(String(s.endpoint || "")) || !s.keys || !s.keys.p256dh || !s.keys.auth) return out({ error: "sub" }, 400);
      const o = await fetch(`${FB}/orders/${k}.json`).then((r) => r.json()).catch(() => null);
      if (!o || !o.no || Date.now() - (+o.t || 0) > 3 * 3600e3) return out({ error: "order" }, 404);
      const clip = (x: unknown, n: number) => String(x || "").replace(/[\u0000-\u001f]/g, " ").slice(0, n);
      const r = await db("push_cust", "", {
        method: "POST", headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify({ k, endpoint: s.endpoint, p256dh: s.keys.p256dh, auth: s.keys.auth, t: clip(b.t, 90), b: clip(b.b, 160) }),
      });
      if (!r.ok) return out({ error: "store" }, 500);
      if (Math.random() < 0.1) await db("push_cust", "?at=lt." + new Date(Date.now() - 864e5).toISOString(), { method: "DELETE" });
      // déjà prête au moment de l'inscription : on prévient tout de suite
      if ((+o.st || 0) >= 2) await readyNotify(k, o);
      return out({ ok: true });
    }

    if (b.act === "wsub") {
      const k = String(b.k || ""), tel = normTel(b.tel);
      if (!/^[-\w]{10,40}$/.test(k)) return out({ error: "k" }, 400);
      if (!tel) return out({ error: "tel" }, 400);
      const o = await fetch(`${FB}/orders/${k}.json`).then((r) => r.json()).catch(() => null);
      if (!o || !o.no || Date.now() - (+o.t || 0) > 3 * 3600e3) return out({ error: "order" }, 404);
      const r = await db("push_wa", "", {
        method: "POST", headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify({ k, tel, lang: String(b.lang || "fr").slice(0, 5) }),
      });
      if (!r.ok) return out({ error: "store" }, 500);
      if (Math.random() < 0.1) await db("push_wa", "?at=lt." + new Date(Date.now() - 864e5).toISOString(), { method: "DELETE" });
      if ((+o.st || 0) >= 2) await waNotify(k, o);
      return out({ ok: true, on: waOn() });
    }

    if (b.act === "ready") {
      const k = String(b.k || "");
      if (!/^[-\w]{10,40}$/.test(k)) return out({ error: "k" }, 400);
      const o = await fetch(`${FB}/orders/${k}.json`).then((r) => r.json()).catch(() => null);
      if (!o || (+o.st || 0) !== 2) return out({ ok: false, skip: "notready" });
      return out({ ok: true, ...(await readyNotify(k, o)) });
    }
    return out({ error: "act" }, 400);
  } catch (e) {
    return out({ error: "server", detail: String(e) }, 500);
  }
});
