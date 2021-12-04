# JavaScript面试专题


先回顾一下自己之前看犀牛书时整理的一些笔记：[《JavaScript权威指南第七版》读书笔记](https://www.yuque.com/docs/share/a76eb9bb-999d-4588-8295-cf2ebb36742b?#%20%E3%80%8A%E3%80%8AJavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97%E7%AC%AC%E4%B8%83%E7%89%88%E3%80%8B%E3%80%8B)



## JS知识点好文

- [「万字总结」熬夜总结50个JS的高级知识点，全都会你就是神！！！](https://juejin.cn/post/7022795467821940773)
- [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872)
- [说说原型（prototype）、原型链和原型继承](https://zhuanlan.zhihu.com/p/35790971)
- [「2021」高频前端面试题汇总之JavaScript篇（上）](https://juejin.cn/post/6940945178899251230)
- [「2021」高频前端面试题汇总之JavaScript篇（下）](https://juejin.cn/post/6941194115392634888)
- [字节跳动最爱考的前端面试题：JavaScript 基础](https://juejin.cn/post/6934500357091360781)


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

参考[JavaScript常用八种继承方案](https://juejin.cn/post/6844903696111763470)

另见`./继承.js`。

目前主要使用**寄生组合**的方式实现继承，即通过Object.create(Super.prototype)创建父类构造函数的prototype的副本作为子类构造函数的prototype，并将该prototype的constructor指向子类构造函数，然后在子类构造函数中使用call方法借用父类的构造函数继承实例属性。

```js
function inherits(Super,Sub){
		const prototype = Object.create(Super.prototype);
    prototype.constructor = Sub;
  	Sub.prototype = prototype;
}
function SuperType(){
  //...
}
function SubType(){
  Super.call(this)
  //...
}
inherits(SuperType, SubType)

```

**ES6 Class**的继承中，还会将子类构造函数的__ proto __ 指向父类构造函数，如Sub.__ proto __ = Super。

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

首先事件循环中事件分为**宏任务**与**微任务**。

**宏任务（种类较多）：**

- script的同步代码（注意两个script标签相当于两个宏任务）
- setTimeout（指的是其中的回掉函数，后面的同理）
- setInterval
- requestAnimationFrame（注意其优先级比setTimeout、setInterval高）
- UI rendering
- 如浏览器中的点击等等dispatch Event事件（注意冒泡或捕获机制）
- I/O
- setImemediate（Node）

**微任务：**

- Promise callback (then,catch,finally)
- MutationObserver
- process.nextTick(Node)
- Object.observe(已废弃)



### **浏览器中的事件循环**

浏览器中的事件循环的机制可以总结为：

1. 执行主线程上的同步代码（script）
2. 执行时将需要异步执行的任务划分为**宏任务**和**微任务**并放到对应的事件队列中（注意宏任务队列可能不止一条，由浏览器具体实现划分不同优先级的宏任务队列）
3. 主线程执行完毕（执行栈为空）
4. 逐一执行微任务队列中的所有微任务（注意微任务的执行中如果又创建了微任务，也会在本次循环中执行）
5. 检查是否需要进行UI重新渲染等，进行渲染...
6. 取出一个宏任务（根据优先级决定从哪个宏任务队列中取）并执行（相当于第一步），循环以上流程，所谓事件循环。

![image-20211203114244423](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211203114244423.png)





来段简单又稍微复杂的代码检验一下：

```javascript
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

```

答案：

1 7

6 8

2 4

3 5

9 11

10 12



#### 难点

需要注意的是：**microtask并不是在macrotask完成之后才会触发**，在回调函数之后，只要执行栈是空的，就会执行microtask。也就是说，macrotask执行期间，执行栈可能是空的（比如在冒泡事件的处理时）。

你以为搞清楚了事件循环吗？看看[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=wechat_session&utm_medium=social&utm_oi=619928018081157120&from=singlemessage)这里面关于DOM操作的一个例子吧。

```html
<style>
    .outer {
        ...
    }

    .inner {
        ...
    }
</style>

<script>
        var outer = document.querySelector('.outer'),
            inner = document.querySelector('.inner'),
            clickTimes = 0;

        new MutationObserver(() => {
            console.log('mutate');
        }).observe(outer, {
            attributes: true
        });

        function onClick() {
            console.log('click');

            setTimeout(() => {
                console.log('timeout');
            }, 0);

            Promise.resolve().then(() => {
                console.log('promise');
            });

            outer.setAttribute('data-click', clickTimes++);
        }

        inner.addEventListener('click', onClick);
        outer.addEventListener('click', onClick);

        // inner.click();

        // console.log('done');
    </script>
```

点击内部的inner块，结果是：click, promise, mutate, click, promise, mutate, timeout, timeout

MutationObserver优先级比promise高，虽然在一开始就被定义，但实际上是触发之后才会被添加到microtask队列中，所以先输出了promise。

两个timeout回调都在最后才触发，因为click事件冒泡了，事件派发这个macrotask任务包括了前后两个onClick回调，两个回调函数都执行完之后，才会执行接下来的 setTimeout任务。

期间第一个onClick回调完成后执行栈为空，就马上接着执行microtask队列中的任务。

如果把代码的注释去掉，使用代码自动 click()，思考一下，会输出什么？

click, click, done,  promise, mutate, promise, timeout, timeout。

可以看到，事件处理是同步的，done在连续输出两个click之后才输出。

而mutate只有一个，是因为当前执行第二个onClick回调的时候，microtask队列中已经有一个MutationObserver，它是第一个回调的，因为事件同步的原因没有被及时执行。浏览器会对MutationObserver进行优化，不会重复添加监听回调 。emo～



### **Node中的事件循环**

在Node环境中，macrotask部分主要多了setImmediate，microtask部分主要多了process.nextTick，而这个nextTick是独立出来自成队列的，优先级高于其他microtask。

不过事件循环的的实现就不太一样了，可以参考 [Node事件文档 ](https://link.zhihu.com/?target=https%3A//nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)[libuv事件文档](https://link.zhihu.com/?target=http%3A//docs.libuv.org/en/v1.x/design.html)

Node中的事件循环有6个阶段：

- timers：执行`setTimeout()` 和 `setInterval()`中到期的callback
- I/O callbacks：上一轮循环中有少数的I/Ocallback会被延迟到这一轮的这一阶段执行
- idle, prepare：仅内部使用
- poll：最为重要的阶段，执行I/O callback，在适当的条件下会阻塞在这个阶段
- check：执行setImmediate的callback
- close callbacks：执行[close事件](https://www.zhihu.com/search?q=close事件&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A46068171})的callback，例如`socket.on("close",func)`



在每一轮的事件循环都会经过这六个阶段，每个阶段之后都会执行微任务队列中的任务。

![image-20211203140936451](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211203140936451.png)



来看个神奇的例子：

```js
process.nextTick(() => console.log(1));

console.log(0);

setTimeout(()=> {
    console.log('timer1');

    Promise.resolve().then(() => {
        console.log('promise1');
    });
}, 0);

process.nextTick(() => console.log(2));

setTimeout(()=> {
    console.log('timer2');

    process.nextTick(() => console.log(3));

    Promise.resolve().then(() => {
        console.log('promise2');
    });
}, 0);
```



结果是：0，1，2，timer1，timer2，3，promise1，promise2

是的，这里timer1后面是timer2，因为在timer阶段会将所有到期的timer回调一并执行，timer阶段结束后才执行微任务队列中的任务。



再来看个神奇的例子：

```js
setTimeout(() => {
    console.log('timeout');
}, 0);

setImmediate(() => {
    console.log('immediate');
});
```

![image-20211203143213443](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211203143213443.png)

是的，在这里先输出timeout还是immediate不是绝对的。这是因为在Node中不存在0ms的timer，至少也是1ms。

因此刚进入程序的1ms内，如果没有到期的timer回调需要执行，则跳过timer阶段，后续就到了check阶段执行setImmediate的回调了，也就是说这一结果可能取决于你的CPU怎么样。



如果把这两个操作放进文件IO的操作里呢？

```js
let fs = require('fs');

    fs.readFile('./event.html', () => {
        setTimeout(() => {
            console.log('timeout');
        }, 0);

        setImmediate(() => {
            console.log('immediate');
        });
    });
```

因为这里先读取一个文件让事件循环进入到了poll阶段，poll阶段后面的是check阶段，所以结果就必然是先immediate后timeout了。





知道JS的事件循环是怎么样的了，就需要知道怎么才能把它用好：

1. 在microtask中不要放置复杂的处理程序，防止阻塞UI的渲染

2. 可以使用process.nextTick处理一些比较紧急的事情

3. 可以在setTimeout回调中处理上轮事件循环中UI渲染的结果

4. 注意不要滥用[setInterval和setTimeout](https://www.zhihu.com/search?q=setInterval和setTimeout&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A46068171})，它们并不是可以保证能够按时处理的，setInterval甚至还会出现丢帧的情况，可考虑使用 requestAnimationFrame

5. 一些可能会影响到UI的异步操作，可放在promise回调中处理，防止多一轮事件循环导致重复执行UI的渲染

6. 在Node中使用immediate来可能会得到更多的保证

7. 不要纠结



**好文推荐**：

[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872)

[深入理解JavaScript的事件循环（Event Loop）](https://zhuanlan.zhihu.com/p/46068171)





___




## 5. 深浅拷贝





<hr/>

## 6. CommonJS模块与ES6模块的区别

[CommonJS模块与ES6模块的区别](https://www.cnblogs.com/unclekeith/p/7679503.html)（这里的第二个例子结果有误，经测试结果应该为是1222）

[CommonJS 和 ES6 Module 究竟有什么区别？](https://juejin.cn/post/6844904080955932680)

[Node Modules at War: Why CommonJS and ES Modules Can’t Get Alongredfin.engineering/node-modules-at-war-why-commonjs](https://link.zhihu.com/?target=https%3A//redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1)

可以看下这篇文章，这篇文章深入解释了为什么这两种模块难以互相兼容。在解释这个问题的过程中，作者讲解了这两种模块具体的生命周期：何时加载？何时编译？何时执行？中间如何进行优化避免加载、编译或执行不必要的代码？

CommonJS 是一种模块规范，最初被应用于 Nodejs，成为 Nodejs 的模块规范。

运行在浏览器端的 JavaScript 由于也缺少类似的规范，在 ES6 出来之前，前端也实现了一套相同的模块规范 (例如: AMD)，用来对前端模块进行管理。

自 ES6 起，引入了一套新的 ES6 Module 规范，在语言标准的层面上实现了模块功能，而且实现得相当简单，有望成为浏览器和服务器通用的模块解决方案。但目前浏览器对 ES6 Module 兼容还不太好，我们平时在 Webpack 中使用的 export 和 import，会经过 Babel 转换为 CommonJS 规范。在使用上的差别主要有：

1. CommonJS 模块输出的是一个值的拷贝（浅拷贝），ES6 模块输出的是值的引用。
2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
3. CommonJs 是单个值导出，ES6 Module可以导出多个
4. CommonJs 是动态语法可以写在判断/语句嵌套里，ES6 Module 静态语法只能写在顶层
5. CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined
