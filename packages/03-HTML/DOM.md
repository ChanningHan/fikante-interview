# DOM专题



## 概述

文档对象模型 (DOM) 是HTML和XML文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。

一个web页面是一个文档。这个文档可以在浏览器窗口或作为HTML源码显示出来。但上述两个情况中都是同一份文档。文档对象模型（DOM）提供了对同一份文档的另一种表现，存储和操作的方式。 DOM是web页面的完全的面向对象表述，它能够使用如 JavaScript等脚本语言进行修改（通过DOM API）。

 [W3C DOM](https://www.w3.org/DOM/) 和[WHATWG DOM](https://dom.spec.whatwg.org/)标准在绝大多数现代浏览器中都有对DOM的基本实现。许多浏览器提供了对W3C标准的扩展，所以在使用时必须注意，文档可能会在多种浏览器上使用不同的DOM来访问。

所有操作和创建web页面的属性，方法和事件都会被组织成对象的形式（例如， `document `对象表示文档本身， `table` 对象实现了特定的 `HTMLTableElement` DOM 接口来访问HTML 表格等）。

API (web 或 XML 页面) = DOM + JS (脚本语言)

DOM 被设计成与特定编程语言相独立，使文档的结构化表述可以通过单一，一致的API获得。尽管我们在本参考文档中会专注于使用JavaScript， 但DOM 也可以使用其他的语言来实现（如Pythom）。

DOM中重要的**数据类型**：

| `document`     | 当一个成员返回 `document` 对象 （例如，元素的 **`ownerDocument`** 属性返回它所属于 `document` ) ，这个对象就是root `document` 对象本身。 [DOM `document` Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document) 一章对 `document` 对象进行了描述。 |
| -------------- | ------------------------------------------------------------ |
| `element`      | `element` 是指由 DOM API 中成员返回的类型为 `element` 的一个元素或节点。 例如， [document.createElement()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement) 方法会返回一个 `node` 的对象引用，也就是说这个方法返回了在DOM中创建的 `element`。 `element` 对象实现了 DOM `Element` 接口以及更基本的 `Node` 接口，参考文档将两者都包含在内。 |
| `nodeList`     | `nodeList` 是一个元素的数组，如从 [document.getElementsByTagName()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementsByTagName) 方法返回的就是这种类型。 `nodeList` 中的条目由通过下标有两种方式进行访问：<br />- list.item(1) <br />- list[1]<br />两种方式是等价的，第一种方式中 **`item()`** 是 `nodeList` 对象中的单独方法。 后面的方式则使用了经典的数组语法来获取列表中的第二个条目。 |
| `attribute`    | 当 `attribute` 通过成员函数 (例如，通过 **`createAttribute()`**方法) 返回时，它是一个为属性暴露出专门接口的对象引用。DOM中的属性也是节点，就像元素一样，只不过您可能会很少使用它。 |
| `namedNodeMap` | `namedNodeMap` 和数组类似，但是条目是由name或index访问的，虽然后一种方式仅仅是为了枚举方便，因为在 list 中本来就没有特定的顺序。 出于这个目的，  `namedNodeMap` 有一个 item() 方法，你也可以从  `namedNodeMap` 添加或移除条目。 |



- [Element](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)

  - Element是一个通用性非常强的基类，所有 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 对象下的对象都继承自它。这个接口描述了所有相同种类的元素所普遍具有的方法和属性。一些接口继承自 `Element` 并且增加了一些额外功能的接口描述了具体的行为。例如， [`HTMLElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement) 接口是所有 HTML 元素的基本接口，而 [`SVGElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/SVGElement) 接口是所有 SVG 元素的基础。大多数功能是在这个类的更深层级（hierarchy）的接口中被进一步制定的。

    在 Web 平台的领域以外的语言，比如 XUL，通过 `XULElement` 接口，同样也实现了 `Element` 接口。

