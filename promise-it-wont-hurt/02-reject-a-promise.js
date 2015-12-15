var q = require('q');

var defer = q.defer();

defer.promise
	.then()
	.catch(function (error) {
    	console.log(error.message);
	})
	.done();
setTimeout(defer.reject, 300, new Error("REJECTED!"));