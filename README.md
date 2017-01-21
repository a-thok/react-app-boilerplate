# React应用开发规范

## 目录结构
```
src/
  components/
    App/
      images/
      app.css
      App.jsx
    ...
  containers/
    App.jsx
    ...
    index.js
  redux/
    modules/
      reducerA.js
      ...
      index.js
    rootReducer.js
    configureStore.js
  style/
    global.css
    helper.css
    var.css
    ...
  utils/
    ajax.js
    ...
  api.js
  index.jsx
  routes.jsx
```
* components：单纯组件
  * 这里的组件只负责接收props，更新试图
  * 每个组件建立一个文件夹，该组件的主文件命名为index.jsx
  * 对于复杂的组件，可以拆分出子组件，与主文件放置在同一目录
  * 组件的样式文件与组件放置在统一目录，与组件同名，首字母小写
  * 组件的图片文件放置在组件目录下的images子目录中
  * 所有组件必须统一在components目录下的index.js文件里二次导出，项目里其它地方需要导入组件的，统一从这个文件导入

* containers：状态组件
  * 这里的组件负责从store获取状态，一般一个状态组件即是一个路由页
  * 所有组件必须统一在components目录下的index.js文件里二次导出，项目里其它地方需要导入组件的，统一从这个文件导入

* redux：redux相关文件
  * modules:
    * 每个reducer是这个目录下的一个独立文件
    * 与每个reducer相关的action type和action creator，和该reducer定义在同一个文件内
    * reducer使用export default导出；action creator使用普通export导出；action type原则上不导出
    * 所有reducer必须统一在同目录下的index.js文件里二次导出，项目里其它地方需要导入reducer的，统一从这个文件导入
  * rootReducer.js负责合成所有的reducer，提供给store使用
  * configureStore.js用来配置和导出store

* styles: 全局样式

* utils：自己封装的公共辅助方法

* api.js：api接口，项目中所用到的所有的api统一在此文件中定义

* index.jsx：入口文件

* routes.jsx：路由

## 开发环境
 * 推荐使用vscode编辑器
 * 编辑器应当安装以下相关插件：eslint、stylelint、editorconfig

## 代码约定
  * 大部分时候，模块应该在文件的最后一行导出
  * 每个组件必须正确地编写propTypes
  * 考虑到性能，组件应优先继承React.PureComponent；若出现问题（组件非pure），才考虑继承React.Component
  * 组件上的方法，除constructor、生命周期以及getter/setter外，应该统一使用箭头函数定义
  * 一般情况下，数据状态存储在全局store中；视图状态以及表单状态存储在组件的state中
  * 组件应该尽可能简单纯粹，避免在组件内进行api请求一类的操作，此类操作应当放置在action creator中
  * 统一使用async await来控制异步流程
  * 复制对象时，优先使用展开操作符...，而不是Object.assign
  * action type的变量名使用单个动词，值使用'状态/动词'的形式命名（请参考示例），变量名和值都应当全不大写
  * jsx中的key，应当尽可能使用一个现有的独一无二的值

## TODO
 * 测试兼容性（pollyfill）
 * 与后端约定接口代理（/api）
 * 404页面

请尽可能仔细地阅读实例应用的代码。  
整个应用非常简单，但大多数细节皆有涉及，仔细阅读和理解代码能保证对这套项目体系有一个清晰的理解。
