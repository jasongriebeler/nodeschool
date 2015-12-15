var through = require('through');

var tr = through(function(chunk){
	this.queue(chunk.toString().toUpperCase());
});

process.stdin.pipe(tr).pipe(process.stdout)