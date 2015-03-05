var assert = require('assert');
var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://localhost:3000',
  version: '~1.0'
});

client.get('/orchestrate/async/parallel', function (err, req, res, obj) {
  assert.ifError(err);
  console.log('Result: %j', obj);
});

client.get('/orchestrate/async/series', function (err, req, res, obj) {
  assert.ifError(err);
  console.log('Result: %j', obj);
});

client.get('/orchestrate/async/waterfall', function (err, req, res, obj) {
  assert.ifError(err);
  console.log('Result: %j', obj);
});