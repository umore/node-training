var persist = require('persist');
var type = persist.type;
var metadata = persist.define("metadata", {
  "id": {
    "type": type.INTEGER,
    dbColumnName: 'ID',
    primaryKey: "id"
  },
  "version": {
    "type": type.STRING,
    dbColumnName: 'VERSION'
  },
  "gitCommitId": {
    "type": type.STRING,
    dbColumnName: 'GITCOMMITID'
  },
  "buildDate": {
    "type": type.STRING,
    dbColumnName: 'BUILDDATE'
  }
}, {
  "tableName": "METADATA"
});

module.exports = metadata;