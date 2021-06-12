const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/db.js',
    '/index.js',
    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://cdn.jsdelivr.net/npm/chart.js@2.8.0',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
  ];
const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

//Install

self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
    );
    console.log('Installing to Cache');
    self.skipWaiting();
  });
  

// Activate 


self.addEventListener('activate',);


//Fetch

self.addEventListener('fetch',);

