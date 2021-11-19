# DOM专题



## 一、规范分级

分为DOM1、DOM2、DOM3、DOM4。





## 二、事件

[事件介绍——MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)

https://dom.spec.whatwg.org/#callbackdef-eventlistener



### 事件流

事件的执行顺序是：捕获阶段 ➡️ 目标阶段 ➡️ 冒泡阶段。

默认情况下，所有事件处理程序都在冒泡阶段进行注册。

在DOM2事件中，通过addEventListener注册的事件处理程序可以设置第三个参数useCapture为true或options中的capture为true来将事件处理程序注册在捕获阶段。

注意，对于事件目标上的事件监听器来说，事件会处于“目标阶段”，而不是冒泡阶段或者捕获阶段。在目标阶段的事件会触发该元素（即事件目标）上的所有监听器，而不在乎这个监听器到底在注册时`useCapture` 参数值是true还是false，执行的顺序由注册时的顺序决定。



#### 流程概述

捕获阶段会从html开始查找注册在捕获阶段的事件处理程序并执行，直到到达目标元素。

然后进入目标阶段，执行目标元素注册的所有事件处理程序，无论捕获还是冒泡阶段的事件，以注册的顺序来决定执行顺序。

然后进入冒泡阶段，从目标元素的父级开始逐一往外查找并执行注册在冒泡阶段的事件处理程序（事件默认注册在冒泡阶段）。

事件流结束。



### 级别

DOM从

#### 1. DOM0级

​	
