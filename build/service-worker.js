"use strict";var precacheConfig=[["/Hangman-Exercise/index.html","406fd8d5f63bbe7c170ba2433d872b2a"],["/Hangman-Exercise/static/js/main.da35ef12.js","31cb0a500da7a0dd1d67df126c9922c1"],["/Hangman-Exercise/static/media/0.db9097e8.jpg","db9097e874e68b7ed7115ff05ffcb880"],["/Hangman-Exercise/static/media/1.fbff4784.jpg","fbff4784004cc97463c883477a0090d1"],["/Hangman-Exercise/static/media/2.c4ea9528.jpg","c4ea9528b67823bd94c90de3d97d75a3"],["/Hangman-Exercise/static/media/3.62a781c8.jpg","62a781c89c590abb27129638d9d18c4d"],["/Hangman-Exercise/static/media/4.0f8ca81e.jpg","0f8ca81ee9f7b2bc27102267f9e23864"],["/Hangman-Exercise/static/media/5.1b557aa7.jpg","1b557aa7ccfa88b6b3f4723c27d3f2d6"],["/Hangman-Exercise/static/media/6.c80394c2.jpg","c80394c2a96ffad09a9df4e4815745f2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=n),e.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){e=new URL(e);return a&&e.pathname.match(a)||(e.search+=(e.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),e.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],e=e[1],n=new URL(n,self.location),e=createCacheKey(n,hashParamName,e,/\.\w{8}\./);return[n.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){var e;if(!t.has(n))return e=new Request(n,{credentials:"same-origin"}),fetch(e).then(function(e){if(e.ok)return cleanResponse(e).then(function(e){return a.put(n,e)});throw new Error("Request for "+n+" returned a response with status "+e.status)})}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){var t,e,a;"GET"===n.request.method&&(t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html",(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t)),a="/Hangman-Exercise/index.html",!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)})))});