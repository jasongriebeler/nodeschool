var sum = 0;
process.argv.forEach(function(val, index, array){
	sum = sum + (parseInt(val) || 0)
})
console.log(sum)
