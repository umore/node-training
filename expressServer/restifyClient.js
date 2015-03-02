var assert = require('assert');
var restify = require('restify');

var jsSelect = require('js-select');

var client = restify.createJsonClient({
	url: 'http://localhost:3000',
	version: '~1.0'
});

console.log('Posting User');
client.post('/api/users',
		{
			"firstName": "Uma",
			"lastName": "More",
			"age": 25,
			"phone": "123-123-1234",
			"address": {
				"number": 7,
				"street": "Foo Street",
				"apt": "209",
				"city": "SJ",
				"state": "CA",
				"zip": 95112
			}
		},
		function(err, req, res, obj) {
			assert.ifError(err);
			console.log('Response Code: %d -> Response Headers: %j', res.statusCode, res.headers);
			console.log('Response: %j', obj);
		}
);

console.log('Posting User');
client.post('/api/users',
		{
			"firstName": "ABC",
			"lastName": "PQR",
			"age": 12,
			"phone": "123-123-1234",
			"address": {
				"number": 6,
				"street": "Bar Street",
				"apt": "20A",
				"city": "SF",
				"state": "CA",
				"zip": 94017
			}
		},
		function(err, req, res, obj) {
			assert.ifError(err);
			console.log('Response Code: %d -> Response Headers: %j', res.statusCode, res.headers);
			console.log('Response: %j', obj);
		}
);

client.get('/api/users', function (err, req, res, obj) {
	assert.ifError(err);
	console.log('Displaying first names of all users: %j', jsSelect(obj, ".firstName").nodes());
});

client.get('/api/users', function (err, req, res, obj) {
	assert.ifError(err);
	console.log('Displaying all Users firstName and their Zip');

	var firstNames = jsSelect(obj, ".firstName").nodes();
	var zips = jsSelect(obj, ".address .zip").nodes();

	var newJsonObjects = [];
	for(var i=0; i<firstNames.length; i++)
	{
		var newJsonObject = {
			"name": firstNames[i],
			"zip": zips[i]
		};
		newJsonObjects.push(newJsonObject);
	}

	console.dir(newJsonObjects);
});
