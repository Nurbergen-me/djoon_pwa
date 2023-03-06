importScripts("/djoon_pwa/precache-manifest.395d0083913552f12a95876eb6603117.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Inside src/service-worker.js
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
