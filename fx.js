/* Haythem Food — effets & confort client (chargé après app.js, ne modifie pas sa logique) */
(function(){
  'use strict';
  var $=function(s,r){return (r||document).querySelector(s)};
  var LOGO=window.HF_LOGO||'logo.webp';
  var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var special=function(){return !!window.HF_SCREEN||location.hash==='#cuisine'||location.hash==='#file'};
  var TX={
    nores:{fr:'Aucun plat trouvé. Essayez un autre mot.',en:'No dish found. Try another word.',nl:'Geen gerecht gevonden. Probeer een ander woord.'},
    top:{fr:'Remonter',en:'Back to top',nl:'Naar boven'}
  };
  var L=function(k){var l=(typeof lang!=='undefined'&&lang)||'fr';return TX[k][l]||TX[k].fr};

  /* 1. Écran d'accueil avec le logo (1 fois par session, jamais sur cuisine / écran clients) */
  try{
    if(!special()&&!sessionStorage.getItem('hfsp')){
      sessionStorage.setItem('hfsp','1');
      var sp=document.createElement('div');sp.id='splash';
      sp.innerHTML='<img src="'+LOGO+'" alt=""><i></i>';
      document.body.appendChild(sp);
      var rm=function(){sp.classList.add('out');setTimeout(function(){sp.remove()},700)};
      sp.addEventListener('click',rm);setTimeout(rm,RM?300:1900);
    }
  }catch(e){}

  /* 2. Fond animé : poussière d'or + halos (canvas léger, en pause si l'onglet est caché) */
  if(!RM){
    var cv=document.createElement('canvas');cv.id='fx';cv.setAttribute('aria-hidden','true');
    document.body.insertBefore(cv,document.body.firstChild);
    var cx=cv.getContext('2d'),W=0,H=0,P=[],run=true,dpr=Math.min(window.devicePixelRatio||1,1.5);
    var size=function(){W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
      var n=Math.max(18,Math.min(48,Math.round(W/22)));
      while(P.length<n)P.push(mk(true));P.length=n};
    var mk=function(init){var big=Math.random()<.18;return{x:Math.random()*W,y:init?Math.random()*H:H+20,
      r:big?2.4+Math.random()*3.2:.7+Math.random()*1.5,vy:-(.12+Math.random()*.38),vx:(Math.random()-.5)*.18,
      a:big?.10+Math.random()*.12:.25+Math.random()*.45,t:Math.random()*6.28,big:big}};
    var frame=function(){
      if(!run)return;cx.clearRect(0,0,W,H);
      for(var i=0;i<P.length;i++){var p=P[i];p.t+=.012;p.x+=p.vx+Math.sin(p.t)*.15;p.y+=p.vy;
        if(p.y<-20||p.x<-20||p.x>W+20){P[i]=mk(false);continue}
        var tw=.6+.4*Math.sin(p.t*2.2),g=cx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*(p.big?5:3));
        g.addColorStop(0,'rgba(253,240,166,'+(p.a*tw)+')');g.addColorStop(.4,'rgba(212,175,55,'+(p.a*tw*.5)+')');g.addColorStop(1,'rgba(212,175,55,0)');
        cx.fillStyle=g;cx.beginPath();cx.arc(p.x,p.y,p.r*(p.big?5:3),0,6.283);cx.fill()}
      requestAnimationFrame(frame)};
    size();addEventListener('resize',size);
    document.addEventListener('visibilitychange',function(){run=!document.hidden;if(run)requestAnimationFrame(frame)});
    requestAnimationFrame(frame);
  }

  /* 3. Mini-logo dans la barre collante (apparaît quand le héros sort de l'écran) */
  var nav=$('.nav'),q=$('#q'),hero=$('.hero');
  if(nav&&q&&hero){
    var row=document.createElement('div');row.className='navrow';
    var mini=document.createElement('img');mini.className='mini';mini.src=LOGO;mini.alt='Haythem Food';
    mini.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'})});
    nav.insertBefore(row,nav.firstChild);row.appendChild(mini);row.appendChild(q);
    if('IntersectionObserver'in window){
      new IntersectionObserver(function(e){nav.classList.toggle('stuck',!e[0].isIntersecting)},{rootMargin:'-60px 0px 0px 0px'}).observe(hero);
    }
  }

  /* 4. Logo dans le pied de page */
  var ft=$('.ft');
  if(ft&&!$('.flogo')){var fi=document.createElement('img');fi.className='flogo';fi.src=LOGO;fi.alt='Haythem Food';fi.loading='lazy';ft.insertBefore(fi,ft.firstChild)}

  /* 5. Catégorie active qui suit le défilement + puces qui se centrent */
  var tick=false,lastK='';
  var spy=function(){
    tick=false;var secs=document.querySelectorAll('main section:not([hidden])');if(!secs.length)return;
    var y=(nav?nav.getBoundingClientRect().bottom:90)+30,cur=secs[0];
    for(var i=0;i<secs.length;i++){if(secs[i].getBoundingClientRect().top<=y+4)cur=secs[i]}
    if(cur.id===lastK)return;lastK=cur.id;
    var chips=document.querySelectorAll('.chip[data-k]'),on=null;
    chips.forEach(function(c){var a=c.dataset.k===cur.id;c.classList.toggle('on',a);if(a)on=c});
    var box=$('#chips');
    if(on&&box){box.scrollTo({left:on.offsetLeft-(box.clientWidth-on.offsetWidth)/2,behavior:'smooth'})}
  };
  addEventListener('scroll',function(){
    if(!tick){tick=true;requestAnimationFrame(spy)}
    var b=$('#totop');if(b)b.classList.toggle('on',scrollY>700);
  },{passive:true});

  /* 6. Bouton « remonter » */
  var tb=document.createElement('button');tb.id='totop';tb.type='button';tb.setAttribute('aria-label',L('top'));tb.textContent='↑';
  tb.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'})});document.body.appendChild(tb);

  /* 7. Recherche : message « aucun résultat » + clavier qui se ferme sur Entrée */
  if(q){
    var nr=document.createElement('p');nr.id='nores';nr.hidden=true;var main=$('#carte');if(main)main.parentNode.insertBefore(nr,main.nextSibling);
    q.addEventListener('input',function(){
      var any=false;document.querySelectorAll('main section').forEach(function(s){if(!s.hidden)any=true});
      nr.textContent=L('nores');nr.hidden=any||!q.value.trim();lastK='';spy();
    });
    q.addEventListener('keydown',function(e){if(e.key==='Enter')q.blur()});
  }

  /* 8. Petit retour tactile à l'ajout d'un plat */
  document.addEventListener('click',function(e){
    var x=e.target.closest&&e.target.closest('[data-x]');
    if(x&&navigator.vibrate&&/^(inc|done|dec)/.test(x.dataset.x))navigator.vibrate(10);
  },true);

  /* 9. Sécurité logo : si l'image configurée est introuvable ou vide, on remet logo.webp */
  ['.hero .logo','.mini','.flogo','#splash img'].forEach(function(sel){
    var im=$(sel);if(!im)return;
    var fix=function(){if(!im.dataset.fb){im.dataset.fb='1';im.src=LOGO}};
    im.addEventListener('error',fix);
    if(im.complete&&im.naturalWidth===0&&im.getAttribute('src'))fix();
  });
})();
