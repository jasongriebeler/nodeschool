var fs = require('fs')

var count = 0

var array = fs.readFileSync(process.argv[2]).toString().split('\n')
for(var k=0; k < array.length; k++)
	count++

console.log(count - 1)