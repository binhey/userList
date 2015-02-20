'use strict';
var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var myService=require('./services/myService');

var app = express();

app.use(express.static(path.join(__dirname, '/www')));

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

app.use('/services/myService', myService);

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'));

console.log("Server started");