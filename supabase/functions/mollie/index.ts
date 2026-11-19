// Paiement en ligne Haythem Food via Mollie (Bancontact, cartes, Apple Pay, etc.)
//
// POST { amount, desc, ret, o, nc, day } -> garde la commande ici, crée le paiement, renvoie { id, url }
// POST id=tr_xxx (webhook envoyé par Mollie) -> si payé, envoie la commande en cuisine
// GET  ?id=tr_xxx -> renvoie { id, status, paid, amount, method, k, no } (k = clé de la commande en cuisine)
//
// La commande part en cuisine UNE seule fois, dès que Mollie confirme le paiement,
// que le client revienne sur le site ou qu'il ait fermé la page.
// La clé secrète Mollie reste ici (secret MOLLIE_KEY), jamais sur le site public.

const OK_RET = /^https:\/\/(www\.)?haythemfood\.com(\/|$)|^https:\/\/vander185\.github\.io\//;
const FB = Deno.env.get("FB_DB") || "https://haythemfood-2f2e9-default-rtdb.europe-west1.firebasedatabase.app";
const SB = Deno.env.get("SUPABASE_URL") || "";
const SK = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const SELF = SB + "/functions/v1/mollie";
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info",
};
const out = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });

/* Table mollie_orders (accès réservé à cette fonction) */
const db = (q: string, init: RequestInit = {}) =>
  fetch(SB + "/rest/v1/mollie_orders" + q, {
    ...init,
    headers: { apikey: SK, Authorization: "Bearer " + SK, "Content-Type": "application/json", Prefer: "return=representation", ...(init.headers || {}) },
  });
const row = async (id: string) => {
  const r = await db("?id=eq." + encodeURIComponent(id) + "&select=*");
  const j = r.ok ? await r.json() : [];
  return j[0] || null;
};

/* Numéro de commande du jour : même méthode que le site (file /q/<jour> dans Firebase) */
async function takeNo(day: string): Promise<number | null> {
  try {
    const r = await fetch(`${FB}/q/${day}.json`, { method: "POST", body: JSON.stringify({ ".sv": "timestamp" }) });
    if (!r.ok) return null;
    const k = (await r.json()).name;
    const all = await (await fetch(`${FB}/q/${day}.json?shallow=true`)).json();
    const i = Object.keys(all || {}).sort().indexOf(k);
    return i > -1 ? i : null;
  } catch (_) { return null; }
}

