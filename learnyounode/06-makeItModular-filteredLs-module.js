var fs = require('fs')
var path = require('path')

module.exports= function (dir, extension, callback){
	fs.readdir(dir, function(err, list){
		if(err)
			return callback(err)
		result = []
		for(var k=0; k < list.length; k++){
			var fileExtension = path.extname(list[k]).substring(1)
			if(fileExtension == extension)
				result.push(list[k])
		}
		callback(null, result)
	})
}