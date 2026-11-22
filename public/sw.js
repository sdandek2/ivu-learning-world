/* IVU Learning World service worker — precaches the whole app (shell + curriculum) for offline use.
   The precache list and cache version are filled in at build time by vite.config.ts. */
const CACHE = '__CACHE_VERSION__';
const PRECACHE = __PRECACHE__;
/* Rendered narration lives in its own cache so it survives app updates (it is large and only
   changes when the voice is re-rendered; files are named by line ID, so stale ones are simply unused). */
const NARRATION_CACHE = 'ivu-narration-v1';
const isNarration = (url) => /\/narration\/rendered(-local)?\//.test(url.pathname);

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', ...PRECACHE])).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== NARRATION_CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(isNarration(new URL(req.url)) ? NARRATION_CACHE : CACHE).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()));
    }),
  );
});
