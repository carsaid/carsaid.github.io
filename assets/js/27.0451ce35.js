(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{344:function(t,a,s){"use strict";s.r(a);var l=s(7),i=Object(l.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"joomla3-7-core-com-fields组件sql注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joomla3-7-core-com-fields组件sql注入"}},[t._v("#")]),t._v(" Joomla3.7 Core com_fields组件SQL注入")]),t._v(" "),a("h3",{attrs:{id:"_1-漏洞信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-漏洞信息"}},[t._v("#")]),t._v(" 1）漏洞信息")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("漏洞名称")]),t._v(" "),a("th",[t._v("受影响组件")]),t._v(" "),a("th",[t._v("漏洞类型")]),t._v(" "),a("th",[t._v("漏洞编号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Joomla3.7 Core com_fields组件SQL注入")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://downloads.joomla.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joomla"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("SQL注入")]),t._v(" "),a("td",[t._v("CVE-2017-8917")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("漏洞简介")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("本漏洞出现在3.7.0新引入的一个组件“com_fields”，这个组件任何人都可以访问，无需登陆验证。由于对请求数据过滤不严导致SQL注入。")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参考链接")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("ol",[a("li",[a("a",{attrs:{href:"https://vulhub.org/#/environments/joomla/CVE-2017-8917/"}},[t._v("https://vulhub.org/#/environments/joomla/CVE-2017-8917/")])]),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/BROTHERYY/article/details/109155428"}},[t._v("https://blog.csdn.net/BROTHERYY/article/details/109155428")])])])])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("补丁及修复方案")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("升级至最新版本"),a("ol",[a("li",[a("a",{attrs:{href:"https://downloads.joomla.org/zh-cn/"}},[t._v("https://downloads.joomla.org/zh-cn/")])])])])])])]),t._v(" "),a("h3",{attrs:{id:"漏洞环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞环境"}},[t._v("#")]),t._v(" 漏洞环境")]),t._v(" "),a("ul",[a("li",[t._v("使用"),a("a",{attrs:{href:"https://github.com/vulhub/vulhub",target:"_blank",rel:"noopener noreferrer"}},[t._v("vulhub"),a("OutboundLink")],1),t._v("搭建漏洞环境")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/vulhub/vulhub\ncd vulhub/joomla/CVE-2017-8917\ndocker-compose up -d\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("访问8080端口即可看到Joomla安装页面")]),t._v(" "),a("ul",[a("li",[t._v("填写相关信息（随意填）\n"),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/joomla/cve-2017-8917/02.png",alt:""}}),a("figcaption")])])]),t._v(" "),a("p",[t._v("填写数据库信息")]),t._v(" "),a("ul",[a("li",[t._v("数据库地址：mysql:3306")]),t._v(" "),a("li",[t._v("用户：root")]),t._v(" "),a("li",[t._v("密码：root")]),t._v(" "),a("li",[t._v("数据库名：joomla")])]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/joomla/cve-2017-8917/03.png",alt:""}}),a("figcaption")]),t._v(" "),a("p",[t._v("安装之后，点击“"),a("b",[t._v("删除installation目录")]),t._v("”\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/joomla/cve-2017-8917/04.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("删除installation目录之后，回到前台即可看到Joomla页面\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/joomla/cve-2017-8917/05.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h3",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python3 vulcat.py -u <URL> -a joomla -v cve-2017-8917\n\n# 注意, vulcat-v2.0.0版本及以上, 应使用以下命令\npython3 vulcat.py -u <URL> -v cve-2017-8917\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/joomla/cve-2017-8917/06.png",alt:""}}),a("figcaption")]),t._v(" "),a("p",[t._v("直接访问Target，可以在页面上看到一串md5值")]),t._v(" "),a("ul",[a("li",[t._v("通过在线工具解密md5值")]),t._v(" "),a("li",[t._v("解密后的值2257与Payload中的一致")]),t._v(" "),a("li",[t._v("说明存在SQL注入漏洞\n"),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/joomla/cve-2017-8917/07.png",alt:""}}),a("figcaption")])])]),t._v(" "),a("p",[t._v("将md5()替换为user()")]),t._v(" "),a("ul",[a("li",[t._v("在页面上可以看到用户信息“root@172.28.0.3”\n"),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/vulns/joomla/cve-2017-8917/08.png",alt:""}}),a("figcaption")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);