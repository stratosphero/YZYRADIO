const CACHE_NAME = "offline-v1";
const ASSETS = [
  "./",
  "index.html",
  "style.css",
  "main.js",
  "chakras.mp3",
  "crazy-life.mp3",
  "downtown.mp3",
  "so-soon.mp3",
  "love-love-love.mp3",
  "showtime.mp3",
  "lonely.mp3",
  "fall-into-you.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});


self.addEventListener("fetch", event => {
  let req = event.request;


  if (req.mode === "navigate") {
    req = new Request("index.html");
  }

  event.respondWith(
    caches.match(req).then(res => {
      return res || fetch(event.request);
    })
  );
});
