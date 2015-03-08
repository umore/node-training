var sampleServiceImpl = require("../impls/sampleServiceImpl");

var sampleController = {
  getMetaData: function(req, res) {
    sampleServiceImpl.getMetaData(req, res);
  },
  postOrder: function(req, res) {
    sampleServiceImpl.postOrder(req, res);
  },
  getOrderById: function(req, res) {
    sampleServiceImpl.getOrderById(req, res);
  },
  deleteOrderById: function(req, res) {
    sampleServiceImpl.deleteOrderById(req, res);
  },
  updateOrderById: function(req, res) {
    sampleServiceImpl.updateOrderById(req, res);
  },
  getPizzaById: function(req, res) {
    sampleServiceImpl.getPizzaById(req, res);
  },
  postPizza: function(req, res) {
    sampleServiceImpl.postPizza(req, res);
  }
};

module.exports = sampleController;