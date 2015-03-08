var path = require('path');
var connUtils = require('aquajs/lib/connUtils.js');

var sample1ServiceImpl = {};

module.exports = sample1ServiceImpl;

//------

var validateParams = function(req) {
  var methodType = req.method;
  var params = Object.keys(req.params);
  var body = Object.keys(req.body);

  if (params.length) {
    params.forEach(function(param) {
      req.checkParams(param, 'Invalid url param').isAlphanumeric();
    });
  }

  var queryParams = Object.keys(req.query);

  if (queryParams.length) {
    queryParams.forEach(function(query) {
      req.checkQuery(query, 'Invalid query param').isAlphanumeric();
    });
  }

  if (methodType === "GET") {}

  return req.validationErrors();
};