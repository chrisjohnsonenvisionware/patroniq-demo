// PatronIQ patron-app service worker (workbench/demo). Scoped to /explorer/. Caches the
// offline shell so the installed PWA opens without network; data.js + qr.js are part of the
// shell. Network-first for navigations, cache-first for static assets.
const CACHE = "patroniq-explorer-v1";
const SHELL = [
  "index.html",
  "manifest.webmanifest",
  "icon.svg",
  "../workbench-data/pioneer-data.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))),
  );
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => { caches.open(CACHE).then((c) => c.put("index.html", res.clone())).catch(() => {}); return res; })
        .catch(() => caches.match("index.html").then((r) => r ?? Response.error())),
    );
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => hit ?? fetch(req).then((res) => {
      caches.open(CACHE).then((c) => c.put(req, res.clone())).catch(() => {});
      return res;
    }).catch(() => Response.error())),
  );
});
