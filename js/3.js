
(function(){
const ONM={'Bancontact':'bancontact','Carte de crédit':'creditcard','Payconiq':'payconiq','Apple Pay':'applepay'},VR='Virement',OK=()=>/^https?:\/\//.test(CFG.api||'');
window.pinfo2=()=>ONM[pay]?'<p class="pi2">🔒 Vous serez redirigé vers une page sécurisée '+(pay==='Bancontact'?'pour confirmer dans l’app de votre banque':pay==='Payconiq'?'pour payer avec l’app Payconiq':pay==='Apple Pay'?'pour payer avec Apple Pay':'pour saisir votre carte')+', puis ramené ici.</p>':pay===VR?'<p class="pi2">Après validation, un QR code s’affiche : scannez-le avec l’app de votre banque, le montant est déjà rempli.</p>':null;
const done=(t,h)=>esh(t,h+'<button class="btn" data-x="shut" style="width:100%;margin-top:10px">Fermer</button>');
function qr(o,amt){
 const t=['BCD','002','1','SCT','',CFG.ben||'Haythem Food',(CFG.iban||'').replace(/\s/g,''),'EUR'+amt.toFixed(2),'','','Commande N°'+o.no].join('\n');
 const show=g=>esh('Commande N° '+o.no+' · '+eur(amt),'<div class="qrb">'+g+'</div><p class="pi2" style="text-align:center">Dans l’app de votre banque : « Scanner un QR code ». Montant et communication sont préremplis.</p><button class="btn g" data-x="cpi" style="width:100%">Copier l’IBAN</button><button class="btn" data-x="shut" style="width:100%;margin-top:8px">Fermer</button>');
 const gen=()=>{try{const q=qrcode(0,'M');q.addData(t);q.make();show(q.createSvgTag({cellSize:6,margin:2,scalable:true}))}catch(e){show('<b>'+esc(CFG.iban)+'</b>')}};
 window.qrcode?gen():Object.assign(document.head.appendChild(document.createElement('script')),{src:'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js',onload:gen,onerror:()=>show('<b>'+esc(CFG.iban)+'</b>')})}
A.gpx=()=>{const it={};for(const k in I){const x=I[k];it[k]={p:x.p,r:bReq(x)?1:0}}const ex={};EX.forEach(e=>ex[e.n]=e.p);const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify({items:it,ex,dp:DP})],{type:'application/json'}));a.download='prices.json';a.click()};
window.DEMO=()=>CFG.api==='demo'||/[?&]demo/.test(location.search);
function demo(o,amt,m){
 kup(o.id,n=>{n.pay=m+' · DÉMO'});
 const el=document.createElement('div');el.className='dm';
 const T={'Bancontact':['Bancontact','Confirmez le paiement dans l’application de votre banque.','<div class="qq" style="width:90px;height:90px"></div>','Ouvrir mon app bancaire'],
 'Carte de crédit':['Carte de crédit','Carte de test, aucun argent réel.','<input value="4242 4242 4242 4242" inputmode="numeric"><div style="display:flex;gap:8px"><input value="12 / 29"><input value="123"></div>','Payer'],
 'Payconiq':['Payconiq by Bancontact','Scannez ce code ou ouvrez l’app Payconiq.','<div class="qq"></div>','Ouvrir Payconiq'],
 'Apple Pay':['Apple Pay','Double-cliquez sur le bouton latéral pour payer.','<div style="font-size:54px;text-align:center;margin:14px">🍎</div>','Payer avec Apple Pay']}[m];
 el.innerHTML='<div class="bn">🧪 SIMULATION : aucun argent réel n’est débité</div><div class="cd"><h2>'+T[0]+'</h2><div style="opacity:.7;font-size:14px">Haythem Food · commande N° '+o.no+'</div><div class="am">'+eur(amt)+'</div><p style="margin:0 0 8px;font-size:14px">'+T[1]+'</p>'+T[2]+'<button class="ok" data-r="1">'+T[3]+' · '+eur(amt)+'</button><button class="ko" data-r="0">Simuler un échec</button><button class="ko" data-r="0" style="background:none;font-weight:400">Annuler</button></div>';
 document.body.appendChild(el);
 el.onclick=e=>{const b=e.target.closest('button');if(!b)return;const ok=b.dataset.r==='1';
  el.querySelector('.cd').innerHTML='<div class="sp"></div><p style="text-align:center">'+(ok?'Validation du paiement…':'Annulation…')+'</p>';
  setTimeout(()=>{el.remove();
   if(ok){kup(o.id,n=>{n.unpaid=0;n.paid=1});done('Paiement reçu ✓','<div style="text-align:center"><div class="no" style="display:inline-block;margin:18px 0 10px">N° '+o.no+'</div><p style="font-size:18px">Merci ! Nous préparons votre commande.</p></div>')}
   else{kup(o.id,n=>{n.pay='Espèces';n.unpaid=0});done('Paiement non effectué','<p>Votre commande N° '+o.no+' reste enregistrée : réglez-la au comptoir.</p>')}},1700)}}
const send0=A.send;
A.send=async()=>{
 if(!L.length)return;
 if(!ONM[pay]&&pay!==VR)return send0();
 const m=pay,amt=tot(),ret=location.href.split('#')[0],lines=L.map(l=>({id:l.id,q:l.q,x:l.x,b:l.b?1:0}));
 send0();const o=OR[OR.length-1];if(!o)return;
 kup(o.id,n=>{n.unpaid=1});
 if(m===VR)return qr(o,amt);
 if(DEMO())return demo(o,amt,m);
 try{const r=await fetch(CFG.api+'/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:o.id,no:o.no,lines,ret,method:ONM[m]})}).then(x=>x.json());
  if(!r.url)throw 0;localStorage.setItem('hfp',JSON.stringify({mp:r.id,o:o.id}));location.href=r.url}
 catch(e){kup(o.id,n=>{n.pay='Espèces';n.unpaid=0});done('Paiement en ligne indisponible','<p>Votre commande N° '+o.no+' est bien enregistrée : réglez-la au comptoir.</p>')}};
addEventListener('load',()=>setTimeout(async()=>{
 let h=null;try{h=JSON.parse(localStorage.getItem('hfp')||'null')}catch(e){}
 if(!h||!OK())return;const o=OR.find(x=>x.id===h.o);if(!o){localStorage.removeItem('hfp');return}
 let st='';try{st=(await fetch(CFG.api+'/status?id='+encodeURIComponent(h.mp)).then(x=>x.json())).status}catch(e){}
 if(st==='paid'){localStorage.removeItem('hfp');kup(o.id,n=>{n.unpaid=0;n.paid=1});done('Paiement reçu ✓','<div style="text-align:center"><div class="no" style="display:inline-block;margin:18px 0 10px">N° '+o.no+'</div><p style="font-size:18px">Merci ! Nous préparons votre commande.</p></div>')}
 else if(['failed','canceled','expired'].includes(st)){localStorage.removeItem('hfp');kup(o.id,n=>{n.pay='Espèces';n.unpaid=0});done('Paiement non effectué','<p>Votre commande N° '+o.no+' reste enregistrée : réglez-la au comptoir.</p>')}
 else toast('Paiement en cours de confirmation…')},900));
})();
