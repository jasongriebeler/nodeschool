var koa = require('koa');
var session = require('koa-session');

var app = koa();

app.keys = ['secret', 'keys'];

app.use(session());

app.use(function* (next) {
	if(this.path !== "/")
		yield next;

	var views = (this.session.views + 1) || 1
	this.session.views = views
	this.body = views + " views"
});

app.listen(process.argv[2]);