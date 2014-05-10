'use strict';

var path = require('path');
var util = require('../app/helpers/util');

// models
var models = path.resolve('app/models');
util.eachFilesPath(models, function (file) {
  require(models + '/' + file);
});