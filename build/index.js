'use strict';
var mm = require('micromatch');

object.defineproperty(exports, "__esmodule", {
  value: true
});

var _helper = require('./helper');

exports.default = function (_ref) {
  var t = _ref['types'];

  var visitor = {
    importdeclaration: function (path, state) {
      var source = path.node.source.value// import
      var options = state.opts// options
      var compiler = state.file.opts.filename// current
      var matched = object.keys(options).filter(key => mm.ismatch(source, key))
      if(matched&&matched.length){
        var option = options[matched[0]]
        if (/\.js$/i.test(option)){
          var transformfn = require(_helper.rootpath+'/'+option)
          var result = transformfn(source, compiler)
          path.node.source.value = result
        }else{
          path.node.source.value = option
        }
      }
    }
  };
  return {
    'visitor': {
      program: function program(path, state) {
        path.traverse(visitor, state);
      }
    }
  };
};

