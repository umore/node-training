var Waterline = require('waterline');
var Orders = Waterline.Collection.extend({
  adapter: 'mongo',
  connection: 'mongo',
  schema: false,
  identity: 'orders',
  attributes: {
    id: {
      type: 'int',
      primaryKey: true
    },
    order_name: {
      type: 'string'
    },
    order_contents: {
      type: 'string'
    },
    quantity: {
      type: 'int'
    },
    order_status: {
      type: 'string'
    }
  }
});

module.exports = Orders;