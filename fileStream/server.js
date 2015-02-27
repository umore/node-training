var http = require('http'),
    fileStream = require('./fileStream.js'),
    fileSystem = require('fs');
    url = require('url');
    path = require('path'),
    formidable = require('formidable'),
    util = require('util');

http.createServer(function (request, response) {

    if (request.url == '/upload' && request.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();

        form.on('fileBegin', function(name, file) {
            file.path = path.resolve(__dirname, 'files', file.name);
        });

        form.parse(request, function(err, fields, files) {
          response.writeHead(200, {'content-type': 'text/plain'});
          response.write('received upload:\n\n');
          response.end(util.inspect({fields: fields, files: files}));
        });

        return;
    }

    if ((request.url.indexOf('/download') === 0) && (request.method.toLowerCase() == 'get')) {
        
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.slice('/download'.length, pathname.length);
        var filePath = pathname.slice(1, pathname.length);
        filePath = path.resolve(__dirname, 'files', filePath);
        fileSystem.exists(filePath, function (exists) {
            if (exists) {
                var stat = fileSystem.statSync(filePath);
                response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Content-Length': stat.size
                });

                var fileReadStream = fileStream.getFileReadStream(filePath);
                fileReadStream.pipe(response);    
            }else{
                response.writeHead(404);
                response.write(filePath + " not found");
                response.end();
            }
        });

        return;
    }
    
    // show a file upload form
    response.writeHead(200, {'content-type': 'text/html'});
    response.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );

}).listen(8081);