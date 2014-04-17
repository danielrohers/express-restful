'use strict';

var clients = (function () {

  var exports = {},
      Client = require('../models/client');

  function _findOne (id, callback) {
    Client.findOne({ _id: id }, callback)
  };

  exports.getId = function (req, res, next, id) {
    req.id = id;
    next();
  };

  exports.index = function (req, res) {
    Client.find(function (err, clients) {
      if (err) res.send(err);
      res.json(clients);
    });
  };

  exports.create = function (req, res) {
    var client = new Client(req.body);
    client.save(function (err) {
      if (err) res.send(err);
      res.json({ message: 'success' });
    })
  };

  exports.get = function (req, res) {
    Client.findOne({ _id: req.id }, function (err, client) {
      if (err) res.send(err);
      res.json(client);
    });
  };

  exports.update = function (req, res) {
    Client.update({ _id: req.id }, req.body, function(err, data) {
      if (err) res.send(err);
      var message = data ==  1 ? 'success' : 'not exist';
      res.json({ message : message});
    });
  };

  exports.delete = function (req, res) {
    Client.remove({ _id: req.id }, function (err, data) {
      if (err) res.send(err);
      var message = data ==  1 ? 'success' : 'not exist';
      res.json({ message: message });
    });
  };

  return exports;

})();

module.exports = clients;
