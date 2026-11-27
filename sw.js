// Haythem Food : cache hors-ligne léger.
// Pages, scripts et styles : réseau d'abord (les mises à jour arrivent tout de suite).
// Photos et icônes : cache d'abord (chargement instantané).
// Firebase et les autres sites ne passent jamais par le cache.
const V = 'hf-v21', PH = 'hf-photos-v2';
const CORE = ['./', 'index.html', 'app.js', 'lang.js', 'style.css', 'fx.js', 'plus.js', 'photos-borne.js', 'manifest.webmanifest', 'cuisine/', 'file/'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V && k !== PH).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;
  if (/\/(photos|icons)\//.test(u.pathname)) {
    e.respondWith(caches.open(PH).then(c => c.match(r).then(hit => hit || fetch(r).then(res => {
      if (res.ok) c.put(r, res.clone());
      return res;
    }))));
    return;
  }
  e.respondWith(fetch(r, { cache: 'no-cache' }).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
    return res;
  }).catch(() => caches.match(r).then(hit => hit || caches.match(/^\/(cuisine|file)\//.test(u.pathname) ? u.pathname.split('/')[1] + '/' : 'index.html'))));
});

/* Notifications de l'écran cuisine : une nouvelle commande sonne même écran éteint ou page fermée. */
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { t: e.data ? e.data.text() : '' }; }
  /* client : « votre commande est prête » */
  if (d.c) {
    e.waitUntil(self.registration.showNotification(d.t || '✅ Votre commande est prête !', {
      body: d.b || '', tag: 'hfc-' + (d.k || ''), renotify: true, requireInteraction: true,
      vibrate: [300, 120, 300, 120, 600], icon: '/icons/icon-192.png', badge: '/icons/icon-192.png', data: { url: '/' }
    }));
    return;
  }
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    /* écran cuisine déjà ouvert et allumé : il annonce déjà la commande à voix haute, la notification reste discrète */
    const vis = cs.some(c => c.visibilityState === 'visible' && /\/cuisine\//.test(c.url));
    return self.registration.showNotification(d.t || '🔔 Nouvelle commande', {
      body: d.b || '', tag: 'hf-' + (d.k || Date.now()), renotify: true, requireInteraction: !vis, silent: vis,
      vibrate: [400, 150, 400, 150, 800], icon: '/icons/cuisine-192.png?v=3', badge: '/icons/cuisine-192.png?v=3',
      data: { url: '/cuisine/' }
    });
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/cuisine/';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    const c = url === '/' ? cs.find(x => !/\/(cuisine|file)\//.test(x.url)) : cs.find(x => /\/cuisine\//.test(x.url));
    return c ? c.focus() : self.clients.openWindow(url);
  }));
});
