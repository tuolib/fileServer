var express = require('express');
var router = express.Router();
var file = require('./file')


module.exports = app => {
  file(app);
};

