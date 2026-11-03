// Serveur de paiement Haythem Food (Cloudflare Worker, gratuit) : Bancontact, Payconiq, cartes via Mollie.
// Réglages du Worker : secret MOLLIE_KEY (test_… puis live_…) et variable ORIGIN = https://www.haythemfood.com
export default {
  async fetch(r, env) {
    const H = { 'Access-Control-Allow-Origin': env.ORIGIN, 'Access-Control-Allow-Headers': 'content-type', 'Content-Type': 'application/json' };
    const out = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: H });
    if (r.method === 'OPTIONS') return new Response(null, { headers: H });
    const u = new URL(r.url);
    const mollie = (p, o = {}) => fetch('https://api.mollie.com/v2/' + p, { ...o, headers: { Authorization: 'Bearer ' + env.MOLLIE_KEY, 'Content-Type': 'application/json' } }).then(x => x.json());

    if (u.pathname === '/create' && r.method === 'POST') {
      const b = await r.json();
      // Le montant est recalculé ici avec les prix publiés sur le site (prices.json), jamais celui envoyé par le navigateur.
      let P; try { P = await fetch(env.ORIGIN + '/prices.json', { cf: { cacheTtl: 60 } }).then(x => x.json()); } catch (e) { return out({ error: 'prices' }, 502); }
      let v = 0;
      for (const l of (Array.isArray(b.lines) ? b.lines : [])) {
        const it = P.items[l.id], q = Math.floor(l.q);
        if (!it || !(q >= 1 && q <= 50)) return out({ error: 'line' }, 400);
        const ex = (Array.isArray(l.x) ? l.x : []).reduce((s, n) => s + (P.ex[n] || 0), 0);
        v += (it.p + (l.b && !it.r ? P.dp : 0) + ex) * q;
      }
      if (!(v > 0 && v < 500)) return out({ error: 'amount' }, 400);
      const ret = String(b.ret || '').startsWith(env.ORIGIN) ? b.ret : env.ORIGIN + '/';
      const p = await mollie('payments', { method: 'POST', body: JSON.stringify({
        amount: { currency: 'EUR', value: v.toFixed(2) },
        description: 'Haythem Food - commande N°' + (+b.no || ''),
        redirectUrl: ret, locale: 'fr_BE',
        ...(['bancontact', 'creditcard', 'payconiq'].includes(b.method) ? { method: b.method } : {}), metadata: { order: String(b.id || '') } }) });
      return out({ id: p.id, url: p._links && p._links.checkout && p._links.checkout.href });
    }
    if (u.pathname === '/status') {
      const id = u.searchParams.get('id') || '';
      if (!/^tr_\w+$/.test(id)) return out({}, 400);
      const p = await mollie('payments/' + id);
      return out({ status: p.status });
    }
    return out({}, 404);
  }
};
