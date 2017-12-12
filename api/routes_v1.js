var express = require('express');
var routes = express.Router();

var mijnArray = []

routes.get('/hello', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json(mijnArray);
});

routes.post('/hello', function(req, res){
	var body = req.body;
	
	console.dir(body);
	mijnArray.push(body.item);
	
	res.contentType('application/json');
	res.status(200);
	res.json(mijnArray);
});

routes.get('/goodbye', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json({tekst: 'Goodbye'});
});

module.exports = routes;