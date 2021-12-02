# JavaScript面试专题


先回顾一下自己之前看犀牛书时整理的一些笔记：[《JavaScript权威指南第七版》读书笔记](https://www.yuque.com/docs/share/a76eb9bb-999d-4588-8295-cf2ebb36742b?#%20%E3%80%8A%E3%80%8AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%E7%AC%AC%E4%B8%83%E7%89%88%E3%80%8B%E3%80%8B)



## JS知识点好文

- [「万字总结」熬夜总结50个JS的高级知识点，全都会你就是神！！！](https://juejin.cn/post/7022795467821940773)
- [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872)
- [说说原型（prototype）、原型链和原型继承](https://zhuanlan.zhihu.com/p/35790971)



___



## 1. 原型与原型链

[继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

关于prototype和__ proto __ ：

- 几乎所有对象都有原型，但只有少数有prototype属性，正是这些有prototype属性的对象为所有其它对象定义了原型。
- 对象都有__ proto __ 属性，但不推荐使用__ proto __来访问原型（[原因](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)），而是通过Object.getPrototypeOf方法。
- 构造函数有prototype属性。prototype 原型对象里的`constructor`指向构造函数本身
- 箭头函数不能作为构造函数，因此除了箭头函数，所有函数都有prototype属性。
- 通过对象字面量创建的对象都有相同的原型。通过Object.prototype引用这个原型对象。
- 使用new 关键字和构造函数调用创建的对象构造函数prototype属性的值作为它们的原型。如new Object()创建的对象继承自Object.prototype, 通过new Array()创建的对象以Array.prototype为原型，通过 new Date() 创建的对象以Date.prototype为原型。
- Object.create(null)创建的对象没有原型，Object.prototype这个对象也没有原型（指向null）～
- 多数内置构造函数（和多数用户定义的构造函数）的原型都继承自Object.prototype。例如Date.prototype从Object.prototype继承属性。这种原型对象链接起来的序列被称为原型链。



### 原型对象和构造函数有何关系？

在JavaScript中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个prototype属性，这个属性指向函数的原型对象。

当函数经过new调用时，这个函数就成为了构造函数，返回一个全新的实例对象，这个实例对象有一个__ proto__属性，指向构造函数的原型对象。

JavaScript对象通过__ proto__ 指向父类对象，直到指向Object对象为止，这样就形成了一个原型指向的链条, 即原型链。

![image-20211202170713676](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211202170713676.png)

![image-20211202173604641](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211202173604641.png)

- 对象的 hasOwnProperty() 来检查对象自身中是否含有该属性
- 使用 in 检查对象中是否含有某个属性时，如果对象中没有但是原型链中有，也会返回 true



____



## 2. 继承



____



## 3. 闭包
[medium 五万赞好文-《我永远不懂 JS 闭包》](https://juejin.cn/post/6950878916135354398)

之前整理的面试题：[谈谈你的闭包的理解](https://www.yuque.com/channinghyl/gxlrd8/buxt4p#80LxP)

红宝书(p178)上对于闭包的定义：闭包是指有权访问另外一个函数作用域中的变量的函数。

MDN 对闭包的定义为：闭包是指那些能够访问自由变量的函数。
（其中自由变量，指在函数中使用的，但既不是函数参数arguments也不是函数的局部变量的变量，其实就是另外一个函数作用域中的变量。）



例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的函数“。

在本质上，闭包是将函数内部和函数外部连接起来的桥梁。

函数可以嵌套定义在其它函数里，内嵌的函数可以访问定义在函数作用域的任何变量，这意味着函数是闭包（closure）。

可以认为任何函数都是闭包，但调用和定义都在同一作用域下时闭包无关紧要，通常来说只有出现内嵌函数且内嵌函数访问其作用域外部的变量时，闭包才有意义。

闭包的表现形式：

- 返回一个函数
- 作为函数参数传递
- 在定时器、事件监听、Ajax请求、跨窗口通信、Web Workers或者任何异步中，只要使用了回调函数，实际上就是在使用闭包
- IIFE(立即执行函数表达式)创建闭包, 保存了`全局作用域window`和`当前函数的作用域`，因此可以访问全局的变量。

闭包的实际场景：
- 防抖、节流
- 私有变量
- Vue2响应式中的defineReactive方法（内部是Object.defineProperty)也运用了闭包
- React Hooks (注意[闭包陷阱](https://zhuanlan.zhihu.com/p/84697185))
- 闭包无处不在~



___



## 4. EventLoop 事件循环

## 5. CommonJS模块与ES6模块的区别
