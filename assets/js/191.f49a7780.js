(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{503:function(t,a,s){"use strict";s.r(a);var i=s(7),l=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义攻击载荷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义攻击载荷"}},[t._v("#")]),t._v(" 自定义攻击载荷")]),t._v(" "),a("p",[t._v("在vulcat根目录下，存在一个"),a("code",[t._v("demo.py")]),t._v("文件，该文件是Payload模板，你可以基于它来编写POC或EXP\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads/01.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[a("code",[t._v("demo.py")]),t._v("结构")]),t._v(" "),a("ul",[a("li",[t._v("文件定义了一个"),a("code",[t._v("Scan")]),t._v("类，继承自插件系统的"),a("code",[t._v("Vuln_scan")])]),t._v(" "),a("li",[t._v("其中实现了三个主要方法：POC、EXP以及Start")]),t._v(" "),a("li",[t._v("POC验证漏洞，EXP利用漏洞，Start负责调配这两个方法\n"),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads/02.png",alt:""}}),a("figcaption")])])]),t._v(" "),a("p",[t._v("插件系统中的"),a("code",[t._v("Vuln_scan")])]),t._v(" "),a("p",[t._v("只要某个类继承"),a("code",[t._v("Vuln_scan")]),t._v("，并实现了其中的三个方法，就会被vulcat识别为有效的攻击载荷")]),t._v(" "),a("p",[t._v("将你编写的载荷放入对应路径，vulcat就会自动加载该载荷，并对检测目标使用\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads/03.png",alt:""}}),a("figcaption")]),a("p")])}),[],!1,null,null,null);a.default=l.exports}}]);