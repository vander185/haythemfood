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
#kso{position:fixed;inset:0;z-index:95;display:none;overflow:auto;background:#040914f2;color:#f8fafc;padding:20px}
#kso.on{display:block}
#kso .kw{max-width:980px;margin:0 auto}
#kso .kh{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px}
#kso .kh h2{margin:0;flex:1;color:#f9e29c}
#kso .kg{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:16px}
#kso .kc{background:#0c1b3e;border:1px solid #d4af3755;border-radius:16px;padding:14px}
#kso .kc small{display:block;color:#aebbd4;font-size:13px}
#kso .kc b{font-size:30px;color:#f9e29c}
#kso .kl{display:grid;gap:6px}
#kso .kr{display:grid;grid-template-columns:minmax(120px,1fr) 3fr 52px;gap:10px;align-items:center;font-size:15px}
#kso .kr i{display:block;height:14px;border-radius:7px;background:linear-gradient(90deg,#c59b27,#f9e29c)}
#kso .kr em{font-style:normal;text-align:right;font-weight:800;color:#f9e29c}
#kso .ksb{display:flex;align-items:flex-end;gap:4px;height:150px;padding-top:8px}
#kso .ksb div{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:4px;height:100%;font-size:11px;color:#aebbd4}
#kso .ksb div i{width:100%;border-radius:6px 6px 0 0;background:linear-gradient(180deg,#f9e29c,#c59b27);min-height:2px}
#kso h3{color:#f9e29c;margin:18px 0 8px}
#kso .seg{display:flex;gap:6px}
#kso .seg button.on{background:linear-gradient(135deg,#c59b27,#f9e29c,#aa771c);color:#040914}
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
      const k = lkey(n), i = L.findIndex(l => lkey(l) === k);
      if (i > -1) { L[i].q--; if (!L[i].q) L.splice(i, 1); }
      const nl = { id: f.m.id, s: n.s || [], r: n.r || [], x: n.x || [], b: '', nt: n.nt || '', t: f.type };
      L.push({ ...nl, q: 1 }); upd();
      const x = I[f.m.id], ks = [...'trsxb'].filter(c => opt(x).includes(c) && (c !== 'x' || getSUP().length));
      ed = { ...nl, k: Math.max(0, ks.indexOf('b')), ei: L.length - 1 };
      sheet();
    }
  });

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
        if (h && !h.querySelector('.flogo2') && window.HF_LOGO) h.insertAdjacentHTML('afterbegin', `<img class="flogo2" src="${esc(window.HF_LOGO)}" alt="">`);
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

  /* ---------- 5. Statistiques (écran cuisine) ---------- */
  const SK = 'hfstat';
  const sget = () => { try { return JSON.parse(localStorage.getItem(SK)) || {}; } catch (e) { return {}; } };
  function srec(list) {
    const s = sget(); let ch = 0;
    list.forEach(o => { if (o && o.k && !s[o.k] && o.l) { s[o.k] = [o.t, o.l.reduce((a, l) => a + (+l.p || 0), 0), o.l.map(l => [l.n, +l.q || 1]), o.src === 'borne' ? 1 : 0]; ch = 1; } });
    if (!ch) return;
    const lim = Date.now() - 95 * 864e5; Object.keys(s).forEach(k => { if (s[k][0] < lim) delete s[k]; });
    try { localStorage.setItem(SK, JSON.stringify(s)); } catch (e) {}
  }
  if (typeof kload === 'function') {
    const _kl = kload;
    kload = async function () { const r = await _kl.apply(this, arguments); try { srec(KO); kbtn(); } catch (e) {} return r; };
  }
  function kbtn() {
    const bar = $('.kbar'); if (!bar || $('#kstb')) return;
    bar.insertAdjacentHTML('beforeend', `<button class="btn g" id="kstb">📊 ${esc(tt('Statistiques'))}</button>`);
    $('#kstb').onclick = () => sshow(1);
  }
  const eurS = v => (Math.round(v * 100) / 100).toFixed(2).replace('.', ',') + ' €';
  function sshow(days) {
    let o = $('#kso'); if (!o) { o = document.createElement('div'); o.id = 'kso'; document.body.appendChild(o); }
    const d0 = new Date(); d0.setHours(0, 0, 0, 0);
    const from = days === 1 ? d0.getTime() : Date.now() - days * 864e5;
    const rows = Object.values(sget()).filter(r => r[0] >= from);
    const ca = rows.reduce((a, r) => a + r[1], 0), n = rows.length, kio = rows.filter(r => r[3]).length;
    const cnt = {}; rows.forEach(r => r[2].forEach(([nm, q]) => cnt[nm] = (cnt[nm] || 0) + q));
    const top = Object.entries(cnt).sort((a, b) => b[1] - a[1]).slice(0, 10), mx = top.length ? top[0][1] : 1;
    const hr = Array(24).fill(0); rows.forEach(r => hr[new Date(r[0]).getHours()]++);
    const H = hr.map((v, i) => [i, v]).filter(([i]) => i >= 10 || hr[i]), hm = Math.max(1, ...hr);
    const peak = hr.indexOf(Math.max(...hr));
    o.innerHTML = `<div class="kw"><div class="kh"><h2>📊 Statistiques · ${esc(getCfg('title'))}</h2>
<div class="seg">${[[1, "Aujourd'hui"], [7, '7 jours'], [30, '30 jours']].map(([d, l]) => `<button class="btn g${d === days ? ' on' : ''}" data-sd="${d}">${l}</button>`).join('')}</div>
<button class="btn g" data-sd="0">✕ Fermer</button></div>
<div class="kg"><div class="kc"><small>Chiffre d'affaires</small><b>${eurS(ca)}</b></div><div class="kc"><small>Commandes</small><b>${n}</b></div>
<div class="kc"><small>Panier moyen</small><b>${eurS(n ? ca / n : 0)}</b></div><div class="kc"><small>Borne · Site</small><b>${kio} · ${n - kio}</b></div>
<div class="kc"><small>Heure de rush</small><b>${n ? peak + ' h' : '—'}</b></div></div>
<h3>🏆 Plats les plus vendus</h3><div class="kl">${top.length ? top.map(([nm, q]) => `<div class="kr"><span>${esc(nm)}</span><i style="width:${Math.round(q / mx * 100)}%"></i><em>${q}</em></div>`).join('') : '<p style="opacity:.6">Pas encore de commande sur cette période.</p>'}</div>
<h3>🕐 Commandes par heure</h3><div class="ksb">${H.map(([i, v]) => `<div><span>${v || ''}</span><i style="height:${Math.round(v / hm * 100)}%"></i>${i}h</div>`).join('')}</div>
<p style="opacity:.6;font-size:13px;margin-top:16px">Les chiffres sont enregistrés sur cet écran cuisine, à partir de chaque commande reçue (site et borne). Gardez cet écran ouvert pendant le service.</p></div>`;
    o.classList.add('on');
    o.onclick = e => { const b = e.target.closest('[data-sd]'); if (!b) return; const d = +b.dataset.sd; if (!d) o.classList.remove('on'); else sshow(d); };
  }
  window.hfStats = sshow;

  try { deco(); } catch (e) {}
  loadPop(); setInterval(loadPop, 600000);
})();
