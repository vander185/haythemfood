// Haythem Food : cache hors-ligne léger.
// Pages, scripts et styles : réseau d'abord (les mises à jour arrivent tout de suite).
// Photos et icônes : cache d'abord (chargement instantané).
// Firebase et les autres sites ne passent jamais par le cache.
const V = 'hf-v3', PH = 'hf-photos-v1';
const CORE = ['./', 'index.html', 'app.js', 'style.css', 'fx.js', 'plus.js', 'photos-borne.js', 'manifest.webmanifest'];

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
  }).catch(() => caches.match(r).then(hit => hit || caches.match('index.html'))));
});
