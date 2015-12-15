var q = require('q');

var promise1 = q.defer();
var promise2 = q.defer();

var all = function(prom1, prom2){
	var allDefer = q.defer();
	var counter = 0;

	var prom1Result;
	var prom2Result;

	prom1.then(function(data){
		prom1Result = data;
		counter++;
		if(counter == 2)
			allDefer.resolve([prom1Result, prom2Result])
	});

	prom2.then(function(data){
		prom2Result = data;
		counter++;
		if(counter == 2)
			allDefer.resolve([prom1Result, prom2Result])
	});

	return allDefer.promise
}


all(promise1.promise, promise2.promise).then(console.log)

setTimeout(function(){
	promise1.resolve("PROMISES");
	promise2.resolve("FTW");
}, 200);