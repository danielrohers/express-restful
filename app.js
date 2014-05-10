'use strict';

var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

app.use(bodyParser());
app.use(router);
app.set('port', process.env.PORT || 3000);

// Define database
require('./config/database');

// Define routes
require('./config/routes')(router);

// Define models
require('./config/models');

// set our port
app.listen(app.get('port'), function () {
  console.log("Listening on " + app.get('port'));
});