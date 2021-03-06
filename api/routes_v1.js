var express = require('express');
var routes = express.Router();

var mijnArray = []

routes.get('/hello', function(req, res){
	res.status(200);
	res.json(mijnArray);
});

routes.post('/hello', function(req, res){
	var body = req.body;
	
	console.dir('index:' + body.index + ' item:' + body.item);
	mijnArray[body.index] = body.item;

	res.status(200);
	res.json({
		index : body.index,
		item : mijnArray[body.index]
	});
});

routes.put('/hello', function(req, res){
	var body = req.body;
	
	console.dir(body.item);
	mijnArray.push(body.item);
	var index = mijnArray.indexOf(body.item);
	
	res.status(200);
	res.json({
		index : index,
		item : mijnArray[index]
	});
});

routes.delete('/hello', function(req, res){
	var body = req.body;
	
	console.dir(body.index);
	var delItem = mijnArray.splice(body.index, 1);
	
	res.status(200);
	res.json({
		index : body.index,
		item : delItem[0]
	});
});

routes.get('/hello/error', function (req, res, next) {
	next('HIER TREEDT EEN ERROR OP');
});

routes.get('/hello/*', function (req, res, next) {
	res.status(404);
	res.json({
		message: 'Deze endpoint bestaat nog niet'
	});
	res.end();
});

module.exports = routes;