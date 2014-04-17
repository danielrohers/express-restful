'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs'),
    router = express.Router();

app.use(bodyParser());

// Connect to database
require('./config/database');

// models
var modelsPath = path.join(__dirname, 'app/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  require(modelsPath + '/' + file);
});

// routes
var routesPath = path.join(__dirname, 'app/routes');
fs.readdirSync(routesPath).forEach(function (file) {
  require(routesPath + '/' + file)(router);
});
app.use(router);

// set our port
var port = Number(process.env.PORT || 3000);
app.listen(port, function () {
  console.log("Listening on " + port);
});