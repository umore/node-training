var path = require('path');
var sampleController = require(path.join($dirPaths.controllersDir, 'sampleController'));

var sampleRouter = function(app) {
  app.get('/metaData', sampleController.getMetaData);
  app.post('/metaData', sampleController.postOrder);
  app.get('/orders/:id', sampleController.getOrderById);
  app.delete('/orders/:id', sampleController.deleteOrderById);
  app.put('/orders/:id', sampleController.updateOrderById);
  app.get('/pizza/:id', sampleController.getPizzaById);
  app.post('/pizza', sampleController.postPizza);
};

module.exports = sampleRouter;