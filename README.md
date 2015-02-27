# node-training

### fileStream - Http Server that support simple file upload and download

Build and Start the server
```sh
$ cd fileStream
$ npm install
$ grunt
```
API Endpoints
- localhost:8081 -> GET the file upload form
- localhost:8081/upload -> POST the file, server stores the file under files/ directory
- localhost:8081/download/{filename} -> downloads file with {filename} under files/ directory on server