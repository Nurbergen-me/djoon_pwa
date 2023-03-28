importScripts("/djoon_pwa/precache-manifest.80ec3ba38485a140e21cb44fbcc37814.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


// Inside src/service-worker.js
self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
    debug: true
})

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


// workbox.routing.registerRoute(
//     new RegExp("https:fonts.(?:googleapis|gstatis).com/(.*)"),
//     workbox.strategies.cacheFirst({
//         cacheName: "googleapis",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxEntries: 30
//             })
//         ],
//         method: "GET",
//         cacheableResponse: {
//             statuses: [0, 200]
//         }
//     })
// )

workbox.routing.registerRoute(
  ({url}) =>
    url.origin === 'https://api.djoon.kz',
    new workbox.strategies.NetworkFirst({
    cacheName: 'djoon-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ],
        method: "GET",
        cacheableResponse: {
            statuses: [0, 200]
        }
    })
  )
