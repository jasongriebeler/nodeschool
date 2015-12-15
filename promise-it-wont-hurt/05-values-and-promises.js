var q = require('q');

var defer = q.defer();

var attachTitle = function(input){
	return "DR. " + input;
}

defer.promise.then(attachTitle).then(console.log);
defer.resolve("MANHATTAN");