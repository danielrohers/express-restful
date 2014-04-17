'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var clientSchema   = new Schema({
  name: { type: String, required: true },
  created: { type: Date , default: Date.now }
});

module.exports = mongoose.model('Client', clientSchema);