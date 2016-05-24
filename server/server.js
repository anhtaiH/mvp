require('dotenv').load();
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/portfolio-allocator');

//Middleware for http requests to pass through
app.use(express.static(__dirname + './../client'));
app.use(bodyParser.json());

require('./routes.js')(app, express);

app.listen(3000);

module.exports = app;
