'use strict';
  
module.exports = function (router) {

  var path = require('path');
  var util = require('../app/helpers/util');

  // simple logger for this router's requests
  router.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
  });

  // read routes
  var routes = path.resolve('app/routes');
  util.eachFilesPath(routes, function (file) {
    require(routes + '/' + file)(router);
  });

};