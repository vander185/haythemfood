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
.it .m > div > .hfb{position:static;display:flex;width:max-content;max-width:100%;margin:0 0 4px;padding:2px 8px;font-size:10.5px;box-shadow:0 2px 6px #0006}
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
#hfst .hs-n{opacity:.75;font-size:13px;margin-top:18px;line-height:1.4}
#hfst .hs-pw{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}#hfst .hs-pw input{flex:1 1 200px;padding:11px 12px;border-radius:12px;border:1px solid #d4af3799;background:#040914;color:#fff;font-size:16px}#hfst .hs-pw button{padding:11px 16px;border-radius:12px;border:0;background:linear-gradient(135deg,#c59b27,#f9e29c,#aa771c);color:#040914;font-weight:800;font-size:15px;cursor:pointer}
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
      /* le badge se place au-dessus du nom du plat (il ne le cache plus) */
      const tx = m.querySelector(':scope > div');
      if (h) (tx || m).insertAdjacentHTML('afterbegin', h);
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
      /* vrai supplément à payer : le menu (frites + boisson comprises) moins ce que le client a déjà (plat + boisson éventuelle) */
      let diff = f.m.p - it.p;
      try { diff = unit({ id: f.m.id, s: n.s || [], r: n.r || [], x: n.x || [], b: '', t: f.type, q: 1 }) - unit({ ...n, q: 1 }); } catch (e) {}
      const u = IMG(f.m);
      $('#shk').innerHTML = `<div class="mo"><div class="th"><h3 style="flex:1;text-align:left">${esc(tt('Passez en menu ?'))}</h3><button class="chip" data-z="mono">✕</button></div>
<div class="mop" style="${u ? `background-image:url('${String(u).replace(/'/g, "\\'")}')` : ''}"></div>
<h3>${esc(full(f.m))}</h3><p>${esc(tt('Votre plat + des frites') + ' · ' + tt('boisson au choix'))}</p>
<span class="mpx">${diff > 0.004 ? '+ ' + eur(diff) : esc(tt('Même prix')) + ' 🎉'}</span>
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
      const nl = { id: f.m.id, s: n.s || [], r: n.r || [], x: n.x || [], b: '', nt: n.nt || '', t: f.type, no: { ...(n.no || {}) } };
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

  /* ---------- 4b. Écran d'attente vide : publicité animée (photos HD + affiches) ----------
     Quand il n'y a aucune commande, la télé devient un panneau publicitaire :
     photos des plats avec accroche, prix en macaron, enseigne lumineuse, bandeau défilant,
     et une affiche toutes les 3 photos (commande en ligne, menus, grillades, livraison, avis). */
  const fidCss = document.createElement('style');
  fidCss.textContent = `#fidle{position:fixed;inset:0;z-index:80;display:none;background:#040914;overflow:hidden;color:#fff;font-family:'Plus Jakarta Sans',system-ui,sans-serif}
#fidle.on{display:block}
#fidle .fs{position:absolute;inset:0;opacity:0;transition:opacity 1.3s ease;pointer-events:none}
#fidle .fs.on{opacity:1}
#fidle .fbk{position:absolute;inset:-6%;background:center/cover no-repeat;filter:blur(38px) saturate(1.35) brightness(.5);transform:scale(1.1)}
#fidle .fvig{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 42%,transparent 40%,#040914cc 100%)}
#fidle .fph{position:absolute;left:50%;top:45%;width:min(78vw,calc(62vh * var(--ar,1.33)));aspect-ratio:var(--ar,1.33);transform:translate(-50%,-50%) scale(.96);border-radius:clamp(14px,2vw,30px);background:center/cover no-repeat;box-shadow:0 30px 80px #000c,0 0 0 2px #d4af37bb,0 0 70px #d4af3740;overflow:hidden;transition:transform 9s ease-out}
#fidle .fs.on .fph{transform:translate(-50%,-50%) scale(1.02)}
#fidle .fph::after{content:"";position:absolute;top:0;bottom:0;width:35%;left:-60%;background:linear-gradient(105deg,transparent,#fff5 45%,#fff9 50%,#fff5 55%,transparent);transform:skewX(-12deg)}
#fidle .fs.on .fph::after{animation:fShine 2.2s ease-in-out 1.2s}
@keyframes fShine{to{left:130%}}
#fidle .frib{position:absolute;top:clamp(14px,2.4vh,30px);left:clamp(-8px,-.4vw,-4px);padding:.45em 1.2em .45em 1em;font:800 clamp(14px,1.6vw,26px)/1 'Plus Jakarta Sans',system-ui,sans-serif;color:#040914;background:linear-gradient(135deg,#c59b27,#f9e29c 50%,#aa771c);border-radius:0 999px 999px 0;box-shadow:0 6px 18px #0009;letter-spacing:.02em}
#fidle .fstar{position:absolute;right:calc(50% - min(39vw,calc(31vh * var(--ar,1.33))) - clamp(30px,4vw,70px));top:calc(45% - min(39vw,calc(31vh * var(--ar,1.33))) / var(--ar,1.33) - clamp(20px,3vh,40px));width:clamp(120px,13vw,230px);aspect-ratio:1;display:grid;place-items:center;text-align:center;color:#3a0b0b;transform:rotate(12deg) scale(0);transition:transform .7s cubic-bezier(.2,1.6,.4,1) .9s;filter:drop-shadow(0 10px 20px #000b)}
#fidle .fs.on .fstar{transform:rotate(12deg) scale(1)}
#fidle .fstar::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,#ffe9a8,#e0b23c 45%,#b07a14);clip-path:polygon(50% 0,59% 10%,71% 4%,75% 17%,89% 15%,87% 29%,99% 35%,92% 47%,100% 59%,88% 65%,90% 79%,76% 79%,71% 93%,59% 87%,50% 100%,41% 87%,29% 93%,24% 79%,10% 79%,12% 65%,0 59%,8% 47%,1% 35%,13% 29%,11% 15%,25% 17%,29% 4%,41% 10%);animation:fSpin 24s linear infinite}
@keyframes fSpin{to{transform:rotate(360deg)}}
#fidle .fstar span{position:relative;font:800 clamp(11px,1.1vw,19px)/1.1 'Plus Jakarta Sans',system-ui,sans-serif;text-transform:uppercase}
#fidle .fstar b{position:relative;display:block;font:900 clamp(26px,3vw,54px)/1 Cinzel,Georgia,serif}
#fidle .fcap{position:absolute;left:0;right:0;bottom:clamp(54px,8vh,96px);text-align:center;padding:0 4vw}
#fidle .fcap i{display:block;font:italic 600 clamp(16px,1.9vw,32px)/1.2 Georgia,serif;color:#f3e3b5;letter-spacing:.04em;opacity:0;transform:translateY(14px);transition:all .8s ease .5s}
#fidle .fcap b{display:block;margin-top:.15em;font:800 clamp(30px,4.6vw,76px)/1.05 Cinzel,Georgia,serif;background:linear-gradient(180deg,#fff6d5,#f3cf63 45%,#b8862b);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 3px 10px #000);opacity:0;transform:translateY(20px);transition:all .9s cubic-bezier(.2,.9,.3,1) .7s}
#fidle .fs.on .fcap i,#fidle .fs.on .fcap b{opacity:1;transform:none}
#fidle .fsign{position:absolute;top:clamp(12px,2.2vh,28px);left:0;right:0;z-index:3;display:flex;align-items:center;justify-content:center;gap:14px;pointer-events:none}
#fidle .fsign img{height:clamp(44px,7vh,90px);filter:drop-shadow(0 0 14px #f3cf6388)}
#fidle .fsign b{font:800 clamp(24px,3.2vw,52px)/1 Cinzel,Georgia,serif;color:#fff4cf;letter-spacing:.08em;text-shadow:0 0 6px #fff,0 0 16px #f3cf63,0 0 34px #e0a52a,0 0 60px #d4af37;animation:fNeon 7s infinite}
@keyframes fNeon{0%,18%,22%,62%,64%,100%{opacity:1}20%,63%{opacity:.55}}
#fidle .ftk{position:absolute;left:0;right:0;bottom:0;z-index:3;height:clamp(40px,6vh,64px);display:flex;align-items:center;overflow:hidden;background:linear-gradient(90deg,#7a0f16,#a3161f 50%,#7a0f16);border-top:2px solid #d4af37;box-shadow:0 -8px 24px #0009}
#fidle .ftk div{display:flex;white-space:nowrap;animation:fTk 40s linear infinite;font:800 clamp(16px,2vw,30px)/1 'Plus Jakarta Sans',system-ui,sans-serif;color:#fff3cf;letter-spacing:.03em}
#fidle .ftk span{padding-right:2.5em}
@keyframes fTk{to{transform:translateX(-50%)}}
#fidle .fsp{position:absolute;inset:0;z-index:2;pointer-events:none}
#fidle .fsp i{position:absolute;bottom:-10px;width:5px;height:5px;border-radius:50%;background:#f9e29c;box-shadow:0 0 10px 2px #f3cf63aa;animation:fUp linear infinite;opacity:0}
@keyframes fUp{10%{opacity:.9}100%{transform:translateY(-105vh) translateX(var(--dx));opacity:0}}
/* affiches */
#fidle .fpo{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:4vw;padding:15vh 6vw 13vh;background:transparent}
#fidle .fpo::before{content:"";position:absolute;inset:12vh 2vw 9vh;border:2px solid #d4af3799;border-radius:24px;box-shadow:inset 0 0 0 8px #040914,inset 0 0 0 9px #d4af3755}
#fidle .fpo .ftx{position:relative;max-width:46vw;text-align:left}
#fidle .fpo h2{margin:0;font:900 clamp(34px,5.4vw,96px)/1 Cinzel,Georgia,serif;background:linear-gradient(180deg,#fff6d5,#f3cf63 45%,#b8862b);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 4px 10px #000)}
#fidle .fpo p{margin:.6em 0 0;font:600 clamp(18px,2.2vw,38px)/1.3 'Plus Jakarta Sans',system-ui,sans-serif;color:#e8edf8}
#fidle .fpo .fk{display:inline-block;margin-top:.8em;padding:.35em 1em;border-radius:999px;background:linear-gradient(135deg,#c59b27,#f9e29c,#aa771c);color:#040914;font:800 clamp(18px,2.4vw,40px)/1.1 'Plus Jakarta Sans',system-ui,sans-serif}
#fidle .fpo .fqr{position:relative;width:clamp(170px,22vw,380px);padding:14px;border-radius:22px;background:#f9e29c;box-shadow:0 20px 60px #000c,0 0 0 3px #d4af37;transform:rotate(-3deg)}
#fidle .fpo .fqr img{display:block;width:100%;border-radius:10px}
#fidle .fpo .fqr small{display:block;text-align:center;margin-top:8px;font:800 clamp(13px,1.3vw,22px) 'Plus Jakarta Sans',system-ui,sans-serif;color:#040914}
#fidle .fpo .fcol{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:14px;width:min(44vw,70vh)}
#fidle .fpo .fcol div{aspect-ratio:4/3;border-radius:18px;background:center/cover no-repeat;box-shadow:0 14px 40px #000c,0 0 0 2px #d4af3799}
#fidle .fpo .fcol div:first-child{grid-column:1/-1;aspect-ratio:16/8}
#fidle .fpo .fapps{display:flex;flex-wrap:wrap;gap:12px;margin-top:.8em}
#fidle .fpo .fapps span{padding:.4em 1em;border-radius:14px;background:#ffffff14;border:1px solid #d4af3788;font:800 clamp(16px,2vw,34px)/1 'Plus Jakarta Sans',system-ui,sans-serif;color:#fff}
#fidle .fpo .fst{font-size:clamp(40px,6vw,110px);letter-spacing:.06em;color:#f3cf63;text-shadow:0 0 30px #e0a52a}
#fidle .fs.on .fpo .ftx>*{animation:fIn .9s cubic-bezier(.2,.9,.3,1) both}#fidle .fs.on .fpo .ftx>*:nth-child(2){animation-delay:.2s}#fidle .fs.on .fpo .ftx>*:nth-child(3){animation-delay:.4s}#fidle .fs.on .fpo .ftx>*:nth-child(4){animation-delay:.6s}
@keyframes fIn{from{opacity:0;transform:translateY(24px)}}
@media(max-aspect-ratio:1/1){#fidle .fph{top:40%;width:92vw}#fidle .fcap{bottom:22vh}#fidle .fcap i{font-size:4.2vw}#fidle .fcap b{font-size:8.5vw}#fidle .frib{font-size:3.4vw}#fidle .fstar{width:24vw}#fidle .fstar b{font-size:6vw}#fidle .fstar span{font-size:2.4vw}#fidle .fpo h2{font-size:10vw}#fidle .fpo p{font-size:4.4vw}#fidle .fpo .fk{font-size:5vw}#fidle .fpo .fqr{width:52vw}#fidle .fpo .fapps span{font-size:4.6vw}#fidle .fsign b{font-size:7vw}#fidle .ftk div{font-size:3.6vw}#fidle .fstar{right:2vw;top:calc(42% - 45vw / var(--ar,1.33) - 6vh)}
#fidle .fpo{flex-direction:column;text-align:center;gap:4vh}#fidle .fpo .ftx{max-width:none;text-align:center}#fidle .fpo .fcol{width:86vw}#fidle .fpo .fapps{justify-content:center}}
@media(prefers-reduced-motion:reduce){#fidle *{animation:none!important;transition:none!important}}`;
  document.head.appendChild(fidCss);
  const TAG = {
    durums: ['Roulé minute, généreusement garni', '🔥 Le préféré'], sandwichs: ['Pain croustillant, garni généreusement', '🥖 Fait minute'],
    panini: ['Doré et fondant, pressé à la commande', '🧀 Bien fondant'], tacos: ['Fromage fondu, frites et viande à volonté', '🌮 XXL'],
    kapsalon: ['Frites, viande, fromage gratiné : le vrai kapsalon', '👑 Spécialité'], menus: ['Plat + frites + boisson', '💰 Bon plan'],
    bicky: ['Le classique belge, version maison', '🇧🇪 Classique'], assiettes: ['Assiette généreuse, salade et frites', '🍽️ Généreux'],
    grillades: ['Grillé minute, servi bien chaud', '🔥 Grill'], salades: ['Fraîche, croquante, faite à la commande', '🥗 Frais'],
    specialites: ['Recette maison mijotée avec amour', '⭐ Fait maison'], frites: ['Croustillantes dehors, fondantes dedans', '🍟 Maison'],
    desserts: ['La douceur pour finir en beauté', '🍰 Douceur']
  };
  const tagOf = cat => { const k = nk(cat); const f = Object.keys(TAG).find(x => k.startsWith(x)); return TAG[f] || ['Cuisine halal, faite minute', '⭐⭐⭐⭐⭐']; };
  let FID = null, fidI = 0, fidT = null, fidP = 0;
  function fidList() {
    const out = [];
    try { (cats || []).filter(c => !/sauce|suppl|boisson|olive|crudit/i.test(nk(c.n) + ' ' + nk(c.l))).forEach(c => c.items.forEach(it => { if (it.out) return; const u = IMG(it); if (u && !/^data:/.test(u)) out.push([u, full(it), it.p, c.n]); })); } catch (e) {}
    const seen = new Set(); fidList.all = out.filter(x => !seen.has(x[0]) && seen.add(x[0])).sort(() => Math.random() - .5); return fidList.all.slice(0, 40);
  }
  const hd = u => /^photos\/[^/]+\.webp$/.test(u) ? 'photos/hd/' + u.slice(7) : u;
  function fidLoad(u) {
    return new Promise(res => { const h = hd(u), i = new Image(); i.onload = () => res([h, i.naturalWidth / i.naturalHeight]); i.onerror = () => { if (h === u) return res(null); const j = new Image(); j.onload = () => res([u, j.naturalWidth / j.naturalHeight]); j.onerror = () => res(null); j.src = u; }; i.src = h; });
  }
  const qu = u => `url('${String(u).replace(/'/g, "\\'")}')`;
  const catPics = re => (FID.all || FID.l).filter(x => re.test(nk(x[3]))).slice(0, 3).map(x => hd(x[0]));
  const minP = re => { try { const c = cats.find(c => re.test(nk(c.n))); const v = c && c.items.filter(i => !i.out && +i.p).map(i => +i.p); return v && v.length ? Math.min(...v) : 0; } catch (e) { return 0; } };
  function posters() {
    const P = [];
    P.push(`<div class="fpo"><div class="ftx"><h2>Commandez en ligne</h2><p>Scannez, composez, payez : votre commande part directement en cuisine.</p><span class="fk">haythemfood.com</span></div><div class="fqr"><img src="icons/qr-site.png" alt=""><small>📱 Scannez-moi</small></div></div>`);
    const mp = minP(/^menus?$/), mc = catPics(/^menus?$/);
    if (mc.length >= 3) P.push(`<div class="fpo"><div class="ftx"><h2>Nos menus</h2><p>Votre plat, des frites dorées et une boisson fraîche.</p>${mp ? `<span class="fk">dès ${esc(eur(mp))}</span>` : ''}</div><div class="fcol">${mc.map(u => `<div style="background-image:${qu(u)}"></div>`).join('')}</div></div>`);
    const gc = catPics(/^(grillades|assiettes)/);
    if (gc.length >= 3) P.push(`<div class="fpo"><div class="ftx"><h2>Les grillades du chef</h2><p>Kefta, brochettes, poulet mariné : grillés minute, servis généreusement.</p>${minP(/^grillades/) ? `<span class="fk">dès ${esc(eur(minP(/^grillades/)))}</span>` : ''}</div><div class="fcol">${gc.map(u => `<div style="background-image:${qu(u)}"></div>`).join('')}</div></div>`);
    const apps = String(getCfg('delvApps') || '').split(',').map(x => x.trim()).filter(Boolean);
    if (getCfg('delvOn') !== '0' && apps.length) P.push(`<div class="fpo"><div class="ftx"><h2>Bientôt chez vous</h2><p>La livraison à domicile arrive très prochainement sur :</p><div class="fapps">${apps.map(a => `<span>🛵 ${esc(a)}</span>`).join('')}</div></div></div>`);
    P.push(`<div class="fpo"><div class="ftx"><div class="fst">★★★★★</div><h2>Vous avez aimé ?</h2><p>Votre avis Google nous aide énormément. Merci !</p></div><div class="fqr"><img src="icons/qr-avis.png" alt=""><small>⭐ Laissez un avis</small></div></div>`);
    return P;
  }
  function fidChrome(el) {
    const T = esc(getCfg('title'));
    const tk = ['★ Cuisine 100 % halal', '★ Faite minute', '★ Sur place ou à emporter', '★ Commandez sur haythemfood.com', '★ ' + esc(String(getCfg('footer') || '').split('·')[0].trim())];
    const tx = tk.map(t => `<span>${t}</span>`).join('');
    let sp = ''; for (let i = 0; i < 22; i++) sp += `<i style="left:${Math.random() * 100}%;--dx:${Math.round(Math.random() * 120 - 60)}px;animation-duration:${8 + Math.random() * 10}s;animation-delay:${-Math.random() * 18}s;transform:scale(${.5 + Math.random()})"></i>`;
    el.insertAdjacentHTML('beforeend', `<div class="fsp">${sp}</div><div class="fsign">${window.HF_LOGO ? `<img src="${esc(window.HF_LOGO)}" alt="">` : ''}<b>${T}</b></div><div class="ftk"><div>${tx}${tx}</div></div>`);
  }
  async function fidStep() {
    if (!FID || !FID.l.length || fidStep.b) return;
    fidStep.b = 1;
    let html = '';
    fidP++;
    if (fidP % 4 === 0) {                       /* une affiche toutes les 3 photos */
      const P = posters(), po = P[(fidP / 4 - 1) % P.length];
      /* même arrière-plan que les photos : photo du plat floutée + vignette */
      const m = po.match(/background-image:url\('([^']+)'\)/), pick = FID.l[Math.floor(Math.random() * FID.l.length)];
      const bg = m ? m[1] : (pick ? hd(pick[0]) : '');
      html = (bg ? `<div class="fbk" style="background-image:${qu(bg)}"></div><div class="fvig"></div>` : '') + po;
    } else {
      let r = null, it = null;
      for (let n = 0; n < 4 && !r; n++) { it = FID.l[fidI++ % FID.l.length]; r = await fidLoad(it[0]); }
      if (r) {
        const [u, ar] = r, g = tagOf(it[3]), q = qu(u), a = Math.min(1.9, Math.max(.8, ar || 1.33)).toFixed(3);
        html = `<div class="fbk" style="background-image:${q}"></div><div class="fvig"></div><div class="fph" style="background-image:${q};--ar:${a}"><span class="frib">${esc(g[1])}</span></div>${it[2] ? `<div class="fstar" style="--ar:${a}"><div><span>seulement</span><b>${esc(eur(+it[2]))}</b></div></div>` : ''}<div class="fcap"><i>${esc(g[0])}</i><b>${esc(it[1])}</b></div>`;
      }
    }
    fidStep.b = 0;
    if (!html || !FID.el.classList.contains('on')) return;
    const sl = FID.el.querySelectorAll('.fs'), cur = sl[fidP % 2], old = sl[(fidP + 1) % 2];
    cur.innerHTML = html; old.classList.remove('on'); void cur.offsetWidth; cur.classList.add('on');
  }
  function fidle(on) {
    if (on && !FID) {
      const el = document.createElement('div'); el.id = 'fidle'; el.innerHTML = '<div class="fs"></div><div class="fs"></div>';
      document.body.appendChild(el); fidChrome(el); FID = { el, l: fidList() };
    }
    if (!FID) return;
    if (on && !FID.el.classList.contains('on')) { FID.l = fidList(); FID.all = fidList.all; if (!FID.l.length) return; FID.el.classList.add('on'); fidStep(); clearInterval(fidT); fidT = setInterval(fidStep, 7500); }
    if (!on && FID.el.classList.contains('on')) { FID.el.classList.remove('on'); clearInterval(fidT); }
  }
  window.hfIdle = fidle;
  window.hfIdleNext = fidStep;
  if (typeof fdraw === 'function') {
    const _fd2 = fdraw;
    fdraw = function () {
      const r = _fd2.apply(this, arguments);
      try { if (getCfg('fIdle') !== '0') fidle(!KO.some(o => o.t > Date.now() - 72e5)); } catch (e) {}
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
    const s = sget(); let ch = 0; const now = Date.now(); const cq = {};
    list.forEach(o => {
      if (!o || !o.k || s[o.k] || !Array.isArray(o.l) || !o.l.length) return;
      /* heure du téléphone du client parfois fausse : jamais dans le futur */
      const t = +o.t && +o.t < now + 3e5 ? +o.t : now;
      s[o.k] = [t, Math.round(lineTot(o) * 100) / 100, o.l.map(l => [String(l.n || '?'), Math.max(1, +l.q || 1)]), o.src === 'borne' ? 1 : 0, o.mode || '', o.pd ? 'En ligne' : (o.pay || '')];
      cq[o.k] = s[o.k]; ch = 1;
    });
    if (!ch) return;
    const lim = now - 400 * 864e5; Object.keys(s).forEach(k => { if (!Array.isArray(s[k]) || s[k][0] < lim) delete s[k]; });
    try { localStorage.setItem(SK, JSON.stringify(s)); } catch (e) {}
    cqAdd(cq); cpush();
  }
  /* ---- Statistiques en ligne (Firebase, chemin hs/<mot de passe Firebase haché>) ----
     Seuls les appareils autorisés avec le mot de passe Firebase connaissent ce chemin ;
     la règle Firebase « hs » n'accepte que le bon mot de passe. Sinon : stats sur l'appareil. */
  const CQ = 'hfstq';
  let CST = '';                      /* '', 'ok', 'nopw', 'rule', 'net' */
  const cbase = () => { const D = DBU(), w = (typeof WK === 'function' && WK()) || ''; return D && w ? D + '/hs/' + w : ''; };
  const cqGet = () => { try { return JSON.parse(localStorage.getItem(CQ)) || {}; } catch (e) { return {}; } };
  const cqSet = q => { try { localStorage.setItem(CQ, JSON.stringify(q)); } catch (e) {} };
  function cqAdd(o) { if (!Object.keys(o).length) return; const q = cqGet(); Object.assign(q, o); cqSet(q); }
  async function cpush() {
    const B = cbase(); if (!B) { CST = 'nopw'; return; }
    if (cpush.b) return; cpush.b = 1;
    try {
      if (!localStorage.getItem('hfstup')) { cqAdd(sget()); localStorage.setItem('hfstup', '1'); }   /* 1re fois : on envoie l'historique */
      const q = cqGet(), ks = Object.keys(q);
      for (let i = 0; i < ks.length; i += 200) {
        const part = {}; ks.slice(i, i + 200).forEach(k => { part[k] = q[k]; });
        const r = await fetch(B + '.json', { method: 'PATCH', body: JSON.stringify(part) });
        if (r.status === 401 || r.status === 403) { CST = 'rule'; localStorage.removeItem('hfstup'); cpush.b = 0; return; }
        if (!r.ok) throw 1;
        const left = cqGet(); Object.keys(part).forEach(k => delete left[k]); cqSet(left);
      }
      CST = 'ok';
    } catch (e) { CST = 'net'; }
    cpush.b = 0;
  }
  async function cpull() {
    const B = cbase(); if (!B) { CST = 'nopw'; return; }
    try {
      const r = await fetch(B + '.json', { cache: 'no-store' });
      if (r.status === 401 || r.status === 403) { CST = 'rule'; return; }
      if (!r.ok) throw 1;
      const c = (await r.json()) || {}, s = sget(); let ch = 0;
      Object.entries(c).forEach(([k, v]) => { if (Array.isArray(v) && !s[k]) { s[k] = v; ch = 1; } });
      if (ch) try { localStorage.setItem(SK, JSON.stringify(s)); } catch (e) {}
      CST = CST === 'rule' ? 'rule' : 'ok';
    } catch (e) { CST = 'net'; }
  }
  window.hfStatDel = k => {
    try { const s = sget(); delete s[k]; localStorage.setItem(SK, JSON.stringify(s)); const q = cqGet(); delete q[k]; cqSet(q); } catch (e) {}
    const B = cbase(); if (B) fetch(B + '/' + encodeURIComponent(k) + '.json', { method: 'DELETE' }).catch(() => {});
  };
  setInterval(cpush, 60000);
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
  function sshow(per, nopull) {
    if (per) SP = PER[per] ? per : 'd';
    if (!nopull) cpull().then(cpush).then(() => { if ($('#hfst.on') && !(document.activeElement && document.activeElement.id === 'hs_pw')) sshow(null, 1); });
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
<p class="hs-n">${({ ok: '☁️ Synchronisé en ligne : les mêmes chiffres sur tous les appareils autorisés, même après un vidage du cache.', rule: '⚠ Firebase refuse : mot de passe Firebase incorrect sur cet écran, ou règle « hs » absente. Chiffres gardés sur cet appareil. Retapez le mot de passe :', nopw: '📱 Chiffres gardés sur cet appareil seulement. Pour les garder en ligne, tapez une fois le mot de passe Firebase :', net: '⚠ Pas de connexion : chiffres sur cet appareil, envoyés dès le retour d’internet.' })[CST] || 'Synchronisation…'}${CST === 'nopw' || CST === 'rule' ? `<span class="hs-pw"><input id="hs_pw" type="password" autocomplete="current-password" placeholder="Mot de passe Firebase"><button type="button" data-sp="pw">🔓 Autoriser cet écran</button></span>` : ''}<br>${all.length} commande${all.length > 1 ? 's' : ''} en mémoire, reçues du site et de la borne. Gardez un écran cuisine ouvert pendant le service.</p></div>`;
    o.classList.add('on');
    o.onclick = e => { const b = e.target.closest('[data-sp]'); if (!b) return; if (b.dataset.sp === '0') shide(); else if (b.dataset.sp === 'pw') spw(); else sshow(b.dataset.sp); };
    clearInterval(STI); STI = setInterval(() => { if (!o.classList.contains('on')) clearInterval(STI); else if (!(document.activeElement && document.activeElement.id === 'hs_pw')) sshow(); }, 30000);
  }
  /* autoriser cet écran directement depuis les statistiques (même chose que Réglages → Sécurité) */
  async function spw() {
    const p = (($('#hs_pw') || {}).value || '').trim();
    if (p.length < 8) { toast('Mot de passe Firebase : 8 caractères minimum'); return; }
    st('hfwk', wkHash(p)); localStorage.removeItem('hfstup');
    await cpush(); await cpull();
    if (CST === 'ok') toast('✅ Écran autorisé : statistiques en ligne');
    else if (CST === 'rule') { st('hfwk', ''); toast('⚠ Mot de passe refusé par Firebase'); }
    else toast('⚠ Pas de connexion internet');
    sshow(null, 1);
  }
  function shide() { const o = $('#hfst'); if (o) o.classList.remove('on'); clearInterval(STI); }
  addEventListener('keydown', e => { if (e.key === 'Escape' && $('#hfst.on')) shide(); });
  window.hfStats = p => sshow(({ 1: 'd', 7: 'w', 30: 'm' })[p] || p || 'd');

  try { deco(); } catch (e) {}
  loadPop(); setInterval(loadPop, 600000);
})();
