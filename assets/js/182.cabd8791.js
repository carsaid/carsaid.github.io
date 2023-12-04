(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{493:function(t,a,s){"use strict";s.r(a);var i=s(7),r=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"指定目标站点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定目标站点"}},[t._v("#")]),t._v(" 指定目标站点")]),t._v(" "),a("h2",{attrs:{id:"u-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#u-url"}},[t._v("#")]),t._v(" -u/--url")]),t._v(" "),a("p",[t._v("此参数用于指定单个站点 并进行扫描（很常见的参数）")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python3 vulcat.py -u http://xxx.com\npython3 vulcat.py --url http://xxx.com\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("我这里使用python 启动一个本地的HTTP服务器进行测试：")]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/url_01.png",alt:""}}),a("figcaption")]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/url_02.png",alt:""}}),a("figcaption")]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/url_03.png",alt:""}}),a("figcaption")]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/url_04.png",alt:""}}),a("figcaption")]),t._v(" "),a("figure",[t._v("如果目标站点无法访问，则："),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/url_05.png",alt:""}}),a("figcaption")]),t._v(" "),a("h2",{attrs:{id:"f-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#f-file"}},[t._v("#")]),t._v(" -f/--file")]),t._v(" "),a("p",[t._v("此参数用于指定一个文件，vulcat会从这个文件中 批量读取URL并进行扫描，格式为每行一个URL")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python3 vulcat.py -f url.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/file_01.png",alt:""}}),a("figcaption")]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/file_02.png",alt:""}}),a("figcaption")]),t._v(" "),a("p",[t._v("可以看到，url.txt里面有3个站点，vulcat会逐个去扫描")]),t._v(" "),a("p",[t._v("（什么？你问我为什么是一个一个扫，不能全部同时扫吗？---正在考虑更新这个功能）")]),t._v(" "),a("h2",{attrs:{id:"r-recursive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-recursive"}},[t._v("#")]),t._v(" -r/--recursive")]),t._v(" "),a("p",[t._v("此参数可以递归 扫描URL的每层目录")]),t._v(" "),a("p",[t._v("（和"),a("strong",[t._v("dirsearch")]),t._v("的-r/--recursive是相同的作用，项目地址："),a("a",{attrs:{href:"https://github.com/maurosoria/dirsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/maurosoria/dirsearch"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("p",[t._v("默认情况下，vulcat"),a("strong",[t._v("只会检测zxc/目录下有无漏洞")]),t._v("，而不会去检测 根目录、qwe/以及asd/目录，这可能会导致你错过某个漏洞：")]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/recursive_01.png",alt:""}}),a("figcaption")]),t._v(" "),a("p",[t._v("如果手动指定每个路径 又太麻烦了，这时候你可以使用-r/--recursive参数")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python3 vulcat.py -u http://192.168.80.1/qwe/asd/zxc/ -r\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("添加-r参数之后，vulcat会将Payload作用到每一层目录：")]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/recursive_02.png",alt:""}}),a("figcaption")]),t._v(" "),a("p",[t._v("建议每次扫描时都添加-r参数，这样可以扩大检测范围，提高漏洞发现几率")]),t._v(" "),a("p",[t._v("（后续可能会为vulcat添加爬虫功能，自动爬取站点上的所有目录 并进行检测）")])])}),[],!1,null,null,null);a.default=r.exports}}]);