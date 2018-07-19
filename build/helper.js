'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformRelativeToRootPath = exports.hasRootPathPrefixInString = undefined;

var _slash = require('slash');

var _slash2 = _interopRequireDefault(_slash);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = exports.root = (0, _slash2.default)(global.rootPath || process.cwd());
