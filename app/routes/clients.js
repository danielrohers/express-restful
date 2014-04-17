'use strict';

module.exports = function (router) {

  var clients = require('../controllers/clients');

  router
    .param('id', clients.getId)
    .get('/clients', clients.index)
    .post('/clients', clients.create)
    .get('/clients/:id', clients.get)
    .put('/clients/:id', clients.update)
    .delete('/clients/:id', clients.delete);

}