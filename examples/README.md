this is example from babel-plugin-import transform。
```
npm install
npm run compile
```
it will transform src/index.js
```
import { isPlainObject } from 'lib/lodash'
```
to dist/index.js
```
import { isPlainObject } from '../lib/lodash'
```
