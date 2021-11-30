# Webpack专题

## 精选文章
- [带你深度解锁Webpack系列(基础篇)](https://juejin.cn/post/6844904079219490830)
- [带你深度解锁Webpack系列(进阶篇)](https://juejin.cn/post/6844904084927938567)
- [带你深度解锁Webpack系列(优化篇)](https://juejin.cn/post/6844904093463347208)
- [实现一个 webpack loader 和 webpack plugin ](https://segmentfault.com/a/1190000024431022)


___



## 1. loader与plugin的区别？

### **loader**: 

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！

loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中

1. 处理一个文件可以使用多个loader，loader的执行顺序和配置中的顺序是相反的，即最后一个loader最先执行，第一个loader最后执行
2. 第一个执行的loader接收源文件内容作为参数，其它loader接收前一个执行的loader的返回值作为参数，最后执行的loader会返回此模块的JavaScript源码

### **plugin:**

**插件** 是 webpack 的 [支柱](https://github.com/webpack/tapable) 功能。Webpack 自身也是构建于你在 webpack 配置中用到的 **相同的插件系统** 之上！插件目的在于解决 [loader](https://webpack.docschina.org/concepts/loaders) 无法实现的**其他事**。Webpack 提供很多开箱即用的 [插件](https://webpack.docschina.org/plugins/)。

在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。

### 区别

loader是一个转换器，比如将a.scss转换成a.css，是单纯的文件转换过程。webpack本身不能处理非js或json的文件，通过loader可以将非js文件处理为webpack可以解析的JavaScript代码。

plugin是一个扩展器，它丰富了webpack本身，是针对loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行任务。
