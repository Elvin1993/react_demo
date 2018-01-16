## react 全家桶练习

- react 配合 react-redux redux
- redux-devtools
- react 配合 react-router


1.安装chrome 插件
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
2.安装npm 插件
https://github.com/zalmoxisus/redux-devtools-extension
3.配置index.js createStore
```js
import { devToolsEnhancer } from 'redux-devtools-extension';

let store = createStore(redux, devToolsEnhancer())
```
