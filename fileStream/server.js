var http = require('http'),
    fileStream = require('./fileStream.js'),
    fileSystem = require('fs');
    url = require("url");

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    var filePath = pathname.slice(1, pathname.length);

    var stat = fileSystem.statSync(filePath);
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': stat.size
    });

    var fileReadStream = fileStream.getFileReadStream(filePath);
    fileReadStream.pipe(response);

}).listen(8080);