var q = require('q');

var throwMyGod = function(){
	throw Error("OH NOES");
}

var iterate = function(obj){
	var next = obj + 1;
	console.log(next);
	return next;
}
q.fcall(iterate, 0)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(throwMyGod)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(null, console.log);
