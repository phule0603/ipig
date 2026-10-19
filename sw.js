// Lưu sẵn giao diện app để mở được cả khi mất mạng.
// Luôn thử tải bản mới từ mạng trước, mất mạng mới dùng bản đã lưu.
const CACHE = "thuchi-v5";
const SHELL = ["./", "./index.html", "./config.js", "./manifest.webmanifest", "./icon-pig-180.png"];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  // Chỉ lưu file của app và thư viện Firebase; dữ liệu Firestore tự lo phần offline.
  if (url.origin !== location.origin && url.host !== "www.gstatic.com") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
