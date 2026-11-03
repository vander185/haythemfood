
const CFG={wa:'',addr:'',hours:''}; /* wa: numéro WhatsApp au format international sans +, ex. 32470000000 */
const D=`Dürüms|🌯|Dürüm|Chawarma 7.5;Kefta 7.5;Hamburger 7;Poulet 7.5;Poulet pané 8;Merguez 7.5;Fallafels 7.5;Foie 8;Viande 8.5;Poisson 9.5;Dinde 7.5;Tenders 8
Sandwichs|🥖|Sandwich|Chawarma 7.5;Kefta 7.5;Hamburger 7;Poulet 7.5;Poulet pané 8;Merguez 7.5;Fallafels 7.5;Foie 8;Viande 8.5;Poisson 9.5;Dinde 7.5;Tenders 8
Panini|🥪|Panini|Kefta 8;Poulet 8;Merguez 8;Tenders 8.5;Fallafels 8;Fish 8;Pita 8;Dinde 8;Viande 8.5;Mixte 8.5
Tacos|🌮|Tacos|Kefta 9.5;Poulet 9.5;Tenders 9.5;Fallafels 9.5;Dinde 9.5;Viande 9.5;Mixte 10
Kapsalon|🥗|Kapsalon|Poulet 9.5;Fallafels 9.5;Tenders 9.5;Viande 10;Hamburger 9;Dinde 9.5;Merguez 9.5;Mixte 10;Kebda 9.5;Poisson 10.5
Menus|🍽️|Menu|Bicky 8.5;Pita 9;Poulet 9;Tenders 9.5;Dinde 9;Merguez 9;Viande 10;Mixte 10;Hamburger 8.5;Menu enfant 8
Bicky|🍔|Bicky|Hamburger 5;Kefta 5.5;Fish 5.5
Assiettes|🍛|Assiette|Poulet 14;Merguez 14;Falafels 16;Fish 16;Poulet pané 16;Meze maison 18;Hamburger 12;Kefta 14;Brochettes 15.5;Foie 15;Grillade maison 18;Viande 16;Mixte 16
Grillades|🍖||Grillade (shawarma, poulet) 15.5;Grillade maison (merguez, shawarma, poulet) 17;Grillade du chef (kefta, shawarma, brochettes) 17.5;Grillade pacha (kefta, shawarma, poulet, brochettes) 17.5
Salades|🥬|Salade|Caprice 6;Mixte 6.5;Maison 6.5;Poulet 9.5;Viande au choix 9.5
Spécialités|🍲||Tajine kefta 10.5;Tajine poulet légumes 11.5;Tajine poulet citron olives 13;Tajine agneau pruneaux 14;Couscous viande au choix 11.5
Frites & plus|🍟||Frites petite 3.5;Frites moyenne 4;Frites grande 4.5;Ailes de poulet 4.5;Bouchettes viande 6;Poulet croque 3;Boulettes 3;Fricadelles 3
Sauces|🥫|Sauce|Mayonnaise .75;Ketchup .75;Andalouse .75;Algérienne .75;Samouraï .75;Blanche .75;Harissa .75;Américaine .75;Brazil .75;Bicky .75;Mammouth .75;Tartare .75;Cocktail .75;Curry ketchup .75;Sauce à l’ail .75;Barbecue .75;Moutarde .75;Piquante .75;Pili-pili .75;Sweet chili .75;Pita .75
Suppléments|➕|Supplément|Feta 1;Kefta 3.5;Merguez 3.5;Extra sauce .75;Cheddar 1;Poulet 3.5;Côte d’agneau 5
Boissons|🥤||Thé à la menthe 1 pers. 2.5;Thé à la menthe 2 pers. 4.5;Thé à la menthe 5 pers. 8;Café noir 2.5;Café au lait 3;Redbull 3;Freez 3;Softs 0,33 L 2;Caprisun 1
Desserts|🍰||Dame blanche 3.5;Pâtisserie marocaine 3.5;Tiramisu maison 3.5`;
const $=s=>document.querySelector(s),eur=n=>n.toFixed(2).replace('.',',')+' €',I={};
const OPT={'Dürüms':'srxb','Sandwichs':'srxb','Panini':'srxb','Tacos':'srxb','Kapsalon':'srxb','Menus':'srxb','Bicky':'srxb','Assiettes':'sxb','Grillades':'sxb','Salades':'srb','Frites & plus':'sb','Spécialités':'b'};
let CRU=['Salade','Tomates','Oignons','Concombre','Maïs','Carottes','Chou blanc','Olives','Poivrons'],DRK=['Coca-Cola','Coca-Cola Zéro','Fanta','Sprite','Schweppes Lemon','Schweppes Agrumes','Ice Tea','Orangina','Eau'];
const EM={Salade:'🥬',Tomates:'🍅',Oignons:'🧅',Concombre:'🥒','Maïs':'🌽',Carottes:'🥕','Chou blanc':'🥗',Olives:'🫒',Poivrons:'🫑','Coca-Cola':'🥤','Coca-Cola Zéro':'🥤',Fanta:'🍊',Sprite:'🍋','Schweppes Lemon':'🍋','Schweppes Agrumes':'🍊','Ice Tea':'🍑',Orangina:'🍊',Eau:'💧'};
const NOS='Sans sauce',NOC='Sans crudités',ALLC='Toutes les crudités';
let L=[],mode='Sur place',nom='',T=0,ed=null,pay='';
try{L=JSON.parse(localStorage.getItem('hfl')||'[]');T=+localStorage.getItem('hft')||0}catch(e){}
let cats,EX,SAU,DP,UM={},XM={},C=null;


const opt=i=>i.n.startsWith('Softs')?'b':OPT[i.cat]||'',bReq=i=>i.cat==='Menus'||i.n.startsWith('Softs');
const full=i=>i.pre&&!i.n.startsWith(i.pre)?i.pre+' '+i.n:i.n;
const url=i=>i.img||'';
const th=i=>{const u=url(i);return u?`<i class="ph" style="background-image:url(${u})"></i>`:`<i class="ph e">${i.e}</i>`};
const sig=l=>JSON.stringify([l.id,l.s,l.r,l.x,l.b]),unit=l=>{const x=I[l.id];return x.p+(l.b&&!bReq(x)?DP:0)+l.x.reduce((s,n)=>s+((EX.find(e=>e.n===n)||{}).p||0),0)};
const qty=id=>L.reduce((n,l)=>n+(l.id===id?l.q:0),0),cnt=()=>L.reduce((n,l)=>n+l.q,0),tot=()=>L.reduce((s,l)=>s+unit(l)*l.q,0);
const dsc=l=>[l.r.length&&'Garniture : '+(CRU.every(v=>l.r.includes(v))?ALLC:l.r.join(', ')),l.s.length&&'Sauces : '+l.s.join(', '),l.x.length&&'Extras : '+l.x.join(', '),l.b&&'Boisson : '+l.b].filter(Boolean);
const ctl=id=>{const x=I[id],q=qty(id);if(opt(x))return(q?`<b class="bd">${q}</b>`:'')+`<button class="add" data-x="open|${id}">Composer</button>`;return q?`<button data-x="dec|${id}" aria-label="Retirer">−</button><b>${q}</b><button data-x="inc|${id}" aria-label="Ajouter un">+</button>`:`<button class="add" data-x="inc|${id}">Ajouter</button>`};


