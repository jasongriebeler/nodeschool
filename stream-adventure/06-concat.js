var concat = require('concat-stream')
var split = require("split")

var reverse = function(data){
	return console.log(data.toString().split('').reverse().join(''));
}

process.stdin.pipe(concat(reverse));