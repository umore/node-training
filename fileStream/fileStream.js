var fs = require('fs');

function getFileReadStream(filePath) {
    return fs.createReadStream(filePath, {encoding: 'utf8'});
}

module.exports.getFileReadStream = getFileReadStream;