var koa = require('koa');
var Cookies = require('cookies')

var app = koa();

app.keys = ['secret', 'keys'];

app.use(function* (next) {
	if(this.path !== "/")
		yield next;
	var views = this.cookies.get("view", { signed: true })
	if(!views)
		views = 1;
	else
		views = parseInt(views) + 1

	this.body = views + " views"

	this.cookies.set("view", views, { signed: true });
});

app.listen(process.argv[2]);