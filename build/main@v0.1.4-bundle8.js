
/*************************** [bundle] ****************************/
// Original file:./examples/postMessage.html
/*****************************************************************/
window.__etcpack__bundleSrc__['45']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>HTML / 接口 / postMessage(信息发送者)</title>\n</head>\n\n<body>\n\n    <button id=\"sendMessage\">发送消息</button>\n    <iframe id=\"receiver\" src=\"https://hai2007.github.io/Front-End-Learning-Manual/examples/postMessage_receiver.html\" width=\"300\" height=\"100\"></iframe>\n\n    <script>\n\n        var receiver = document.getElementById('receiver').contentWindow;\n        var btn = document.getElementById('sendMessage');\n\n        btn.addEventListener('click', function (e) {\n            receiver.postMessage(\"你好呀！\", \"*\");\n        });\n\n    </script>\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}
