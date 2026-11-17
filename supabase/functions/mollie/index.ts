// Paiement en ligne Haythem Food via Mollie (Bancontact, cartes, Apple Pay, etc.)
// POST { amount, desc, ret }  -> crée un paiement, renvoie { id, url }
// GET  ?id=tr_xxx              -> renvoie { id, status, paid, amount, method }
// La clé secrète Mollie reste ici (secret MOLLIE_KEY), jamais sur le site public.

const OK_RET = /^https:\/\/(www\.)?haythemfood\.com(\/|$)|^https:\/\/vander185\.github\.io\//;
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info",
};
const out = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...CORS, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  const key = Deno.env.get("MOLLIE_KEY") || "";
  if (!/^(live|test)_\w{20,}$/.test(key)) return out({ error: "nokey" }, 503);
  const api = (path: string, init: RequestInit = {}) =>
    fetch("https://api.mollie.com/v2/" + path, {
      ...init,
      headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
    });
  try {
    if (req.method === "GET") {
      const id = new URL(req.url).searchParams.get("id") || "";
      if (!/^tr_\w{4,40}$/.test(id)) return out({ error: "id" }, 400);
      const r = await api("payments/" + id);
      if (!r.ok) return out({ error: "mollie", code: r.status }, 502);
      const p = await r.json();
      return out({
        id: p.id, status: p.status, paid: p.status === "paid",
        amount: +p.amount.value, method: p.method || "", test: p.mode === "test",
      });
    }
    if (req.method === "POST") {
      const b = await req.json().catch(() => ({}));
      const amount = Math.round(+b.amount * 100) / 100;
      const ret = String(b.ret || "");
      if (!(amount >= 0.5 && amount <= 500)) return out({ error: "amount" }, 400);
      if (!OK_RET.test(ret)) return out({ error: "ret" }, 400);
      const r = await api("payments", {
        method: "POST",
        body: JSON.stringify({
          amount: { currency: "EUR", value: amount.toFixed(2) },
          description: String(b.desc || "Commande Haythem Food").slice(0, 140),
          redirectUrl: ret,
          locale: "fr_BE",
        }),
      });
      const p = await r.json();
      if (!r.ok) return out({ error: "mollie", detail: p.detail || "" }, 502);
      return out({ id: p.id, url: p._links.checkout.href });
    }
    return out({ error: "method" }, 405);
  } catch (e) {
    return out({ error: "server", detail: String(e) }, 500);
  }
});
