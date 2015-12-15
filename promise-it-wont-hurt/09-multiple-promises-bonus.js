var q = require('q');

var promise1 = q.defer();
var promise2 = q.defer();

var counter = 0;

var prom1Result;
var prom2Result;

promise1.promise.then(function(data){
	prom1Result = data;
	counter++;
	if(counter == 2)
		allDefer.resolve([prom1Result, prom2Result])
});

promise2.promise.then(function(data){
	prom2Result = data;
	counter++;
	if(counter == 2)
		allDefer.resolve([prom1Result, prom2Result])
});

q.all([promise1.promise, promise2.promise]).then(console.log)

setTimeout(function(){
	promise1.resolve("PROMISES");
	promise2.resolve("FTW");
}, 200);