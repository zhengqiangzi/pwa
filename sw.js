var CACHE_NAME = "a22222222";  
   var urlsToCache = [  
 
    './dist/index.css',  
    './dist/index.js',  
    './index.html',  
    './data.json',
    './1.gif',
    './2.mp4'
   ];  

self.addEventListener('install', function(event) {
		//console.log(caches.delete(CACHE_NAME))

//这里的waitUtil会在安装成功之前执行一些预装的操作，但是只建议做一些轻量级和非常重要资源的缓存，减少安装失败的概率。安装成功  
//后ServiceWorker状态会从installing变为installed   
		event.waitUntil(

	          caches.open(CACHE_NAME).then(function(cache) {

	            return cache.addAll(urlsToCache); 

		      }).then(function(){

		      		return self.skipWaiting();
		      }) 
	    )
});


self.addEventListener('fetch',function(event){

	event.respondWith(
		caches.match(event.request).then(function(response){
			if(response!=null){

				return response;
			}
			return fetch(event.request.url)
		})
	)
})


self.addEventListener('activate',function(e){

	e.waitUntil(

		caches.keys().then(function(cacheName){

			cacheName.map(function(itemName){

				if(itemName!==CACHE_NAME){

					caches.delete(itemName)
				}

			})
						
		}).then(function(){

			return self.clients.claim();
		})
	)
})

/*

var event=new ExtendableEvent("typeEvent",{myname:"zhengqiangzi"});

console.log(event)

self.addEventListener("typeEvent",function(event,value){

	console.log(arguments);

	event.waitUntil(new Promise(function(resolve,reject){

		resolve('123');

	}).then(function(data){

		return function(datas){

			console.log(datas)

		}

	}))
})

self.dispatchEvent(event)*/