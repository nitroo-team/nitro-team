
const CACHE_NAME = 'Nitro-team';
const staticCache = [
    '/',
    'index.html'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(staticCache))
    )
});

self.addEventListener('fetch', e => {
    if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') {
        e.waitUntil(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(e.request).then(res => {
                    const updateRes = fetch(e.request).then(newRes => {
                        cache.put(e.request, newRes.clone());
                        return newRes;
                    })

                    return res || updateRes;
                })
            })
        )
    }
});

self.addEventListener('activate', e => {
    const cacheCleaned = caches.keys().then((keys) => {
        keys.forEach(key => {
            if (key !== CACHE_NAME) return caches.delete(key);
        })
    })

    e.waitUntil(cacheCleaned);
});