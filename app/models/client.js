'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  name: { type: String, required: true },
  created: { type: Date , default: Date.now }
});

module.exports = mongoose.model('Client', clientSchema);