- [Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

  - **`Node`** 是一个接口，各种类型的 DOM API 对象会从这个接口继承。它允许我们使用相似的方式对待这些不同类型的对象；比如, 继承同一组方法，或者用同样的方式测试。

    以下接口都从 `Node` 继承其方法和属性：

    [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document), [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element), [`Attr`](https://developer.mozilla.org/zh-CN/docs/Web/API/Attr), [`CharacterData`](https://developer.mozilla.org/zh-CN/docs/Web/API/CharacterData) (which [`Text`](https://developer.mozilla.org/zh-CN/docs/Web/API/Text), [`Comment`](https://developer.mozilla.org/zh-CN/docs/Web/API/Comment), and [`CDATASection`](https://developer.mozilla.org/zh-CN/docs/Web/API/CDATASection) inherit), [`ProcessingInstruction` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction), [`DocumentFragment`](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment), [`DocumentType`](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentType), `Notation`, `Entity`, `EntityReference`

    在方法和属性不相关的特定情况下，这些接口可能返回 `null`。它们可能会抛出异常 - 例如，当将子节点添加到不允许子节点存在的节点时。

需要对Element和Node的属性、方法、事件（Node没有）有尽可能全面的认知。

>  DOMString在JS中其实就是String，因为这两者都是utf-16编码的。







### getElementBy与querySelector的区别？

https://www.zhihu.com/question/24702250

| 区别     | getElementByX                                                | querySelector                                                |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 接收参数 | 仅支持单一的id、className、tagName                           | CSS选择符（可以实现复杂的组合条件查询）                      |
| 返回值   | getElementsBy 系列的返回的是一个 Live Node List，<br />每一次调用 查询结果都会重新对文档进行查询，导致无限循环的问题 | querySelectorAll 返回的是一个 Static Node List，是一个 集合的快照，对文档的任何操作都不会对其产生影响。 |

> document.querySelector()使用深度优先先序遍历进行匹配。





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



____

## 三、 WebComponent

[WebComponent——MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

Web Components 是一套不同的技术，允许您创建可重用的定制元素（它们的功能封装在您的代码之外）并且在您的web应用中使用它们。

它由三项主要技术组成，它们可以一起使用来创建封装功能的定制元素，可以在你喜欢的任何地方重用，不必担心代码冲突。

- **Custom elements（自定义元素）：**一组JavaScript API，允许您定义custom elements及其行为，然后可以在您的用户界面中按照需要使用它们。
- **Shadow DOM（影子DOM）**：一组JavaScript API，用于将封装的“影子”DOM树附加到元素（与主文档DOM分开呈现）并控制其关联的功能。通过这种方式，您可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
- **HTML templates（HTML模板）：** [` 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot) 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

实现web component的基本方法通常如下所示：

1. 创建一个类或函数来指定web组件的功能，如果使用类，请使用 ECMAScript 2015 的类语法(参阅[类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)获取更多信息)。

2. 使用 [`CustomElementRegistry.define()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define) 方法注册您的新自定义元素 ，并向其传递要定义的元素名称、指定元素功能的类、以及可选的其所继承自的元素。

3. 如果需要的话，使用[`Element.attachShadow()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow) 方法将一个shadow DOM附加到自定义元素上。使用通常的DOM方法向shadow DOM中添加子元素、事件监听器等等。

4. 如果需要的话，使用 [` 和[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot) 定义一个HTML模板。再次使用常规DOM方法克隆模板并将其附加到您的shadow DOM中。

5. 在页面任何您喜欢的位置使用自定义元素，就像使用常规HTML元素那样。

   

### [Custom Elements](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements)

[`CustomElementRegistry`](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry) 接口的实例用来处理 web 文档中的 custom elements — 该对象允许你注册一个 custom element，返回已注册 custom elements 的信息，等等。

[`CustomElementRegistry.define()`](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define) 方法用来注册一个 custom element，该方法接受以下参数：

- 表示所创建的元素名称的符合 [`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString) 标准的字符串。注意，custom element 的名称不能是单个单词，且其中[必须要有短横线](https://html.spec.whatwg.org/#valid-custom-element-name)。
- 用于定义元素行为的 [类](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 。
- `可选参数`，一个包含 `extends` 属性的配置对象，是可选参数。它指定了所创建的元素继承自哪个内置元素，可以继承任何内置元素。



共有两种 custom elements：

- **Autonomous custom elements** 是独立的元素，它不继承其他内建的HTML元素。你可以直接把它们写成HTML标签的形式，来在页面上使用。例如 `<popup-info>`，或者是`document.createElement("popup-info")`这样。
- **Customized built-in elements** 继承自基本的HTML元素。在创建时，你必须指定所需扩展的元素（正如上面例子所示），使用时，需要先写出基本的元素标签，并通过 [`is`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-is) 属性指定custom element的名称。例如`<p is="word-count">`, 或者 `document.createElement("p", { is: "word-count" })`。



**生命周期**：

在custom element的构造函数中，可以指定多个不同的回调函数，它们将会在元素的不同生命时期被调用

- `connectedCallback`：当 custom element首次被插入文档DOM时，被调用。
- `disconnectedCallback`：当 custom element从文档DOM中删除时，被调用。
- `adoptedCallback`：当 custom element被移动到新的文档时，被调用。
- `attributeChangedCallback`: 当 custom element增加、删除、修改自身属性时，被调用。



### [Shadow DOM](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)

Web components 的一个重要属性是封装——可以将标记结构、样式和行为隐藏起来，并与页面上的其他代码相隔离，保证不同的部分不会混在一起，可使代码更加干净、整洁。其中，Shadow DOM 接口是关键所在，它可以将一个隐藏的、独立的 DOM 附加到一个元素上。本篇文章将会介绍 Shadow DOM 的基础使用。

- Shadow host：一个常规 DOM节点，Shadow DOM 会被附加到这个节点上。
- Shadow tree：Shadow DOM内部的DOM树。
- Shadow boundary：Shadow DOM结束的地方，也是常规 DOM开始的地方。
- Shadow root: Shadow tree的根节点。

Shadow DOM 不是一个新事物——在过去的很长一段时间里，浏览器用它来封装一些元素的内部结构。以一个有着默认播放控制按钮的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video) 元素为例。你所能看到的只是一个 `<video>` 标签，实际上，在它的 Shadow DOM 中，包含了一系列的按钮和其他控制器。Shadow DOM 标准允许你为你自己的元素（custom element）维护一组 Shadow DOM。



可以使用 [`Element.attachShadow()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow) 方法来将一个 shadow root 附加到任何一个元素上。它接受一个配置对象作为参数，该对象有一个 `mode` 属性，值可以是 `open` 或者 `closed`。

`open` 表示可以通过页面内的 JavaScript 方法来获取 Shadow DOM，例如使用 [`Element.shadowRoot`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/shadowRoot) 属性。

如果你将一个 Shadow root 附加到一个 Custom element 上，并且将 `mode` 设置为 `closed`，那么就不可以从外部获取 Shadow DOM 了——`myCustomElem.shadowRoot` 将会返回 `null`。浏览器中的某些内置元素就是如此，例如`<video>`，包含了不可访问的 Shadow DOM。

请注意， 因为`link`元素不会阻塞 shadow root 的绘制, 因此在加载样式表时可能会出现未添加样式内容（FOUC），导致闪烁。



### [Templates and Slots](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_templates_and_slots)（模版与插槽）

Template: 当您必须在网页上重复使用相同的标记结构时，使用某种模板而不是一遍又一遍地重复相同的结构是有意义的。以前这是可行的，但HTML [` 元素使它更容易实现(这在现代浏览器中得到了很好的支持)。 此元素及其内容不会在DOM中呈现，但仍可使用JavaScript去引用它。

Slot: 插槽由其`name`属性标识，并且允许您在模板中定义占位符，当在标记中使用该元素时，该占位符可以填充所需的任何HTML标记片段。 
