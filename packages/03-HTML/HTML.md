# HTML



[HTML Standard](https://whatwg-cn.github.io/html/)

[TOC]



___



##  1. [HTML5 新增哪些特性](https://gpingfeng.github.io/front-end-interview/#/question/index?id=html5-新增哪些特性)

[前端面试之html5新特性](https://zhuanlan.zhihu.com/p/109716425)



- 增强型表单
  - 新增元素
    - tel元素，表示电话号码。
    - email元素，表示电子邮件地址文本框。
    - url元素，表示网页的url。
    - search元素，用于搜索引擎，比如在站点顶部显示的搜索框。
    - range元素，特定值范围内的数值选择器，典型的显示方式是滑动条。
    - number元素，只包含数值的字段。
    - color元素，颜色选择器，基于调色盘或者取色板进行选择。
    - datetime元素，显示完整的日期和时间，包括时区。
    - datetime-local，显示日期和时间。
    - time元素，不含时区的时间选择器和指示器。
    - date元素，日期选择器。
    - week元素，某年中的周选择器。
    - month元素，某年中的月选择器。
  - 新特性
    - placeholder
    - autocomplete
    - autofocus
    - spellcheck
    - list特性和datalist元素。通过组合使用list特性和datalist元素，开发人员能够为某个输入型控件构造一张选值列表。
    - min和max
    - step
    - required
- 语义标签
- 视频和音频（video和audio）
- Canvas
- SVG
- 地理定位（Geolocation API）
- 拖放API
- WebSocket
- WebWorker
- WebStorage
- 跨文档消息通信
  - PostMessage
  - XMLHttpRequest Level2
    - 跨源请求
    - 进度事件
- Notification
  - [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/notification)
  - [简单了解HTML5中的Web Notification桌面通知](https://www.zhangxinxu.com/wordpress/2016/07/know-html5-web-notification/)
  



### 新增元素：

#### 结构元素

1. article元素，表示页面中的一块与上下文不相关的独立内容，比如博客中的一篇文章。
2. aside元素，表示article内容之外的内容，辅助信息。
3. header元素，表示页面中一个内容区块或整个页面的页眉。
4. hgroup元素，用于对页面中一个区块或整个页面的标题进行组合。
5. footer元素，表示页面中一个内容区块或整个页面的页脚。
6. figure元素，表示媒介内容的分组，以及它们的标题。
7. section元素，表示页面中一个内容区块，比如章节。
8. nav元素，表示页面中的导航链接。

#### 其他元素

1. video元素，用来定义视频。
2. audio元素，用来定义音频。
3. canvas元素，用来展示图形，该元素本身没有行为，仅提供一块画布。
4. embed元素，用来插入各种多媒体，格式可以是Midi、Wav、AIFF、AU、MP3等。
5. mark元素，用来展示高亮的文字。
6. progress元素，用来展示任何类型的任务的进度。
7. meter元素，表示度量衡，定义预定义范围内的度量。
8. time元素，用来展示日期或者时间。
9. command元素，表示命令按钮。
10. details元素，用来展示用户要求得到并且可以得到的细节信息。
11. summary元素，用来为details元素定义可见的标题。
12. datalist元素，用来展示可选的数据列表，与input元素配合使用，可以制作出输入值的下拉列表。
13. datagrid元素，也用来展示可选的数据列表，以树形列表的形式来显示。
14. keygen元素，表示生成密匙。
15. output元素，表示不同类型的输出。
16. source元素，为媒介元素定义媒介资源。
17. menu元素，表示菜单列表。
18. ruby元素，表示ruby注释， rt元素表示字符的解释或发音。 rp元素在ruby注释中使用，以定义不支持ruby元素的浏览器所显示的内容。
19. wbr元素，表示软换行。与br元素的区别是：br元素表示此处必须换行，而wbr元素的意思是浏览器窗口或父级元素的宽度够宽时。不进行换行，而当宽度不够时，主动在此处进行换行。
20. bdi元素，定义文本的文本方向，使其脱离其周围文本的方向设置。
21. dialog元素，表示对话框或窗口。



废除了一些元素：

- 纯表现元素。可以用CSS替代的元素
  - basefont、big、center、font、s、strike、tt、u
- 对可用性产生负面影响的元素
  - frameset、frame和noframes
- 只有部分浏览器支持的元素
- applet、bgsound、blink、marquee等

___



## 2. src和href的区别

src和href都是**用来引用外部的资源**，它们的区别如下：

- **src：** 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src会将其指向的资源下载并应⽤到⽂档内，如请求js脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在页面底部。
- **href：** 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在a、link等标签上。

___



## 3. 对HTML语义化的理解

**语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）**。通俗来讲就是用正确的标签做正确的事情。

我们应该使用合适的标签来划分网页内容的结构。html 的本质作用其实就是定义网页文档的结构，一个语义化的文档，能够使页面的结构更加清晰，易于理解。这样不仅有利于开发者的维护和理解，同时也能够使机器对文档内容进行正确的解读。比如说我们常用的 b 标签和 strong 标签，它们在样式上都是文字的加粗，但是 strong 标签拥有强调的语义。

对于一般显示来说，可能我们看上去没有差异，但是对于机器来说，就会有很大的不同。如果用户使用的是屏幕阅读器来访问网页的话，使用 strong 标签就会有明显的语调上的变化，而 b 标签则没有。如果是搜索引擎的爬虫对我们网页进行分析的话，那么它会依赖于 html 标签来确定上下文和各个关键字的权重，一个语义化的文档对爬虫来说是友好的，是有利于爬虫对文档内容解读的，从而有利于我们网站的 SEO 。从 html5 我们可以看出，标准是倾向于以语义化的方式来构建网页的，比如新增了 header 、footer 这些语义标签，删除了 big 、font 这些没有语义的标签。

语义化的优点如下：

- 便于用户阅读，样式丢失也能呈现较好的内容和代码结构
- 利于SEO，搜索引擎的爬虫会根据标签来确定上下文和各个关键字的权重
- 利于设备解析，如屏幕阅读器、盲人阅读器等，利于无障碍阅读，提高可访问性
- 更好的可读性，利于协作开发和维护，与CSS3更和谐

常见的语义化标签：

| 标签      | 描述                               |
| --------- | ---------------------------------- |
| <header>  | 定义了文档的头部区域               |
| <footer>  | 定义了文档的尾部区域               |
| <nav>     | 定义文档的导航                     |
| <section> | 定义文档中的节                     |
| <article> | 定义文章                           |
| <aside>   | 定义页面以外的内容                 |
| <details> | 定义用户可以看到或者隐藏的额外细节 |
| <summary> | 标签包含details元素的标题          |
| <dialog>  | 定义对话框                         |
| <figure>  | 定义自包含内容，如图表             |
| <main>    | 定义文档主内容                     |
| <mark>    | 定义文档的主内容                   |
| <time>    | 定义日期/时间                      |




___



## 4. DOCTYPE(⽂档类型) 的作⽤

[怪异模式和标准模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

DOCTYPE是HTML5中一种标准通用标记语言的文档类型声明，它的目的是**告诉浏览器（解析器）应该以什么样（html或xhtml）的文档类型定义来解析文档**，不同的渲染模式会影响浏览器对 CSS 代码甚⾄ JavaScript 脚本的解析。它必须声明在HTML⽂档的第⼀⾏。

浏览器渲染页面的两种模式（可通过document.compatMode获取，比如，语雀官网的文档类型是**CSS1Compat**）：

- **CSS1Compat：标准模式（Strick mode）**，默认模式，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。
- **BackCompat：怪异模式(混杂模式)(Quick mode)**，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。

### 

我们常用的“`<!DOCTYPE html>`"就是用于 确保浏览器按照最佳的相关规范（CSS1Compat）进行渲染，而不是使用一个不符合规范的渲染模式（怪异模式BackCompat）。





____



## 5. script标签中defer和async的区别
看图就行了。

如果没有defer或async属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。

下图可以直观的看出三者之间的区别: ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0a8a139519f46dfa2d1992c58eb5397~tplv-k3u1fbpfcp-watermark.awebp) 其中蓝色代表js脚本网络加载时间，红色代表js脚本执行时间，绿色代表html解析。

**defer 和 async属性都是去异步加载外部的JS脚本文件，它们都不会阻塞页面的解析**，其区别如下：

- **执行顺序：** 多个带async属性的标签，不能保证加载的顺序；多个带defer属性的标签，按照加载顺序执行；
- **脚本是否并行执行：\**async属性，表示\**后续文档的加载和执行与js脚本的加载和执行是并行进行的**，即异步执行；defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。

___



## 6. 常⽤的meta标签有哪些

`meta` 标签由 `name` 和 `content` 属性定义，**用来描述网页文档的属性**，比如网页的作者，网页描述，关键词等，除了HTTP标准固定了一些`name`作为大家使用的共识，开发者还可以自定义name。

常用的meta标签： （1）`charset`，用来描述HTML文档的编码类型：

```html
<meta charset="UTF-8" >
```

（2） `keywords`，页面关键词：

```html
<meta name="keywords" content="关键词" />

```

（3）`description`，页面描述：

```html
<meta name="description" content="页面描述内容" />

```

（4）`refresh`，页面重定向和刷新：

```html
<meta http-equiv="refresh" content="0;url=" />

```

（5）`viewport`，适配移动端，可以控制视口的大小和比例：

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

```

其中，`content` 参数有以下几种：

- `width viewport` ：宽度(数值/device-width)
- `height viewport` ：高度(数值/device-height)
- `initial-scale` ：初始缩放比例
- `maximum-scale` ：最大缩放比例
- `minimum-scale` ：最小缩放比例
- `user-scalable` ：是否允许用户缩放(yes/no）

（6）搜索引擎索引方式：

```html
<meta name="robots" content="index,follow" />

```

其中，`content` 参数有以下几种：

- `all`：文件将被检索，且页面上的链接可以被查询；
- `none`：文件将不被检索，且页面上的链接不可以被查询；
- `index`：文件将被检索；
- `follow`：页面上的链接可以被查询；
- `noindex`：文件将不被检索；
- `nofollow`：页面上的链接不可以被查询。

___



## 7. img的srcset属性的作用？

响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的srcset属性。srcset属性用于设置不同屏幕密度下，img 会自动加载不同的图片。用法如下：

```html
<img src="image-128.png" srcset="image-256.png 2x" />

```

使用上面的代码，就能实现在屏幕密度为1x的情况下加载image-128.png, 屏幕密度为2x时加载image-256.png。

按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有1x,2x,3x,4x四种，如果每一个图片都设置4张图片，加载就会很慢。所以就有了新的srcset标准。代码如下：

```html
<img src="image-128.png"
     srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
     sizes="(max-width: 360px) 340px, 128px" />

```

其中srcset指定图片的地址和对应的图片质量。sizes用来设置图片的尺寸零界点。对于 srcset 中的 w 单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片。

sizes语法如下：

```html
sizes="[media query] [length], [media query] [length] ... "

```

sizes就是指默认显示128px, 如果视区宽度大于360px, 则显示340px。 



___



## 8. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

- 行内元素有：`a b span img input select strong`；
- 块级元素有：`div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p`；

空元素，即没有内容的HTML元素。空元素是在开始标签中关闭的，也就是空元素没有闭合标签：

- 常见的有：`<br>`、`<hr>`、`<img>`、`<input>`、`<link>`、`<meta>`；
- 鲜见的有：`<area>`、`<base>`、`<col>`、`<colgroup>`、`<command>`、`<embed>`、`<keygen>`、`<param>`、`<source>`、`<track>`、`<wbr>`。

___



## 9. 说一下 web worker

[Web Worker ——MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

在 HTML 页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。 并且通过 postMessage 将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。

如何创建 web worker：

1. 检测浏览器对于 web worker 的支持性
2. 创建 web worker 文件（js，回传函数等）
3. 创建 web worker 对象

- 一个worker是使用一个构造函数创建的一个对象(e.g. [`Worker()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/Worker)) 运行一个命名的JavaScript文件 - 这个文件包含将在工作线程中运行的代码; workers 运行在另一个全局上下文中,不同于当前的[`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window). 因此，在 [`Worker`](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker) 内通过 [`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)获取全局作用域 (而不是[`self`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/self)) 将返回错误。
- 通过postMessage通信，且一般是值的拷贝（结构化克隆算法，支持循环引用的对象），也可以移交值的控制权，移交后该值将在之前的上下文中被移除，无法访问。
- 分专用worker和共享worker，专用workers是指标准worker仅在单一脚本中被使用；共享worker的上下文是[`SharedWorkerGlobalScope` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope)对象）。一个专用worker仅仅能被首次生成它的脚本使用，而共享worker可以同时被多个脚本使用。
- 在worker内，不能直接操作DOM节点，也不能使用[`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)对象的默认方法和属性。然而你可以使用大量window对象之下的东西，包括WebSockets，IndexedDB以及FireFox OS专用的Data Store API等数据存储机制。查看[Functions and classes available to workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Functions_and_classes_available_to_workers)获取详情。

____



## 10. HTML5的离线储存怎么使用，它的工作原理是什么

### Manifest（应用缓存）

[聊一聊H5应用缓存-Manifest](https://louiszhai.github.io/2016/11/25/manifest/)

离线存储指的是：在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

**原理：**HTML5的离线存储是基于一个新建的 `.appcache` 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示

**使用方法：** （1）创建一个和 html 同名的 manifest 文件，然后在页面头部加入 manifest 属性：

```html
<html lang="en" manifest="index.manifest">

```

（2）在 `cache.manifest` 文件中编写需要离线存储的资源：

```html
CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css
    NETWORK:
    resourse/logo.png
    FALLBACK:
    / /offline.html

```

- **CACHE**: 表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来。
- **NETWORK**: 表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说 CACHE 的优先级更高。
- **FALLBACK**: 表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问 offline.html 。

（3）在离线状态时，操作 `window.applicationCache` 进行离线缓存的操作。

**如何更新缓存：**

（1）更新 manifest 文件

（2）通过 javascript 操作

（3）清除浏览器缓存

**注意事项：**

（1）浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。

（2）如果 manifest 文件，或者内部列举的某一个文件不能正常下载，整个更新过程都将失败，浏览器继续全部使用老的缓存。

（3）引用 manifest 的 html 必须与 manifest 文件同源，在同一个域下。

（4）FALLBACK 中的资源必须和 manifest 文件同源。

（5）当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。

（6）站点中的其他页面即使没有设置 manifest 属性，请求的资源如果在缓存中也从缓存中访问。

（7）当 manifest 文件发生改变时，资源请求本身也会触发更新。

> 刚查mdn，这个属性已经被废弃了，不过其特性还是不错的，可以仅作为历史了解。
>
> 应用缓存主要是通过manifest文件来注册被缓存的静态资源，已经被废弃，因为他的设计有些不合理的地方，他在缓存静态文件的同时，也会默认缓存html文件。这导致页面的更新只能通过manifest文件中的版本号来决定。所以，应用缓存只适合那种常年不变化的静态网站。如此的不方便，也是被废弃的重要原因。
>
> PWA也运用了该文件，不同于manifest简单的将文件通过是否缓存进行分类，PWA用manifest构建了自己的APP骨架，并运用Servie Worker来控制缓存。
>
> ServiceWorker作为PWA的核心一环，我们需要掌握其相关知识。

### ServiceWorker

[借助Service Worker和cacheStorage缓存及离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)。

[网易云课堂 Service Worker 运用与实践](https://mp.weixin.qq.com/s/3Ep5pJULvP7WHJvVJNDV-g)



sw最重要的**工作原理**就是：

1、后台线程：独立于当前网页线程；

2、网络代理：在网页发起请求时代理，来缓存文件。



sw 是基于 HTTPS 的，因为Service Worker中涉及到请求拦截，所以必须使用HTTPS协议来保障安全。

如果是本地调试的话，localhost是可以的。



**生命周期**

![image-20211117101856955](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211117101856955.png)



由于直接写原生的sw.js，比较繁琐和复杂，所以一些工具就出现了，而**Workbox**是其中的佼佼者，由google团队推出。



ServiceWorker作为PWA中的关键一环，但又独立于PWA。

PWA的核心技术包括：

1. Web App Manifest – 在主屏幕添加app图标，定义手机标题栏颜色之类

   - https://developer.mozilla.org/zh-CN/docs/Web/Manifest

   - 与html元素属性的manifest不同，这里是作为link引入的，如：

     <link rel="manifest" href="/manifest.json">

2. Service Worker – 缓存，离线开发，以及地理位置信息处理等

3. App Shell – 先显示APP的主结构，再填充主数据，更快显示更好体验

4. Push Notification – 消息推送，之前有写过“[简单了解HTML5中的Web Notification桌面通知](http://www.zhangxinxu.com/wordpress/2016/07/know-html5-web-notification/)”

____



## 11. 浏览器是如何对 HTML5 的离线储存资源进行管理和加载？

### manifest

- **在线的情况下**，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问页面 ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，就会重新下载文件中的资源并进行离线存储。
- **离线的情况下**，浏览器会直接使用离线存储的资源。

### ServiceWorker

[借助Service Worker和cacheStorage缓存及离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)

- 通过自动化工具，根据文件名生成hash值作为版本号，这样每次构建发布时都会发布新的版本。

- 使用WorkBox

___



## 12. title与h1的区别、b与strong的区别、i与em的区别？

- strong标签有语义，是起到加重语气的效果，而b标签是没有的，b标签只是一个简单加粗标签。b标签之间的字符都设为粗体，strong标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重strong标签。
- title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取有很大的影响
- **i内容展示为斜体，em表示强调的文本**

> 感觉这题没什么营养，可以看一眼跳了。

___



## 13. **iframe 有那些优点和缺点？**

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

**优点：**

- 用来加载速度较慢的内容（如广告）
- 可以使脚本可以并行下载
- 可以实现跨子域通信
- 模块分离，便于更改，如果有多个网页引用iframe，只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷

**缺点：**

- iframe 会阻塞主页面的 onload 事件
- 无法被一些搜索引擎索识别
- 会产生很多页面，不容易管理
- 有可能iframe中的资源占用了可用连接而阻塞了主页面的资源加载

____



## 14. label 的作用是什么？如何使用？

label标签来定义表单控件的关系：当用户选择label标签时，浏览器会自动将焦点转到和label标签相关的表单控件上。

- 使用方法1：

```html
<label for="mobile">Number:</label>
<input type="text" id="mobile"/>

```

- 使用方法2：

```html
<label>Date:<input type="text"/></label>

```

___



## 15. Canvas和SVG的区别

[选择 Canvas 还是 SVG](https://g2.antv.vision/zh/docs/manual/tutorial/renderers)

[使用 Canvas 或者 SVG 渲染——Echarts](https://echarts.apache.org/handbook/zh/best-practices/canvas-vs-svg/)

[When to Use SVG vs. When to Use Canvas](https://css-tricks.com/when-to-use-svg-vs-when-to-use-canvas/)

**（1）SVG：** SVG可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言**XML**描述的2D图形的语言，SVG基于XML就意味着SVG DOM中的每个元素都是可用的，可以为某个元素附加Javascript事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

其特点如下：

- 不依赖分辨率
- 支持事件处理器，方便做交互
- 最适合带有大型渲染区域但图元数量少的的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- 不适合游戏应用（片面，看类型）
- 元素属性变化浏览器自动进行重绘
- 原生的动画能力使用方便（如路径动画等）
- 可以给元素加属性，利于SEO
- 内存占用较低

**（2）Canvas：** Canvas是画布，通过Javascript来绘制2D图形，是逐像素进行渲染的。位图。

其特点如下：

- 依赖分辨率
- 不支持事件处理器，原生没有鼠标侦测等事件侦测功能。
- 弱的文本渲染能力
- 能够以 .png 或 .jpg 格式保存结果图像
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘。（适合图形小但密集的场景）
- 效率更高（GPU处理位图）
- 基于位图，可以轻松实现截图等功能。

注：矢量图，也称为面向对象的图像或绘图图像，在数学上定义为一系列由线连接的点。矢量文件中的图形元素称为对象。每个对象都是一个自成一体的实体，它具有颜色、形状、轮廓、大小和屏幕位置等属性。

> 存在意味着合理 不如问两者分别适合什么场景  
>
> canvas是个像素库 绘制完了基本不记录过程 更快 ，svg建立了一大堆可交互对象 本性长于交互 但性能会弱些 。
>
> 但这种界限也在被一些js库打破 如fabric.js ，以及百度林峰的zRender 。这些库在canvas上构建一层mvc层 可以如svg一样操作和交互 性能上往往比原生svg要好一些 正如此 在基于zRender的可视化库可以绘制数万个点 倘使用svg 早挂了。而webgl-canvas实时绘点是百万级的 。
>
> 所以看你的场景 如果pc端强交互少元素 svg胜出 |  pc端弱交互而强性能 用canvas | pc端超强性能 webgl-canvas | 移动端弱交互 原生canvas挺好（木有ie的世界真好） | 移动端强交互 刚才提到的一些基于canvas的库不错（svg性能很挫）。
>
> 链接：https://www.zhihu.com/question/19690014/answer/47464058

![image-20211117113529724](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211117113529724.png)



“Canvas 性能更好，适合更大量数据的渲染”这句话是片面的。底层来看，Canvas 的性能受画布尺寸影响更大，而 SVG 的性能受图形元素个数影响更大。而且在小数据量的情况下，SVG 的方案通常内存占用会更小，做缩放、平移等操作的时候往往帧率也更高。

比较流行的看法是 SVG 做定制和交互更有优势，因为有类似 DOM 的结构，能快速应用浏览器底层的鼠标事件、CSS 样式、CSS3 动画等。不过基于 Canvas 做上层封装后也能实现类似的定制和交互，并且自由度更高。

如果单就图表库的视角来看，选择 Canvas 和 SVG 各有千秋。小画布、大数据量的场景适合用 Canvas，譬如热力图、大数据量的散点图等。如果画布非常大，有缩放、平移等高频的交互，或者移动端对内存占用量非常敏感等场景，可以使用 SVG 的方案。

___



## 16. head 标签有什么作用，其中什么标签必不可少？

 head标签用于定义文档的头部，它是所有头部元素的容器。 其中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等。

文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。

下面这些标签可用在 head 部分：`<base>, <link>, <meta>, <script>, <style>, <title>`。

其中 `<title>` 定义文档的标题，它是 head 部分中唯一必需的元素。



___



## 17. 文档声明（Doctype）和`<!Doctype html>`有何作用? 严格模式与混杂模式如何区分？它们有何意义?

**文档声明的作用：** 文档声明是为了告诉浏览器，当前`HTML`文档使用什么版本的`HTML`来写的，这样浏览器才能按照声明的版本来正确的解析。

**<!Doctype html>的作用：**`<!doctype html>` 的作用就是让浏览器进入标准模式，使用最新的 `HTML5` 标准来解析渲染页面；如果不写，浏览器就会进入混杂模式，我们需要避免此类情况发生。

**严格模式与混杂模式的区分：**

- **严格模式**： 又称为标准模式，指浏览器按照`W3C`标准解析代码；
- **混杂模式**： 又称怪异模式、兼容模式，是指浏览器用自己的方式解析代码。混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作；

**区分**：网页中的`DTD`，直接影响到使用的是严格模式还是浏览模式，可以说`DTD`的使用与这两种方式的区别息息相关。

- 如果文档包含严格的`DOCTYPE` ，那么它一般以严格模式呈现（**严格 DTD ——严格模式**）；
- 包含过渡 `DTD` 和 `URI` 的 `DOCTYPE` ，也以严格模式呈现，但有过渡 `DTD` 而没有 `URI` （统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现（**有 URI 的过渡 DTD ——严格模式；没有 URI 的过渡 DTD ——混杂模式**）；
- `DOCTYPE` 不存在或形式不正确会导致文档以混杂模式呈现（**DTD不存在或者格式不正确——混杂模式**）；
- `HTML5` 没有 `DTD` ，因此也就没有严格模式与混杂模式的区别，`HTML5` 有相对宽松的规则，实现时，已经尽可能大的实现了向后兼容(**HTML5 没有严格和混杂之分**)。

总之，**严格模式让各个浏览器统一执行一套规范，兼容模式保证了旧网站的正常运行。**

> 这道题过时了，现在HTML5只有一种固定的声明方式：<!DOCTYPE html>



____



## 18. 浏览器乱码的原因是什么？如何解决？

**产生乱码的原因：**

- 网页源代码是`gbk`的编码，而内容中的中文字是`utf-8`编码的，这样浏览器打开即会出现`html`乱码，反之也会出现乱码；
- `html`网页编码是`gbk`，而程序从数据库中调出呈现是`utf-8`编码的内容也会造成编码乱码；
- 浏览器不能自动检测网页编码，造成网页乱码。

**解决办法：**

- 使用软件编辑HTML网页内容；

- 如果网页设置编码是`gbk`，而数据库储存数据编码格式是`UTF-8`，此时需要程序查询数据库数据显示数据前进行程序转码；

- 如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换。

  

>​	目前Chrome已经取消了设置编码的功能，由于浏览器能够识别网页设置的编码类型并进行解码，因此手动设置编码的功能使用频率较低，同时也为了防止一些因为设置错误的浏览器编码方式而导致页面乱码的情况出现。从某种角度而言，这意味着开发者更需要遵循规范进行网页开发，为网页设置编码方式，主流IDE默认生成的模版和Chrome的默认编码方式都是utf-8。
>
>感兴趣可以看看：https://bugs.chromium.org/p/chromium/issues/detail?id=597488
>
>如果实在出现了乱码，可以在谷歌商店下载Set Character Encoding进行设置正确的编码方式即可。

___



## 19. 渐进增强和优雅降级之间的区别

**（1）渐进增强（progressive enhancement）**：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果、交互等方面的改进和追加功能，以达到更好的用户体验。 **（2）优雅降级 graceful degradation**： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。

**两者区别：**

- 优雅降级是从复杂的现状开始的，并试图减少用户体验的供给；而渐进增强是从一个非常基础的，能够起作用的版本开始的，并在此基础上不断扩充，以适应未来环境的需要；
- 降级（功能衰竭）意味着往回看，而渐进增强则意味着往前看，同时保证其根基处于安全地带。

“优雅降级”观点认为应该针对那些最高级、最完善的浏览器来设计网站。而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。 在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。

“渐进增强”观点则认为应关注于内容本身。内容是建立网站的诱因，有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得“渐进增强”成为一种更为合理的设计范例。这也是它立即被 Yahoo 所采纳并用以构建其“分级式浏览器支持 (Graded Browser Support)”策略的原因所在。



___



## 20. 说一下 HTML5 drag API

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)

- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。
- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。

>  文档同级目录下有小demo



____



## 21. attribute 和 property 的区别是什么？

attribute是内容属性（标签属性），property是IDL（接口描述语言）属性，一般来说这两个属性的值是同步的，除自定义属性以外。

内容属性的值通常是字符串，而IDL属性则可能是string、number、boolean。

内容属性需要你在内容（HTML 代码）中设置，而且可以通过 [`element.setAttribute()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute) 或 [`element.getAttribute()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute)来设置。内容属性常常是一个字符串，即使里面的值是一个证书。例如，要将 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) 元素的 `maxlength` 设置为 42，你需要在元素中调用 `setAttribute("maxlength", "42")` 。

IDL 属性（attribute）也就是一个 JavaScript 属性（property）。你可以使用 JavaScript 属性如 `element.foo` 来设置这些属性。当你需要获取 IDL 属性的值时，IDL 属性总会使用隐含的内容属性的值（可能先经过转换）来返回一个值。同样地，当你设置这个值时，这个值会保存在内容属性中。换句话说，IDL 属性本质上反映了内容属性。

> 需要注意的是，boolean类型的内容属性在赋值时，不是通过true和false来决定的，而是其值是否为空。如果一个布尔值属性存在，则其值是 **true**，如果不存在或值为空字符串，其值是 **false**。比如disabled="false"其实是**true**,disabled=""或不写才表示false。



___



## 22. 浏览器内核与JS引擎

浏览器最重要或者说核心的部分是“Rendering Engine”，可大概译为“渲染引擎”，不过我们一般习惯将之称为“浏览器内核”。

| 浏览器  | 内核                      | JS引擎                                                       | 备注                                                         |
| ------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IE      | Trident(<=IE10); EdgeHTML | JScript(<IE9);Chakra(IE9+及Edge)                             | IE、猎豹、360极速、百度浏览器。EdgeHTML是在Trident的基础上删除过时的旧技术支持代码，扩展和优化了对新技术的支持。<br />采用Chrominum为核心的Edge在2020年正式发布。 |
| Safari  | Webkit/Webkit2            | JSCore/Nitro(4+)                                             | WebKit由苹果研发和开源。Webkit引擎包括了WebCore排版引擎和JSCore解析引擎，均是从KDE的KHTML和KJS引擎衍生而来。<br />Webkit2发布于2010，实现了元件的抽象化，更高效的渲染。 |
| firefox | Gecko                     | SpiderMonkey(<3.0);<br />TraceMonkey(<3/6);J<br />aegerMonkey(4.0+);<br />最新的IONmonkey（对外接口仍是Spider Monkey） | 这几年稍微没落。                                             |
| Chrome  | Chromium（WebKit）/Blink  | V8                                                           | 最开始Chromium使用的渲染引擎是fork自Webkit的并进行一些优化。后来由于Webkit2与Chromium的沙箱设计存在冲突，于是联手Opera自研了Blink引擎，逐步脱离Webkit。Blink是Webkit的分支。目前国内大部分国产浏览器最新版都采用Blink内核进行二次开发。 |
| Opera   | Presto；Blink             | Futhark（9.5-10.2);Carakan（10.5-12.1）<br />都已停止开发    | Opera在2013年V12.16之前使用的是Opera Software公司开发的Presto引擎，之后连同谷歌研发和选择Blink作为Opera浏览器的排版内核。 |



> Chromium是一个谷歌开源浏览器项目，是Chrome浏览器的基础，其渲染引擎开始使用的是Webkit。



国产浏览器中部分是单核，大多数为双核：

一、使用的Trident单核，如：2345、世界之窗；
二、使用Trident+Webkit/Blink双核，如：qq、UC、猎豹、360、百度；
三、使用Webkit/Blink单核，如：搜狗、遨游。

双核的作用比如360的高速模式和兼容模式，兼容可以切到Trident内核去测试或兼容面向ie开发的网页，且进行支付或网上银行的访问时使用的是Trident内核。







____



## 参考资料

- https://zhuanlan.zhihu.com/p/398920738
- 
