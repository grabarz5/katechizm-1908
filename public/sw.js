importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.setConfig({
    debug: true
});

workbox.loadModule('workbox-strategies');

// workbox.precaching.precacheAndRoute([]);
workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/'),
    // new workbox.strategies.CacheFirst() //for production
    new workbox.strategies.NetworkFirst() //for dev
);

workbox.recipes.offlineFallback();

self.skipWaiting();