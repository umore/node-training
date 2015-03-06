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

### asyncOrchestrate - Restify Client to invoke async orchestration services served through REST API backed by Express; Includes results from running loadtests against these orchestration APIs

Build and Start the server
```sh
$ cd asyncOrchestrate
$ npm install
$ npm start
```

Run RestifyClient
```sh
$ cd asyncOrchestrate
$ node asyncOrchestrateRestifyClient.js
```

API Endpoints
- GET localhost:3000/orchestrate/async/parallel -> fetch and orchestrate results from ecx sample endpoints using async parallel
- GET localhost:3000/orchestrate/async/series -> fetch and orchestrate results from ecx sample endpoints using async series
- GET localhost:3000/orchestrate/async/waterfall -> fetch and orchestrate results from ecx sample endpoints using async waterfall

ECX sample endpoints used:
- http://sv2lxecxasdi01.corp.equinix.com:8080/ecx/languages/en.json
- http://sv2lxecxasdi01.corp.equinix.com:8080/ecx/metaData
- http://sv2lxecxasdi01.corp.equinix.com:8080/ecx/user?email=ashsrivastava%40equinix.com

loadtests summary (3 runs of hitting APIs 50 times each):

| parallel | series | waterfall |
| ------------- | ------------- | ------------- |
| 15.24 sec    | 22.97 sec |  18.98 sec  |
| 9.8 sec      | 18.31 sec |  19.06 sec  |
| 12.56 sec    | 18.62 sec |  17.18 sec  |

loadtests results also included under asyncOrchestrate/loadtests/
