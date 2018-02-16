‘use strict’;
importScripts(‘sw-toolbox.js’);
toolbox.precache([“index.html”]);
toolbox.router.get(‘/iconka/*’, toolbox.cacheFirst);
toolbox.router.get(‘/*’, toolbox.networkFirst, {
networkTimeoutSeconds: 5});
