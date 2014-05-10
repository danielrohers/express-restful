'use strict'

var util = (function () {

  var exports = {};
  var fs = require('fs');

  function _eachFilesPath (path, callback) {
    fs.readdir(path, function (err, files) {
      files.forEach(function (file) {
        callback(file);
      });
    });
  };

  exports.eachFilesPath = _eachFilesPath;

  return exports;

})();

module.exports = util;