const save=()=>{try{localStorage.setItem('hfl',JSON.stringify(L));localStorage.setItem('hft',T)}catch(e){}};
const toast=m=>{const t=$('#ts');t.textContent=m;t.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(()=>t.style.display='none',2200)};
function upd(){document.querySelectorAll('.ctl[data-c]').forEach(e=>{const h=ctl(e.dataset.c);if(e._h!==h){e._h=h;e.innerHTML=h}});const b=$('#bar');b.classList.toggle('on',cnt()>0);$('#bc').textContent=cnt()+(cnt()>1?' articles':' article');$('#bt').textContent=eur(tot());b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');save();if($('#dr').classList.contains('on'))draw()}
const buz=()=>{if(!T&&L.length)T=1+Math.random()*98|0;upd()};
function text(){return `Commande Haythem Food\n${mode}${nom?' · '+nom:''}${pay?' · '+pay:''}\n\n${L.map(l=>`${l.q}× ${full(I[l.id])} · ${eur(unit(l)*l.q)}`+dsc(l).map(d=>'\n   '+d).join('')).join('\n')}\n\nTotal : ${eur(tot())}`}
const PAYS=()=>[...(/^https?:\/\//.test(CFG.api||'')?[['Bancontact','📱'],['Carte de crédit','💳'],['Payconiq','📲']]:[]),['Carte au comptoir','💳'],['Espèces','💶']].concat(CFG.iban?[['Virement','🏦']]:[]);
const pinfo=()=>{const z=pinfo2();if(z!==null)return z;const pq=/^https?:\/\//i.test(CFG.pq||'')?CFG.pq:'';return pay==='Carte au comptoir'?'<p class="pi2">Réglez au comptoir par carte bancaire ou Payconiq.</p>'+(pq?'<a class="btn g" target="_blank" rel="noopener" href="'+esc(pq)+'">Payer avec Payconiq</a>':''):pay==='Espèces'?'<p class="pi2">Réglez en espèces au comptoir, à la remise de votre commande.</p>':pay==='Virement'?'<div class="pay"><b>Paiement par virement</b><br>'+esc(CFG.ben||'')+'<br><code>'+esc(CFG.iban)+'</code> <button class="ed" data-x="cpi">Copier l’IBAN</button></div>':''};
function draw(){const o=$('#tk .tkb'),sc=o?o.scrollTop:0;$('#tk').innerHTML=`<div class="tkh"><div class="th"><h3>Ma commande</h3><button class="chip" data-x="cld" aria-label="Fermer">✕</button></div></div>
<div class="tkb"><div class="seg"><button class="${mode==='Sur place'?'on':''}" data-x="mode|Sur place">Sur place</button><button class="${mode==='À emporter'?'on':''}" data-x="mode|À emporter">À emporter</button></div>
<input placeholder="Votre prénom (pour vous appeler)" value="${nom.replace(/"/g,'&quot;')}" oninput="nom=this.value" autocomplete="given-name">
${L.map((l,i)=>{const x=I[l.id];return`<div class="ln">${th(x)}<span>${full(x)}<em>${dsc(l).join(' · ')}</em><b>${eur(unit(l)*l.q)}</b>${opt(x)?` <button class="ed" data-x="edit|${i}">Personnaliser</button>`:''}</span><div class="ctl"><button data-x="ln|${i}|-1" aria-label="Retirer">−</button><b>${l.q}</b><button data-x="ln|${i}|1" aria-label="Ajouter un">+</button></div></div>`}).join('')}
<label>Mode de paiement</label><div class="pm">${PAYS().map(p=>`<button class="${pay===p[0]?'on':''}" data-x="pay|${p[0]}">${p[1]} ${p[0]}</button>`).join('')}</div>${pinfo()}</div>
<div class="tkf"><div class="tot"><span>Total</span><span>${eur(tot())}</span></div><button class="btn" data-x="send">Valider ma commande</button><div class="sub">${CFG.wa?`<a class="btn g" target="_blank" rel="noopener" href="https://wa.me/${CFG.wa}?text=${encodeURIComponent(text())}">Envoyer par WhatsApp</a>`:''}<button class="lk" data-x="clr">Vider mon panier</button></div></div>`;const b=$('#tk .tkb');if(b)b.scrollTop=sc}
const lst=g=>g==='s'?[NOS,...SAU]:g==='r'?[NOC,ALLC,...CRU]:g==='x'?EX.map(e=>e.n):DRK;
const tv=(g,v)=>(g==='s'?UM[v]:g==='x'?XM[v]:PH.o[v])?`<i class="pi" style="background-image:url(${(g==='s'?UM[v]:g==='x'?XM[v]:PH.o[v])})"></i>`:`<i class="pi">${v===NOS||v===NOC?'🚫':v===ALLC?'🥗':g==='x'?'➕':EM[v]||'🥤'}</i>`;
function sheet(){const x=I[ed.id],ks=[...'rsxb'].filter(k=>opt(x).includes(k)),k=Math.min(ed.k,ks.length-1),g=ks[k],last=k===ks.length-1,
N={r:'Garniture',s:'Sauces',x:'Suppléments',b:'Boisson'},
H={r:'Choisissez vos crudités',s:'Choisissez vos sauces',x:'Une envie en plus ?',b:x.cat==='Menus'?'Boisson incluse dans le menu':bReq(x)?'Choisissez votre boisson':'Ajouter une boisson (+'+eur(DP)+')'}[g],
sel=g==='b'?[ed.b]:g==='r'?[...ed.r,...(CRU.every(v=>ed.r.includes(v))?[ALLC]:[])]:ed[g],n=q=>q==='b'?(ed.b?1:0):ed[q].length;
$('#sh').innerHTML=`<div class="tk"><div class="th"><h3>${full(x)}</h3><button class="chip" data-x="shut" aria-label="Fermer">✕</button></div>
${ks.length>1?`<div class="stp">${ks.map((s,j)=>`<button class="chip ${j===k?'on':''}" data-x="stp|${j}">${N[s]}${n(s)?' · '+n(s):''}</button>`).join('')}</div>`:''}
<h4 class="hh">${H}</h4><div class="og">${lst(g).map((v,j)=>`<button class="ot ${sel.includes(v)?'on':''}" data-x="tog|${g}|${j}">${tv(g,v)}<b>${v}</b>${g==='x'?`<small>+${eur(EX[j].p)}</small>`:''}</button>`).join('')}</div>
<div class="sf"><div class="ctl"><button data-x="q|-1" aria-label="Moins">−</button><b>${ed.q}</b><button data-x="q|1" aria-label="Plus">+</button></div><button class="btn" data-x="${last?'ok':'stp|'+(k+1)}">${last?(ed.i>=0?'Mettre à jour':'Ajouter')+' · '+eur(unit(ed)*ed.q):'Suivant'}</button></div></div>`;$('#sh').classList.add('on')}
const A={
inc(id){const l={id,q:1,s:[],r:[],x:[],b:''},m=L.find(z=>sig(z)===sig(l));m?m.q++:L.push(l);buz()},
dec(id){const i=L.findIndex(z=>z.id===id);if(i>=0)A.ln(i,-1)},
ln(i,d){L[i].q+=+d;if(L[i].q<=0)L.splice(i,1);buz();if(!L.length)closeD()},
open(id){ed={id,q:1,s:[],r:[],x:[],b:bReq(I[id])?DRK[0]:'',k:0,i:-1};sheet()},
edit(i){const l=L[i];ed={...l,s:[...l.s],r:[...l.r],x:[...l.x],k:0,i};sheet()},
tog(g,j){const v=lst(g)[+j];let a=ed[g];const on=g==='b'?ed.b===v:a.includes(v);
 if(g==='b'){ed.b=(!bReq(I[ed.id])&&on)?'':v}else{
 if(g==='s')a=v===NOS?(on?[]:[v]):(on?a.filter(z=>z!==v):[...a.filter(z=>z!==NOS),v]);
 else if(g==='r'&&v===ALLC)a=CRU.every(z=>a.includes(z))?[]:[...CRU];
 else if(g==='r')a=v===NOC?(on?[]:[v]):(on?a.filter(z=>z!==v):[...a.filter(z=>z!==NOC),v]);
 else a=on?a.filter(z=>z!==v):[...a,v];ed[g]=a}sheet()},
stp(k){ed.k=+k;sheet();const t=$('#sh .tk');t&&(t.scrollTop=0)},
q(d){ed.q=Math.max(1,ed.q+ +d);sheet()},
ok(){const l={id:ed.id,q:ed.q,s:lst('s').filter(v=>ed.s.includes(v)),r:lst('r').filter(v=>ed.r.includes(v)),x:lst('x').filter(v=>ed.x.includes(v)),b:ed.b};if(ed.i>=0)L.splice(ed.i,1);const m=L.find(z=>sig(z)===sig(l));m?m.q+=l.q:L.push(l);A.shut();buz();toast('Ajouté à votre commande')},
shut(){$('#sh').classList.remove('on')},mode(m){mode=m;draw()},clr(){L=[];T=0;buz();closeD()},pay(p){pay=p;draw()},cld(){closeD()}};
document.addEventListener('click',e=>{const a=e.target.closest('[data-x]');if(!a)return;const[c,v,w]=a.dataset.x.split('|');try{navigator.vibrate&&navigator.vibrate(8)}catch(_){}A[c](v,w)});
$('#sh').onclick=e=>{if(e.target.id==='sh')A.shut()};
function openD(){if(!cnt()){toast('Votre panier est vide : ajoutez un plat');return}draw();$('#dr').classList.add('on')}
function closeD(){$('#dr').classList.remove('on')}
addEventListener('keydown',e=>{if(e.key==='Escape'){A.shut();closeD()}});
$('#q').addEventListener('input',e=>{const v0=e.target.value;clearTimeout(window._qt);window._qt=setTimeout(()=>{const k=v0.trim().toLowerCase();let any=0;document.querySelectorAll('.gal,#pro').forEach(e=>e.hidden=!!k||(e.id==='pro'&&!e.innerHTML));document.querySelectorAll('#carte section').forEach(s=>{let n=0;s.querySelectorAll('.it').forEach(i=>{const h=k&&!i.dataset.s.includes(k);i.hidden=h;if(!h)n++});s.hidden=!n;any+=n});$('#em').hidden=!!any},120)});
let NL=0,NT_;const navH=()=>$('.nav').offsetHeight;
const cch=()=>{const c=$('.chip.on[data-k]'),h=$('#chips');c&&!window.CT&&h.scrollTo({left:c.offsetLeft-h.offsetLeft-(h.clientWidth-c.offsetWidth)/2,behavior:'smooth'})};
const go=el=>{if(!el)return;const y=()=>Math.max(0,el.getBoundingClientRect().top+scrollY-navH()-6);NL=1;clearTimeout(NT_);
if(el.id){cur=el.id;document.querySelectorAll('.chip[data-k]').forEach(c=>c.classList.toggle('on',c.dataset.k===cur));cch()}
scrollTo({top:y(),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});
let last=-1,n=0;const w=setInterval(()=>{n++;if(Math.abs(scrollY-last)<1||n>45){clearInterval(w);if(Math.abs(y()-scrollY)>4)scrollTo({top:y(),behavior:'auto'});NT_=setTimeout(()=>NL=0,160)}last=scrollY},130)};
$('#chips').onclick=e=>{const b=e.target.closest('[data-k]');b&&go($('#'+b.dataset.k))};
let cur='';const io=new IntersectionObserver(es=>es.forEach(x=>{if(0&&x.isIntersecting&&x.target.id!==cur){cur=x.target.id;document.querySelectorAll('.chip[data-k]').forEach(c=>c.classList.toggle('on',c.dataset.k===cur));const c=$('.chip.on[data-k]'),h=$('#chips');c&&h.scrollTo({left:c.offsetLeft-h.offsetLeft-(h.clientWidth-c.offsetWidth)/2,behavior:'auto'})}}),{rootMargin:'-90px 0px -70% 0px'});
window.obs=()=>{io.disconnect();document.querySelectorAll('section').forEach(s=>io.observe(s))};obs();
if(cnt())upd();

/* ===== Écran cuisine : #cuisine ===== */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),KS='hfo';
let OR=[],DB=null,AC=null,KM=false,DM=false,AQ=[],AB=0,VX=0,DM0=Date.now()-6e4;try{OR=JSON.parse(localStorage.getItem(KS)||'[]')}catch(e){}
let bc=null;try{bc=window.BroadcastChannel?new BroadcastChannel('hf'):null}catch(e){}
const NX={new:'prep',prep:'rdy',rdy:'done'};
const beep=()=>{try{AC=AC||new AudioContext();AC.resume&&AC.resume();[880,1175].forEach((f,i)=>{const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+i*.2;o.frequency.value=f;o.connect(g);g.connect(AC.destination);g.gain.setValueAtTime(.25,t);g.gain.exponentialRampToValueAtTime(.001,t+.35);o.start(t);o.stop(t+.35)})}catch(e){}SND||toast('🔔 Touchez l’écran pour activer le son')};
function merge(o){if(!o||typeof o.id!=='string'||!/^\w+$/.test(o.id)||!Array.isArray(o.l))return;const i=OR.findIndex(x=>x.id===o.id);if(i>=0&&OR[i].u>=o.u)return;const pr=i<0?null:OR[i];i<0?OR.push(o):OR[i]=o;OR.sort((a,b)=>a.t-b.t);OR=OR.slice(-80);try{localStorage.setItem(KS,JSON.stringify(OR))}catch(e){}if(KM){kdraw();if(i<0&&o.st==='new'&&Date.now()-o.t<6e4)beep()}if(DM){ddraw();if(Math.max(o.u,o.rc||0)>DM0&&o.st==='rdy'&&(!pr||pr.st!=='rdy'||pr.rc!==o.rc)){AQ.push(+o.no);aq()}}}
function pub(o){merge(o);net(o);bc&&bc.postMessage(o);DB&&DB.collection('orders').doc(o.id).set(o).catch(()=>{})}
bc&&(bc.onmessage=e=>merge(e.data));
addEventListener('storage',e=>{if(e.key===KS){try{OR=JSON.parse(e.newValue||'[]')}catch(_){}KM&&kdraw();DM&&ddraw()}});
try{window.claude&&claude.use('db').then(d=>{if(!d)return;DB=d;d.doc('config/main').onSnapshot(q=>{const c=q.data&&q.data();c&&CK.forEach(k=>{if(c[k]&&!LOC[k])CFG[k]=c[k]});ftr()},()=>{});d.collection('orders').onSnapshot(q=>q.docs.forEach(x=>merge(x.data())),()=>{})}).catch(()=>{})}catch(e){}
A.send=()=>{if(!L.length)return;if(!pay){toast('Choisissez votre mode de paiement');return}const now=Date.now(),no=nxt(),nm=nom.trim(),o={id:now.toString(36)+Math.random().toString(36).slice(2,6),no,t:now,u:now,st:'new',mode,pay,nom:nm,tot:eur(tot()),l:L.map(l=>({q:l.q,n:full(I[l.id]),d:dsc(l)}))};pub(o);L=[];T=0;pay='';buz();closeD();esh('Commande confirmée ✓','<div style="text-align:center"><div class="no" style="display:inline-block;margin:18px 0 10px">N° '+no+'</div><p style="font-size:18px;margin:6px 0">'+(nm?'Merci '+esc(nm)+' ! ':'Merci ! ')+'Nous préparons votre commande.</p><p style="color:var(--mu)">Gardez ce numéro : nous vous appellerons dès que c’est prêt.</p></div><button class="btn" data-x="shut" style="width:100%;margin-top:12px">Parfait</button>')};
A.ks=(id,st)=>kup(id,o=>{NX[st]&&(o.st=NX[st])});
A.kson=()=>{aud();beep();toast('Son activé')};
A.kfs=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen()};
const PV={prep:'new',rdy:'prep'},wl=async()=>{try{await navigator.wakeLock.request('screen')}catch(e){}};
addEventListener('visibilitychange',()=>{(KM||DM)&&document.visibilityState==='visible'&&wl()});
const nxt=()=>{const now=Date.now(),u=new Set(OR.filter(o=>o.st!=='done').map(o=>o.no));let n=OR.filter(o=>now-o.t<864e5).reduce((m,o)=>Math.max(m,o.no),0)%99+1;for(let k=0;k<99&&u.has(n);k++)n=n%99+1;return n};
const kup=(id,f)=>{const o=OR.find(x=>x.id===id);if(!o)return;const n={...o};f(n);n.u=Math.max(Date.now(),o.u+1);pub(n)};
A.kb=(id,st)=>kup(id,o=>{PV[st]&&(o.st=PV[st])});
A.kx=id=>{const o=OR.find(x=>x.id===id);if(!o)return;if(KC[id]&&Date.now()-KC[id]<3e3){delete KC[id];kup(id,n=>{n.st='done';n.x=1});toast('Commande N° '+o.no+' annulée')}else{KC[id]=Date.now();kdraw();setTimeout(()=>{if(KC[id]){delete KC[id];kdraw()}},3100)}};
A.kr=id=>{kup(id,o=>{o.rc=Date.now()});toast('Annonce renvoyée')};
A.kt=()=>{const now=Date.now(),o={id:now.toString(36)+Math.random().toString(36).slice(2,6),no:nxt(),t:now,u:now,st:'new',mode:'Comptoir',nom:'',tot:'',l:[]};pub(o);toast('Ticket N° '+o.no+' créé')};
A.ktv=()=>window.open(location.href.split('#')[0]+'#file','_blank');
A.dson=()=>{aud();chime();wl()};
const chime=()=>{try{AC=AC||new AudioContext();AC.resume&&AC.resume();[659,523].forEach((f,i)=>{const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+i*.45;o.frequency.value=f;o.connect(g);g.connect(AC.destination);g.gain.setValueAtTime(.35,t);g.gain.exponentialRampToValueAtTime(.001,t+.9);o.start(t);o.stop(t+.9)})}catch(e){}};
function say(no){chime();try{const sp=speechSynthesis,fr=sp.getVoices().filter(x=>/^fr/i.test(x.lang)),v=fr.find(x=>/natural|online|google/i.test(x.name))||fr.find(x=>/BE/i.test(x.lang))||fr[0],u=new SpeechSynthesisUtterance('Commande numéro '+no+', prête.');u.lang=v?v.lang:'fr-FR';v&&(u.voice=v);u.rate=.88;setTimeout(()=>sp.speak(u),1100)}catch(e){}}
function aq(){if(!VX){AQ.length=0;return}if(AB||!AQ.length)return;AB=1;say(AQ.shift());setTimeout(()=>{AB=0;aq()},4800)}
/* --- état partagé des deux écrans --- */
let KT='new',SY=0,SND=0;const KC={},SYL=['Local seulement','En ligne','Hors ligne','Connexion…'],SYC=['off','ok','err','wait'];
function sdot(){document.querySelectorAll('.sd').forEach(e=>{e.className='sd '+SYC[SY];e.textContent=SYL[SY]})}
const ksnd=()=>{const b=$('#ksn');b&&b.classList.toggle('mute',!SND)};
/* déverrouille le son au premier toucher / première touche (exigé par les navigateurs) */
function aud(){if(SND&&(VX||!DM))return;SND=1;try{AC=AC||new AudioContext();AC.resume&&AC.resume()}catch(e){}if(DM){VX=1;try{const u=new SpeechSynthesisUtterance(' ');u.volume=0;speechSynthesis.speak(u)}catch(e){}wl();ddraw.s='';ddraw()}ksnd()}
['pointerdown','keydown'].forEach(ev=>addEventListener(ev,()=>{(KM||DM)&&aud()},{passive:true}));
addEventListener('dblclick',()=>{DM&&A.kfs()});
/* met à jour une liste sans tout reconstruire : conserve défilement, animations et clics en cours */
function kfill(box,items,empty){const cur=new Map([...box.querySelectorAll(':scope>.kd')].map(e=>[e.dataset.k,e])),em=box.querySelector(':scope>.emp');
 if(!items.length){cur.forEach(e=>e.remove());em||(box.innerHTML=empty);return}
 em&&em.remove();let ref=box.firstElementChild;
 items.forEach(({k,h,c})=>{let e=cur.get(k);cur.delete(k);
  if(!e||e.dataset.h!==h){const n=document.createElement('div');n.className='kd '+c;n.dataset.k=k;n.dataset.h=h;n.innerHTML=h;if(e){if(ref===e)ref=n;e.replaceWith(n)}e=n}
  if(e===ref)ref=ref.nextElementSibling;else box.insertBefore(e,ref)});
 cur.forEach(e=>e.remove())}
const setH=(el,h)=>{if(el&&el.dataset.h!==h){el.dataset.h=h;el.innerHTML=h}};
/* ===== écran clients ===== */
function dinit(){const d=$('#dt');if(d.dataset.i)return;d.dataset.i=1;d.innerHTML=`<div class="tvtop"><img loading="lazy" decoding="async" src="${$('.logo').src}" alt=""><h2 class="f">Haythem Food</h2><span class="sd" id="dsd"></span><button class="btn g" data-x="dson" id="dsn">🔇 Touchez l’écran pour activer le son</button><span id="dclk"></span></div><div class="tvg"><section><h3>En préparation <i id="dwn"></i></h3><p>Votre commande se prépare</p><div class="tvl" id="dwl"></div></section><section class="tvr"><h3>Prêtes <i id="drn"></i></h3><p>Venez la récupérer au comptoir</p><div class="tvl" id="drl"></div></section></div>`;sdot();RO&&d.querySelectorAll('.tvl').forEach(e=>RO.observe(e))}
/* agrandit les numéros au maximum sans jamais en cacher un seul */
function fit(el){const H=el.clientHeight,W=el.clientWidth;if(!H||!W)return;let lo=14,hi=Math.max(lo,Math.min(H*.55,W*.5,300));
 for(let i=0;i<9;i++){const m=(lo+hi)/2;el.style.setProperty('--fs',m+'px');el.scrollHeight<=H+1?lo=m:hi=m}
 el.style.setProperty('--fs',lo+'px');el.style.overflowY=el.scrollHeight>H+1?'auto':'hidden';el._k=el.clientWidth+'x'+el.clientHeight}
const RO=window.ResizeObserver?new ResizeObserver(es=>es.forEach(e=>{const el=e.target;if(el._k!==el.clientWidth+'x'+el.clientHeight&&el.children.length&&!el.querySelector('.emp'))fit(el)})):null;
function ddraw(){if(!DM||!$('#dwl'))return;const n=Date.now(),a=OR.filter(o=>o.st!=='done'&&n-o.t<432e5),w=a.filter(o=>o.st==='new'||o.st==='prep').sort((x,y)=>x.no-y.no),r=a.filter(o=>o.st==='rdy').sort((x,y)=>x.no-y.no),fr=o=>n-Math.max(o.u,o.rc||0)<2e4,
 sg=w.map(o=>+o.no).join()+'|'+r.map(o=>+o.no+(fr(o)?'*':'')).join()+'|'+VX+'|'+innerWidth+'x'+innerHeight;if(sg===ddraw.s)return;ddraw.s=sg;
 const L=(el,z,cls,msg)=>{el.innerHTML=z.map(o=>`<b class="tvn ${cls(o)}">${+o.no}</b>`).join('')||`<i class="emp">${msg}</i>`;z.length&&fit(el)};
 L($('#dwl'),w,()=>'w','Aucune commande en cours');L($('#drl'),r,o=>'r'+(fr(o)?' tvf':''),'Aucune commande prête');
 $('#dwn').textContent=w.length||'';$('#drn').textContent=r.length||'';$('#dsn').style.display=VX?'none':''}
addEventListener('resize',()=>{if(DM){ddraw.s='';ddraw()}});document.fonts&&document.fonts.ready.then(()=>{if(DM){ddraw.s='';ddraw()}});
/* ===== écran cuisine ===== */
function kinit(){const k=$('#kt');if(k.dataset.i)return;k.dataset.i=1;
 k.innerHTML=`<div class="kbar"><h2 class="f">Cuisine · Haythem Food</h2><span class="sd" id="ksd"></span><span id="kclk"></span><div class="kact"><button class="btn" data-x="kt">＋ Ticket</button><button class="ib" id="ksn" data-x="kson" title="Activer / tester le son" aria-label="Son">🔔</button><button class="ib" data-x="khist" title="Dernières commandes servies" aria-label="Historique">🕘</button><button class="ib" data-x="ktv" title="Ouvrir l’écran clients" aria-label="Écran clients">📺</button><button class="ib" id="kcb" data-x="kcol" title="Afficher toutes les colonnes / un onglet à la fois" aria-label="Colonnes">▦</button><button class="ib fsb" data-x="kfs" title="Plein écran" aria-label="Plein écran">⛶</button><button class="ib" data-x="gear" title="Réglages" aria-label="Réglages">⚙</button><button class="ib" data-x="ksite" title="Retour au site" aria-label="Retour au site">🏠</button></div></div><div class="kagg" id="kagg"></div><div class="ktabs" id="ktabs"></div><div class="kg">${KST.map(([s,t])=>`<div class="kc" data-s="${s}"><h3>${t} <b>0</b></h3><div class="kls"></div></div>`).join('')}</div>`;sdot();ksnd()}
const KST=[['new','Nouvelles'],['prep','En préparation'],['rdy','Prêtes']],KB={new:'▶ Préparer',prep:'✓ Prêt',rdy:'✓ Servi'},KMC=m=>m==='Sur place'?'sp':m==='À emporter'?'em':'cp';
const kcard=(o,s)=>{const ask=KC[o.id]&&Date.now()-KC[o.id]<3e3,sub=[o.nom&&'<b>'+esc(o.nom)+'</b>',o.tot&&esc(o.tot)].filter(Boolean).join(' · ');
 return `<div class="kh"><span class="kn">N° ${+o.no}</span><span class="km ${KMC(o.mode)}">${esc(o.mode)}</span>${o.pay?`<span class="km cp">${o.pay==='Espèces'?'💶':o.pay==='Virement'?'🏦':'💳'} ${esc(o.pay)}${o.unpaid?' ⏳ à vérifier':o.paid?' ✓ payé':''}</span>`:''}<time data-t="${+o.t}"></time></div>${sub?`<div class="ks">${sub}</div>`:''}`+
 (o.l.map(l=>`<div class="kli"><b>${+l.q}×</b><span>${esc(l.n)}${(l.d||[]).map(x=>`<em>${esc(x)}</em>`).join('')}</span></div>`).join('')||'<div class="kli"><em>Ticket sans détail</em></div>')+
 `<div class="kact2"><button class="btn" data-x="ks|${o.id}|${s}">${KB[s]}</button>${s!=='new'?`<button class="sb" data-x="kb|${o.id}|${s}" title="Revenir à l’étape précédente" aria-label="Retour">↩</button>`:''}${s==='rdy'?`<button class="sb" data-x="kr|${o.id}" title="Rappeler sur l’écran clients" aria-label="Rappeler">📢</button>`:''}<button class="sb${ask?' ask':''}" data-x="kx|${o.id}" title="Annuler la commande" aria-label="Annuler la commande">${ask?'Sûr ?':'✕'}</button></div>`};
function kdraw(){if(!KM)return;kinit();const a=OR.filter(o=>o.st!=='done'&&Date.now()-o.t<432e5).sort((x,y)=>x.t-y.t),ag={};
 a.filter(o=>o.st!=='rdy').forEach(o=>o.l.forEach(l=>ag[l.n]=(ag[l.n]||0)+(+l.q||0)));
 const sm=Object.entries(ag).sort((x,y)=>y[1]-x[1]).map(([k,v])=>`<span><b>${v}×</b> ${esc(k)}</span>`).join('');
 setH($('#kagg'),sm?'<em>À préparer</em>'+sm:'<em>Aucune commande en cours</em>');
 setH($('#ktabs'),KST.map(([s,t])=>`<button class="kt1${KT===s?' on':''}${s==='new'&&KT!=='new'&&a.some(o=>o.st==='new')?' alert':''}" data-x="ktab|${s}">${t}<b>${a.filter(o=>o.st===s).length}</b></button>`).join(''));
 document.querySelectorAll('#kt .kc').forEach(c=>{const s=c.dataset.s,z=a.filter(o=>o.st===s);c.classList.toggle('on',KT===s);c.querySelector('h3 b').textContent=z.length;
  kfill(c.querySelector('.kls'),z.map(o=>({k:o.id,c:s,h:kcard(o,s)})),'<p class="emp">Rien ici</p>')});
 ksnd();ktick()}
A.ktab=s=>{KT=s;kdraw()};
A.khist=()=>{const z=OR.filter(o=>o.st==='done'&&Date.now()-o.t<432e5).sort((x,y)=>y.u-x.u).slice(0,12);
 $('#sh').innerHTML=`<div class="tk"><div class="th"><h3>Dernières commandes</h3><button class="chip" data-x="shut" aria-label="Fermer">✕</button></div>`+(z.map(o=>`<div class="ln"><span><b>N° ${+o.no}</b> · ${esc(o.mode)}${o.nom?' · '+esc(o.nom):''}${o.x?' · <b>annulée</b>':''}<em>${o.l.map(l=>(+l.q)+'× '+esc(l.n)).join(', ')||'Ticket sans détail'}</em></span><button class="btn g" data-x="kun|${o.id}" style="min-height:40px;padding:6px 14px">↩ Rétablir</button></div>`).join('')||'<p class="emp">Aucune commande récente</p>')+`</div>`;$('#sh').classList.add('on')};
A.kun=id=>{kup(id,o=>{o.st=o.x?'new':'rdy';delete o.x});A.shut();toast('Commande rétablie')};
function ktick(){const t=new Date().toLocaleTimeString('fr-BE',{hour:'2-digit',minute:'2-digit'});
 if(DM){const c=$('#dclk');c&&c.textContent!==t&&(c.textContent=t);ddraw()}
 if(!KM)return;const c=$('#kclk');c&&c.textContent!==t&&(c.textContent=t);
 document.querySelectorAll('#kt time').forEach(e=>{const s=(Date.now()-e.dataset.t)/1000|0,m=s/60|0,d=e.closest('.kd'),live=!d.classList.contains('rdy'),x=m<1?'< 1 min':m+' min';
  e.textContent!==x&&(e.textContent=x);d.classList.toggle('late',live&&s>600);d.classList.toggle('warn',live&&s>300&&s<=600);d.classList.toggle('fresh',d.classList.contains('new')&&s<6)})}
function kmode(){const h=location.hash;KM=h==='#cuisine';DM=h==='#file'||h==='#ecran';document.body.classList.toggle('k',KM);document.body.classList.toggle('d',DM);if(KM){kinit();kdraw();wl()}if(DM){dinit();ddraw();wl()}if(KM||DM)try{listen()}catch(e){}}
addEventListener('hashchange',kmode);setInterval(ktick,1000);kmode();
/* ===== Réglages (cachés aux clients) + synchro sans Claude ===== */
const CK=['wa','ben','iban','addr','hours','sync','pq','api'],LOC=(()=>{try{return JSON.parse(localStorage.getItem('hfc')||'{}')}catch(e){return{}}})();
Object.assign(CFG,{ben:'',iban:'',sync:'',pq:'',pin:''},LOC);
const FT0=$('#ft').innerHTML,sv=()=>{try{localStorage.setItem('hfc',JSON.stringify(LOC))}catch(e){}};
function ftr(){const f=[CFG.addr,CFG.hours].filter(Boolean).map(esc);$('#ft').innerHTML=(f.length?f.join('<br>')+'<br>':'')+(C&&C.t?esc(C.t.ft):FT0)}ftr();
fetch('config.json',{cache:'no-store'}).then(r=>r.ok?r.json():{}).then(c=>{CK.forEach(k=>{if(typeof c[k]==='string'&&c[k]&&!LOC[k])CFG[k]=c[k]});ftr()}).catch(()=>{});
const tp=()=>CFG.sync?'https://ntfy.sh/hf-'+CFG.sync:'';
function net(o){const t=tp();if(!t)return;let b=JSON.stringify(o);if(b.length>3900)b=JSON.stringify({...o,l:o.l.map(l=>({q:l.q,n:l.n,d:[]}))});fetch(t,{method:'POST',body:b}).catch(()=>{SY=2;sdot();toast('Envoi impossible : vérifiez internet')})}
function listen(){const t=tp();if(!t||listen.on||typeof EventSource==='undefined')return;listen.on=1;SY=3;sdot();const es=new EventSource(t+'/sse?since=12h');es.onopen=()=>{SY=1;sdot()};es.onerror=()=>{SY=2;sdot()};es.onmessage=e=>{try{const m=JSON.parse(e.data);m.event==='message'&&merge(JSON.parse(m.message))}catch(_){}}}
let GU=0,lc=0,lt;
function gear(err){const c=CFG;$('#sh').innerHTML=`<div class="tk"><div class="th"><h3>Réglages</h3><button class="chip" data-x="shut" aria-label="Fermer">✕</button></div>`+(GU?`<div class="row" style="margin:8px 0"><button class="btn" data-x="gok">👨‍🍳 Écran cuisine</button><button class="btn g" data-x="gtv">📺 Écran clients</button></div><button class="btn" data-x="edm" style="width:100%;margin:8px 0">✏️ Modifier le site (photos, prix, textes)</button><div class="row" style="margin:0 0 8px"><button class="btn g" data-x="eban">🖼️ Bannières pub</button><button class="btn g" data-x="epub">🚀 Publier le site</button></div><label>WhatsApp (format international, sans +)</label><input id="g1" inputmode="numeric" value="${esc(c.wa)}"><label>Titulaire du compte bancaire</label><input id="g2" value="${esc(c.ben)}"><label>Compte bancaire (IBAN)</label><input id="g3" value="${esc(c.iban)}"><label>Adresse</label><input id="g4" value="${esc(c.addr)}"><label>Horaires</label><input id="g5" value="${esc(c.hours)}"><label>Code de synchro cuisine (identique sur tous les appareils)</label><input id="g6" value="${esc(c.sync)}"><label>Lien de paiement Payconiq (facultatif)</label><input id="g7" value="${esc(c.pq)}" placeholder="https://…"><label>Serveur de paiement en ligne (facultatif)</label><input id="g8" placeholder="https://…workers.dev"><label>Nouveau code PIN (vide = inchangé)</label><input id="g9" inputmode="numeric"><div class="row" style="margin-top:12px"><button class="btn" data-x="gsv">Enregistrer</button><button class="btn g" data-x="gex">Télécharger config.json</button><button class="btn g" data-x="gpx">Télécharger prices.json</button></div>`:`<label>${c.pin?'Code PIN':'Créez un code PIN (4 chiffres minimum)'}</label><input id="g0" type="password" inputmode="numeric"><div class="row"><button class="btn" data-x="gpin">Valider</button></div>${err?'<p>'+err+'</p>':''}`)+`</div>`;$('#sh').classList.add('on')}
A.gear=()=>{GU=0;gear()};A.gok=()=>{A.shut();location.hash='cuisine'};A.gtv=()=>{A.shut();location.hash='file'};A.ksite=()=>{location.hash='site'};
A.gpin=()=>{const v=$('#g0').value.trim();if(!CFG.pin){if(v.length<4)return gear('4 chiffres minimum');CFG.pin=LOC.pin=v}else if(v!==CFG.pin)return gear('Code incorrect');GU=1;if(!CFG.sync)CFG.sync=LOC.sync=Math.random().toString(36).slice(2,14);sv();gear()};
A.gsv=()=>{CK.forEach((k,i)=>CFG[k]=LOC[k]=$('#g'+(i+1)).value.trim());const p=$('#g9').value.trim();if(p.length>=4)CFG.pin=LOC.pin=p;sv();DB&&DB.doc('config/main').set(Object.fromEntries(CK.map(k=>[k,CFG[k]]))).catch(()=>{});A.shut();ftr();toast('Réglages enregistrés')};
A.gex=async()=>{const t=JSON.stringify(Object.fromEntries(CK.map(k=>[k,CFG[k]])),null,1);try{const d=window.claude&&await claude.use('downloads');if(d){await d.save({filename:'config.json',data:t});return}}catch(e){}const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type:'application/json'}));a.download='config.json';a.click()};
A.cpi=()=>{try{navigator.clipboard.writeText(CFG.iban).then(()=>toast('IBAN copié'))}catch(e){}};
$('.logo').onclick=()=>{clearTimeout(lt);if(++lc>=5){lc=0;A.gear()}else lt=setTimeout(()=>lc=0,1500)};
if(KM||DM)listen();

