var Waterline = require('waterline');
var Pizza = Waterline.Collection.extend({
  adapter: 'mongo',
  connection: 'mongo',
  schema: false,
  identity: 'pizza',
  attributes: {
    id: {
      type: 'int'
    }
  }
});

module.exports = Pizza;