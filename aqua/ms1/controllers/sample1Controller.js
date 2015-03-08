var sample1ServiceImpl = require("../impls/sample1ServiceImpl");

var sample1Controller = {
  genericPorts: function(req, res) {
    sample1ServiceImpl.genericPorts(req, res);
  }
};

module.exports = sample1Controller;