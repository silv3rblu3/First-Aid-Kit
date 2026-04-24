// 1. Define a name for your cache
const CACHE_NAME = 'first-aid-app-v1';

// 2. List every single file your app needs to run offline
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// 3. The Install Event: This fires the very first time the browser sees this service worker.
self.addEventListener('install', (event) => {
    // We tell the browser to wait until the caching is completely finished before considering the install successful.
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                // This downloads and saves all the files listed in the array above.
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// 4. The Activate Event: This fires when the service worker starts up. 
// It's used for cleanup, ensuring you don't have old versions of files taking up space.
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // If the cache name doesn't match our current version, delete it.
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 5. The Fetch Event: This is the proxy. Every time your app asks for a file or an image, this event intercepts it.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        // First, we check if the requested file is already saved in our cache.
        caches.match(event.request)
            .then((response) => {
                // If it IS in the cache, we return the cached version immediately (offline support).
                if (response) {
                    return response;
                }
                // If it is NOT in the cache, we go out to the network and fetch it normally.
                return fetch(event.request);
            })
    );
});