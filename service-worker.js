importScripts("/precache-manifest.68851ef22065e2a84b3da171bfd2a2d1.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Inside src/service-worker.js
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
