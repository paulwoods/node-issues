
var express = require('express')

module.exports = function(parent, options) {

	var app = express();

	app.get('/', function(req, res, next) {
		res.render('data', {title:'Paul Woods'});
	});


	parent.use(app)
}

