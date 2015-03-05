var express = require('express');
var router = express.Router();

var restify = require('restify');
var async = require('async');

var client = restify.createJsonClient({
  url: 'http://sv2lxecxasdi01.corp.equinix.com:8080',
  version: '~1.0'
});

// on routes that end in /async/parallel
// ----------------------------------------------------
router.route('/async/parallel')
    .get(function (req, res) {
      async.parallel([
            function (callback) {
              client.get('/ecx/languages/en.json', function (err, req, res, obj) {
                    if (err) {
                      callback(err, obj);
                    }
                    callback(null, obj);
                  }
              );
            },
            function (callback) {
              client.get('/ecx/metaData', function (err, req, res, obj) {
                    if (err) {
                      callback(err, obj);
                    }
                    callback(null, obj);
                  }
              );
            },
            function (callback) {
              client.get('/ecx/user?email=ashsrivastava%40equinix.com', function (err, req, res, obj) {
                    if (err) {
                      callback(err, obj);
                    }
                    callback(null, obj);
                  }
              );
            }
          ],
// An optional callback to run once all the functions have completed.
// This function gets a results array (or object) containing all the result arguments passed to the task callbacks.
          function (err, results) {
            res.json(results);
          }
      );
    });

// on routes that end in /async/series
// ----------------------------------------------------
router.route('/async/series')
    .get(function (req, res) {
      async.series([
            function (callback) {
              client.get('/ecx/languages/en.json', function (err, req, res, obj) {
                    if (err) {
                      callback(err, obj);
                    }
                    callback(null, obj);
                  }
              );
            },
            function (callback) {
              client.get('/ecx/metaData', function (err, req, res, obj) {
                    if (err) {
                      callback(err, obj);
                    }
                    callback(null, obj);
                  }
              );
            },
            function (callback) {
              client.get('/ecx/user?email=ashsrivastava%40equinix.com', function (err, req, res, obj) {
                    if (err) {
                      callback(err, obj);
                    }
                    callback(null, obj);
                  }
              );
            }
          ],
// An optional callback to run once all the functions have completed.
// This function gets a results array (or object) containing all the result arguments passed to the task callbacks.
          function (err, results) {
            res.json(results);
          }
      );
    });

// on routes that end in /async/waterfall
// ----------------------------------------------------
router.route('/async/waterfall')
    .get(function (req, res) {
      async.waterfall([
            function (callback) {
              client.get('/ecx/languages/en.json', function (err, req, res, obj) {
                    if (err) {
                      callback(err, obj);
                    }
                    callback(null, obj);
                  }
              );
            },
            function (arg1, callback) {
              client.get('/ecx/metaData', function (err, req, res, obj) {
                    if (err) {
                      callback(err, arg1, obj);
                    }
                    callback(null, arg1, obj);
                  }
              );
            },
            function (arg1, arg2, callback) {
              client.get('/ecx/user?email=ashsrivastava%40equinix.com', function (err, req, res, obj) {
                    var results = [];
                    results.push(arg1);
                    results.push(arg2);
                    if (err) {
                      callback(err, results);
                    }
                    results.push(obj);
                    callback(null, results);
                  }
              );
            }
          ],
// An optional callback to run once all the functions have completed.
// This function gets a results array (or object) containing all the result arguments passed to the task callbacks.
          function (err, results) {
            res.json(results);
          }
      );
    });

module.exports = router;