const CACHE_NAME = 'sanfracache'
const URLS = [
  '/',
  '/bundle.js',
  '/index.html',
  '/main.css',
  '/assets/images/arkanoid.png',
  '/assets/images/avatar.png',
  '/assets/images/dog.jpg',
  '/assets/images/notbad.jpg',
  '/assets/images/error.jpg',

  '/assets/fonts/81d3c5139883841834aa2ac459370dc2.woff2',
  '/assets/fonts/98bad1928614d31281c78c122e584861.woff',
  '/assets/fonts/NotoSans.woff',
  '/assets/fonts/NotoSans.woff2',
]

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(URLS))
      .catch((err) => {
        console.log(err)
      })
  )
})

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      if (resp) {
        return resp
      }

      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    })
  )
})
