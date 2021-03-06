const filesToCache = [
	'/',
	'/index.html',
	'/manifest.json',
	'/mini-dark.min.css',
	'https://d33wubrfki0l68.cloudfront.net/css/1465af533389dc07c62369d47fe3e9f717222608/mini-dark.min.css',
	'https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js',
	'https://unpkg.com/axios@0.16.2/dist/axios.min.js',
	'https://d33wubrfki0l68.cloudfront.net/bundles/f1ef12beff9e925aa274728df660cbcb6349e103.js',
	'/app.min.js',
	'/call-sw.js',
	'/sw.js',
	'/images/favicon-32x32.png',
	'https://d33wubrfki0l68.cloudfront.net/f02bb05dcb421a0e82065b9bd8da8f298e5f1ac8/5fd2b/images/favicon-32x32.png',
	'/images/android-icon-192x192.png',
	'/images/logo.png'
]

self.addEventListener('install', function(event) {
	self.skipWaiting()
	event.waitUntil(
		caches.open('v1').then(function(cache) {
			return cache.addAll(filesToCache)
		})
	)
})

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request)
		})
	)
})
