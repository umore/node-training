var sinon = require('sinon'),
  chai = require('chai').use(require('sinon-chai')),
  expect = chai.expect,
  dirPaths = require(process.cwd() + '/server/config/dirPaths'),
  Orders = require(dirPaths.modelsDir + 'Orders');

var Controller = require(dirPaths.controllersDir + 'sampleController.js');
var Model = Orders;

describe('API Unit Tests for POST Operation', function() {

  it('GET /users should return 200', function() {
    var spy = sinon.spy();
    Controller.getMetaData(null, {
      send: spy
    });
    expect(spy).called;
  });

});

describe('API Unit Tests for POST Operation', function() {

  it('POST /users should return 200', function() {
    var spy = sinon.spy();
    Controller.postOrder(null, {
      send: spy
    });
    expect(spy).called;
  });

});