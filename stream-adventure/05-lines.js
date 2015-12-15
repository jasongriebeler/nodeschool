var split = require('split');
var through = require('through');

var lineCount = 1;
process.stdin
	.pipe(split())
	.pipe(through(function (line){
		if(lineCount % 2 == 0)
			this.queue(line.toUpperCase() + "\n")
		else
			this.queue(line.toLowerCase() + "\n")
		lineCount++;
	}))
	.pipe(process.stdout)