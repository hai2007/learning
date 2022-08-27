
/*************************** [bundle] ****************************/
// Original file:./examples/canvas.html
/*****************************************************************/
window.__etcpack__bundleSrc__['43']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML / 标签 / Canvas</title>\n    <script src='https://cdn.jsdelivr.net/npm/@hai2007/tool@0'></script>\n    <style>\n        canvas {\n            width: 300px;\n            height: 300px;\n        }\n    </style>\n</head>\n\n<body>\n    <canvas>非常抱歉，您的浏览器不支持canvas!</canvas>\n    <script>\n\n        // 获取画布结点\n        var canvas = document.getElementsByTagName('canvas')[0];\n\n        // 设置画布大小\n        canvas.setAttribute('width', tool.xhtml.getStyle(canvas, 'width'));\n        canvas.setAttribute('height', tool.xhtml.getStyle(canvas, 'height'));\n\n        // 获取画笔对象\n        var painter = canvas.getContext('2d');\n\n        // 配置画笔\n        painter.fillStyle = 'red';\n        painter.font = '20px cursive';\n\n        // 使用画笔绘画\n        painter.fillText('我是一段文字', 50, 50);\n\n    </script>\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}
