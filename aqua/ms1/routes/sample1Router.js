var path = require('path');
var sample1Controller = require(path.join($dirPaths.controllersDir, 'sample1Controller'));

var sample1Router = function(app) {
  app.get('/ecx/genericPorts', sample1Controller.genericPorts);
};

module.exports = sample1Router;