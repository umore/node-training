var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
	firstName: String,
	lastName: String,
	age: Number,
	phone: String,
	address: {
		number: Number,
		street: String,
		apt: String,
		city: String,
		state: String,
		zip: Number
	}
});

module.exports = mongoose.model('User', UserSchema);