(function(){var n=document.getElementById('njs');if(n)n.parentNode.removeChild(n)})();
const DAYS=['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],RVU='https://www.google.com/search?hl=fr&q=Haythem+Food+25A+Chauss%C3%A9e+d%27Anvers+1000+Bruxelles+avis';
const tmin=x=>{const r=/^(\d{1,2}):(\d{2})$/.exec((x||'').trim());return r?+r[1]*60+ +r[2]:null};
const rg=d=>{const r=/^(\d{1,2}:\d{2})\s*[-–]\s*(\d{1,2}:\d{2})$/.exec((((C&&C.ct&&C.ct.hrs)||[])[d]||'').trim());return r?[tmin(r[1]),tmin(r[2]),r[1],r[2]]:null};
const rvu=ct=>/^https:\/\//.test((ct&&ct.revu)||'')?ct.revu:RVU;
/* ===== Mode modification ===== */
const LK='hfx',PK='hfp',GK='hfg';
let EI=null,EC=0,GH={};try{GH=JSON.parse(localStorage.getItem(GK)||'{}')}catch(e){}
const okC=v=>!!(v&&v.t&&Array.isArray(v.cats)&&v.cats.some(c=>c&&Array.isArray(c.items)&&c.items.length));
const jl=k=>{try{const v=JSON.parse(localStorage.getItem(k));return okC(v)?v:null}catch(e){return null}};
const IMG={"tj1": "img/c589d4a1f2.webp", "tj2": "img/a9ae67407f.webp", "mix": "img/96750bd4b7.webp", "grl": "img/c5816b82d1.webp", "kft": "img/25af53d8d3.webp", "wrap": "img/053d7abd85.webp", "pan": "img/501a4af94c.webp", "burger": "img/271a8d725d.webp", "crispy": "img/68942e7b94.webp", "nug": "img/4d5d2b00a7.webp", "cans": "img/a5bc087add.webp", "sal": "img/9d8b3db009.webp", "bowl": "img/ff33c8f6d8.webp", "frt": "img/684f9bee5c.webp", "wng": "img/2da0390046.webp", "tea": "img/3ba81be49d.webp", "cof": "img/652ed991a6.webp", "cap": "img/0e8410fc0e.webp"};const NEWM={"Dürüms|Chawarma": "wrap", "Tacos|Poulet": "pan", "Tacos|Mixte": "pan", "Tacos|Tenders": "pan", "Bicky|Hamburger": "burger", "Menus|Hamburger": "burger", "Menus|Menu enfant": "nug", "Assiettes|Mixte": "mix", "Assiettes|Grillade maison": "mix", "Assiettes|Meze maison": "mix", "Assiettes|Kefta": "kft", "Assiettes|Brochettes": "grl", "Assiettes|Viande": "grl", "Grillades|Grillade (shawarma, poulet)": "mix", "Grillades|Grillade pacha (kefta, shawarma, poulet, brochettes)": "mix", "Grillades|Grillade maison (merguez, shawarma, poulet)": "grl", "Grillades|Grillade du chef (kefta, shawarma, brochettes)": "grl", "Salades|Caprice": "sal", "Salades|Mixte": "sal", "Salades|Maison": "sal", "Salades|Poulet": "bowl", "Salades|Viande au choix": "bowl", "Spécialités|Tajine kefta": "tj2", "Spécialités|Tajine poulet légumes": "tj2", "Spécialités|Tajine poulet citron olives": "tj1", "Spécialités|Tajine agneau pruneaux": "tj1", "Frites & plus|Frites petite": "frt", "Frites & plus|Frites moyenne": "frt", "Frites & plus|Frites grande": "frt", "Frites & plus|Ailes de poulet": "wng", "Boissons|Thé à la menthe 1 pers.": "tea", "Boissons|Thé à la menthe 2 pers.": "tea", "Boissons|Thé à la menthe 5 pers.": "tea", "Boissons|Café noir": "cof", "Boissons|Softs 0,33 L": "cans", "Boissons|Caprisun": "cap"};
const PHu=(k,n)=>IMG[NEWM[k+'|'+n]]||(k==='Dürüms'?PH.d[n]:k==='Sandwichs'?PH.s[n]||PH.d[n]:k==='Panini'?PH.p[n]:k==='Sauces'?PH.u[n]:k==='Boissons'?PH.b[n]:(PH.c[k]||{})[n])||'';
const NT={'Dürüms':'Accompagnement de nos plats : salade composée, frites, sauces','Sandwichs':'Accompagnement de nos plats : salade composée, frites, sauces','Assiettes':'Accompagnement de nos assiettes : salade composée, frites, sauces','Grillades':'Accompagnement de nos assiettes : salade composée, frites, sauces','Spécialités':'Sur commande'};
const DCT={tel:['0493 39 39 83','0493 99 96 90'],wa:'32493393983',addr:'25A Chaussée d’Anvers, 1000 Bruxelles',maps:'Haythem, Chau. d\'Anvers 25A, 1000 Bruxelles',info:'Plats à emporter · livraison possible à partir de 30 €',promo:'🚚 Livraison possible à partir de 30 €',hrs:['11:30-22:30','11:30-22:30','11:30-22:30','11:30-22:30','11:30-22:30','14:00-22:30',''],loyT:'',loyN:'10',rate:'',revu:'',quotes:''};
const defC=()=>({t:{h1:$('.hero h1').textContent,sub:$('.hero p').textContent,tags:[...document.querySelectorAll('.pr span')].map(x=>x.textContent),ft:FT0},cru:CRU.slice(),drk:DRK.slice(),logo:'',ct:JSON.parse(JSON.stringify(DCT)),cats:D.split('\n').map(l=>{const[n,e,p,it]=l.split('|');return{k:n,n,e,p,note:NT[n]||'',items:it.split(';').map(x=>{const m=x.match(/^(.*) ([\d.]+)$/);return{n:m[1],p:+m[2],img:PHu(n,m[1]),star:['Dürüms|Chawarma','Kapsalon|Poulet','Tacos|Poulet','Menus|Poulet'].includes(n+'|'+m[1])?1:0}})}})});
const DBAN=[{img:'img/1e8f1b9561.webp'},{img:'img/b96677261a.webp',t:'Dürüms, tacos & grillades',s:'Faits minute · 100 % halal',g:'c0'},{img:IMG.wrap,t:'Dürüms faits minute',s:'Chawarma, poulet, kefta… dès 7 €',g:'c0'},{img:IMG.grl,t:'Grillades & assiettes',s:'Brochettes, côtelettes, merguez · 100 % halal',g:'c8'},{img:IMG.burger,t:'Nos Bicky & burgers',s:'Dès 5 € · sur place ou à emporter',g:'c6'},{img:IMG.tj1,t:'Tajines maison',s:'Sur commande · parfaits à partager',g:'c10'},{img:IMG.mix,t:'🚚 Livraison dès 30 €',s:'Appelez-nous ou écrivez sur WhatsApp',g:'contact'}];
let bti;
function bset(){clearInterval(bti);const t=$('#bt');if(!t)return;const d=[...document.querySelectorAll('#bdt i')],mk=()=>{const w=t.children[0].offsetWidth+12,i=Math.round(Math.abs(t.scrollLeft)/w);d.forEach((x,k)=>x.classList.toggle('on',k===i))};t.addEventListener('scroll',mk,{passive:true});mk();
if(t.children.length>1&&document.dir!=='rtl'&&document.documentElement.dir!=='rtl')bti=setInterval(()=>{if(document.hidden||t.scrollWidth<=t.clientWidth+4||document.body.classList.contains('ae'))return;const w=t.children[0].offsetWidth+12;t.scrollTo({left:t.scrollLeft+w>=t.scrollWidth-t.clientWidth-4?0:t.scrollLeft+w,behavior:'smooth'})},5000)}
function bann(){const B=(C.ban||DBAN).filter(b=>b.img);let e=$('#pro');if(!e){e=document.createElement('div');e.id='pro';document.querySelector('.hero').after(e);e.addEventListener('click',ev=>{const b=ev.target.closest('.bs');if(b)go($('#'+(b.dataset.g||'carte')))});e.addEventListener('keydown',ev=>{const b=ev.target.closest('.bs');if(ev.key==='Enter'&&b)go($('#'+(b.dataset.g||'carte')))})}
e.hidden=!B.length;e.innerHTML=B.length?'<div class="bt" id="bt">'+B.map(b=>'<div class="bs" role="link" tabindex="0"'+(b.g?' data-g="'+esc(b.g)+'"':'')+'><img src="'+esc(b.img)+'" alt="'+esc(b.t||'Haythem Food')+'" loading="lazy">'+(b.t?'<div class="bc2">'+esc(b.t)+(b.s?'<small>'+esc(b.s)+'</small>':'')+(b.g?'<em>Commander →</em>':'')+'</div>':'')+'</div>').join('')+'</div><div class="bdt" id="bdt">'+B.map(()=>'<i></i>').join('')+'</div>':'';bset()}
const kb=()=>{(C.ban||[]).forEach((b,i)=>{const t=$('#bt'+i),u=$('#bs'+i);if(t)b.t=t.value.trim();if(u)b.s=u.value.trim()})};
A.eban=()=>{if(!C.ban)C.ban=DBAN.map(b=>({...b}));esh('Bannières publicitaires','<p style="font-size:14px;margin:6px 0">Ces images défilent en haut du site. Touchez une photo pour la remplacer, puis « Enregistrer » et « Publier ».</p>'+C.ban.map((b,i)=>'<div class="ln" style="align-items:flex-start"><div class="ph" data-x="ebp|'+i+'" style="width:96px;height:68px;border-radius:12px;'+(b.img?'background-image:url('+b.img+')':'')+'">'+(b.img?'':'📷')+'</div><span><input id="bt'+i+'" placeholder="Titre (facultatif)" value="'+esc(b.t||'')+'"><input id="bs'+i+'" placeholder="Sous-titre (facultatif)" value="'+esc(b.s||'')+'"><button class="ed" data-x="ebu|'+i+'">↑ Monter</button> &nbsp; <button class="ed" data-x="ebd|'+i+'">Supprimer</button></span></div>').join('')+'<div class="row"><button class="btn g" data-x="ebn">＋ Ajouter une bannière</button><button class="btn" data-x="ebs">Enregistrer</button></div>')};
A.ebp=i=>{kb();EI={ban:+i};$('#ef').click()};
A.ebn=()=>{kb();C.ban.push({img:'',t:'',s:''});EI={ban:C.ban.length-1};$('#ef').click()};
A.ebd=i=>{kb();C.ban.splice(+i,1);A.eban()};
A.ebu=i=>{kb();i=+i;if(i>0)[C.ban[i-1],C.ban[i]]=[C.ban[i],C.ban[i-1]];A.eban()};
A.ebs=()=>{kb();C.ban=C.ban.filter(b=>b.img);dirty();A.shut()};
const FIXI=[['Dürüms','Poulet','wrap'],['Dürüms','Hamburger','burger'],['Sandwichs','Hamburger','burger'],['Sandwichs','Poulet pané','crispy'],['Panini','Mixte','pan'],['Panini','Poulet','pan'],['Spécialités','Couscous viande au choix','tj2'],['Boissons','Redbull','cans'],['Boissons','Freez','cans'],['Boissons','Café au lait','cof']];
function fixI(c){try{(c.cats||[]).forEach(g=>FIXI.forEach(f=>{if((g.k||g.n)!==f[0])return;(g.items||[]).forEach(i=>{if(i.n===f[1]&&i.img===IMG[f[2]])i.img=PHu(f[0],f[1])})}))}catch(e){}}
function init(c){fixI(c);C=c;C.ct=Object.assign(JSON.parse(JSON.stringify(DCT)),C.ct);const t=C.t;$('.hero h1').textContent=t.h1;$('.hero p').textContent=t.sub;$('.pr').innerHTML=t.tags.map(x=>'<span>'+esc(x)+'</span>').join('');if(C.logo)$('.logo').src=C.logo;
CRU=C.cru||CRU;DRK=C.drk||DRK;for(const k in I)delete I[k];UM={};XM={};
cats=C.cats.map((c,ci)=>({n:c.n,e:c.e,id:'c'+ci,items:(c.items||[]).map((o,k)=>{const id=ci+'-'+k,x={id,n:o.n,p:+o.p,pre:c.p,cat:c.k||c.n,e:c.e,img:o.img||'',star:o.star,d:o.d||''};I[id]=x;if(c.k==='Sauces')UM[o.n]=x.img;if(c.k==='Suppléments')XM[o.n]=x.img;return x})}));
const f=k=>{const i=C.cats.findIndex(c=>(c.k||c.n)===k);return i<0?[]:cats[i].items};
EX=f('Suppléments');SAU=f('Sauces').map(i=>i.n);DP=(cats.flatMap(c=>c.items).find(i=>i.n.startsWith('Softs'))||{p:2}).p;
L=L.filter(l=>I[l.id]);
$('#carte').innerHTML=cats.map(c=>`<section id="${c.id}"><h2><i>${c.e}</i>${c.n}</h2><div class="grid">${c.items.map(i=>`<div class="it" data-s="${(c.n+' '+full(i)).toLowerCase()}"><div class="m">${th(i)}<div><b>${i.n}</b><small>${eur(i.p)}</small></div></div><div class="ctl" data-c="${i.id}">${ctl(i.id)}</div></div>`).join('')}</div></section>`).join('')+'<p class="emp" id="em" hidden>Aucun plat trouvé. Essayez « poulet » ou « tacos ».</p>';
$('#chips').innerHTML=cats.map(c=>`<button class="chip" data-k="${c.id}">${c.e} ${c.n}</button>`).join('');
document.querySelectorAll('#carte section').forEach((s,ci)=>{const cc=C.cats[ci],nt=cc.note!=null?cc.note:(NT[cc.k||cc.n]||'');if(nt)s.querySelector('h2').insertAdjacentHTML('afterend','<p class="nt">'+esc(nt)+'</p>');s.querySelector('h2').insertAdjacentHTML('beforeend','<button class="ae-b" data-x="ecat|'+ci+'">✎</button>');s.querySelector('.grid').insertAdjacentHTML('beforeend','<button class="ae-b btn" style="grid-column:1/-1" data-x="eadd|'+ci+'">＋ Ajouter un plat</button>');s.querySelectorAll('.it').forEach(e=>e.insertAdjacentHTML('beforeend','<button class="ae-b" data-x="eit|'+e.querySelector('.ctl').dataset.c+'">✎</button>'))});
$('#carte').insertAdjacentHTML('beforeend','<button class="ae-b btn" data-x="ecnew" style="margin:22px auto">＋ Nouvelle catégorie</button>');
ctr();ext();obs();ftr();bann();if(cnt())upd()}
function ctr(){const ct=C.ct,tl=(ct.tel||[]).filter(Boolean),wa=(CFG.wa||ct.wa||'').replace(/\D/g,''),q=encodeURIComponent(ct.maps||ct.addr||''),
td=x=>{const d=x.replace(/[^\d+]/g,'');return d[0]==='+'?d:'+32'+d.replace(/^0/,'')},
tb=tl.map(x=>'<a class="btn" href="tel:'+td(x)+'">📞 '+esc(x)+'</a>').join(''),
wb=wa?'<a class="btn g" target="_blank" rel="noopener" href="https://wa.me/'+wa+'">💬 WhatsApp</a>':'',
mb='<a class="btn g" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query='+q+'">📍 Itinéraire</a>';
$('#hq').innerHTML=(tl[0]?'<a class="btn g" href="tel:'+td(tl[0])+'">📞 Appeler</a>':'')+wb+mb+'<a class="btn g" target="_blank" rel="noopener" href="'+esc(rvu(ct))+'">⭐ <span>Avis Google</span></a>';
$('#contact').innerHTML='<h2><i>📍</i>Nous trouver</h2><p class="ad">'+esc(ct.addr||'')+'</p>'+(CFG.hours?'<p>'+esc(CFG.hours)+'</p>':'')+(ct.info?'<p>'+esc(ct.info)+'</p>':'')+hrh()+'<div class="cb">'+mb.replace('btn g','btn')+tb+wb+'</div><iframe loading="lazy" title="Carte" src="https://www.google.com/maps?q='+q+'&amp;output=embed"></iframe>';
$('#chips').insertAdjacentHTML('beforeend','<button class="chip" data-k="contact">📍 Contact</button>');chv()}
const dirty=()=>{try{localStorage.setItem(LK,JSON.stringify(C))}catch(e){toast('Mémoire pleine : publiez puis réessayez')}init(C)};
function esh(h,b){$('#sh').innerHTML='<div class="tk"><div class="th"><h3>'+h+'</h3><button class="chip" data-x="shut" aria-label="Fermer">✕</button></div>'+b+'</div>';$('#sh').classList.add('on')}
const rz=(f,m,cb)=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,m/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',.82))};im.src=r.result};r.readAsDataURL(f)};
$('#ef').onchange=e=>{const f=e.target.files[0];e.target.value='';if(!f||!EI)return;const lg=EI.logo,bn=EI.ban!=null;rz(f,bn?1000:(lg?420:720),u=>{if(bn){C.ban[EI.ban].img=u;A.eban()}else if(lg){C.logo=u;dirty();toast('Logo changé')}else{EI.img=u;eitem()}})};
function eitem(){const o=EI.k<0?{n:'',p:''}:C.cats[EI.ci].items[EI.k],n=EI.n!=null?EI.n:o.n,p=EI.p!=null?EI.p:o.p,st=EI.s!=null?EI.s:!!o.star;
esh(EI.k<0?'Nouveau plat':'Modifier le plat','<label>Nom</label><input id="en" value="'+esc(n)+'"><label>Prix (€)</label><input id="ep" inputmode="decimal" value="'+esc(p)+'"><label style="display:flex;align-items:center;gap:8px;margin:12px 0"><input type="checkbox" id="es" style="width:auto;margin:0"'+(st?' checked':'')+'> ⭐ Afficher dans « Les plus commandés »</label><label>Photo</label><div class="ph" style="width:100%;height:150px;'+(EI.img?'background-image:url('+EI.img+')':'')+'">'+(EI.img?'':'📷')+'</div><div class="row"><button class="btn g" data-x="epick">📷 Changer la photo</button><button class="btn g" data-x="enoimg">Retirer</button></div><div class="row"><button class="btn" data-x="esave">Enregistrer</button>'+(EI.k<0?'':'<button class="btn g" data-x="edel">Supprimer</button>')+'</div>')}
const keep=()=>{EI.n=$('#en').value;EI.p=$('#ep').value;EI.s=$('#es').checked};
A.eit=id=>{const[ci,k]=id.split('-').map(Number);EI={ci,k,img:C.cats[ci].items[k].img};eitem()};
A.eadd=ci=>{EI={ci:+ci,k:-1,img:''};eitem()};
A.epick=()=>{keep();$('#ef').click()};A.enoimg=()=>{keep();EI.img='';eitem()};
A.esave=()=>{const n=$('#en').value.replace(/[<>&"]/g,'').trim(),p=parseFloat($('#ep').value.replace(',','.'))||0;if(!n)return toast('Le nom est obligatoire');const it=EI.k<0?{}:C.cats[EI.ci].items[EI.k];Object.assign(it,{n,p,img:EI.img||'',star:$('#es').checked?1:0});if(EI.k<0)C.cats[EI.ci].items.push(it);dirty();A.shut()};
A.edel=()=>{if(confirm('Supprimer ce plat ?')){C.cats[EI.ci].items.splice(EI.k,1);dirty();A.shut()}};
A.ecat=ci=>{EC=+ci;const c=C.cats[EC];esh('Catégorie','<label>Nom</label><input id="cn" value="'+esc(c.n)+'"><label>Icône (emoji)</label><input id="ce" value="'+esc(c.e)+'"><label>Note sous le titre</label><input id="cno" value="'+esc(c.note!=null?c.note:(NT[c.k||c.n]||''))+'"><div class="row"><button class="btn" data-x="ecs">Enregistrer</button><button class="btn g" data-x="ecup">Monter ↑</button><button class="btn g" data-x="ecdel">Supprimer</button></div>')};
A.ecs=()=>{const c=C.cats[EC];c.n=$('#cn').value.replace(/[<>&"]/g,'').trim()||c.n;c.e=$('#ce').value.trim()||c.e;c.note=$('#cno').value.trim();dirty();A.shut()};
A.ecup=()=>{const a=C.cats;if(EC>0){[a[EC-1],a[EC]]=[a[EC],a[EC-1]];dirty()}A.shut()};
A.ecdel=()=>{if(confirm('Supprimer la catégorie et tous ses plats ?')){C.cats.splice(EC,1);dirty();A.shut()}};
A.ecnew=()=>{C.cats.push({n:'Nouvelle catégorie',e:'🍽️',p:'',items:[]});dirty();A.ecat(C.cats.length-1)};
A.etx=()=>{const t=C.t,ct=C.ct,r=(i,l,v)=>'<label>'+l+'</label><input id="t'+i+'" value="'+esc(v)+'">';esh('Textes et listes',r(1,'Titre',t.h1)+r(2,'Sous-titre',t.sub)+r(3,'Pastilles (séparées par une virgule)',t.tags.join(', '))+r(4,'Bas de page',t.ft)+r(5,'Crudités proposées (virgules)',C.cru.join(', '))+r(6,'Boissons des menus (virgules)',C.drk.join(', '))+r(7,'Téléphone 1',ct.tel[0]||'')+r(8,'Téléphone 2',ct.tel[1]||'')+r(9,'WhatsApp (format international, sans +)',ct.wa||'')+r(10,'Adresse affichée',ct.addr||'')+r(11,'Adresse pour Google Maps',ct.maps||'')+r(12,'Info sous l’adresse',ct.info||'')+DAYS.map((d,i)=>r(21+i,d+' (ex. 11:00-00:00, vide = fermé)',(ct.hrs||[])[i]||'')).join('')+r(15,'Bandeau promo (vide = caché)',ct.promo)+r(16,'Fidélité : récompense (vide = caché)',ct.loyT)+r(17,'Fidélité : nombre de commandes',ct.loyN)+r(18,'Note Google (ex. 4,8)',ct.rate)+r(19,'Lien « laisser un avis » Google',ct.revu)+r(20,'Avis clients (séparés par |)',ct.quotes)+'<div class="row"><button class="btn g" data-x="ereset">↺ Rétablir le menu d’origine</button></div><div class="row"><button class="btn g" data-x="elogo">🖼️ Changer le logo</button><button class="btn" data-x="etsv">Enregistrer</button></div>')};
A.ereset=()=>{if(confirm('Rétablir le menu d’origine sur cet appareil ?')){try{localStorage.removeItem(LK);localStorage.removeItem(PK)}catch(e){}location.reload()}};
A.elogo=()=>{EI={logo:1};$('#ef').click()};
A.etsv=()=>{const v=i=>$('#t'+i).value.trim(),l=s=>s.split(',').map(x=>x.trim()).filter(Boolean);C.t={h1:v(1)||C.t.h1,sub:v(2),tags:l(v(3)),ft:v(4)};C.cru=l(v(5));C.drk=l(v(6));C.ct={tel:[v(7),v(8)].filter(Boolean),wa:v(9).replace(/\D/g,''),addr:v(10),maps:v(11),info:v(12),hrs:[21,22,23,24,25,26,27].map(i=>v(i)),promo:v(15),loyT:v(16),loyN:v(17),rate:v(18),revu:v(19),quotes:v(20)};dirty();A.shut()};
A.edm=()=>{A.shut();document.body.classList.add('ae');scrollTo(0,0);toast('Mode modification activé')};
A.eoff=()=>{document.body.classList.remove('ae')};
A.epub=()=>esh('Publier le site','<p style="font-size:14px;margin:8px 0">Envoie vos changements sur GitHub : Netlify met le site à jour en 1 à 2 minutes.</p><label>Dépôt GitHub (ex. nom/haythemfood)</label><input id="gr" value="'+esc(GH.repo||'')+'"><label>Jeton d’accès GitHub</label><input id="gt" type="password" value="'+esc(GH.token||'')+'"><label>Branche</label><input id="gb" value="'+esc(GH.br||'main')+'"><button class="btn" data-x="epgo" style="width:100%;margin-top:10px">Publier maintenant</button><button class="btn g" data-x="eexp" style="width:100%;margin-top:8px">Télécharger content.json</button>');
const hs=s=>{let h=2166136261;for(let i=0;i<s.length;i+=7)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(36)+s.length.toString(36)};
A.epgo=async()=>{GH={repo:$('#gr').value.trim(),token:$('#gt').value.trim(),br:$('#gb').value.trim()||'main'};try{localStorage.setItem(GK,JSON.stringify(GH))}catch(e){}
if(!GH.repo||!GH.token)return toast('Dépôt et jeton requis');
const H={Authorization:'Bearer '+GH.token,Accept:'application/vnd.github+json'},api=p=>'https://api.github.com/repos/'+GH.repo+'/contents/'+p,
up=async(p,b,kp)=>{let sha;const g=await fetch(api(p)+'?ref='+GH.br,{headers:H});if(g.ok){if(kp)return;sha=(await g.json()).sha}const r=await fetch(api(p),{method:'PUT',headers:H,body:JSON.stringify({message:'Mise à jour du site',content:b,branch:GH.br,sha})});if(!r.ok)throw new Error(r.status)};
try{const P=JSON.parse(JSON.stringify(C)),rf=[];P.cats.forEach(c=>c.items.forEach(o=>rf.push([o,'img'])));rf.push([P,'logo']);(P.ban||[]).forEach(b=>rf.push([b,'img']));const td=rf.filter(([o,k])=>(o[k]||'').startsWith('data:'));let n=0;
for(const[o,k]of td){const d=o[k],pa='img/'+hs(d)+'.jpg';toast('Photos '+(++n)+'/'+td.length);await up(pa,d.split(',')[1],1);o[k]=pa}
toast('Envoi du site…');await up('content.json',btoa(unescape(encodeURIComponent(JSON.stringify(P)))),0);
try{await new Promise(r=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas');c.width=1200;c.height=630;const x=c.getContext('2d');x.fillStyle='#0a2468';x.fillRect(0,0,1200,630);const h=350,w=im.width*h/im.height;x.drawImage(im,(1200-w)/2,50,w,h);x.textAlign='center';x.fillStyle='#f3cf63';x.font='700 84px Georgia,serif';x.fillText('Haythem Food',600,500);x.fillStyle='#f1d27a';x.font='36px Georgia,serif';x.fillText('Cuisine halal · Chaussée d’Anvers, Bruxelles',600,570);up('og.jpg',c.toDataURL('image/jpeg',.85).split(',')[1],0).then(r,r)};im.onerror=r;im.src=$('.logo').src});await up('robots.txt',btoa('User-agent: *\nAllow: /\nSitemap: https://www.haythemfood.com/sitemap.xml\n'),0);await up('sitemap.xml',btoa('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://www.haythemfood.com/</loc></url></urlset>'),0)}catch(e){}
localStorage.removeItem(LK);try{localStorage.setItem(PK,JSON.stringify(P))}catch(e){}A.shut();toast('Publié ✓ En ligne dans 1 à 2 minutes')}
catch(e){toast(['401','403','404'].includes(e.message)?'Échec : jeton ou dépôt incorrect':'Échec : réessayez')}};
A.eexp=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(C)],{type:'application/json'}));a.download='content.json';a.click()};
init(jl(LK)||jl(PK)||defC());
fetch('content.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(j=>{if(okC(j)){try{localStorage.setItem(PK,JSON.stringify(j))}catch(e){}if(!localStorage.getItem(LK))init(j)}}).catch(()=>{});

/* ===== Indice de défilement du menu ===== */
function chv(){const h=$('#chips'),r=$('#ar'),l=$('#al');if(!h||!r)return;const m=h.scrollWidth-h.clientWidth;r.classList.toggle('off',m<8||Math.abs(h.scrollLeft)>=m-6);l.classList.toggle('on',Math.abs(h.scrollLeft)>8)}
(()=>{const h=$('#chips'),hh=()=>{$('#hint').classList.add('off');try{localStorage.setItem('hfh','1')}catch(e){}};
h.addEventListener('scroll',chv,{passive:true});addEventListener('resize',chv);['pointerdown','wheel'].forEach(v=>h.addEventListener(v,hh,{passive:true}));
let seen=0;try{seen=localStorage.getItem('hfh')}catch(e){}if(seen)$('#hint').classList.add('off');
setTimeout(chv,400);
setTimeout(()=>{if(!seen&&scrollY<50&&h.scrollWidth>h.clientWidth+40){h.scrollTo({left:document.dir==='rtl'?-110:110,behavior:'smooth'});setTimeout(()=>h.scrollTo({left:0,behavior:'smooth'}),900)}},1200)})();

/* ===== Fonctionnalités clients ===== */
function bxl(){try{return new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Brussels'}))}catch(e){return new Date()}}function bdg(){if(!(C.ct.hrs||[]).some(x=>x)){$('#op').innerHTML='';return}
const n=bxl(),t=n.getHours()*60+n.getMinutes(),di=(n.getDay()+6)%7,r=rg(di),pv=rg((di+6)%7),o=r&&(r[0]<r[1]?t>=r[0]&&t<r[1]:t>=r[0]),ov=!o&&pv&&pv[1]<=pv[0]&&t<pv[1];
if(o||ov){$('#op').innerHTML='<span class="od on"></span><b>Ouvert maintenant</b> · <span>Ferme à</span> '+(o?r[3]:pv[3]);return}
let h='<span class="od"></span><b>Fermé</b> · ';
if(r&&t<r[0])h+='<span>Ouvre à</span> '+r[2];else for(let k=1;k<8;k++){const q=rg((di+k)%7);if(q){h+=(k>1?'<span>'+DAYS[(di+k)%7]+'</span> · ':'')+'<span>'+(k===1?'Ouvre demain à':'Ouvre à')+'</span> '+q[2];break}}
$('#op').innerHTML=h}
function hrh(){if(!(C.ct.hrs||[]).some(x=>x))return'';const di=(bxl().getDay()+6)%7;
return'<h3 class="hh2"><span>Horaires</span></h3><div class="hr">'+DAYS.map((d,i)=>{const r=rg(i),c=i===di?' class="td"':'';return'<span'+c+'>'+d+'</span><span'+c+'>'+(r?r[2]+' – '+r[3]:'<i>Fermé</i>')+'</span>'}).join('')+'</div>'}
function revp(){try{const t=+localStorage.getItem('hfr')||0;if(Date.now()-t<2592e5)return;localStorage.setItem('hfr',Date.now())}catch(e){}
esh('Merci pour votre commande !','<p><span>Un petit avis Google nous aide beaucoup</span> 🙏</p><div class="row"><a class="btn" target="_blank" rel="noopener" href="'+esc(rvu(C.ct))+'"><i class="rst"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></i> <span>Laisser un avis Google</span></a><button class="btn g" data-x="shut"><span>Plus tard</span></button></div>')}
function ext(){const ct=C.ct,st=Object.values(I).filter(x=>x.star),N=Math.max(2,+ct.loyN||10);let sc=0,ls='';try{sc=+localStorage.getItem('hfs')||0;ls=localStorage.getItem('hflast')}catch(e){}
const k=sc%N,f=sc&&!k?N:k,q=(ct.quotes||'').split('|').map(x=>x.trim()).filter(Boolean);
$('#bn').hidden=!ct.promo;$('#bn').textContent=ct.promo||'';
$('#pop').innerHTML=(st.length?'<h2><i>⭐</i><span>Les plus commandés</span></h2><div class="pst">'+st.map(x=>'<div class="pc"><div class="pp" style="'+(x.img?'background-image:url('+x.img+')':'')+'">'+(x.img?'':x.e)+'</div><b>'+esc(full(x))+'</b><small>'+eur(x.p)+'</small><div class="ctl" data-c="'+x.id+'">'+ctl(x.id)+'</div></div>').join('')+'</div>':'')
+(ls?'<div class="cb"><button class="btn g" data-x="redo">🔁 <span>Refaire ma dernière commande</span></button></div>':'')
+(ct.loyT?'<div class="loy"><b>🎁 <span>Carte de fidélité</span></b><i>'+'●'.repeat(f)+'○'.repeat(N-f)+'</i><small>'+esc(ct.loyT)+'</small></div>':'');
$('#rev').innerHTML=true?'<div class="rv"><h2>⭐ <span>Avis de nos clients</span></h2><p><span>Un petit avis Google nous aide beaucoup</span> 🙏</p>'+(ct.rate?'<p class="rt">'+esc(ct.rate)+' / 5 '+(r=>'★'.repeat(r)+'☆'.repeat(5-r))(Math.max(0,Math.min(5,Math.round(parseFloat(String(ct.rate).replace(',','.'))||0))))+'</p>':'')+q.map(x=>'<blockquote>'+esc(x)+'</blockquote>').join('')+(true?'<a class="btn" target="_blank" rel="noopener" href="'+esc(rvu(ct))+'"><i class="rst"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></i> <span>Voir les avis Google</span></a>':'')+'</div>':'';bdg()}
A.redo=()=>{try{L=JSON.parse(localStorage.getItem('hflast')).filter(z=>I[z.id]);buz();openD()}catch(e){}};
{const s0=A.send;A.send=()=>{const sn=JSON.stringify(L),n=L.length;s0();if(n&&!L.length){try{localStorage.setItem('hflast',sn);localStorage.setItem('hfs',(+localStorage.getItem('hfs')||0)+1)}catch(e){}ext();setTimeout(revp,1500)}}}
setInterval(bdg,60000);ext();
/* ===== Fiche produit : photo en grand + composition ===== */
const nz=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace('falafels','fallafels'),cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const PR={chawarma:'lamelles dorées de chawarma, tendres et parfumées',kefta:'kefta de bœuf finement hachée, relevée d’herbes et d’épices douces',hamburger:'steak haché pur bœuf, juteux et grillé à la minute',poulet:'poulet tendre, mariné aux épices et grillé à point','poulet pane':'poulet pané doré, croustillant dehors et fondant à cœur',merguez:'merguez savoureuse, grillée et délicatement épicée',fallafels:'falafels maison de pois chiches, dorés et croustillants',foie:'foie de volaille fondant, délicatement poêlé',kebda:'foie poêlé aux épices, fondant et parfumé',viande:'viande tendre et savoureuse, tranchée finement',poisson:'filet de poisson pané, doré et croustillant',fish:'filet de poisson pané, doré et croustillant',dinde:'dinde tendre et légère, grillée avec soin',tenders:'tenders de poulet panés, croustillants et dorés',mixte:'assortiment de nos viandes pour tout goûter',pita:'garniture généreuse façon pita',bicky:'burger Bicky, une signature au goût belge incomparable',brochettes:'brochettes de viande marinée, grillées avec soin','meze maison':'mezzés faits maison, à partager et à savourer','grillade maison':'merguez, shawarma et poulet grillés'};
const TPL={'Dürüms':p=>p+', le tout dans une galette de blé tiède, avec vos crudités fraîches et votre sauce préférée.','Sandwichs':p=>p+', dans un pain moelleux, avec vos crudités fraîches et votre sauce préférée.','Panini':p=>p+', dans un panini pressé et doré, avec vos crudités et votre sauce préférée.','Tacos':p=>p+', dans une galette tacos grillée, généreusement garnie et nappée de votre sauce préférée.','Kapsalon':p=>'Un lit de frites dorées, '+p+', crudités fraîches et vos sauces, le tout généreusement gratiné.','Menus':p=>p+', accompagné de sa boisson : le menu complet pour se régaler.','Bicky':p=>p+', dans un petit pain moelleux avec vos sauces préférées.','Assiettes':p=>p+', servi avec salade composée, frites dorées et sauces au choix.'};
const SPC={'Salades':{caprice:'Une salade fraîche et légère, croquante à souhait, assaisonnée avec soin.',mixte:'Un mélange généreux de crudités fraîches et de nos viandes.',maison:'Notre salade signature, garnie de crudités du jour, fraîche et généreuse.',poulet:'Crudités fraîches et poulet tendre grillé, légères et gourmandes.','viande au choix':'Crudités fraîches et la viande de votre choix, grillée avec soin.'},
'Spécialités':{'tajine kefta':'Tajine mijoté de boulettes de kefta en sauce tomatée parfumée aux épices.','tajine poulet legumes':'Poulet tendre mijoté lentement avec ses légumes, aux saveurs du Maroc.','tajine poulet citron':'Poulet fondant au citron confit et aux olives, un classique raffiné.','tajine agneau':'Agneau fondant mijoté aux pruneaux, tout en douceur sucrée-salée.',couscous:'Semoule fine et légumes mijotés, avec la viande de votre choix.'},
'Frites & plus':{frites:'Frites dorées et croustillantes, fondantes à cœur.',ailes:'Ailes de poulet croustillantes et bien assaisonnées.',bouchettes:'Bouchées de viande dorées et croustillantes.','poulet croque':'Poulet croustillant à croquer, doré à souhait.',boulettes:'Boulettes de viande savoureuses et bien dorées.',fricadelles:'Fricadelles dorées, un incontournable gourmand.'},
'Sauces':{mayonnaise:'Onctueuse et classique, tout en douceur.',ketchup:'Tomate douce et légèrement fruitée.',andalouse:'Mayonnaise relevée de poivron et de tomate.',algerienne:'Relevée et épicée, aux notes de piment.',samourai:'Crémeuse et piquante, pour les gourmands audacieux.',blanche:'Fraîche, douce et crémeuse.',harissa:'Piment ardent relevé d’épices du Maghreb.',americaine:'Douce, acidulée et parfumée à la tomate.',brazil:'Fruitée et exotique, légèrement sucrée.',bicky:'Sucrée-salée, la signature belge.',mammouth:'Corsée et généreuse, au goût marqué.',tartare:'Crème fraîche, câpres et cornichons, tout en fraîcheur.',cocktail:'Rosée, douce et onctueuse.','curry ketchup':'Ketchup parfumé au curry, doux et épicé.','sauce a l':'Crémeuse et parfumée à l’ail frais.',barbecue:'Fumée, douce et légèrement sucrée.',moutarde:'Franche et pleine de caractère.',piquante:'Pour les amateurs de sensations fortes.','pili-pili':'Piment éclatant, le feu en bouche.','sweet chili':'Douce, sucrée et délicatement pimentée.',pita:'Fraîche et aromatique, idéale avec la viande.'},
'Suppléments':{feta:'Feta crémeuse et légèrement salée.',kefta:'Une portion de kefta de bœuf aux herbes et épices douces.',merguez:'Une portion de merguez grillée et épicée.','extra sauce':'Une sauce supplémentaire, au choix.',cheddar:'Cheddar fondant et gourmand.',poulet:'Une portion de poulet tendre grillé.','cote d':'Côte d’agneau grillée, tendre et parfumée.'},
'Boissons':{'the a la menthe':'Thé vert à la menthe fraîche, servi à la marocaine.','cafe noir':'Un café noir intense et aromatique.','cafe au lait':'Un café doux et onctueux, adouci de lait.',redbull:'Boisson énergisante, servie bien fraîche.',freez:'Boisson fraîche et fruitée.',softs:'Une sélection de softs, servis bien frais.',caprisun:'Un jus de fruits rafraîchissant pour les petits.'},
'Desserts':{'dame blanche':'Glace vanille, sauce chocolat chaud et chantilly.','patisserie marocaine':'Pâtisseries orientales aux amandes et au miel.','tiramisu':'Biscuit imbibé de café, crème mascarpone onctueuse et cacao.'}};
const TDX=`p:chawarma=golden slices of shawarma, tender and fragrant|goudkleurige plakjes sjoarma, mals en geurig|lonchas doradas de shawarma, tiernas y aromáticas|شرائح شاورما ذهبية، طرية وعطرة
p:kefta=finely minced beef kefta with herbs and mild spices|fijn gehakte rundvlees-kefta met kruiden en milde specerijen|kefta de ternera finamente picada con hierbas y especias suaves|كفتة لحم بقري مفرومة ناعماً بالأعشاب والتوابل الخفيفة
p:hamburger=juicy pure beef patty, grilled to order|sappige pure rundvleesburger, op bestelling gegrild|jugosa hamburguesa de ternera, a la plancha al momento|برغر لحم بقري عصيري، يُشوى عند الطلب
p:poulet=tender chicken, marinated with spices and grilled to perfection|mals kip, gemarineerd met specerijen en perfect gegrild|pollo tierno marinado con especias y asado al punto|دجاج طري متبّل بالتوابل ومشوي بإتقان
p:poulet pane=golden breaded chicken, crispy outside and tender inside|goudbruine gepaneerde kip, krokant van buiten en mals van binnen|pollo empanado dorado, crujiente por fuera y tierno por dentro|دجاج مقرمش بالبقسماط، ذهبي من الخارج وطري من الداخل
p:merguez=flavorful merguez, grilled and delicately spiced|smaakvolle merguez, gegrild en fijn gekruid|sabrosa merguez a la parrilla, delicadamente especiada|نقانق مرقاز لذيذة مشوية بتتبيلة خفيفة
p:fallafels=homemade chickpea falafels, golden and crispy|huisgemaakte falafel van kikkererwten, goudbruin en krokant|falafels caseros de garbanzos, dorados y crujientes|فلافل منزلية من الحمص، ذهبية ومقرمشة
p:foie=melt-in-the-mouth poultry liver, gently pan-seared|smeuïge kippenlever, zachtjes gebakken|hígado de ave tierno, suavemente salteado|كبدة دجاج ذائبة، مقلية بلطف
p:kebda=liver pan-fried with spices, tender and fragrant|lever gebakken met specerijen, mals en geurig|hígado salteado con especias, tierno y aromático|كبدة مقلية بالتوابل، طرية وعطرة
p:viande=tender, flavorful meat, thinly sliced|mals en smaakvol vlees, fijn gesneden|carne tierna y sabrosa, en lonchas finas|لحم طري ولذيذ مقطّع شرائح رقيقة
p:poisson=breaded fish fillet, golden and crispy|gepaneerde visfilet, goudbruin en krokant|filete de pescado empanado, dorado y crujiente|فيليه سمك مقرمش بالبقسماط، ذهبي
p:dinde=tender, light turkey, carefully grilled|mals en licht kalkoen, zorgvuldig gegrild|pavo tierno y ligero, asado con cuidado|ديك رومي طري وخفيف، مشوي بعناية
p:tenders=crispy golden chicken tenders|krokante gouden kipstrips|tiras de pollo empanadas, crujientes y doradas|قطع دجاج مقرمشة ذهبية
p:mixte=an assortment of our meats, to taste them all|een assortiment van ons vlees, om alles te proeven|surtido de nuestras carnes para probarlo todo|تشكيلة من لحومنا لتتذوق كل شيء
p:pita=a generous filling, pita style|een royale vulling op pita-wijze|generoso relleno al estilo pita|حشوة سخية على الطريقة البيتا
p:bicky=Bicky burger, a signature Belgian taste|Bicky-burger, een unieke Belgische smaak|hamburguesa Bicky, un sabor belga inconfundible|برغر بيكي، نكهة بلجيكية فريدة
p:brochettes=skewers of marinated meat, carefully grilled|spiesjes van gemarineerd vlees, zorgvuldig gegrild|brochetas de carne marinada, asadas con esmero|أسياخ لحم متبّل مشوية بعناية
p:meze maison=homemade mezze, to share and savor|huisgemaakte mezze, om te delen en van te genieten|mezze caseros, para compartir y disfrutar|مزّات منزلية للمشاركة والاستمتاع
p:grillade maison=grilled merguez, shawarma and chicken|gegrilde merguez, sjoarma en kip|merguez, shawarma y pollo a la parrilla|مرقاز وشاورما ودجاج مشوي
t:Dürüms={p}, all in a warm wheat wrap, with fresh veggies and your favorite sauce.|{p}, alles in een warme tarwewrap, met verse groenten en je favoriete saus.|{p}, todo en una tortilla de trigo tibia, con verduras frescas y tu salsa favorita.|{p}، كلّه في رغيف قمح دافئ مع خضار طازجة وصلصتك المفضلة.
t:Sandwichs={p}, in a soft bun, with fresh veggies and your favorite sauce.|{p}, in een zacht broodje, met verse groenten en je favoriete saus.|{p}, en pan suave, con verduras frescas y tu salsa favorita.|{p}، في خبز طري مع خضار طازجة وصلصتك المفضلة.
t:Panini={p}, in a pressed, golden panini, with veggies and your favorite sauce.|{p}, in een geperste, gouden panini, met groenten en je favoriete saus.|{p}, en un panini prensado y dorado, con verduras y tu salsa favorita.|{p}، في بانيني مضغوط ذهبي مع الخضار وصلصتك المفضلة.
t:Tacos={p}, in a grilled tacos wrap, generously filled and topped with your favorite sauce.|{p}, in een gegrilde tacowrap, rijkelijk gevuld en met je favoriete saus.|{p}, en una tortilla de tacos a la plancha, bien rellena y con tu salsa favorita.|{p}، في خبز تاكوس مشوي محشو بسخاء مع صلصتك المفضلة.
t:Kapsalon=A bed of golden fries, {p}, fresh veggies and your sauces, all generously gratinated.|Een bedje van gouden friet, {p}, verse groenten en jouw sauzen, rijkelijk gegratineerd.|Una cama de patatas fritas doradas, {p}, verduras frescas y tus salsas, todo bien gratinado.|طبقة من البطاطا المقلية الذهبية، {p}، خضار طازجة وصلصاتك، والكل مُحمّر بسخاء.
t:Menus={p}, served with its drink: the complete menu to enjoy.|{p}, geserveerd met drankje: het complete menu om van te smullen.|{p}, acompañado de su bebida: el menú completo para disfrutar.|{p}، مع مشروبه: وجبة كاملة للاستمتاع.
t:Bicky={p}, in a soft little bun with your favorite sauces.|{p}, in een zacht broodje met je favoriete sauzen.|{p}, en un pan blandito con tus salsas favoritas.|{p}، في خبز صغير طري مع صلصاتك المفضلة.
t:Assiettes={p}, served with mixed salad, golden fries and sauces of your choice.|{p}, geserveerd met gemengde salade, gouden friet en sauzen naar keuze.|{p}, servido con ensalada mixta, patatas fritas doradas y salsas a elegir.|{p}، تُقدَّم مع سلطة مشكّلة وبطاطا مقلية ذهبية وصلصات حسب الاختيار.
m:enfant=A little treat of a menu made for kids, with its drink.|Een heerlijk menu speciaal voor kinderen, met drankje.|Un menú muy goloso pensado para los niños, con su bebida.|وجبة لذيذة للأطفال مع مشروبها.
m:grillades=An assortment of {p}, carefully grilled and served with mixed salad, golden fries and sauces of your choice.|Een assortiment van {p}, zorgvuldig gegrild en geserveerd met gemengde salade, gouden friet en sauzen naar keuze.|Surtido de {p}, a la parrilla con esmero y servido con ensalada mixta, patatas fritas doradas y salsas a elegir.|تشكيلة من {p} مشوية بعناية وتُقدَّم مع سلطة مشكّلة وبطاطا مقلية ذهبية وصلصات حسب الاختيار.
w:poulet=chicken|kip|pollo|دجاج
w:brochettes=skewers|spiesjes|brochetas|أسياخ
w:kefta=kefta|kefta|kefta|كفتة
w:shawarma=shawarma|sjoarma|shawarma|شاورما
w:merguez=merguez|merguez|merguez|مرقاز
Salades/caprice=A fresh, light, crisp salad, carefully seasoned.|Een frisse, lichte, knapperige salade, zorgvuldig op smaak gebracht.|Una ensalada fresca y ligera, crujiente y bien aliñada.|سلطة منعشة وخفيفة ومقرمشة بتتبيل متقن.
Salades/mixte=A generous mix of fresh veggies and our meats.|Een royale mix van verse groenten en ons vlees.|Una generosa mezcla de verduras frescas y nuestras carnes.|مزيج سخي من الخضار الطازجة ولحومنا.
Salades/maison=Our signature salad with the day's fresh veggies, generous and fresh.|Onze huissalade met verse groenten van de dag, rijkelijk en fris.|Nuestra ensalada de la casa con verduras frescas del día, fresca y generosa.|سلطة البيت المميزة بخضار اليوم الطازجة، منعشة وسخية.
Salades/poulet=Fresh veggies and tender grilled chicken, light and satisfying.|Verse groenten en mals gegrilde kip, licht en lekker.|Verduras frescas y pollo tierno a la parrilla, ligera y sabrosa.|خضار طازجة ودجاج مشوي طري، خفيفة وشهية.
Salades/viande au choix=Fresh veggies and the meat of your choice, carefully grilled.|Verse groenten en vlees naar keuze, zorgvuldig gegrild.|Verduras frescas y la carne que elijas, asada con esmero.|خضار طازجة ولحم من اختيارك مشوي بعناية.
Spécialités/tajine kefta=Slow-cooked tajine of kefta meatballs in a spiced tomato sauce.|Gestoofde tajine met kefta-balletjes in gekruide tomatensaus.|Tajín de albóndigas de kefta en salsa de tomate especiada.|طاجين كفتة مطهو ببطء في صلصة طماطم متبّلة.
Spécialités/tajine poulet legumes=Tender chicken slow-cooked with its vegetables, with flavors of Morocco.|Mals kip, langzaam gestoofd met groenten, met smaken van Marokko.|Pollo tierno cocinado lentamente con sus verduras, con sabores de Marruecos.|دجاج طري مطهو ببطء مع الخضار بنكهات المغرب.
Spécialités/tajine poulet citron=Melt-in-the-mouth chicken with preserved lemon and olives, a refined classic.|Smeuïge kip met gepekelde citroen en olijven, een verfijnde klassieker.|Pollo meloso con limón confitado y aceitunas, un clásico refinado.|دجاج طري بالليمون المخلل والزيتون، طبق كلاسيكي راقٍ.
Spécialités/tajine agneau=Tender lamb slow-cooked with prunes, gently sweet and savory.|Mals lamsvlees, gestoofd met pruimen, zoet en hartig.|Cordero tierno guisado con ciruelas pasas, dulce y salado.|لحم ضأن طري مطهو بالبرقوق، بحلاوة ومذاق مالح لطيف.
Spécialités/couscous=Fine semolina and simmered vegetables, with the meat of your choice.|Fijne griesmeel en gestoofde groenten, met vlees naar keuze.|Sémola fina y verduras guisadas, con la carne que elijas.|سميد ناعم وخضار مطبوخة مع لحم من اختيارك.
Frites & plus/frites=Golden, crispy fries, fluffy inside.|Gouden, krokante friet, zacht van binnen.|Patatas fritas doradas y crujientes, tiernas por dentro.|بطاطا مقلية ذهبية مقرمشة وطرية من الداخل.
Frites & plus/ailes=Crispy, well-seasoned chicken wings.|Krokante, goed gekruide kippenvleugels.|Alitas de pollo crujientes y bien sazonadas.|أجنحة دجاج مقرمشة ومتبّلة جيداً.
Frites & plus/bouchettes=Golden, crispy meat bites.|Gouden, krokante vleeshapjes.|Bocaditos de carne dorados y crujientes.|لقيمات لحم ذهبية مقرمشة.
Frites & plus/poulet croque=Crispy chicken to bite into, golden to perfection.|Krokante kip om in te bijten, perfect goudbruin.|Pollo crujiente para morder, dorado a la perfección.|دجاج مقرمش ذهبي بإتقان.
Frites & plus/boulettes=Flavorful, golden meatballs.|Smaakvolle, goudbruine gehaktballetjes.|Albóndigas sabrosas y bien doradas.|كرات لحم لذيذة ذهبية.
Frites & plus/fricadelles=Golden fricadelles, a gourmet favorite.|Gouden fricadellen, een echte lekkernij.|Fricadelles doradas, un clásico goloso.|فريكاديل ذهبي، طبق لذيذ لا غنى عنه.
Sauces/mayonnaise=Creamy and classic.|Romig en klassiek.|Cremosa y clásica.|كريمية وكلاسيكية.
Sauces/ketchup=Sweet, slightly fruity tomato.|Zoete, licht fruitige tomaat.|Tomate dulce y ligeramente afrutada.|طماطم حلوة بلمسة فاكهية.
Sauces/andalouse=Mayonnaise with pepper and tomato.|Mayonaise met paprika en tomaat.|Mayonesa con pimiento y tomate.|مايونيز بالفلفل والطماطم.
Sauces/algerienne=Bold and spicy, with chili notes.|Pittig en krachtig, met chilinoten.|Intensa y picante, con notas de guindilla.|حارة وقوية بنكهة الفلفل.
Sauces/samourai=Creamy and spicy, for the bold.|Romig en pikant, voor durvers.|Cremosa y picante, para los atrevidos.|كريمية وحارة للجريئين.
Sauces/blanche=Fresh, mild and creamy.|Fris, mild en romig.|Fresca, suave y cremosa.|منعشة ولطيفة وكريمية.
Sauces/harissa=Fiery chili with North African spices.|Vurige peper met Noord-Afrikaanse kruiden.|Guindilla ardiente con especias norteafricanas.|فلفل ناري بتوابل المغرب العربي.
Sauces/americaine=Mild, tangy and tomato-scented.|Mild, pittig en met tomatenaroma.|Suave, ligeramente ácida y con aroma a tomate.|لطيفة وحامضة قليلاً بنكهة الطماطم.
Sauces/brazil=Fruity and exotic, slightly sweet.|Fruitig en exotisch, licht zoet.|Afrutada y exótica, ligeramente dulce.|فاكهية وغريبة، حلوة قليلاً.
Sauces/bicky=Sweet and savory, the Belgian signature.|Zoet en hartig, de Belgische klassieker.|Dulce y salada, la firma belga.|حلوة ومالحة، بصمة بلجيكية.
Sauces/mammouth=Bold and generous, with a strong taste.|Krachtig en rijkelijk, met een uitgesproken smaak.|Intensa y generosa, de sabor marcado.|قوية وسخية بطعم مميز.
Sauces/tartare=Cream, capers and gherkins, so fresh.|Room, kappertjes en augurkjes, heerlijk fris.|Nata, alcaparras y pepinillos, muy fresca.|كريمة بالكبر والمخلل، منعشة جداً.
Sauces/cocktail=Pink, mild and creamy.|Roze, mild en romig.|Rosada, suave y cremosa.|وردية ولطيفة وكريمية.
Sauces/curry ketchup=Curry-flavored ketchup, mild and spicy.|Ketchup met curry, mild en pittig.|Kétchup con curry, suave y especiado.|كاتشب بنكهة الكاري، لطيف وحار.
Sauces/sauce a l=Creamy, scented with fresh garlic.|Romig, met verse knoflook.|Cremosa y perfumada con ajo fresco.|كريمية بنكهة الثوم الطازج.
Sauces/barbecue=Smoky, mild and slightly sweet.|Rokerig, mild en licht zoet.|Ahumada, suave y ligeramente dulce.|مدخّنة ولطيفة وحلوة قليلاً.
Sauces/moutarde=Bold and full of character.|Krachtig en vol karakter.|Franca y llena de carácter.|قوية وذات طابع مميز.
Sauces/piquante=For lovers of strong sensations.|Voor liefhebbers van pittige smaken.|Para los amantes de las emociones fuertes.|لعشاق النكهات الحارة.
Sauces/pili-pili=Blazing chili, fire in the mouth.|Vurige peper, vuur in de mond.|Guindilla ardiente, fuego en la boca.|فلفل حار ناري.
Sauces/sweet chili=Sweet, with a delicate chili kick.|Zoet, met een subtiele pepertik.|Dulce, con un delicado toque picante.|حلوة بلمسة فلفل خفيفة.
Sauces/pita=Fresh and aromatic, ideal with meat.|Fris en aromatisch, ideaal bij vlees.|Fresca y aromática, ideal con la carne.|منعشة وعطرية، مثالية مع اللحم.
Suppléments/feta=Creamy, lightly salted feta.|Romige, licht gezouten feta.|Feta cremosa y ligeramente salada.|جبنة فيتا كريمية خفيفة الملوحة.
Suppléments/kefta=A portion of beef kefta with herbs and mild spices.|Een portie rundvlees-kefta met kruiden en milde specerijen.|Una porción de kefta de ternera con hierbas y especias suaves.|حصة كفتة لحم بقري بالأعشاب والتوابل الخفيفة.
Suppléments/merguez=A portion of grilled, spiced merguez.|Een portie gegrilde, gekruide merguez.|Una porción de merguez a la parrilla.|حصة مرقاز مشوي متبّل.
Suppléments/extra sauce=An extra sauce of your choice.|Een extra saus naar keuze.|Una salsa extra a tu elección.|صلصة إضافية من اختيارك.
Suppléments/cheddar=Melting, indulgent cheddar.|Smeltende, verrukkelijke cheddar.|Cheddar fundido y goloso.|شيدر ذائب لذيذ.
Suppléments/poulet=A portion of tender grilled chicken.|Een portie mals gegrilde kip.|Una porción de pollo tierno a la parrilla.|حصة دجاج مشوي طري.
Suppléments/cote d=Grilled lamb chop, tender and fragrant.|Gegrilde lamskotelet, mals en geurig.|Chuleta de cordero a la parrilla, tierna y aromática.|ضلع ضأن مشوي طري وعطر.
Boissons/the a la menthe=Green tea with fresh mint, served Moroccan style.|Groene thee met verse munt, op Marokkaanse wijze geserveerd.|Té verde con menta fresca, servido a la marroquí.|شاي أخضر بالنعناع الطازج على الطريقة المغربية.
Boissons/cafe noir=An intense, aromatic black coffee.|Een intense, aromatische zwarte koffie.|Un café solo intenso y aromático.|قهوة سوداء قوية وعطرية.
Boissons/cafe au lait=A smooth, creamy coffee with milk.|Een zachte, romige koffie met melk.|Un café suave y cremoso con leche.|قهوة ناعمة كريمية بالحليب.
Boissons/redbull=Energy drink, served ice cold.|Energiedrank, ijskoud geserveerd.|Bebida energética, servida bien fría.|مشروب طاقة بارد جداً.
Boissons/freez=A fresh, fruity drink.|Een frisse, fruitige drank.|Una bebida fresca y afrutada.|مشروب منعش بنكهة الفاكهة.
Boissons/softs=A selection of soft drinks, served ice cold.|Een selectie frisdranken, ijskoud geserveerd.|Una selección de refrescos, bien fríos.|تشكيلة من المشروبات الغازية الباردة.
Boissons/caprisun=A refreshing fruit juice for little ones.|Een verfrissend fruitsap voor de kleintjes.|Un zumo de frutas refrescante para los peques.|عصير فواكه منعش للصغار.
Desserts/dame blanche=Vanilla ice cream, hot chocolate sauce and whipped cream.|Vanille-ijs, warme chocoladesaus en slagroom.|Helado de vainilla, salsa de chocolate caliente y nata montada.|آيس كريم فانيليا بصلصة الشوكولاتة الساخنة والكريمة المخفوقة.
Desserts/patisserie marocaine=Oriental pastries with almonds and honey.|Oosterse gebakjes met amandelen en honing.|Pastelitos orientales con almendras y miel.|حلويات شرقية باللوز والعسل.
Desserts/tiramisu=Coffee-soaked sponge, creamy mascarpone and cocoa.|In koffie gedoopt biscuit, romige mascarpone en cacao.|Bizcocho empapado en café, cremoso mascarpone y cacao.|بسكويت مغموس بالقهوة وكريمة ماسكاربوني والكاكاو.`;
let TDB=null;const tdb=g=>{if(!TDB){TDB={en:{},nl:{},es:{},ar:{}};TDX.split('\n').forEach(l=>{const i=l.indexOf('='),v=l.slice(i+1).split('|');['en','nl','es','ar'].forEach((z,j)=>TDB[z][l.slice(0,i)]=v[j])})}return TDB[g]};
function pdesc(x){if(x.d)return x.d;const k=x.cat,n=nz(x.n),t=TPL[k],g=LG!=='fr'?LG:'',T=g?tdb(g):null,L=(key,fr)=>(T&&T[key])||fr;
if(k==='Grillades'){const m=/\((.*)\)/.exec(x.n);if(!m)return'';const l=T?m[1].replace(/poulet|brochettes|kefta|shawarma|merguez/g,w=>T['w:'+w]||w).replace(/, /g,g==='ar'?'، ':', '):m[1];return L('m:grillades','Un assortiment de {p}, grillés avec soin et servis avec salade composée, frites dorées et sauces au choix.').replace('{p}',l)}
if(t){if(n==='menu enfant')return L('m:enfant','Un petit menu gourmand pensé pour les enfants, avec sa boisson.');const pk=n==='fish'?'poisson':n;if(!PR[pk])return'';const p=L('p:'+pk,PR[pk]);return cap(T&&T['t:'+k]?T['t:'+k].replace('{p}',p):t(p))}
const o=SPC[k]||{},q=Object.keys(o).find(z=>n===z||n.startsWith(z));return q?L(k+'/'+q,o[q]):''}
function lbx(id){const x=I[id];if(!x)return;let b=$('#lb');if(!b){b=document.createElement('div');b.id='lb';b.innerHTML='<div class="lbc" role="dialog" aria-modal="true"><button class="lbx" aria-label="Fermer" data-x="lbc">✕</button><div class="lbi"></div><h3 class="lbt"></h3><div class="lbp"></div><p class="lbl">Composition</p><p class="lbd"></p></div>';document.body.appendChild(b);b.onclick=e=>{if(e.target===b)A.lbc()}}
const im=b.querySelector('.lbi'),d=pdesc(x);im.style.backgroundImage=x.img?'url("'+x.img+'")':'';im.textContent=x.img?'':x.e;
b.querySelector('.lbt').textContent=full(x);b.querySelector('.lbp').textContent=eur(x.p);b.querySelector('.lbl').hidden=b.querySelector('.lbd').hidden=!d;b.querySelector('.lbd').textContent=d;b.classList.add('on');b.querySelector('.lbc').scrollTop=0;try{localStorage.setItem('hfi','1')}catch(e){}const h=$('#tph');h&&h.classList.add('off')}
A.lbc=()=>{const b=$('#lb');b&&b.classList.remove('on')};
document.addEventListener('click',e=>{const p=e.target.closest('.it .ph');if(!p)return;const c=p.closest('.it').querySelector('[data-c]');c&&lbx(c.dataset.c)});
addEventListener('keydown',e=>{if(e.key==='Escape')A.lbc()});
(()=>{const c=$('#carte');if(!c)return;c.insertAdjacentHTML('beforebegin','<p class="tph" id="tph"><span>Touchez la photo d’un plat pour découvrir sa composition</span></p>');let sn=0;try{sn=localStorage.getItem('hfi')}catch(e){}if(sn)$('#tph').classList.add('off')})();
const o0=window.obs,pa=()=>document.querySelectorAll('.it .ph').forEach(p=>{p.setAttribute('role','button');p.tabIndex=0;p.setAttribute('aria-label','Photo : voir la composition')});
window.obs=()=>{o0();pa()};pa();
addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('.it .ph')){e.preventDefault();e.target.click()}});
try{if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))}catch(e){}
(()=>{let ev;const mk=()=>{if($('#ins')||!ev||!$('#hq'))return;$('#hq').insertAdjacentHTML('afterend','<div class="cta" id="ins"><button class="btn g" type="button">📲 Installer l’appli</button></div>');$('#ins button').onclick=async()=>{try{ev.prompt();await ev.userChoice}catch(e){}ev=null;const i=$('#ins');i&&i.remove()}};
addEventListener('beforeinstallprompt',e=>{e.preventDefault();ev=e;mk()});addEventListener('appinstalled',()=>{const i=$('#ins');i&&i.remove()})})();
/* ===== Langues ===== */
const TX=`Composition=Ingredients|Samenstelling|Composición|المكونات
Touchez la photo d’un plat pour découvrir sa composition=Tap a dish’s photo to see what’s inside|Tik op de foto van een gerecht om te zien wat erin zit|Toca la foto de un plato para ver su composición|المس صورة الطبق لتكتشف مكوّناته
Installer l’appli=Install the app|De app installeren|Instalar la app|ثبّت التطبيق
Cuisine halal=Halal cuisine|Halal keuken|Cocina halal|مطبخ حلال
Faite minute=Made to order|Vers bereid|Hecho al momento|يُحضَّر عند الطلب
Sur place ou à emporter=Dine in or take away|Ter plaatse of om mee te nemen|Para comer aquí o llevar|في المطعم أو للأخذ
Dürüms, tacos, grillades et tajines. Composez votre commande ici, envoyez-la en un geste.=Dürüms, tacos, grills and tagines. Build your order here and send it in one tap.|Dürüms, tacos, grillades en tajines. Stel hier uw bestelling samen en verstuur hem met één tik.|Dürüms, tacos, parrilladas y tajines. Arma tu pedido aquí y envíalo con un toque.|دوروم وتاكوس ومشاوي وطواجن. اختر طلبك هنا وأرسله بلمسة واحدة.
Voir la carte=See the menu|Bekijk de kaart|Ver la carta|عرض القائمة
Ma commande=My order|Mijn bestelling|Mi pedido|طلبي
Rechercher un plat…=Search a dish…|Zoek een gerecht…|Buscar un plato…|ابحث عن طبق…
Appeler=Call|Bellen|Llamar|اتصل
Itinéraire=Directions|Route|Cómo llegar|الاتجاهات
Glissez les boutons pour voir tout le menu=Swipe the buttons to see the whole menu|Veeg over de knoppen voor het hele menu|Desliza los botones para ver toda la carta|مرّر الأزرار لرؤية القائمة كاملة
Ajouter=Add|Toevoegen|Añadir|أضف
Choisir=Choose|Kies|Elegir|اختر
Nous trouver=Find us|Vind ons|Encuéntranos|موقعنا
Plats à emporter · livraison possible à partir de 30 €=Takeaway · delivery available from €30|Afhaal · levering mogelijk vanaf € 30|Para llevar · entrega a domicilio desde 30 €|للأخذ · التوصيل متاح ابتداءً من 30 €
🚚 Livraison possible à partir de 30 €=🚚 Delivery available from €30|🚚 Levering mogelijk vanaf € 30|🚚 Entrega a domicilio desde 30 €|🚚 التوصيل متاح ابتداءً من 30 €
Cuisine halal · Faite minute · Commandez aussi sur la borne en restaurant=Halal cuisine · Made to order · Also order at the kiosk in the restaurant|Halal keuken · Vers bereid · Bestel ook op de zuil in het restaurant|Cocina halal · Hecho al momento · Pide también en el quiosco del restaurante|مطبخ حلال · يُحضَّر عند الطلب · اطلب أيضًا من الشاشة داخل المطعم
Sur place=Dine in|Ter plaatse|En el local|في المطعم
À emporter=Takeaway|Afhaal|Para llevar|للأخذ
Votre prénom=Your first name|Uw voornaam|Tu nombre|اسمك
Composer=Customize|Samenstellen|Personalizar|خصّص
Voir mon panier=View my basket|Mijn mandje bekijken|Ver mi cesta|عرض سلتي
Valider ma commande=Confirm my order|Mijn bestelling bevestigen|Confirmar mi pedido|تأكيد طلبي
Vider mon panier=Empty my basket|Mijn mandje leegmaken|Vaciar mi cesta|إفراغ سلتي
Personnaliser=Customize|Aanpassen|Personalizar|تخصيص
Votre prénom (pour vous appeler)=Your first name (so we can call you)|Uw voornaam (om u op te roepen)|Tu nombre (para llamarte)|اسمك (لننادي عليك)
Envoyer par WhatsApp=Send via WhatsApp|Versturen via WhatsApp|Enviar por WhatsApp|إرسال عبر واتساب
Mode de paiement=Payment method|Betaalmethode|Método de pago|طريقة الدفع
Carte au comptoir=Card at the counter|Kaart aan de toonbank|Tarjeta en el mostrador|بطاقة عند الصندوق
Espèces=Cash|Contant|Efectivo|نقدًا
Virement=Bank transfer|Overschrijving|Transferencia|تحويل بنكي
Payer avec Payconiq=Pay with Payconiq|Betalen met Payconiq|Pagar con Payconiq|ادفع عبر Payconiq
Réglez au comptoir par carte bancaire ou Payconiq.=Pay at the counter by bank card or Payconiq.|Betaal aan de toonbank met bankkaart of Payconiq.|Pague en el mostrador con tarjeta o Payconiq.|ادفع عند الصندوق بالبطاقة أو Payconiq.
Réglez en espèces au comptoir, à la remise de votre commande.=Pay in cash at the counter when you collect your order.|Betaal contant aan de toonbank bij het afhalen.|Pague en efectivo en el mostrador al recoger su pedido.|ادفع نقدًا عند الصندوق عند استلام طلبك.
Faites glisser pour voir toutes les catégories=Swipe to see all categories|Veeg om alle categorieën te zien|Desliza para ver todas las categorías|مرّر لرؤية كل الفئات
Copier l’IBAN=Copy IBAN|IBAN kopiëren|Copiar IBAN|نسخ IBAN
Total=Total|Totaal|Total|المجموع
Envoyer en cuisine=Send to the kitchen|Naar de keuken sturen|Enviar a cocina|إرسال إلى المطبخ
Envoyer sur WhatsApp=Send on WhatsApp|Verstuur via WhatsApp|Enviar por WhatsApp|إرسال عبر واتساب
Vider=Clear|Leegmaken|Vaciar|إفراغ
Modifier=Edit|Wijzigen|Modificar|تعديل
Suivant=Next|Volgende|Siguiente|التالي
Garniture=Toppings|Garnering|Guarnición|الإضافات
Boisson=Drink|Drank|Bebida|مشروب
Sans sauce=No sauce|Zonder saus|Sin salsa|بدون صلصة
Sans crudités=No veggies|Zonder groenten|Sin verduras|بدون خضار
Toutes les crudités=All veggies|Alle groenten|Todas las verduras|كل الخضار
Choisissez vos crudités=Choose your veggies|Kies uw groenten|Elige tus verduras|اختر خضارك
Choisissez vos sauces=Choose your sauces|Kies uw sauzen|Elige tus salsas|اختر صلصاتك
Une envie en plus ?=Something extra?|Nog iets extra?|¿Algo más?|هل تريد شيئًا إضافيًا؟
Choisissez votre boisson=Choose your drink|Kies uw drank|Elige tu bebida|اختر مشروبك
Boisson incluse dans le menu=Drink included in the menu|Drank inbegrepen in het menu|Bebida incluida en el menú|المشروب مشمول في الوجبة
Ajouté à votre commande=Added to your order|Toegevoegd aan uw bestelling|Añadido a tu pedido|تمت الإضافة إلى طلبك
Ajoutez un plat pour commencer=Add a dish to start|Voeg een gerecht toe om te beginnen|Añade un plato para empezar|أضف طبقًا للبدء
Commande copiée=Order copied|Bestelling gekopieerd|Pedido copiado|تم نسخ الطلب
Sur commande=On order|Op bestelling|Por encargo|عند الطلب
Accompagnement de nos plats : salade composée, frites, sauces=Served with: mixed salad, fries, sauces|Met: gemengde salade, frietjes, sauzen|Acompañamiento: ensalada, patatas fritas, salsas|مع: سلطة مشكلة وبطاطس وصلصات
Accompagnement de nos assiettes : salade composée, frites, sauces=Plates served with: mixed salad, fries, sauces|Borden met: gemengde salade, frietjes, sauzen|Platos con: ensalada, patatas fritas, salsas|الأطباق مع: سلطة مشكلة وبطاطس وصلصات
Les plus commandés=Most ordered|Meest besteld|Los más pedidos|الأكثر طلبًا
Ouvert maintenant=Open now|Nu open|Abierto ahora|مفتوح الآن
Fermé=Closed|Gesloten|Cerrado|مغلق
Ferme à=Closes at|Sluit om|Cierra a las|يغلق الساعة
Ouvre à=Opens at|Opent om|Abre a las|يفتح الساعة
Carte de fidélité=Loyalty card|Spaarkaart|Tarjeta de fidelidad|بطاقة الولاء
Refaire ma dernière commande=Repeat my last order|Mijn laatste bestelling herhalen|Repetir mi último pedido|أعد طلبي الأخير
Laisser un avis Google=Leave a Google review|Laat een Google-review achter|Dejar una reseña en Google|اترك تقييمًا على Google
Avis de nos clients=Customer reviews|Klantenreviews|Opiniones de clientes|آراء عملائنا
article(s)=items|artikelen|artículos|عناصر
Dürüms=||| دوروم
Sandwichs=Sandwiches|Broodjes|Bocadillos|ساندويتشات
Panini=|||بانيني
Tacos=|||تاكوس
Kapsalon=|||كابسالون
Menus=Menus|Menu's|Menús|وجبات
Bicky=|||بيكي
Assiettes=Plates|Borden|Platos|أطباق
Grillades=Grills|Grillades|Parrilladas|مشاوي
Salades=Salads|Salades|Ensaladas|سلطات
Spécialités=Specialties|Specialiteiten|Especialidades|تخصصاتنا
Frites & plus=Fries & more|Frietjes & meer|Patatas y más|بطاطس وأكثر
Sauces=Sauces|Sauzen|Salsas|صلصات
Suppléments=Extras|Extra's|Extras|إضافات
Boissons=Drinks|Dranken|Bebidas|مشروبات
Desserts=Desserts|Desserts|Postres|حلويات
Lundi=Monday|Maandag|Lunes|الاثنين
Mardi=Tuesday|Dinsdag|Martes|الثلاثاء
Mercredi=Wednesday|Woensdag|Miércoles|الأربعاء
Jeudi=Thursday|Donderdag|Jueves|الخميس
Vendredi=Friday|Vrijdag|Viernes|الجمعة
Samedi=Saturday|Zaterdag|Sábado|السبت
Dimanche=Sunday|Zondag|Domingo|الأحد
Horaires=Opening hours|Openingsuren|Horario|ساعات العمل
Ouvre demain à=Opens tomorrow at|Opent morgen om|Abre mañana a las|يفتح غدًا الساعة
Merci pour votre commande !=Thank you for your order!|Bedankt voor uw bestelling!|¡Gracias por tu pedido!|شكرًا على طلبك!
Un petit avis Google nous aide beaucoup=A quick Google review helps us a lot|Een korte Google-review helpt ons enorm|Una reseña en Google nos ayuda mucho|تقييم قصير على Google يساعدنا كثيرًا
Plus tard=Later|Later|Más tarde|لاحقًا
Avis Google=Google review|Google-review|Reseña Google|تقييم Google
Voir les avis Google=See Google reviews|Bekijk de Google-reviews|Ver reseñas de Google|عرض تقييمات Google`;
const TT=`thé à la menthe=mint tea|muntthee|té de menta|شاي بالنعناع
café au lait=coffee with milk|koffie verkeerd|café con leche|قهوة بالحليب
café noir=black coffee|zwarte koffie|café solo|قهوة سوداء
tiramisu maison=homemade tiramisu|huisgemaakte tiramisu|tiramisú casero|تيراميسو منزلي
pâtisserie marocaine=Moroccan pastry|Marokkaans gebak|pastelería marroquí|معجنات مغربية
dame blanche=|||دام بلانش
viande au choix=meat of your choice|vlees naar keuze|carne a elegir|لحم حسب الاختيار
menu enfant=kids menu|kindermenu|menú infantil|وجبة الأطفال
côte d’agneau=lamb chop|lamskotelet|chuleta de cordero|ضلع خروف
poulet pané=breaded chicken|gepaneerde kip|pollo empanado|دجاج مقرمش
poulet croque=crispy chicken|krokante kip|pollo crujiente|دجاج مقرمش
ailes de poulet=chicken wings|kippenvleugels|alitas de pollo|أجنحة الدجاج
bouchettes viande=meat bites|vleeshapjes|bocados de carne|لقيمات اللحم
grillade maison=house grill|huisgrill|parrillada de la casa|مشويات البيت
grillade du chef=chef’s grill|chefsgrill|parrillada del chef|مشويات الشيف
grillade pacha=pasha grill|pasjagrill|parrillada pachá|مشويات الباشا
grillade=grill|grillade|parrillada|مشويات
meze maison=house meze|huismeze|mezze de la casa|مزة البيت
extra sauce=extra sauce|extra saus|salsa extra|صلصة إضافية
poulet=chicken|kip|pollo|دجاج
viande=meat|vlees|carne|لحم
dinde=turkey|kalkoen|pavo|ديك رومي
poisson=fish|vis|pescado|سمك
foie=liver|lever|hígado|كبد
mixte=mixed|gemengd|mixto|مشكل
maison=house|huis|de la casa|البيت
frites=fries|frietjes|patatas fritas|بطاطس
petite=small|klein|pequeña|صغيرة
moyenne=medium|medium|mediana|وسط
grande=large|groot|grande|كبيرة
brochettes=skewers|spiesjes|brochetas|أسياخ
agneau=lamb|lam|cordero|خروف
pruneaux=prunes|pruimen|ciruelas|برقوق
légumes=vegetables|groenten|verduras|خضار
citron=lemon|citroen|limón|ليمون
olives=olives|olijven|aceitunas|زيتون
couscous=|||كسكس
tajine=|||طاجين
aux=with|met|con|مع
softs=soft drinks|frisdranken|refrescos|مشروبات غازية
eau=water|water|agua|ماء
chawarma=|||شاورما
kefta=|||كفتة
merguez=|||مرقاز
hamburger=|||همبرغر
tenders=|||تندرز
fallafels=|||فلافل
falafels=|||فلافل
kebda=|||كبدة
fish=|||سمك
pita=|||بيتا
dürüm=|||دوروم
sandwich=sandwich|broodje|bocadillo|ساندويتش
assiette=plate|bord|plato|طبق
menu=menu|menu|menú|وجبة
panini=|||بانيني
tacos=|||تاكوس
kapsalon=|||كابسالون
bicky=|||بيكي`;
const LGS=[['fr','FR'],['en','EN'],['nl','NL'],['es','ES'],['ar','عر']],TR={en:{},nl:{},es:{},ar:{}},TW={en:[],nl:[],es:[],ar:[]},LK2=['en','nl','es','ar'];
const pz=(t,f)=>t.split('\n').forEach(l=>{const i=l.indexOf('=');if(i<0)return;const k=l.slice(0,i),v=l.slice(i+1).split('|');LK2.forEach((g,j)=>{if(v[j]&&v[j].trim())f(g,k,v[j].trim())})});
pz(TX,(g,k,v)=>TR[g][k]=v);pz(TT,(g,k,v)=>TW[g].push([k,v]));LK2.forEach(g=>TW[g].sort((a,b)=>b[0].length-a[0].length));
let LG='fr';try{LG=localStorage.getItem('hlg')||((navigator.language||'fr').slice(0,2))}catch(e){}if(!LGS.some(x=>x[0]===LG))LG='fr';
document.documentElement.lang=LG;if(LG==='ar')document.documentElement.dir='rtl';
$('#lg').innerHTML=LGS.map(x=>'<button class="'+(x[0]===LG?'on':'')+'" data-x="lang|'+x[0]+'">'+x[1]+'</button>').join('');
A.lang=l=>{try{localStorage.setItem('hlg',l)}catch(e){}location.reload()};
const wt=(t,g)=>{let o=t;try{for(const[k,v]of TW[g])o=o.replace(new RegExp('(?<![\\p{L}])'+k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?![\\p{L}])','giu'),m=>m[0]!==m[0].toLowerCase()?v[0].toUpperCase()+v.slice(1):v)}catch(e){}return o};
const ER=(()=>{try{return new RegExp('^([^\\p{L}\\d(]+)\\s(.+)$','u')}catch(e){return/^(\S+)\s(.+)$/}})();
function trn(root){if(LG==='fr')return;const T=TR[LG],w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),ns=[];while(w.nextNode())ns.push(w.currentNode);
ns.forEach(n=>{const p=n.parentElement;if(!p||/^(SCRIPT|STYLE|TEXTAREA)$/.test(p.tagName)||p.closest('#kt,#dt'))return;const t=n.nodeValue,k=t.trim();if(!k)return;let v=T[k];
if(v==null){const a=/^(\d+) articles?$/.exec(k),m=ER.exec(k);if(a)v=a[1]+' '+T['article(s)'];else if(m&&T[m[2]])v=m[1]+' '+T[m[2]];else if(p.closest('.it b,.pc b,.th h3,.ot b,.ln>span,.lbt'))v=wt(k,LG)}
if(v!=null&&v!==k)n.nodeValue=t.replace(k,v)});
if(root.querySelectorAll)root.querySelectorAll('[placeholder]').forEach(e=>{const v=T[e.getAttribute('placeholder')];if(v)e.setAttribute('placeholder',v)})}
if(LG!=='fr'){trn(document.body);new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===3)trn(n.parentNode);else if(n.nodeType===1)trn(n)}))).observe(document.body,{childList:true,subtree:true})}
