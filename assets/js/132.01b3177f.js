(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{448:function(t,a,r){"use strict";r.r(a);var e=r(7),l=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"💛-alibaba-druid-未授权访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#💛-alibaba-druid-未授权访问"}},[t._v("#")]),t._v(" 💛 Alibaba Druid-未授权访问")]),t._v(" "),a("h2",{attrs:{id:"_1-漏洞信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-漏洞信息"}},[t._v("#")]),t._v(" 1）漏洞信息")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("漏洞名称")]),t._v(" "),a("th",[t._v("受影响组件")]),t._v(" "),a("th",[t._v("漏洞类型")]),t._v(" "),a("th",[t._v("漏洞编号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("阿里巴巴Druid未授权访问")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/alibaba/druid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alibaba Druid"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("未授权访问")]),t._v(" "),a("td",[t._v("暂无")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("漏洞简介")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("p",[t._v("    Druid是阿里巴巴数据库事业部出品，为监控而生的数据库连接池。")]),a("p",[t._v("    Druid提供监控功能，监控SQL的执行时间、Web URI的请求、Session等。")]),a("p",[t._v("    当开发者配置不当时就可能造成未授权访问漏洞。")])])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参考链接")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("ol",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/cwkiller/p/12483223.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/cwkiller/p/12483223.html"),a("OutboundLink")],1)])])])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("补丁或修复方案")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("ol",[a("li",[a("a",{attrs:{href:"https://www.cxybb.com/article/qq_46119575/128542168",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cxybb.com/article/qq_46119575/128542168"),a("OutboundLink")],1)]),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/hawinlolo/article/details/125481204",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/hawinlolo/article/details/125481204"),a("OutboundLink")],1)]),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/a987212198/article/details/122600940",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/a987212198/article/details/122600940"),a("OutboundLink")],1)]),a("ol")])])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("网络空间测绘")]),t._v(" "),a("th",[t._v("语法")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("FOFA")]),t._v(" "),a("td",[a("code",[t._v('title="Druid Stat Index"')])])]),t._v(" "),a("tr",[a("td",[t._v("鹰图")]),t._v(" "),a("td",[a("code",[t._v('web.title="Druid Stat Index"')])])])])]),t._v(" "),a("h2",{attrs:{id:"_2-漏洞环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-漏洞环境"}},[t._v("#")]),t._v(" 2）漏洞环境")]),t._v(" "),a("p",[t._v("暂无")]),t._v(" "),a("h2",{attrs:{id:"_3-漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-漏洞复现"}},[t._v("#")]),t._v(" 3）漏洞复现")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python3 vulcat.py -u <目标URL> -v alibaba-druid-unauth\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/alibaba-druid/unauth/01.png",alt:""}}),t._v(" "),a("p",[t._v("Target返回了一个URL链接，访问后可以看到Druid界面")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://XXX/druid/index.html\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/alibaba-druid/unauth/02.png",alt:""}}),t._v(" "),a("p",[t._v("漏洞深入利用可查阅："),a("a",{attrs:{href:"https://www.cnblogs.com/cwkiller/p/12483223.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/cwkiller/p/12483223.html"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=l.exports}}]);