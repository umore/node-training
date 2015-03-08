var sinon = require('sinon'),
  chai = require('chai').use(require('sinon-chai')),
  expect = chai.expect,
  dirPaths = require(process.cwd() + '/server/config/dirPaths'),
  genericPorts = require(dirPaths.modelsDir + 'genericPorts');

var Controller = require(dirPaths.controllersDir + 'sample1Controller.js');
var Model = genericPorts;

describe('API Unit Tests for POST Operation', function() {

  it('GET /users should return 200', function() {
    var spy = sinon.spy();
    Controller.genericPorts(null, {
      send: spy
    });
    expect(spy).called;
  });

});