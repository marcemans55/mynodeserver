var express = require('express');
var routes = express.Router();

var mijnObject = {
	tekst: 'Hallo'
}

routes.get('/hello', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json(mijnObject);
});

routes.get('/goodbye', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json({tekst: 'Tot ziens'});
});

module.exports = routes;