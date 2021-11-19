# DOM专题





## 一、规范分级

DOM从诞生开始,由W3C和WHATWG对其进行标准化，目前已经推行至第四代，即DOM4。

> 历史上DOM存在W3C和WHATWG两份规范，目前已达成共识联合制定统一规范：[如何看待 W3C 与 WHATWG 就共同开发 HTML 与 DOM 规范达成协议？ - W3C中国的回答 - 知乎](https://www.zhihu.com/question/327705039/answer/705161602)
>
> 目前W3C的DOM4 标准的快照就是WHATWG中的[DOM Living Standard](https://dom.spec.whatwg.org/)。
>
> ![image-20211119171821670](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211119171821670.png)
>
> 



### DOM1级

1998 年 10 月，W3C 推出 DOM 1.0 版本规范，作为推荐标准进行正式发布，主要包括两个子规范。

- DOM Core（核心部分）：把 XML 文档设计为树形节点结构，并为这种结构的运行机制制订了一套规范化标准，同时定义了创建、编辑、操纵这些文档结构的基本属性和方法。
- DOM HTML：针对 HTML 文档、标签集合，以及与个别 HTML 标签相关的元素定义了对象、属性和方法。

### DOM2级

2000 年 11 月，W3C 正式发布了更新后的 DOM 核心部分，并在这次发布中添加了一些新规范，于是人们就把这次发布的 DOM 称为 2 级规范。

2003 年 1 月，W3C 又正式发布了对 DOM HTML 子规范的修订，添加了针对 HTML 4.01 和 XHTML 1.0 版本文档中很多对象、属性和方法。W3C 把新修订的 DOM 规范同义称为 DOM 2.0 推荐版本，该版本主要包括 6 个推荐子规范。

- DOM2 Core：继承于 DOM Core 子规范，规定了 DOM 文档结构模型，添加了更多的特性，如针对命名空间的方法等（开始支持XML 命名空间）。
- DOM2 HTML：继承于 DOM HTML，规定了针对 HTML 的 DOM 文档结构模型，并添加了一些属性。
- DOM2 Events：规定了与鼠标相关的事件（包括目标、捕获冒泡和取消）的控制机制，但不包含与键盘相关事件的处理部分。
- DOM2 Style（或 DOM2 CSS）：提供了访问和操纵所有与 CSS 相关的样式及规则的能力。
- DOM2 Traversal 和 DOM2 Range：DOM2 Traversal 规范允许开发人员通过迭代方式访问 DOM，DOM2 Range 规范允许对指定范围的内容进行操作。
- DOM2 Views：提供了访问和更新文档表现（视图）的能力。

### DOM3级



2004 年 4 月，W3C 发布了 DOM3 版本。DOM3 版本主要包括以下 3 个推荐子规范。

- DOM3 Core：继承于 DOM2 Core，并添加了更多的新方法和属性，同时修改了已有的一些方法。
- DOM3 Load and Save：提供将 XML 文档的内容加载到 DOM 文档中，以及将 DOM 文档序列化为 XML 文档的能力。
- DOM3 Validation：提供了确保动态生成的文档的有效性的能力，即如何符合文档类型声明。

### DOM4级

定义了跨平台或者说平台无关的模型，用于处理文档节点树及相关事件。

增加了 Mutation Observers （突变观测器），替代原来的 Mutation Events（突变事件）。



> 一些讨论：
>
> https://cloud.tencent.com/developer/ask/74973
>
> 

____



## 二、事件

[事件介绍——MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)

https://dom.spec.whatwg.org/#callbackdef-eventlistener



### 事件流

[事件流标准](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)

事件的执行顺序是：捕获阶段 ➡️ 目标阶段 ➡️ 冒泡阶段。

默认情况下，所有事件处理程序都在冒泡阶段进行注册。

在DOM2事件中，通过addEventListener注册的事件处理程序可以设置第三个参数useCapture为true或options中的capture为true来将事件处理程序注册在捕获阶段。

注意，对于事件目标上的事件监听器来说，事件会处于“目标阶段”，而不是冒泡阶段或者捕获阶段。在目标阶段的事件会触发该元素（即事件目标）上的所有监听器，而不在乎这个监听器到底在注册时`useCapture` 参数值是true还是false，执行的顺序由注册时的顺序决定。



#### 流程概述

1. 捕获阶段会从html开始查找注册在捕获阶段的事件处理程序并执行，直到到达目标元素。

2. 然后进入目标阶段，执行目标元素注册的所有事件处理程序，无论捕获还是冒泡阶段的事件，以注册的顺序来决定执行顺序。

3. 然后进入冒泡阶段，从目标元素的父级开始逐一往外查找并执行注册在冒泡阶段的事件处理程序（事件默认注册在冒泡阶段）。

4. 事件流结束。



**[stopPropagation](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation)**()阻止捕获和冒泡阶段中当前事件的进一步传播。



**[stopImmediatePropagation](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation)**() 方法阻止监听同一事件的其他事件监听器被调用。

如果多个事件监听器被附加到相同元素的相同事件类型上，当此事件触发时，它们会按其被添加的顺序被调用。如果在其中一个事件监听器中执行 `stopImmediatePropagation()` ，那么剩下的事件监听器都不会被调用。



![image-20211119155122500](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211119155122500.png)





### 级别

对于事件而言，由于DOM1没有定义事件相关的新标准，就不在这里提及了。

#### DOM 0级(DOM 1级)

通过两种方式来注册事件处理程序：

1. 行内事件处理器（作为标签属性），请勿使用。
2. 事件处理器属性（如onclick = function(){})

#### DOM 2级

新增了addEventListener和removeEventListener方法。

通过addEventListener注册事件处理程序的事件机制提供了更多强大的选项和特性。详细可看 [addEventListener——MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)。

主要有：

1. 可以注册多个同名事件（重复的处理函数会被自动忽略，只保留一个），可以通过removeEventListener注销指定事件。

2. 可以声明将事件注册在捕获阶段（默认冒泡阶段）

3. 可以设置passive属性来改善滚屏性能。根据规范，`passive` 选项的默认值始终为false。但是，这引入了处理某些触摸事件（以及其他）的事件监听器在尝试处理滚动时阻止浏览器的主线程的可能性，从而导致滚动处理期间性能可能大大降低。通过设置passive为true让触摸或鼠标滚动事件的处理不阻塞滚动中页面的渲染。可以看这个[demo](https://developers.google.com/web/updates/2016/06/passive-event-listeners)。

   > 为防止出现此问题，某些浏览器（特别是Chrome和Firefox）已将文档级节点 [`Window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)，[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)和[`Document.body`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/body)的`touchstart (en-US)`和`touchmove (en-US)`事件的`passive`选项的默认值更改为true。这可以防止调用事件监听器，因此在用户滚动时无法阻止页面呈现。

4. 可以设置once为true来让一个事件处理程序执行一次后自动被注销。

5. `signal`：[`AbortSignal`](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal)，该 `AbortSignal` 的 [`abort()`](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController/abort) 方法被调用时，监听器会被移除。

#### DOM 3级

此规范定义了扩展在DOM中定义的DOM事件对象的UI事件。UI事件是通常由可视用户代理实现的，用于处理诸如鼠标和键盘输入的用户交互。如：

![image-20211119175756042](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211119175756042.png)

#### DOM 4级

无事件相关。







