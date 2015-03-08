var Waterline = require('waterline');
var = Waterline.Collection.extend({
  adapter: 'mongo',
  connection: 'mongo',
  schema: false,
  identity: '',
  attributes: {
    EMEA: {
      type: ''
    },
    AMER: {
      type: ''
    }
  }
});

module.exports = ;