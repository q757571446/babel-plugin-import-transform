 Babel plugin to transform import and require path to relative or absolute

### Example

 ```
 import Library from 'library'
 ```
 transform
 ```
 import Library from 'library/path'
 ```

### Install
 ```
 npm install bable-plugin-import-transform --save-dev
 ```

### Use
 Add it to your plugins array in your babel config, e.g. a .babelrc file.
 ```
{
  "plugins": [
    [
      "babel-plugin-import-transform",{
        "core/**": 'transform.js'
      }
    ]
  ]
}
 ```
 transform.js in project root 
 ```
 module.exports = function(importName, compileFile) {
  return importName + "path" 
 }
 ```
### Regular
 use micromatch as regular match import path

