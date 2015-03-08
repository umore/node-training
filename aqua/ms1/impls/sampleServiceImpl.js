var path = require('path');
var connUtils = require('aquajs/lib/connUtils.js');

var sampleServiceImpl = {
  getMetaData: function(req, res) {
    var response,
      err = validateParams(req);

    if (err) {
      response = '{"Error":"There are validation errors"}';
    } else {
      connUtils.checkConnection("oracle");
      var metadata = require(path.join('..', 'models', 'metadata'));


      metadata.using($conn).all(function(err, result) {
        if (err) {
          res.send("Error running Persist method");
        }
        res.send(result);
      });
    }
  },
  postOrder: function(req, res) {
    var response,
      err = validateParams(req);

    if (err) {
      response = '{"Error":"There are validation errors"}';
    } else {

      $app.models.orders.create(req.body).exec(function(err, result) {
        if (err) {
          res.send("Error running waterline Query");
        } else {
          res.send(result);
        }
      });
    }
  },
  getOrderById: function(req, res) {
    var response,
      err = validateParams(req);

    if (err) {
      response = '{"Error":"There are validation errors"}';
    } else {

      $app.models.orders.find()
        .where({
          id: req.params.id
        })
        .exec(function(err, result) {
          res.send(result);
        });
    }
  },
  deleteOrderById: function(req, res) {
    var response,
      err = validateParams(req);

    if (err) {
      response = '{"Error":"There are validation errors"}';
    } else {

      $app.models.orders.destroy()
        .where({
          id: req.params.id
        })
        .exec(function(err, result) {
          if (err) {
            res.send("Error running waterline Query");
          } else {
            res.send(result);
          }
        });
    }
  },
  updateOrderById: function(req, res) {
    var response,
      err = validateParams(req);

    if (err) {
      response = '{"Error":"There are validation errors"}';
    } else {

      $app.models.orders
        .update({
          id: req.params.id
        }, req.body)
        .exec(function(err, result) {
          if (err) {
            res.send("Error running waterline Query");
          } else {
            res.send(result);
          }
        });
    }
  },
  getPizzaById: function(req, res) {
    var response,
      err = validateParams(req);

    if (err) {
      response = '{"Error":"There are validation errors"}';
    } else {

      $app.models.pizza.find()
        .where({
          id: req.params.id
        })
        .exec(function(err, result) {
          res.send(result);
        });
    }
  },
  postPizza: function(req, res) {
    var response,
      err = validateParams(req);

    if (err) {
      response = '{"Error":"There are validation errors"}';
    } else {

      $app.models.pizza.create(req.body).exec(function(err, result) {
        if (err) {
          res.send("Error running waterline Query");
        } else {
          res.send(result);
        }
      });
    }
  }
};

module.exports = sampleServiceImpl;

//------

var validateParams = function(req) {
  var methodType = req.method;
  var params = Object.keys(req.params);
  var body = Object.keys(req.body);

  if (params.length) {
    params.forEach(function(param) {
      req.checkParams(param, 'Invalid url param').isAlphanumeric();
    });
  }

  var queryParams = Object.keys(req.query);

  if (queryParams.length) {
    queryParams.forEach(function(query) {
      req.checkQuery(query, 'Invalid query param').isAlphanumeric();
    });
  }

  if (methodType === "GET") {
    req.checkParams('id').optional().isInt();
  }
  if (methodType === "POST") {
    body.forEach(function(item) {
      req.checkBody(item, 'Body must not be empty').notEmpty();
    });
  }
  if (methodType === "DELETE") {
    req.checkParams('id', 'Invalid body params').notEmpty().isInt();
  }
  if (methodType === "PUT") {
    body.forEach(function(item) {
      req.checkBody(item, 'Body must not be empty').notEmpty();
    });
    req.checkParams('id', 'Invalid body params').notEmpty().isInt();
  }

  return req.validationErrors();
};