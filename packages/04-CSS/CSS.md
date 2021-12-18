CSS专题

## 好文推荐
- [【面试题】CSS知识点整理(附答案)](https://github.com/funnycoderstar/blog/issues/126)
- [【1.2W】精心整理33个css知识干货助你升级](https://juejin.cn/post/6854573221291753480)
- [1.5 万字 CSS 基础拾遗（核心知识、常见需求）](https://juejin.cn/post/6941206439624966152#heading-0)



____



## 1. css解析规则

CSS选择器是 **从右向左解析** 。

若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。

若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找父节点直到找到根元素或者满足条件的匹配规则，则结束这个分支的遍历。

两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。

举例说明：

```
.mod-nav h3 span { font-size: 16px; }
```

为什么从右向左的规则要比从左向右的高效？
![image-20211218104200103](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211218104200103.png)

若从左向右的匹配，过程是：从`.mod-nav`开始，遍历子节点`header`和子节点`div`，然后各自向子节点遍历。在右侧`div`的分支中，最后遍历到叶子节点`a`，发现不符合规则，需要回溯到`ul`节点，再遍历下一个`li-a`，假如有1000个`li`，则这`1000`次的遍历与回溯会损失很多性能。

再看看从右至左的匹配：先找到所有的最右节点span，对于每一个`span`，向上寻找节点`h3`，由`h3`再向上寻找`class=mod-nav`的节点，最后找到根元素html则结束这个分支的遍历。

很明显，两种匹配规则的性能差别很大。之所以会差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点）；而从左向右的匹配规则的性能都浪费在了失败的查找上面。

> 答案来源于 [CSS选择器从右向左的匹配规则](http://www.cnblogs.com/zhaodongyu/p/3341080.html)

___



## 2.  flex 1

**flex: 1**是 flex: 1 1 0的简写。

flex的**初始值**为 flex: 0 1 auto。

flex属性是以下CSS属性的简写:

- [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)（属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大）
- [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)（属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小）
- [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)（属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小）





可以使用一个，两个或三个值来指定 `flex`属性。

**单值语法**: 值必须为以下其中之一:

- 一个无单位数(<number>): 它会被当作`flex:<number> 1 0;` `<flex-shrink>`的值被假定为1，然后`<flex-basis>` 的值被假定为`0`。
- 一个有效的**宽度([`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width))**值: 它会被当作 `<flex-basis>的值。`
- 关键字`none`，`auto`或`initial`.

**双值语法**: 第一个值必须为一个无单位数，并且它会被当作 `<flex-grow>` 的值。第二个值必须为以下之一：

- 一个无单位数：它会被当作 `<flex-shrink>` 的值。
- 一个有效的宽度值: 它会被当作 `<flex-basis>` 的值。

**三值语法:**

- 第一个值必须为一个无单位数，并且它会被当作 `<flex-grow>` 的值。
- 第二个值必须为一个无单位数，并且它会被当作 `<flex-shrink>` 的值。
- 第三个值必须为一个有效的宽度值， 并且它会被当作 `<flex-basis>` 的值。



### 取值

- `initial`

  元素会根据自身宽高设置尺寸。它会缩短自身以适应 flex 容器，但不会伸长并吸收 flex 容器中的额外自由空间来适应 flex 容器 。相当于将属性设置为"`flex: 0 1 auto`"。

- `auto`

  元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 "`flex: 1 1 auto`".

- `none`

  元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为"`flex: 0 0 auto`"。

- `<'flex-grow'>`

  定义 flex 项目的 [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow) 。负值无效。省略时默认值为 1。 (初始值为 `0`)

- `<'flex-shrink'>`

  定义 flex 元素的 [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink) 。负值无效。省略时默认值为`1`。 (初始值为 `1`)

- `<'flex-basis'>`

  定义 flex 元素的 [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis) 属性。若值为`0`，则必须加上单位，以免被视作伸缩性。省略时默认值为 0。(初始值为 auto)



___



## 3. BFC

**Block Formatting Context** 即**块级格式上下文**，是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建**块格式化上下文**：

- 根元素（`<html>）`
- **绝对定位元素**（元素的 [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 为 **`absolute`** 或 **`fixed`**）
- [`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow) 计算值(Computed)不为 `visible` 的块元素
- 浮动元素（元素的 [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 不是 `none`）
- display为：flex、grid、inline-flex、inline-block、flow-root等
  - 弹性元素（[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `flex` 或 `inline-flex `元素的直接子元素）
  - 网格元素（[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `grid` 或 `inline-grid` 元素的直接子元素）
  - [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 值为 `flow-root` 的元素
  - 行内块元素（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `inline-block`）
  - 表格单元格（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `table-cell`，HTML表格单元格默认为该值）
  - 表格标题（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `table-caption`，HTML表格标题默认为该值）
  - 匿名表格单元格元素（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `table、``table-row`、 `table-row-group、``table-header-group、``table-footer-group`（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 `inline-table`）
- [`contain`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain) 值为 `layout`、`content `或 paint 的元素
- 多列容器（元素的 [`column-count`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-count) 或 [`column-width` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/column-width) 不为 `auto，包括 ``column-count` 为 `1`）
- `column-span` 为 `all` 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（[标准变更](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51)，[Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=709362)）。

块格式化上下文包含创建它的元素内部的所有内容。

外边距折叠（[Margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)）也只会发生在属于同一BFC的块级元素之间（注意是**垂直方向**上的折叠）。



___



## 4. 标准的CSS盒子模型及其和低版本的IE盒子模型的区别？

[box-sizing (MDN)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing) 默认为标准盒模型content-box

标准盒模型(`content-box`)：width/height = 内容宽/高度（content） + border + padding + margin

低版本IE盒子模型(`border-box`)： width/height = 内容宽/高度（content + border + padding）+ margin



标准盒模型（content-box）的`height`和`width`就是`content`的宽高，而IE盒模型（border-box）的宽高则包括`content+padding+border`部分。



标准盒模型：

```css
 .content-box, .border-box {
            width: 200px;
            height: 200px;
            border: 10px dashed greenyellow;
            background-color: dodgerblue;
        }

        .border-box {
            box-sizing: border-box;
        }
```



![image-20211218113325611](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211218113325611.png)



![image-20211218113248354](https://gitee.com/ChanningGit/image-hosting/raw/master/images/image-20211218113248354.png)



___

## 5. CSS优先级算法如何计算？

```
！important  >   内联样式   >   id   >   class   >   标签   >   通配符   >   继承   >   默认
```

#### **权重计算**

把特殊性分为4个等级，每个等级代表一类选择器，每个等级的值为其所代表的选择器的个数乘以这一等级的权值，最后把所有等级的值相加得出选择器的特殊值。

4个等级的定义如下：

> 假设
>
> 第零等：!important 权值10000
>
> 第一等：代表内联样式，如: style=””，权值为1000。 
>
> 第二等：代表ID选择器，如：#content，权值为0100。
>
> 第三等：代表类，伪类和属性选择器，如.content，权值为0010。
>
> 第四等：代表标签选择器和伪元素选择器，如div p，权值为0001。 
>
> 第五等：通用选择器（*），子选择器（>），相邻同胞选择器（+），权值为0000 示例如下：

```
**注意** 数位之间没有进制 比如说： 0,0,0,5 + 0,0,0,5 =0,0,0,10 而不是 0,0, 1, 0
#header #left ul li .first a {...}
  100.   100  1  1.  10    1
---> sum 0213
```

1. 权重相同，写在后面的会覆盖前面的
2. 权重相同，一个在写在外部样式中`link`引入，另一个在内部样式`style`引入，引入顺序后面的覆盖前面的
3. 内联样式的权重为1,0,0,0，10个id选择器的权重也为0,10,0,0，内联样式优先级高





___

## 6. CSS有哪些属性是可以继承的？

1、字体系列属性

- font-family：字体系列
- font-weight：字体的粗细
- font-size：字体的大小
- font-style：字体的风格

2、文本系列属性

- text-indent：文本缩进
- text-align：文本水平对齐
- line-height：行高 -word-spacing：单词之间的间距
- letter-spacing：中文或者字母之间的间距
- text-transform：控制文本大小写（就是uppercase、lowercase、capitalize这三个）
- color：文本颜色

3、元素可见性：

- visibility：控制元素显示隐藏

4、列表布局属性：

- list-style：列表风格，包括list-style-type、list-style-image等

5、光标属性： - cursor：光标显示为何种形态



___

## 7. 什么是回流（重排）和重绘以及其区别

### 回流 reflow

当`Render Tree`中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。

**会导致回流的操作：**

- 页面首次渲染
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变（包括外边距、内边框、边框大小、高度和宽度等）
- 元素内容变化（文字数量或图片大小，比如用户在input框中输入文字等等）
- 元素字体大小变化
- 添加或者删除**可见**的`DOM`元素
- 激活`CSS`伪类（例如：`:hover）`
- 查询某些属性或调用某些方法



### 重绘 repaint

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。



### 性能影响

**回流比重绘的代价要更高。**

有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。

现代浏览器会对频繁的回流或重绘操作进行优化：

浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。

当你访问以下属性或方法时，浏览器会立刻清空队列：

- `clientWidth`、`clientHeight`、`clientTop`、`clientLeft`
- `offsetWidth`、`offsetHeight`、`offsetTop`、`offsetLeft`
- `scrollWidth`、`scrollHeight`、`scrollTop`、`scrollLeft`
- `width`、`height`
- `getComputedStyle()`
- `getBoundingClientRect()`

因为队列中可能会有影响到这些属性或方法返回值的操作，即使你希望获取的信息与队列中操作引发的改变无关，浏览器也会强行清空队列，确保你拿到的值是最精确的。



### 如何避免

### CSS

- 避免使用`table`布局。
- 尽可能在`DOM`树的最末端改变`class`。
- 避免设置多层内联样式。
- 将动画效果应用到`position`属性为`absolute`或`fixed`的元素上。
- 避免使用`CSS`表达式（例如：`calc()`）。

### JavaScript

- 避免频繁操作样式，最好一次性重写`style`属性，或者将样式列表定义为`class`并一次性更改`class`属性。
- 避免频繁操作`DOM`，创建一个`documentFragment`，在它上面应用所有`DOM操作`，最后再把它添加到文档中。
- 也可以先为元素设置`display: none`，操作结束后再把它显示出来。因为在`display`属性为`none`的元素上进行的`DOM`操作不会引发回流和重绘。
- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。





参考来源：[浏览器的回流与重绘 (Reflow & Repaint)](https://juejin.cn/post/6844903569087266823)



___

##  8. css百分比单位相对基准

对于包含在父元素中的子元素，padding、margin等设为百分比或负值时，并不是上下边距相对于父元素高度，左右边距相对于父元素宽度。

1. width height 百分比

当元素的height、width设置为百分比时，分别基于包含它的块级对象的高度、宽度。这个是常规百分比的含义。

1. margin 百分比 `margin` 的百分比值参照其包含块的宽度进行计算。当书写模式变成纵向的时候，其参照将会变成包含块的高度。 **为什么**

> CSS权威指南中的解释：
>
> 我们认为，正常流中的大多数元素都会足够高以包含其后代元素（包括外边距），如果一个元素的上下外边距是父元素的height的百分数，就可能导致一个无限循环，父元素的height会增加，以适应后代元素上下外边距的增加，而相应的，上下外边距因为父元素height的增加也会增加。

1. padding 百分比 同上
2. width、padding 联合百分比 在标准盒模型下，` width: 100%; padding: 10% 10%;` 会导致内部元素溢出，如果遇到这种情况，一般都会使用怪异盒模型，即设置`box-sizing: border-box`，这时候`width`的值是会包含`padding`的距离的。
3. translate百分比 在translate 函数当中使用百分比是以该元素自身的宽高作为基准。
4. margin为负值
   1. margin-left,margin-right为负值
      - 元素本身没有宽度，会增加元素宽度
      - 元素本身有宽度，会产生位移
   2. margin-top为负值，不管是否设置高度，都不会增加高度，而是会产生向上的位移
   3. margin-bottom为负值的时候不会位移,而是会减少自身供css读取的高度.
5. padding 为负值 很遗憾，padding不允许指定为负，指定了也无效～

> 具体讲解及手工示例请移步[傻傻分不清css长度的(百分比|负值)基准是谁](https://juejin.cn/post/6847009773351600135)



___



## 9. link 和 @import

@import 用于告诉 CSS 引擎引入一个外部样式表。

**1、从属关系区别**

@import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

**2、加载顺序区别**

加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。

**3、兼容性区别**

@import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。

**4、DOM可控性区别**

可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。



___



## 10. 像素相关

**设备像素（Device pixels）**

设备屏幕的物理像素，表示的是屏幕的横纵有多少像素点；和屏幕分辨率是差不多的意思。

**设备像素比（DPR）**

设备像素比表示 1 个 CSS 像素等于几个物理像素。

计算公式：DPR = 物理像素数 / 逻辑像素数；

在浏览器中可以通过 window.devicePixelRatio 来获取当前屏幕的 DPR。

**像素密度（DPI/PPI）**

像素密度也叫显示密度或者屏幕密度，缩写为 DPI(Dots Per Inch) 或者 PPI(Pixel Per Inch)。从技术角度说，PPI 只存在于计算机显示领域，而 DPI 只出现于打印或印刷领域。

计算公式：像素密度 = 屏幕对角线的像素尺寸 / 物理尺寸

比如，对于分辨率为 750 * 1334 的 iPhone 6 来说，它的像素密度为：

```js
Math.sqrt(750 * 750 + 1334 * 1334) / 4.7 = 326ppi
复制代码
```

**设备独立像素（DIP）**

DIP 是特别针对 Android设备而衍生出来的，原因是安卓屏幕的尺寸繁多，因此为了显示能尽量和设备无关，而提出的这个概念。它是基于屏幕密度而计算的，认为当屏幕密度是 160 的时候，px = DIP。

计算公式：dip = px * 160 / dpi



___



## 11. CSS开启硬件加速

在 GPU 渲染的过程中，一些元素会因为符合了某些规则，而被提升为独立的层，一旦独立出来，就不会影响其它 DOM 的布局，所以我们可以利用这些规则，将经常变换的 DOM 主动提升到独立的层，那么在浏览器的一帧运行中，就可以减少 Layout 和 Paint 的时间了。

### 创建独立图层

能让浏览器主动帮我们创建独立图层的规则：

1. 3D 或者透视变换（perspective，transform） 的 CSS 属性。
2. 使用加速视频解码的 video 元素。
3. 拥有 3D（WebGL） 上下文或者加速 2D 上下文的 canvas 元素。
4. 混合插件（Flash)。
5. 对自己的 opacity 做 CSS 动画或使用一个动画 webkit 变换的元素。
6. 拥有加速 CSS 过滤器的元素。
7. 元素有一个包含复合层的后代节点(换句话说，就是一个元素拥有一个子元素，该子元素在自己的层里)。
8. 元素有一个兄弟元素在复合图层渲染，并且该兄弟元素的 z-index 较小，那这个元素也会被应用到复合图层。

关于 z-index 导致的硬件加速的问题，可以查看这篇文章 [CSS3硬件加速也有坑！！](https://juejin.cn/post/6844903597772111886)，里面总结来说就是由于上面的第八条，如果某个动画元素被提升了复合层，在没有设置z-index的情况下，那么其后面的兄弟元素也会被提升到这个复合层中，并且浏览器有可能给复合层之后的所有相对或绝对定位的元素都创建一个复合层来渲染，即便这些元素不需要提升复合层，这种情况下就出现了**层爆炸**的问题，严重影响页面性能。最好通过给动画元素添加z-index人为地干扰复合层的排序，提升渲染性能。

### 开启 GPU 加速

CSS 中的以下几个属性能触发硬件加速：

1. transform

2. opacity

3. filter

   如：filter: opacity(1)

   这个函数与其他既有的[`opacity`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity)属性类似，区别在于有了filters，有些浏览器会提供硬件加速以获取更好的性能表现。

4. will-change

   [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 属性 `will-change` 为web开发者提供了一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。 这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。

如果有一些元素不需要用到上述属性，但是需要触发硬件加速效果，可以使用一些小技巧来诱导浏览器开启硬件加速。

```css
.element {
    transform: translateZ(0); 
    /**或者**/
    transform: rotateZ(360deg);
    transform: translate3d(0, 0, 0);
  	transform: scale3d(1,1,1);
}
```



在 Chrome 和 Safari 中，当使用以上 CSS 变化或动画时，我们可能会看到闪烁的效果，我们可以通过下面的 CSS 代码来解决：

```css
.demo {
    backface-visibility: hidden;
    perspective: 1000;
}
```

`backface-visibility: hidden;` 表示隐藏被旋转的背面；`perspective: 1000;` 定义 3D 元素距视图的距离





### 要注意的问题

1. 过多地开启硬件加速可能会耗费较多的内存，因此什么时候开启硬件加速，给多少元素开启硬件加速，需要用测试结果说话。
2. GPU 渲染会影响字体的抗锯齿效果。这是因为 GPU 和 CPU 具有不同的渲染机制，即使最终硬件加速停止了，文本还是会在动画期间显示得很模糊。
3. 使用3D硬件加速提升动画性能时，最好给元素增加一个z-index属性，人为干扰复合层的排序，可以有效减少chrome创建不必要的复合层，提升渲染性能，移动端优化效果尤为明显。



___



## 12. will-change

[will-change (MDN)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change)

[CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 属性 `will-change` 为web开发者提供了一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。 这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。

```css
will-change: auto
will-change: scroll-position
will-change: contents
will-change: transform        // Example of <custom-ident>
will-change: opacity          // Example of <custom-ident>
will-change: left, top        // Example of two <animateable-feature>

will-change: unset
will-change: initial
will-change: inherit
```

will-change注意事项：

- **不要将 will-change 应用到太多元素上**：浏览器已经尽力尝试去优化一切可以优化的东西了。有一些更强力的优化，如果与 `will-change` 结合在一起的话，有可能会消耗很多机器资源，如果过度使用的话，可能导致页面响应缓慢或者消耗非常多的资源。
- **有节制地使用：**通常，当元素恢复到初始状态时，浏览器会丢弃掉之前做的优化工作。但是如果直接在样式表中显式声明了 `will-change` 属性，则表示目标元素可能会经常变化，浏览器会将优化工作保存得比之前更久。所以最佳实践是当元素变化之前和之后通过脚本来切换 `will-change` 的值。
- **不要过早应用 will-change 优化：**如果你的页面在性能方面没什么问题，则不要添加 `will-change` 属性来榨取一丁点的速度。 `will-change` 的设计初衷是作为最后的优化手段，用来尝试解决现有的性能问题。它不应该被用来预防性能问题。过度使用 `will-change` 会导致大量的内存占用，并会导致更复杂的渲染过程，因为浏览器会试图准备可能存在的变化过程。这会导致更严重的性能问题。
- **给它足够的工作时间：**这个属性是用来让页面开发者告知浏览器哪些属性可能会变化的。然后浏览器可以选择在变化发生前提前去做一些优化工作。所以给浏览器一点时间去真正做这些优化工作是非常重要的。使用时需要尝试去找到一些方法提前一定时间获知元素可能发生的变化，然后为它加上 `will-change 属性。`
