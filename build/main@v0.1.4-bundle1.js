
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/HTML/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('50');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "HTML",
  template: template,
  styles: []
}), _dec(_class2 = function _class2() {
  _classCallCheck(this, _class2);
}) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/HTML/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['50']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<h2 id='fixed-top'>\n    HTML\n</h2>\n<h3 id='fixed-tag'>\n    标签\n</h3>\n<h4 id='fixed-canvas'>\n    Canvas 位图画布\n</h4>\n<p>\n    这就是一个类似你儿时上美术课的时候，用彩笔在上面涂鸦的板子。因此，你首先需要一张纸，在这里，也就是在页面准备好一个\n    <span class=\"important\">Canvas 节点</span>，就像这样：\n</p>\n<pre ui-code='html'>\n    <canvas>非常抱歉，您的浏览器不支持canvas!</canvas>\n</pre>\n<p>\n    接着，你只需要获取这个结点：\n</p>\n<pre ui-code>\n    var canvas = document.getElementsByTagName('canvas')[0];\n</pre>\n<p>\n    画笔是画布提供的，也就是上面的那个结点，通过上面的\n    <span class=\"important\">getContext 方法</span>\n    即可获得：\n</p>\n<pre ui-code>\n    var painter = canvas.getContext('2d');\n</pre>\n<p>\n    得到画笔以后，就可以直接绘制了，当然，在这之前，你还可以对画笔进行配置：\n</p>\n<pre ui-code>\n    painter.fillStyle = 'red';\n</pre>\n<p>\n    上面我们把笔设置成红色。\n</p>\n<p>\n    现在，我们真的要绘制了，比如我们要在(50,50)的地方写一段文字：\n</p>\n<pre ui-code>\n    painter.fillText('我是一段文字', 50, 50);\n</pre>\n<p>\n    你可以点击下面的红色按钮来查看运行效果：\n</p>\n<button ui-goto-example='canvas'>查看用例>>></button>\n<p>\n    细心的你可能会发现，我们在用css设置了画布大小以后，还用属性进行了设置。你可以试试不设置属性，不过，那样会导致绘制的内容变形或模糊，因此，一定要记得设置一下哦~\n</p>\n<p class=\"warn\">\n    温馨提示：我们在这里并不想深入，一点点也不想，别的也是，只会点到为止，更多的是想帮助大家可以快速的学习一个新的技术。\n</p>\n<h4 id='fixed-svg'>\n    SVG 矢图画布\n</h4>\n<p>\n    你可以这样理解：html作为根结点，其中可以使用各种标签来绘制页面，而svg作为根结点的时候，其中可以使用各种标签来绘制图形。此外，svg标签本身也是作为html下的一个普通标签存在的。\n</p>\n<p>\n    下面，还是让我们来举个例子说明吧！\n</p>\n<p>\n    首先，你需要准备一个svg标签作为绘图的容器：\n</p>\n<pre ui-code='html'>\n    <svg></svg>\n</pre>\n<p>\n    接着，你就可以在此容器中使用一些特殊的标签来绘图了。比如，我们想绘制一个红色的圆：\n</p>\n<pre ui-code='html'>\n    <circle cx=\"150\" cy=\"150\" r=\"100\" fill=\"red\" />\n</pre>\n<button ui-goto-example='svg'>查看用例>>></button>\n<p>\n    由于svg相关的标签有些操作你不能直接看成普通的DOM，包括结点的创建和属性设置，因此，在使用使用中，推荐你基于\n    <a target=\"_blank\" class='link' href=\"https://hai2007.gitee.io/image2d/#/course/svg-painter?fixed=top\">\n        image2d / 矢图画笔\n    </a>\n    进行使用~\n</p>\n<h3 id='fixed-api'>\n    接口\n</h3>\n<h4 id='fixed-postMessage'>\n    postMessage\n</h4>\n<p>\n    此方法可以用于实现跨源通信等，我们来演示如何实现在两个窗口之间进行通信。\n</p>\n<p>\n    假设我们现在有两个页面：\n    <span class=\"important\">\n        page1.html\n    </span>\n    和\n    <span class=\"important\">\n        page2.html\n    </span>，\n    他们的关系是通过iframe关联起来的，就像这样（下面是page1.html的内容）：\n</p>\n<pre ui-code='html'>\n    <iframe id=\"receiver\" src=\"./page2.html\" width=\"300\" height=\"100\"></iframe>\n</pre>\n<p>\n    为了实现通信，首先你需要在page2.html中注册事件监听：\n</p>\n<pre ui-code>\nwindow.addEventListener('message', function (e) {\n    console.log(e);\n});\n</pre>\n<p>\n    确保page2.html中事件监听注册好了以后，在page1.html中首先需要获取page2.html的窗口对象：\n</p>\n<pre ui-code>\n    var targetWindow = document.getElementById('receiver').contentWindow;\n</pre>\n<p>\n    然后，直接使用其中的\n    <span class=\"important\">postMessage</span>\n    即可发送：\n</p>\n<pre ui-code>\n    targetWindow.postMessage(\"你好呀！\", \"*\");\n</pre>\n<button ui-goto-example='postMessage'>查看用例>>></button>\n<p>\n    在实际使用中，两个页面不一定需要通过iframe关联，比如使用window.location.href等也是可以的，不过有一个基本的原则要注意：发送信息的时候，一定要确保接受方已经完成了信息接受事件的注册。\n</p>\n"
  
    return __etcpack__scope_bundle__;
}
