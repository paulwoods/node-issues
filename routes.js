/* 
 * This module defines all of the url routes.
*/

var express = require('express')

module.exports = function(app) {

	app.get('/', function(req, res, next) {
		res.render('data', {title:''});
	});

}

