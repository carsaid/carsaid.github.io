(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{477:function(t,s,a){"use strict";a.r(s);var e=a(7),l=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"💛-jboss未授权访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#💛-jboss未授权访问"}},[t._v("#")]),t._v(" 💛 JBoss未授权访问")]),t._v(" "),s("h2",{attrs:{id:"_1-漏洞信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-漏洞信息"}},[t._v("#")]),t._v(" 1）漏洞信息")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("漏洞名称")]),t._v(" "),s("th",[t._v("受影响组件")]),t._v(" "),s("th",[t._v("漏洞类型")]),t._v(" "),s("th",[t._v("漏洞编号")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("JBoss未授权访问")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://www.jboss.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("JBoss"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("未授权访问")]),t._v(" "),s("td",[t._v("暂无")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("漏洞简介")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("在默认情况下无需账密就可以直接访问jboss管理控制台")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参考链接")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("ol",[s("li",[s("a",{attrs:{href:"https://codeantenna.com/a/vUzclyNJBg",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codeantenna.com/a/vUzclyNJBg"),s("OutboundLink")],1)])])])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("补丁或修复方案")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("ol",[s("li",[t._v("为 jmx-console 和 web-console 界面的访问"),s("b",[t._v("增加身份认证")])]),s("li",[s("b",[t._v("关闭")]),t._v(" jmx-console 和 web-console，提高安全性")])])])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("网络空间测绘")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("FOFA："),s("code",[t._v('title="Welcome to JBoss"')])])]),t._v(" "),s("tr",[s("td",[t._v("FOFA："),s("code",[t._v('body="<div id=\\"credits\\">JBoss&trade; Application Server</div>"')])])]),t._v(" "),s("tr",[s("td",[t._v("FOFA："),s("code",[t._v('body="<li><a href=\\"/web-console/\\">JBoss Web Console</a></li>"')])])]),t._v(" "),s("tr",[s("td",[t._v("FOFA："),s("code",[t._v('icon_hash="-656811182"')])])])])]),t._v(" "),s("h2",{attrs:{id:"_2-漏洞环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-漏洞环境"}},[t._v("#")]),t._v(" 2）漏洞环境")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker pull testjboss/jboss\ndocker run -itd -p 80:8080 testjboss/jboss\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jboss/unauth/01.png",alt:""}}),t._v(" "),s("h2",{attrs:{id:"_3-漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-漏洞复现"}},[t._v("#")]),t._v(" 3）漏洞复现")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("python3 vulcat.py -u <URL> -v jboss-unauth\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jboss/unauth/02.png",alt:""}}),t._v(" "),s("p",[t._v("访问 Target 可以看到 jboss console 界面\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jboss/unauth/03.png",alt:""}})]),t._v(" "),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jboss/unauth/04.png",alt:""}}),t._v(" "),s("p",[t._v("此外，vulcat 的返回信息中还提供了一个脚本地址："),s("a",{attrs:{href:"https://github.com/joaomatosf/jexboss",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/joaomatosf/jexboss"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("该脚本可用于检测 jboss 的某些 RCE 漏洞")]),t._v(" "),s("p",[t._v("获取该脚本并运行")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/joaomatosf/jexboss\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" jexboss\npython3 jexboss.py "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jboss/unauth/05.png",alt:""}}),t._v(" "),s("p",[t._v("如图，检测到了3个漏洞")]),t._v(" "),s("ul",[s("li",[t._v("jexboss会询问你是否要利用漏洞")]),t._v(" "),s("li",[t._v("输入 yes 则进入漏洞利用模式")]),t._v(" "),s("li",[t._v("输入 no 则退出（默认选项）")])]),t._v(" "),s("p",[t._v("此处输入 yes\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jboss/unauth/06.png",alt:""}})]),t._v(" "),s("p",[t._v("如果漏洞利用成功，则会返回一个持续的 Shell\n"),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jboss/unauth/07.png",alt:""}})]),t._v(" "),s("p",[t._v("你可以与工具交互，持续利用漏洞，例如：")]),t._v(" "),s("ul",[s("li",[t._v("whoami")]),t._v(" "),s("li",[t._v("id")]),t._v(" "),s("li",[t._v("uname -a")]),t._v(" "),s("li",[t._v("cat /etc/passwd")])]),t._v(" "),s("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/jboss/unauth/08.png",alt:""}})])}),[],!1,null,null,null);s.default=l.exports}}]);