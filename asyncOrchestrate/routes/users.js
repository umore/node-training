var express = require('express');
var router = express.Router();

var jsSelect = require('js-select');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/expressUsersDb'); // connect to our database

var User = require('../models/user');

// test route to make sure everything is working
router.get('/', function(req, res, next) {
	res.json({ message: 'hooray! welcome to our Users REST API!' });
});

// middleware or interceptor to use for all requests
router.use(function(req, res, next) {

	// Validate whether request user has firstName if its a POST
	if(req.method === 'POST'){

		var firstName = jsSelect(req.body, ".firstName").nodes();
		if (firstName === undefined || firstName.length == 0) {
			var err = new Error("Bad Request, User must have firstName");
			err.status = 400;
			next(err);
		}
	}
	next();
});

// on routes that end in /users
// ----------------------------------------------------
router.route('/users')

	// create a user
		.post(function(req, res) {

			var user = new User();		// create a new instance of the User model
			user.firstName = jsSelect(req.body, ".firstName").nodes();
			user.lastName = jsSelect(req.body, ".lastName").nodes();
			user.age = Number(jsSelect(req.body, ".age").nodes());
			user.phone = jsSelect(req.body, ".phone").nodes();
			user.address.number = Number(jsSelect(req.body, ".address .number").nodes());
			user.address.street = jsSelect(req.body, ".address .street").nodes();
			user.address.apt = jsSelect(req.body, ".address .apt").nodes();
			user.address.city = jsSelect(req.body, ".address .city").nodes();
			user.address.state = jsSelect(req.body, ".address .state").nodes();
			user.address.zip = Number(jsSelect(req.body, ".address .zip").nodes());

			user.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'User created!', "_id": user._id });
			});

		})

	// get all the users
		.get(function(req, res) {
			User.find(function(err, users) {
				if (err)
					res.send(err);

				res.json(users);
			});
		});

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

	// get the user with that id
		.get(function(req, res) {
			User.findById(req.params.user_id, function(err, user) {
				if (err)
					res.send(err);
				res.json(user);
			});
		})

	// update the user with this id
		.put(function(req, res) {
			User.findById(req.params.user_id, function(err, user) {

				if (err)
					res.send(err);

				user.firstName = jsSelect(req.body, ".firstName").nodes();
				user.lastName = jsSelect(req.body, ".lastName").nodes();
				user.age = Number(jsSelect(req.body, ".age").nodes());
				user.phone = jsSelect(req.body, ".phone").nodes();
				user.address.number = Number(jsSelect(req.body, ".address .number").nodes());
				user.address.street = jsSelect(req.body, ".address .street").nodes();
				user.address.apt = jsSelect(req.body, ".address .apt").nodes();
				user.address.city = jsSelect(req.body, ".address .city").nodes();
				user.address.state = jsSelect(req.body, ".address .state").nodes();
				user.address.zip = Number(jsSelect(req.body, ".address .zip").nodes());

				user.save(function(err) {
					if (err)
						res.send(err);

					res.json({ message: 'User updated!' });
				});

			});
		})

	// delete the user with this id
		.delete(function(req, res) {
			User.remove({
				_id: req.params.user_id
			}, function(err, user) {
				if (err)
					res.send(err);

				res.json({ message: 'Successfully deleted' });
			});
		});


module.exports = router;
