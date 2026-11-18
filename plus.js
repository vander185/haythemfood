/* =====================================================================
   Haythem Food · améliorations clients (plus.js, chargé après app.js)
   1. Badges « Le plus commandé » (calculé sur les vraies commandes) et « Nouveau »
   2. Proposition « Passez en menu » après un dürüm / sandwich / bicky
   3. Temps d'attente estimé dans le suivi de commande
   4. Écran d'attente en salle : logo, numéro appelé en grand, animation
   5. Statistiques sur l'écran cuisine (gardées sur l'appareil de la cuisine)
   ===================================================================== */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const tt = s => (typeof T === 'function' ? T(s) : s);
  const DBU = () => { try { return getDB(); } catch (e) { return ''; } };
  const nk = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const pk = s => String(s || '').replace(/[.#$\/\[\]]/g, '_').slice(0, 120);

  const css = document.createElement('style');
  css.textContent = `
.it .m{position:relative}
.hfb{position:absolute;top:-7px;left:-6px;z-index:3;display:inline-flex;align-items:center;gap:3px;padding:3px 8px;border-radius:999px;font:800 11px/1.2 Inter,system-ui,sans-serif;letter-spacing:.02em;white-space:nowrap;pointer-events:none;box-shadow:0 3px 10px #0008}
.hfb.top{background:linear-gradient(135deg,#ff7a18,#e5484d);color:#fff}
.hfb.new{background:linear-gradient(135deg,#1fbf75,#0e8f55);color:#fff}
.mo{text-align:center}
.mo .mop{width:100%;aspect-ratio:4/3;border-radius:18px;background:#0c1b3e center/cover no-repeat;border:2px solid #d4af37;margin:6px 0 14px}
.mo h3{margin:0 0 6px;color:#f9e29c;font-family:'Playfair Display',Georgia,serif;font-size:24px}
.mo p{margin:0 0 6px;color:#cdd6ea}
.mo .mpx{display:inline-block;margin:6px 0 16px;padding:6px 16px;border-radius:999px;background:#d4af3726;border:1px solid #d4af37;color:#f9e29c;font-weight:800;font-size:20px}
.mo .btn{width:100%;margin-top:8px}
.oceta{margin:10px auto 4px;padding:10px 14px;border-radius:14px;background:#d4af371f;border:1px solid #d4af3766;color:#f9e29c;font-weight:700;max-width:340px}
.oceta small{display:block;font-weight:500;color:#aebbd4;margin-top:2px}
#fs .flogo2{height:clamp(54px,8vw,96px);width:auto;filter:drop-shadow(0 4px 10px #000a)}
#fs .fn.nw{animation:fnPop 1s cubic-bezier(.2,.9,.3,1) 3;background:#1f9d55!important;color:#fff!important}
@keyframes fnPop{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}
#fcall{position:fixed;inset:0;z-index:90;display:none;align-items:center;justify-content:center;flex-direction:column;gap:10px;background:radial-gradient(circle,#0e3b25 0%,#040914 75%);color:#fff;text-align:center}
#fcall.on{display:flex;animation:fcIn .5s ease-out}
#fcall b{font:900 clamp(120px,26vw,300px)/1 Georgia,serif;color:#7dffb3;text-shadow:0 0 40px #1fbf75}
#fcall span{font:700 clamp(26px,4vw,52px) Inter,system-ui,sans-serif;color:#f9e29c}
@keyframes fcIn{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}
#kstb{margin-left:auto}
#hfst{position:fixed;inset:0;z-index:96;display:none;overflow:auto;-webkit-overflow-scrolling:touch;background:radial-gradient(circle at 20% 0,#132a5e,#0c1b3e 45%,#040914 85%);color:#f8fafc;padding:calc(env(safe-area-inset-top,0px) + 16px) 16px 80px;font-family:'Plus Jakarta Sans',Inter,system-ui,sans-serif}
#hfst.on{display:block;animation:hsIn .25s ease-out}
@keyframes hsIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
#hfst .hs-w{max-width:1040px;margin:0 auto}
#hfst .hs-h{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px}
#hfst .hs-h h2{margin:0;flex:1 1 260px;color:#f9e29c;font:800 clamp(20px,3vw,28px)/1.2 Cinzel,Georgia,serif}
#hfst .hs-seg{display:flex;gap:6px;flex-wrap:wrap}
#hfst .hs-seg button,#hfst .hs-x{padding:9px 14px;border-radius:12px;border:1px solid #d4af3766;background:#0c1b3ecc;color:#f9e29c;font-family:inherit;font-weight:700;font-size:14px;line-height:1;cursor:pointer;white-space:nowrap}
#hfst .hs-seg button.on{background:linear-gradient(135deg,#c59b27,#f9e29c,#aa771c);color:#040914;border-color:transparent}
#hfst .hs-x{background:#e5484d;border-color:#e5484d;color:#fff}
#hfst .hs-g{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin-bottom:8px}
#hfst .hs-c{background:linear-gradient(160deg,#132a5e,#0c1b3e);border:1px solid #d4af3755;border-radius:16px;padding:14px;text-align:center;min-width:0}
#hfst .hs-c small{display:block;color:#aebbd4;font-size:13px;margin-bottom:4px}
#hfst .hs-c b{display:block;font-weight:800;font-size:clamp(24px,2.8vw,34px);line-height:1.15;color:#f9e29c;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#hfst .hs-c em{display:block;font-style:normal;font-size:12px;margin-top:4px;color:#aebbd4}
#hfst .hs-c em.up{color:#5be39a}#hfst .hs-c em.dn{color:#ff8a8d}
#hfst h3{color:#f9e29c;margin:20px 0 10px;font:700 18px/1.2 Cinzel,Georgia,serif;text-align:left}
#hfst .hs-l{display:grid;gap:7px}
#hfst .hs-r{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,2fr) 64px;gap:10px;align-items:center;font-size:15px;text-align:left}
#hfst .hs-r span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#hfst .hs-r i{display:block;height:14px;border-radius:7px;background:linear-gradient(90deg,#c59b27,#f9e29c);min-width:4px}
#hfst .hs-r em{font-style:normal;text-align:right;font-weight:800;color:#f9e29c;white-space:nowrap}
#hfst .hs-2{display:grid;grid-template-columns:1fr 1fr;gap:18px}
#hfst .hs-b{display:flex;align-items:flex-end;gap:4px;height:160px;padding-top:8px}
#hfst .hs-b div{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:4px;height:100%;font-size:11px;color:#aebbd4}
#hfst .hs-b div i{width:100%;border-radius:6px 6px 0 0;background:linear-gradient(180deg,#f9e29c,#c59b27);min-height:2px}
#hfst .hs-b div.pk i{background:linear-gradient(180deg,#ffb36b,#e5484d)}
#hfst .hs-e{opacity:.65;margin:6px 0}
#hfst .hs-n{opacity:.6;font-size:13px;margin-top:18px;line-height:1.4}
@media(max-width:900px){#hfst .hs-g{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:620px){#hfst{padding-left:12px;padding-right:12px}#hfst .hs-g{grid-template-columns:1fr 1fr;gap:8px}#hfst .hs-c{padding:10px 8px}#hfst .hs-c:first-child{grid-column:1/-1}
#hfst .hs-2{grid-template-columns:1fr;gap:0}#hfst .hs-r{grid-template-columns:minmax(0,1fr) 70px 54px;font-size:14px}#hfst .hs-b{height:130px;gap:2px}#hfst .hs-b div{font-size:9px}
#hfst .hs-seg{width:100%}#hfst .hs-seg button{flex:1;padding:9px 6px}}
`;
  document.head.appendChild(css);

  /* ---------- 1. Badges ---------- */
  let POP = {};
  const BEST_DEF = ['Dürüm Chawarma', 'Dürüm Poulet', 'Tacos Poulet', 'Menu Poulet'];
  async function loadPop() {
    const DB = DBU(); if (!DB) return;
    try { const r = await fetch(DB + '/pop.json'); if (r.ok) POP = (await r.json()) || {}; } catch (e) {}
    deco();
  }
  window.hfPopBump = lines => {
    const DB = DBU(); if (!DB || !lines || !lines.length) return;
    const b = {};
    lines.forEach(l => { const k = pk(l.n); if (k) b[k] = { '.sv': { increment: +l.q || 1 } }; });
    fetch(DB + '/pop.json', { method: 'PATCH', body: JSON.stringify(b) }).catch(() => {});
  };
  function bestSet() {
    const arr = Object.entries(POP).filter(([, v]) => typeof v === 'number');
    const total = arr.reduce((s, [, v]) => s + v, 0);
    if (total < 25) return new Set(BEST_DEF.map(nk));
    return new Set(arr.sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k]) => nk(k)));
  }
  function deco() {
    if (typeof I === 'undefined') return;
    const best = bestSet();
    const nw = new Set(String((typeof getCfg === 'function' && getCfg('newItems')) || '').split(',').map(nk).filter(Boolean));
    document.querySelectorAll('.it .m[data-pv]').forEach(m => {
      const it = I[m.dataset.pv]; if (!it) return;
      const name = nk(full(it));
      const old = m.querySelector('.hfb'); if (old) old.remove();
      let h = '';
      if (it.isAdded || nw.has(name)) h = `<span class="hfb new">✨ ${esc(tt('Nouveau'))}</span>`;
      else if (best.has(name)) h = `<span class="hfb top">🔥 ${esc(tt('Le plus commandé'))}</span>`;
      if (h) m.insertAdjacentHTML('afterbegin', h);
    });
  }
  if (typeof build === 'function') {
    const _build = build;
    build = function () { const r = _build.apply(this, arguments); try { deco(); } catch (e) {} return r; };
  }

  /* ---------- 2. Passez en menu ---------- */
  let moShown = 0, moNo = 0, moLine = null;
  function menuFor(it) {
    if (!it || typeof cats === 'undefined') return null;
    const mc = cats.find(c => /^menus?$/i.test(nk(c.n)));
    if (!mc) return null;
    let want = null, type = '';
    if (/^durums?$/.test(nk(it.cat))) { want = nk(it.n); type = (mTypes().find(t => /d[uü]r/i.test(t)) || ''); }
    else if (/^sandwich/.test(nk(it.cat))) { want = nk(it.n); type = (mTypes().find(t => /sandw/i.test(t)) || ''); }
    else if (/^bicky$/.test(nk(it.cat)) && /hamburger/.test(nk(it.n))) want = 'bicky';
    if (!want) return null;
    const m = mc.items.find(x => nk(x.n) === want && !x.out);
    if (!m || !(m.p > it.p)) return null;
    return { m, type: opt(m).includes('t') ? type : '' };
  }
  window.hfMenuOffer = n => {
    try {
      if (moShown >= 3 || moNo >= 2) return;
      const it = I[n.id], f = menuFor(it); if (!f) return;
      moShown++; moLine = { n, f };
      const u = IMG(f.m), diff = f.m.p - it.p;
      $('#shk').innerHTML = `<div class="mo"><div class="th"><h3 style="flex:1;text-align:left">${esc(tt('Passez en menu ?'))}</h3><button class="chip" data-z="mono">✕</button></div>
<div class="mop" style="${u ? `background-image:url('${String(u).replace(/'/g, "\\'")}')` : ''}"></div>
<h3>${esc(full(f.m))}</h3><p>${esc(tt('Votre plat + des frites') + ' · ' + tt('boisson au choix'))}</p>
<span class="mpx">+ ${eur(diff)}</span>
<button class="btn" data-z="moyes">🍟 ${esc(tt('Oui, en menu'))}</button><button class="btn g" data-z="mono">${esc(tt('Non merci'))}</button></div>`;
      $('#sh').classList.add('on');
    } catch (e) {}
  };
  document.addEventListener('click', e => {
    const z = e.target.closest('[data-z]'); if (!z) return;
    const a = z.dataset.z;
    if (a === 'mono') { moNo++; moLine = null; $('#sh').classList.remove('on'); }
    else if (a === 'moyes' && moLine) {
      const { n, f } = moLine; moLine = null;
      const nl = { id: f.m.id, s: n.s || [], r: n.r || [], x: n.x || [], b: '', nt: n.nt || '', t: f.type };
      window._moRepl = { mid: f.m.id, k: lkey(n) };
      const x = I[f.m.id], ks = [...'trsxb'].filter(c => opt(x).includes(c) && (c !== 'x' || getSUP().length));
      ed = { ...nl, k: Math.max(0, ks.indexOf('b')) };
      sheet();
    }
  });

  /* le plat n'est remplacé par le menu qu'une fois le menu validé */
  window.hfMoDone = o => {
    const r = window._moRepl; window._moRepl = null;
    if (!r || !o || o.id !== r.mid || o.ei !== undefined) return;
    const i = L.findIndex(l => lkey(l) === r.k);
    if (i > -1) { L[i].q--; if (!L[i].q) L.splice(i, 1); }
  };

  /* ---------- 3. Temps d'attente estimé ---------- */
  async function etaTick() {
    const o = st('hfo'); const DB = DBU();
    if (!o || !o.k || o.done || (o.st || 0) >= 2 || !DB || document.hidden) return;
    try {
      const all = (await (await fetch(DB + '/orders.json')).json()) || {};
      const me = all[o.k]; if (!me) return;
      const ahead = Object.values(all).filter(x => x && (x.st || 0) < 2 && x.t <= me.t && x.t > Date.now() - 864e5).length;
      const per = Math.max(1, +getCfg('prepMin') || 4);
      const cur = st('hfo'); if (!cur || cur.k !== o.k) return;
      cur.eta = Math.max(5, Math.round(ahead * per + 3)); cur.ahead = Math.max(0, ahead - 1); cur.etaT = Date.now();
      st('hfo', cur);
      if ($('#oc') && $('#oc').classList.contains('on')) ocDraw();
    } catch (e) {}
  }
  if (typeof ocDraw === 'function') {
    const _oc = ocDraw;
    ocDraw = function () {
      const r = _oc.apply(this, arguments);
      try {
        const o = st('hfo'), el = $('#oc .ocs') || $('#oc .ocn');
        if (o && !o.eta && !etaTick.p) { etaTick.p = 1; setTimeout(() => { etaTick.p = 0; etaTick(); }, 1500); }
        if (o && o.eta && !o.done && (o.st || 0) < 2 && el && !$('#oc .oceta')) {
          const left = Math.max(1, o.eta - Math.round((Date.now() - o.etaT) / 60000));
          el.insertAdjacentHTML('afterend', `<div class="oceta">⏱ ${esc(tt('Prête dans environ'))} ${left} min<small>${o.ahead ? o.ahead + ' ' + esc(tt(o.ahead > 1 ? 'commandes avant la vôtre' : 'commande avant la vôtre')) : esc(tt('Vous êtes le prochain !'))}</small></div>`);
        }
      } catch (e) {}
      return r;
    };
  }
  window.hfEta = etaTick;
  setInterval(etaTick, 20000); setTimeout(etaTick, 2500);

  /* ---------- 4. Écran d'attente en salle ---------- */
  const readyAt = {};
  function fcall(o) {
    let c = $('#fcall');
    if (!c) { c = document.createElement('div'); c.id = 'fcall'; document.body.appendChild(c); }
    c.innerHTML = `<span>${esc(tt('Commande prête'))}</span><b>${esc(o.no)}</b>${o.nom ? `<span>${esc(o.nom)}</span>` : ''}<span style="font-size:clamp(18px,2.4vw,30px);color:#cdd6ea">${esc(tt('Venez la récupérer au comptoir'))}</span>`;
    c.classList.add('on'); clearTimeout(fcall.t); fcall.t = setTimeout(() => c.classList.remove('on'), 6500);
  }
  if (typeof fdraw === 'function') {
    const _fd = fdraw;
    fdraw = function () {
      const r = _fd.apply(this, arguments);
      try {
        const h = $('#fs .fh');
        if (h && !h.querySelector('.flogo2') && window.HF_LOGO) { h.insertAdjacentHTML('afterbegin', `<img class="flogo2" src="${esc(window.HF_LOGO)}" alt="">`); const t = h.querySelector('h2'); if (t) t.textContent = t.textContent.replace(/^🍽️\s*/, ''); }
        const q = KO.filter(o => o.t > Date.now() - 72e5).sort((a, b) => a.t - b.t).filter(o => (o.st || 0) === 2);
        const now = Date.now(), fresh = [];
        q.forEach(o => { if (!readyAt[o.k]) { readyAt[o.k] = fdraw.init ? now : now - 6e4; if (fdraw.init) fresh.push(o); } });
        fdraw.init = 1;
        const els = document.querySelectorAll('#fr .fn');
        q.forEach((o, i) => { if (els[i] && now - readyAt[o.k] < 12000) els[i].classList.add('nw'); });
        if (fresh.length) { fcall(fresh[fresh.length - 1]); if (typeof FA !== 'undefined' && !FA) { try { beep(); } catch (e) {} } }
      } catch (e) {}
      return r;
    };
  }

  /* ---------- 5. Statistiques (écran cuisine) ----------
     Enregistrées sur l'appareil de la cuisine (localStorage « hfstat »), à partir de
     chaque commande reçue (site et borne). Ligne : [heure, total, [[plat, qté]], borne?, mode, paiement]
     Fenêtre : #hfst (ne pas réutiliser #kso, réservé au mode kiosque). */
  const SK = 'hfstat';
  const sget = () => { try { return JSON.parse(localStorage.getItem(SK)) || {}; } catch (e) { return {}; } };
  const lineTot = o => (o.l || []).reduce((a, l) => a + (Number.isFinite(+l.p) ? +l.p : 0), 0);
  function srec(list) {
    const s = sget(); let ch = 0; const now = Date.now();
    list.forEach(o => {
      if (!o || !o.k || s[o.k] || !Array.isArray(o.l) || !o.l.length) return;
      /* heure du téléphone du client parfois fausse : jamais dans le futur */
      const t = +o.t && +o.t < now + 3e5 ? +o.t : now;
      s[o.k] = [t, Math.round(lineTot(o) * 100) / 100, o.l.map(l => [String(l.n || '?'), Math.max(1, +l.q || 1)]), o.src === 'borne' ? 1 : 0, o.mode || '', o.pd ? 'En ligne' : (o.pay || '')];
      ch = 1;
    });
    if (!ch) return;
    const lim = now - 400 * 864e5; Object.keys(s).forEach(k => { if (!Array.isArray(s[k]) || s[k][0] < lim) delete s[k]; });
    try { localStorage.setItem(SK, JSON.stringify(s)); } catch (e) {}
  }
  window.hfStatRec = srec;
  if (typeof kload === 'function') {
    const _kl = kload;
    kload = async function () { const r = await _kl.apply(this, arguments); try { srec(KO); kbtn(); } catch (e) {} return r; };
  }
  function kbtn() {
    const bar = $('.kbar'); if (!bar || $('#kstb')) return;
    bar.insertAdjacentHTML('beforeend', `<button class="btn g" id="kstb">📊 ${esc(tt('Statistiques'))}</button>`);
    $('#kstb').onclick = () => sshow('d');
  }
  if (window.HF_SCREEN === 'cuisine') { if (document.readyState === 'loading') addEventListener('DOMContentLoaded', kbtn); else kbtn(); }
  const eurS = v => (Math.round(v * 100) / 100).toLocaleString('fr-BE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
  const day0 = (back) => { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - back); return d.getTime(); };
  /* périodes alignées sur les jours (minuit) : [début, fin, période précédente] */
  const PER = {
    d: ["Aujourd'hui", () => [day0(0), Infinity, day0(1), day0(0)], 'hier'],
    y: ['Hier', () => [day0(1), day0(0), day0(2), day0(1)], 'avant-hier'],
    w: ['7 jours', () => [day0(6), Infinity, day0(13), day0(6)], '7 j. avant'],
    m: ['30 jours', () => [day0(29), Infinity, day0(59), day0(29)], '30 j. avant']
  };
  let SP = 'd', STI = null;
  function cmp(a, b) {
    if (!b) return '';
    const p = Math.round((a - b) / b * 100);
    return `<em class="${p >= 0 ? 'up' : 'dn'}">${p >= 0 ? '▲' : '▼'} ${Math.abs(p)} % vs ${PER[SP][2]}</em>`;
  }
  function bars(obj, fmt) {
    const e = Object.entries(obj).sort((a, b) => b[1] - a[1]); const mx = e.length ? e[0][1] : 1;
    return e.length ? e.map(([k, v]) => `<div class="hs-r"><span title="${esc(k)}">${esc(k || '—')}</span><i style="width:${Math.max(3, Math.round(v / mx * 100))}%"></i><em>${fmt ? fmt(v) : v}</em></div>`).join('') : '<p class="hs-e">—</p>';
  }
  function sshow(per) {
    if (per) SP = PER[per] ? per : 'd';
    let o = $('#hfst'); if (!o) { o = document.createElement('div'); o.id = 'hfst'; document.body.appendChild(o); }
    const [from, to, pf, pt] = PER[SP][1]();
    const all = Object.values(sget()).filter(Array.isArray);
    const rows = all.filter(r => r[0] >= from && r[0] < to), prev = all.filter(r => r[0] >= pf && r[0] < pt);
    const sum = a => a.reduce((x, r) => x + (+r[1] || 0), 0);
    const ca = sum(rows), n = rows.length, kio = rows.filter(r => r[3]).length, pca = sum(prev), pn = prev.length;
    const cnt = {}; rows.forEach(r => (r[2] || []).forEach(([nm, q]) => cnt[nm] = (cnt[nm] || 0) + q));
    const top = Object.fromEntries(Object.entries(cnt).sort((a, b) => b[1] - a[1]).slice(0, 10));
    const md = {}, py = {};
    rows.forEach(r => { const m = r[4] || 'Non précisé', p = r[5] || 'Non précisé'; md[m] = (md[m] || 0) + 1; py[p] = (py[p] || 0) + (+r[1] || 0); });
    const hr = Array(24).fill(0); rows.forEach(r => hr[new Date(r[0]).getHours()]++);
    const used = hr.map((v, i) => v ? i : -1).filter(i => i > -1);
    const h0 = Math.min(11, ...used), h1 = Math.max(22, ...used), hm = Math.max(1, ...hr), peak = hr.indexOf(Math.max(...hr));
    const H = []; for (let i = h0; i <= h1; i++) H.push(i);
    o.innerHTML = `<div class="hs-w"><div class="hs-h"><h2>📊 ${esc(tt('Statistiques'))} · ${esc(getCfg('title'))}</h2>
<div class="hs-seg">${Object.entries(PER).map(([k, v]) => `<button type="button" class="${k === SP ? 'on' : ''}" data-sp="${k}">${v[0]}</button>`).join('')}</div>
<button type="button" class="hs-x" data-sp="0">✕ Fermer</button></div>
<div class="hs-g"><div class="hs-c"><small>Chiffre d'affaires</small><b>${eurS(ca)}</b>${cmp(ca, pca)}</div><div class="hs-c"><small>Commandes</small><b>${n}</b>${cmp(n, pn)}</div>
<div class="hs-c"><small>Panier moyen</small><b>${eurS(n ? ca / n : 0)}</b></div><div class="hs-c"><small>Borne · Site</small><b>${kio} · ${n - kio}</b></div>
<div class="hs-c"><small>Heure de rush</small><b>${n ? peak + ' h' : '—'}</b></div></div>
<h3>🏆 Plats les plus vendus</h3><div class="hs-l">${n ? bars(top) : '<p class="hs-e">Pas encore de commande sur cette période.</p>'}</div>
<div class="hs-2"><div><h3>🍽️ Sur place / À emporter</h3><div class="hs-l">${bars(md)}</div></div><div><h3>💳 Paiements</h3><div class="hs-l">${bars(py, eurS)}</div></div></div>
<h3>🕐 Commandes par heure</h3><div class="hs-b">${H.map(i => `<div class="${n && i === peak ? 'pk' : ''}"><span>${hr[i] || ''}</span><i style="height:${Math.round(hr[i] / hm * 100)}%"></i>${i}h</div>`).join('')}</div>
<p class="hs-n">Les chiffres sont enregistrés sur cet écran cuisine (${all.length} commande${all.length > 1 ? 's' : ''} en mémoire), à partir de chaque commande reçue du site et de la borne. Gardez cet écran ouvert pendant le service ; un autre appareil aura ses propres chiffres.</p></div>`;
    o.classList.add('on');
    o.onclick = e => { const b = e.target.closest('[data-sp]'); if (!b) return; if (b.dataset.sp === '0') shide(); else sshow(b.dataset.sp); };
    clearInterval(STI); STI = setInterval(() => { if (o.classList.contains('on')) sshow(); else clearInterval(STI); }, 30000);
  }
  function shide() { const o = $('#hfst'); if (o) o.classList.remove('on'); clearInterval(STI); }
  addEventListener('keydown', e => { if (e.key === 'Escape' && $('#hfst.on')) shide(); });
  window.hfStats = p => sshow(({ 1: 'd', 7: 'w', 30: 'm' })[p] || p || 'd');

  try { deco(); } catch (e) {}
  loadPop(); setInterval(loadPop, 600000);
})();
