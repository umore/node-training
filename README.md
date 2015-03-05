# node-training

### fileStream - Http Server that support simple file upload and download

Build and Start the server
```sh
$ cd fileStream
$ npm install
$ grunt
```
API Endpoints
- GET localhost:8081 -> get file upload form
- POST localhost:8081/upload -> server stores the file under files/ directory
- GET localhost:8081/download/{filename} -> downloads file with {filename} under files/ directory on server

### expressServer - REST API Server using Express and Client using Restify

Build and Start the server
```sh
$ cd expressServer
$ npm install
$ npm start
```

Run RestifyClient
```sh
$ cd expressServer
$ node restifyClient.js
```

API Endpoints
- GET localhost:3000/ -> Landing page using express generator
- GET localhost:3000/api -> REST API welcome page using express routing
- POST localhost:3000/api/users -> Store user object from request body in local MongoDB
e.g. Request Body:
```
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
}
```
Response Body:
```
{
"message": "User created!",
"_id": "54f421198049296e1f000001"
}
```

- GET localhost:3000/api/users -> fetch list of users from MongoDB
e.g. Response Body:
```
[
  {
    "_id": "54f412f877153cee1a000003",
    "phone": "123-123-1234",
    "age": 25,
    "lastName": "More",
    "firstName": "Uma",
    "__v": 0,
    "address": {
      "zip": 95112,
      "state": "CA",
      "city": "SJ",
      "apt": "209",
      "street": "Foo Street",
      "number": 7
    }
  },
  {
    "_id": "54f412f877153cee1a000004",
    "phone": "123-123-1234",
    "age": 12,
    "lastName": "PQR",
    "firstName": "ABC",
    "__v": 0,
    "address": {
      "zip": 94017,
      "state": "CA",
      "city": "SF",
      "apt": "20A",
      "street": "Bar Street",
      "number": 6
    }
  }
]
```

- DELETE localhost:3000/api/users/54f412f877153cee1a000004 -> Remove user having id 54f412f877153cee1a000004
e.g. Response Body 
```
{
"message": "Successfully deleted"
}
```
