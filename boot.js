
var express = require('express')

module.exports = function(app, options) {

	app.get('/', function(req, res, next) {
		res.render('data', {title:''});
	});

}

