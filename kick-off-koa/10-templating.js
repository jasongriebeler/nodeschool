var koa = require('koa')
var ejs = require('ejs')

var app = koa();

var views = require('co-views');

var render = views(__dirname + '/views', {
	ext: 'ejs'
});

app.use(function* (next) {
	if(this.path !== "/")
		yield next;

	var user = {
      name: {
        first: 'Tobi',
        last: 'Holowaychuk'
      },
      species: 'ferret',
      age: 3
    };

	this.body = yield render('10-user', {user: user});

});

app.listen(process.argv[2]);