/* Envoie la commande payée en cuisine (une seule fois) */
async function finalize(id: string, paidAmount: number) {
  // on « réserve » la commande : si deux appels arrivent en même temps, un seul passe
  const c = await db("?id=eq." + encodeURIComponent(id) + "&state=eq.new", {
    method: "PATCH", body: JSON.stringify({ state: "creating", updated_at: new Date().toISOString() }),
  });
  const got = c.ok ? await c.json() : [];
  const r = got[0];
  if (!r) return; // déjà envoyée, en cours d'envoi, ou commande inconnue
  try {
    const nc = r.nc || {};
    const i = await takeNo(r.day);
    if (i == null) throw new Error("numero");
    const n = Math.max(1, Math.round(+nc.start) || 1) + i;
    const no = String(nc.pre || "") + String(n).padStart(Math.min(4, Math.max(1, Math.round(+nc.pad) || 1)), "0");
    const o = { ...r.o, no, nn: n, off: 0, st: 0, t: Date.now(), pd: { id, a: paidAmount } };
    const p = await fetch(`${FB}/orders.json`, { method: "POST", body: JSON.stringify(o) });
    if (!p.ok) throw new Error("firebase " + p.status);
    const k = (await p.json()).name;
    await db("?id=eq." + encodeURIComponent(id), {
      method: "PATCH", body: JSON.stringify({ state: "done", fb_key: k, no, updated_at: new Date().toISOString() }),
    });
  } catch (_) {
    // échec : on remet la commande en attente, le prochain appel (Mollie ou le client) réessaiera
    await db("?id=eq." + encodeURIComponent(id), { method: "PATCH", body: JSON.stringify({ state: "new" }) });
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  const key = Deno.env.get("MOLLIE_KEY") || "";
  if (!/^(live|test)_\w{20,}$/.test(key)) return out({ error: "nokey" }, 503);
  const api = (path: string, init: RequestInit = {}) =>
    fetch("https://api.mollie.com/v2/" + path, {
      ...init,
      headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
    });
  const pay = async (id: string) => {
    const r = await api("payments/" + id);
    return r.ok ? await r.json() : null;
  };
  try {
    const ct = req.headers.get("content-type") || "";

    /* 1) Mollie prévient que le statut d'un paiement a changé */
    if (req.method === "POST" && ct.includes("application/x-www-form-urlencoded")) {
      const id = new URLSearchParams(await req.text()).get("id") || "";
      if (/^tr_\w{4,40}$/.test(id)) {
        const p = await pay(id);
        if (p && p.status === "paid") await finalize(id, +p.amount.value);
      }
      return new Response("ok", { headers: CORS });
    }

    /* 2) Le site (ou l'écran cuisine) demande où en est un paiement */
    if (req.method === "GET") {
      const id = new URL(req.url).searchParams.get("id") || "";
      if (!/^tr_\w{4,40}$/.test(id)) return out({ error: "id" }, 400);
      const q = await api("payments/" + id);
      if (!q.ok) return out({ error: "mollie", code: q.status }, 502);
      const p = await q.json();
      const paid = p.status === "paid";
      let k = null, no = null, known = false;
      if (SK) {
        let r = await row(id);
        known = !!r;
        if (r && paid && r.state === "new") { await finalize(id, +p.amount.value); r = await row(id); }
        if (r) { k = r.fb_key; no = r.no; }
      }
      return out({
        id: p.id, status: p.status, paid,
        amount: +p.amount.value, method: p.method || "", test: p.mode === "test",
        k, no, known,
      });
    }

    /* 3) Le site crée un paiement pour une commande */
    if (req.method === "POST") {
      const b = await req.json().catch(() => ({}));
      const amount = Math.round(+b.amount * 100) / 100;
      const ret = String(b.ret || "");
      if (!(amount >= 0.5 && amount <= 500)) return out({ error: "amount" }, 400);
      if (!OK_RET.test(ret)) return out({ error: "ret" }, 400);
      const o = b.o && typeof b.o === "object" ? b.o : null;
      const day = /^\d{4}-\d{2}-\d{2}$/.test(String(b.day || "")) ? String(b.day) : new Date().toLocaleDateString("en-CA", { timeZone: "Europe/Brussels" });
      if (o) {
        // la commande doit avoir des articles et un total égal au montant payé
        const l = Array.isArray(o.l) ? o.l : [];
        const sum = l.reduce((s: number, x: { p?: number }) => s + (+x.p || 0), 0);
        if (!l.length || l.length > 60 || Math.abs(sum - amount) > 0.02) return out({ error: "order" }, 400);
        if (JSON.stringify(o).length > 20000) return out({ error: "order" }, 400);
      }
      const r = await api("payments", {
        method: "POST",
        body: JSON.stringify({
          amount: { currency: "EUR", value: amount.toFixed(2) },
          description: String(b.desc || "Commande Haythem Food").slice(0, 140),
          redirectUrl: ret,
          ...(o && SB ? { webhookUrl: SELF } : {}),
          locale: "fr_BE",
        }),
      });
      const p = await r.json();
      if (!r.ok) return out({ error: "mollie", detail: p.detail || "" }, 502);
      if (o && SK) {
        const nc = b.nc && typeof b.nc === "object" ? { pre: String(b.nc.pre || "").slice(0, 6), pad: +b.nc.pad || 1, start: +b.nc.start || 1 } : {};
        const s = await db("", { method: "POST", body: JSON.stringify({ id: p.id, o, nc, day, amount }) });
        if (!s.ok) return out({ error: "store" }, 500);
      }
      return out({ id: p.id, url: p._links.checkout.href });
    }
    return out({ error: "method" }, 405);
  } catch (e) {
    return out({ error: "server", detail: String(e) }, 500);
  }
});
