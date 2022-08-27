
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/Other/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('55');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  selector: "Other",
  template: template,
  styles: []
}), _dec(_class2 = function _class2() {
  _classCallCheck(this, _class2);
}) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/Other/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['55']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<h2 id='fixed-top'>\n    其它\n</h2>\n<h3 id='fixed-nrm'>\n    NRM\n</h3>\n<p>\n    安装\n</p>\n<pre ui-code>\n    npm install -g nrm\n</pre>\n<p>\n    查看\n</p>\n<pre ui-code>\n    nrm ls\n</pre>\n<p>\n    使用\n</p>\n<pre ui-code>\n    nrm use xxx\n</pre>\n<p>\n    新增\n</p>\n<pre ui-code>\n    nrm add xxx url\n</pre>\n<p>\n    删除\n</p>\n<pre ui-code>\n    nrm del xxx\n</pre>\n<h3 id='fixed-vue.config.js'>\n    vue.config.js\n</h3>\n<pre ui-code>\n{\n\n    publicPath: './',\n\n    // 构建好的文件输出到哪里\n    outputDir: \"dist\",\n\n    // 需要babel转义的包可以在这里进行登记\n    transpileDependencies: [],\n\n    // 是否在构建生产包时生成SourceMap文件\n    productionSourceMap: false,\n\n    // 使用带有浏览器内编译器的完整构建版本\n    runtimeCompiler: false,\n\n    // 打包后的文件名是否需要带hash\n    filenameHashing: true,\n\n    devServer: {\n        host: \"0.0.0.0\",\n        port: 20000,\n    },\n\n    configureWebpack: (config) => {\n        config.module.rules.push({\n        test: /\\.clunch$/,\n        use: [{\n            loader: 'clunch/loader.js'\n        }]\n        })\n    }\n}\n</pre>\n<h3 id='fixed-vi'>\n    vi命令\n</h3>\n<p>\n    首先，我们需要知道vi（或vim，下同）有三种模式：编辑模式、底行模式和命令行模式。\n</p>\n<h4>\n    模式间切换\n</h4>\n<p>\n    在任何情况下，按ESC都可以切换到命令行模式，而在命令行模式，输入冒号:会进入底行模式，输入字母i会进入编辑模式。\n</p>\n<p>\n    编辑模式下就是普通的文本输入，没有什么特殊的，下面主要说明另外二种模式下的一些命令。\n</p>\n<h4>\n    底行模式\n</h4>\n<p>\n    常用的命令就几种，分别是:q（退出）、:q!（强制退出）、:wq（保存后退出）、和:w（保存）。\n</p>\n<h4>\n    命令行模式\n</h4>\n<p>\n    该模式下的命令可以帮助你快速开发，不过不是必须的，下面列出几个常用的：\n</p>\n<ol>\n    <li>\n        dd:删除一行\n    </li>\n    <li>\n        u:撤消修改或删除操作\n    </li>\n    <li>\n        yy:复制光标所在行到缓冲区\n    </li>\n    <li>\n        p:将缓冲区内的字符贴到光标所在位置\n    </li>\n</ol>\n<h3 id='fixed-svn'>\n    SVN\n</h3>\n<h4>\n    初始化\n</h4>\n<p>\n    把uri指定的仓库代码检出到本地来：\n</p>\n<pre ui-code>\n    svn checkout url\n</pre>\n<p>\n    更新代码：\n</p>\n<pre ui-code>\n    svn up\n</pre>\n<p>\n    清理：\n</p>\n<pre ui-code>\n    svn cleanup\n</pre>\n<h4>\n    状态查询\n</h4>\n<p>\n    查看当前工作区的状态：\n</p>\n<pre ui-code>\n    svn status\n</pre>\n<p>\n    查看svn信息：\n</p>\n<pre ui-code>\n    svn info\n</pre>\n<h4>\n    提交\n</h4>\n<p>\n    添加新文件到版本库：\n</p>\n<pre ui-code>\n    svn add filename\n</pre>\n<p>\n    递归添加当前目录下的所有新文件：\n</p>\n<pre ui-code>\n    svn add . --no-ignore --force\n</pre>\n<p>\n    提交代码（只有新文件需要add,修改文件可以直接提交）：\n</p>\n<pre ui-code>\n    svn commit -m \"提交描述\"\n</pre>\n<h4>\n    忽略或删除\n</h4>\n<p>\n    已经通过add添加到仓库的文件，如果想删除，需要执行下面命令回退到unversioned状态：\n</p>\n<pre ui-code>\n    svn revert file --depth infinity\n</pre>\n<h3 id='fixed-nginx'>\n    Nginx\n</h3>\n<h4 id='fixed-nginx-session'>\n    session丢失问题\n</h4>\n<h5>\n    发生情况\n</h5>\n<p>\n    转发的时候，如果只是host、端口转换，则session不会丢失，如果路径也变化了，则需要设置cookie的路径转换，不然session会发生丢失。\n</p>\n<h5>\n    解决方案\n</h5>\n<p>\n    通过设置cookie的路径转换就可以解决了，具体例子如下：\n</p>\n<pre ui-code>\nlocation /pre-url/ {\n    proxy_pass http://serverProxy/new-url;\n    proxy_cookie_path  /new-url /pre-url;\n}\n</pre>\n<h4 id='fixed-nginx-config'>\n    配置文件说明\n</h4>\n<pre ui-code>\n#定义Nginx运行的用户和用户组\n#user  nobody;\n\n#nginx进程数，建议设置为等于CPU总核心数。\nworker_processes  1;\n\n#全局错误日志\nerror_log   /Users/yelloxing/nginxConfig/error_debug.log  debug;\nerror_log   /Users/yelloxing/nginxConfig/error_notice.log  notice;\nerror_log   /Users/yelloxing/nginxConfig/error_info.log  info;\nerror_log   /Users/yelloxing/nginxConfig/error_warn.log  warn;\nerror_log   /Users/yelloxing/nginxConfig/error_error.log  error;\nerror_log   /Users/yelloxing/nginxConfig/error_crit.log  crit;\n\n#进程文件\npid       /Users/yelloxing/nginxConfig/nginx.pid;\n\nevents {\n    #单个进程最大连接数（最大连接数=连接数*进程数）\n    worker_connections  256;\n}\n\n#设定http服务器，利用它的反向代理功能提供负载均衡支持\nhttp {\n\n    #文件扩展名与文件类型映射表\n    include      /Users/yelloxing/nginxConfig/mime.types;\n\n    #默认文件类型\n    default_type  application/octet-stream;\n\n    #默认编码\n    #charset utf-8;\n\n    log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '\n                      '\"$request_body\" $body_bytes_sent $status ';\n\n    #sendfile指令指定 nginx 是否调用sendfile 函数来输出文件，对于普通应用，必须设为on。\n    #如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。\n    sendfile        on;\n\n    #长连接超时时间，单位是秒\n    keepalive_timeout  65;\n\n    #预定义的第一个请求数据的地址\n    upstream localJsonProxy {\n        server 127.0.0.1:30000;\n    }\n\n    #负载均衡配置简单例子\n    #upstream serverName {\n    #    server 192.168.0.14 weight=10;\n    #    server 192.168.0.15 weight=10;\n    #}\n\n    #预定义的第二个请求数据的地址\n    upstream serverProxy {\n        server 192.168.0.16:20000;\n    }\n\n    #虚拟主机的配置\n    server {\n\n        #监听端口\n        listen       8080;\n        #域名可以有多个，用空格隔开\n        server_name  localhost;\n        access_log  /Users/yelloxing/nginxConfig/host.access.log main;\n\n        #---1\n        location / {\n            root  /Users/yelloxing/-------/source/;\n            index  index.html;\n        }\n\n        #---2\n        location /server/ {\n            proxy_pass http://serverProxy/server/;\n            proxy_redirect          off;\n        }\n\n        #---3\n        location /local/ {\n            rewrite ^(.*).do$ $1.json last;\n            proxy_pass http://localJsonProxy/;\n            proxy_redirect          off;\n        }\n    }\n\n    #虚拟主机的配置（这里是对应上面的『预定义的第一个请求数据的地址』）\n    server {\n        listen       30000;\n        server_name  dataServer;\n        access_log  /Users/yelloxing/nginxConfig/data.access.log main;\n\n        location ~ (.*\\.json) {\n            root   /Users/yelloxing/-------/source/data;\n            default_type application/json;\n            error_page 405 =200 $1;\n        }\n    }\n}\n</pre>\n<h3 id='fixed-icns'>\n    icns 制作教程\n</h3>\n<p>\n    桌面创建个文件夹，命名如：icon，我们就在这个文件夹里面进行操作。\n</p>\n<p>\n    把源文件，拖进这个文件夹，命名为pic.png，同时，在此文件夹中创建一个文件夹tmp.iconset，然后，在icon目录下执行下面命令：\n</p>\n<pre ui-code>\nsips -z 16 16     pic.png --out tmp.iconset/icon_16x16.png\nsips -z 32 32     pic.png --out tmp.iconset/icon_16x16@2x.png\nsips -z 32 32     pic.png --out tmp.iconset/icon_32x32.png\nsips -z 64 64     pic.png --out tmp.iconset/icon_32x32@2x.png\nsips -z 128 128   pic.png --out tmp.iconset/icon_128x128.png\nsips -z 256 256   pic.png --out tmp.iconset/icon_128x128@2x.png\nsips -z 256 256   pic.png --out tmp.iconset/icon_256x256.png\nsips -z 512 512   pic.png --out tmp.iconset/icon_256x256@2x.png\nsips -z 512 512   pic.png --out tmp.iconset/icon_512x512.png\nsips -z 1024 1024   pic.png --out tmp.iconset/icon_512x512@2x.png\n</pre>\n<p>\n    执行完毕后，再用下面的命令即可生成icns文件:\n</p>\n<pre ui-code>\n    iconutil -c icns tmp.iconset -o Icon.icns\n</pre>\n"
  
    return __etcpack__scope_bundle__;
}