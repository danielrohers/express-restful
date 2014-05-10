'use strict';

var mongoose = require('mongoose');

var config = {
  "db": "express_restful",  
  "host": "localhost",  
  "user": "",
  "pw": "",
  "port": 27017
};

var port = (config.port.length > 0) ? ":" + config.port : '';
var login = (config.user.length > 0) ? config.user + ":" + config.pw + "@" : '';
var uri =  process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||  "mongodb://" + login + config.host + port + "/" + config.db;

var mongoOptions = { db: { safe: true } };

// Connect to Database
mongoose.connect(uri, mongoOptions);

// Mongoose events
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + uri);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});

exports.mongoose = mongoose;