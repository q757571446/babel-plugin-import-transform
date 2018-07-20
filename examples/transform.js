var path = require('path')
var aliases = require('./scripts/alias.js')

module.exports = function(importName, compileFile) {
  var base = importName.split('/')[0]

  var to;
  var from = __dirname + '/' + compileFile
  if (aliases[base]) {
    to = path.resolve(aliases[base], importName.slice(base.length + 1))
  } else {
    to = path.resolve(__dirname, importName)
  }

  var relative = path.relative(from, to).replace('../', './')
  return (relative.indexOf('../')===-1)?relative:path.normalize(relative)
};
