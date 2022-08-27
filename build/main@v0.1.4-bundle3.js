
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/JavaScript/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['28']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('53');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "JavaScript",
  template: template,
  styles: []
}), _dec(_class2 = function _class2() {
  _classCallCheck(this, _class2);
}) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/JavaScript/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['53']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<h2 id='fixed-top'>\n    JavaScript\n</h2>\n<h3 id='fixed-object'>\n    常用对象\n</h3>\n<h4 id='fixed-ArrayBuffer_TypedArray_DataView'>\n    ArrayBuffer / TypedArray / DataView\n</h4>\n<p>\n    简单的说，\n    <span class=\"important\">ArrayBuffer</span>\n    就代表了内存中的一段二进制数据，不可以直接读写，只可以通过在上面建立\n    <span class=\"important\">TypedArray视图</span>\n    或\n    <span class=\"important\">DataView视图</span>\n    来操作这段二进制数据。\n</p>\n<p>\n    TypedArray视图主要用来操作简单类型的二进制数据，DataView用来操作复杂类型的二进制数据。\n</p>\n<p>\n    为了可以操作二进制数据，首先需要创建一个ArrayBuffer对象：\n</p>\n<pre ui-code>\n    var arrayBuffer = new ArrayBuffer(length) //length代表长度，单位是字节\n</pre>\n<p>\n    对象有了以后，就可以通过那两个视图进行操作了。\n</p>\n<h5>\n    TypedArray视图\n</h5>\n<p>\n    严格意义上来说，TypedArray视图应该是一类视图的统称，具体的有如下这些：\n</p>\n<ul>\n    <li>Int8Array：8位有符号整数，长度1个字节</li>\n    <li>Uint8Array：8位无符号整数，长度1个字节</li>\n    <li>Uint8ClampedArray：8位无符号整数，长度1个字节，溢出处理不同</li>\n    <li>Int16Array：16位有符号整数，长度2个字节</li>\n    <li>Uint16Array：16位无符号整数，长度2个字节</li>\n    <li>Int32Array：32位有符号整数，长度4个字节</li>\n    <li>Uint32Array：32位无符号整数，长度4个字节</li>\n    <li>Float32Array：32位浮点数，长度4个字节</li>\n    <li>Float64Array：64位浮点数，长度8个字节</li>\n</ul>\n<p>\n    他们只是数据格式不一样，操作上都一样，我们拿Int16Array和Int8Array举例子（非常类似普通的数组）：\n</p>\n<p>\n\n</p>\n<pre ui-code>\nvar arrayBuffer = new ArrayBuffer(6);//申请6个字节的内存空间\n\nvar int8Array = new Int8Array(arrayBuffer, 0, 2);//使用了2字节的空间\nvar int16Array = new Int16Array(arrayBuffer, 2, 2);//使用了4字节的空间\n\nint8Array[0] = 1;\nint16Array[0] = 2;\nint16Array[1] = 3;\n\nconsole.log(int8Array); //Int8Array(2) [1, 0]\nconsole.log(int16Array); //Int16Array(2) [2, 3]\n</pre>\n<h5>\n    DataView\n</h5>\n<p>\n    这个就相对复杂一点了，毕竟这个是为操作复杂类型的二进制数据设计的。先看看语法：\n</p>\n<pre ui-code>\n    var dataView = new DataView(ArrayBuffer实例对象[,字节起始位置[,长度]]);\n</pre>\n<p class=\"warn\">\n    温馨提示：和TypedArray有很大区别的是，这里我们在使用的时候可能要去关注一下大端还是小端保存或读取数据。\n</p>\n<p>\n    如果说的简单点，其实DataView就是一个非常非常厉害视图，提供了很多方法，不像TypedArray视图需要建立对应视图然后读取，你可以调用DataView的实例对象上的方法就可以实现TypedArray哪些各种视图的功能。\n</p>\n<p>\n    读数据的方法包括：getInt8、getUint8、getInt16、getUint16、getInt32、getUint32、getFloat32、getFloat64。\n</p>\n<p>\n    写数据的方法包括：setInt8、setUint8、setInt16、setUint16、setInt32、setUint32、setFloat32、setFloat64。\n</p>\n<p>\n    同样的，拿setInt16/getInt16和setInt8/getInt8举例子：\n</p>\n<pre ui-code>\nvar arrayBuffer = new ArrayBuffer(6);//申请6个字节的内存空间\n\nvar dataView = new DataView(arrayBuffer);// 建立读取对象\n\ndataView.setInt8(0,1);\ndataView.setInt16(2,2);\ndataView.setInt16(4,3);\n\nconsole.log(dataView.getInt8(0)); // 1\nconsole.log(dataView.getInt16(2)); // 2\nconsole.log(dataView.getInt16(4)); // 3\n</pre>\n<p class='warn'>\n    上面的所有方法最后都可以带一个布尔值，表示是大端(false)还是小端（true）。\n</p>\n<p>\n    当然，你也可以试着运行下面这条语句：\n</p>\n<pre ui-code>\n    console.log(dataView.getInt16(0)); // 256\n</pre>\n<p>\n    为什么是256？因为你在第一个字节写入了1，第二个没有写，也就是0，而getInt16读取的是16位，也就是读取的二进制应该是：0000000100000000(2)=2<sup>8</sup>(10)=256。\n</p>\n"
  
    return __etcpack__scope_bundle__;
}
