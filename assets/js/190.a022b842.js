(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{505:function(t,a,s){"use strict";s.r(a);var i=s(7),l=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"导出报告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出报告"}},[t._v("#")]),t._v(" 导出报告")]),t._v(" "),a("h2",{attrs:{id:"o-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#o-output"}},[t._v("#")]),t._v(" -o/--output")]),t._v(" "),a("p",[t._v("一般情况下，vulcat当发现漏洞时 会直接将漏洞信息输出到"),a("strong",[t._v("命令行")]),t._v("中，如图\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_01.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("你可以将漏洞信息导出到文件中，以便存储和查看")]),t._v(" "),a("h3",{attrs:{id:"导出-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出-txt"}},[t._v("#")]),t._v(" 导出.txt")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python3 vulcat.py -u <URL> -o txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("当检测到漏洞时，会在当前目录下生成一个“vulcat_当前时间.txt”的文件，如图\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_txt_01.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("文件内容如下：\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_txt_02.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("相当于：把命令行输出的信息 直接复制到了.txt文件中，并添加了 分隔符号和时间\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_txt_03.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h3",{attrs:{id:"导出-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出-json"}},[t._v("#")]),t._v(" 导出.json")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python3 vulcat.py -u <URL> -o json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("当检测到漏洞时，会在当前目录下生成一个“vulcat_当前时间.json”的文件，如图\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_json_01.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("会将漏洞信息json化，文件内容如下：\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_json_02.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h3",{attrs:{id:"导出-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出-html"}},[t._v("#")]),t._v(" 导出.html")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python3 vulcat.py -u <URL> -o html\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("当检测到漏洞时，会在当前目录下生成一个“vulcat_当前时间.html”的文件，如图\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_01.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("HTML报告分为5块区域，文件内容如下：\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_02.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h4",{attrs:{id:"顶部-切换报告样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顶部-切换报告样式"}},[t._v("#")]),t._v(" 顶部-切换报告样式")]),t._v(" "),a("p",[t._v("在顶部的最右边，有一个“样式切换器”\n当移动鼠标到“Style”上面之后，就会出现样式列表\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_03.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("你可以通过点击你想要的样式来切换\n（目前样式不多，以后会慢慢增加）\n（你也可以提交你想要的样式，我会添加进去）\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_04.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h4",{attrs:{id:"内容过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容过滤器"}},[t._v("#")]),t._v(" 内容过滤器")]),t._v(" "),a("p",[t._v("页面左侧是“内容过滤器”，带有“√”的都可以点击\n当一个选项被勾选，右侧的内容区会显示这个内容\n相应的，如果取消勾选，则不会显示这个内容")]),t._v(" "),a("p",[t._v("示例：取消勾选“CNNVD-201901-445”，则相应的条目会隐藏\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_05.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h4",{attrs:{id:"标题栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标题栏"}},[t._v("#")]),t._v(" 标题栏")]),t._v(" "),a("p",[t._v("你可以通过单击相应的标题，来对内容条目进行“升序/降序”\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_06.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h4",{attrs:{id:"内容区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容区"}},[t._v("#")]),t._v(" 内容区")]),t._v(" "),a("p",[t._v("你可以单击某个条目，将其展开，展开后你会看到如下信息：")]),t._v(" "),a("ul",[a("li",[t._v("漏洞URL")]),t._v(" "),a("li",[t._v("漏洞数据包（如果有多个数据包，将会显示Request-1、Request-2以此类推）")])]),t._v(" "),a("p",[t._v("点击复制按钮“Copy”可以自动将数据包内容 复制到粘贴板")]),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_07.png",alt:""}}),a("figcaption")]),t._v(" "),a("h4",{attrs:{id:"底部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#底部"}},[t._v("#")]),t._v(" 底部")]),t._v(" "),a("p",[t._v("平平无奇的底部\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/output_html_08.png",alt:""}}),a("figcaption")]),a("p")])}),[],!1,null,null,null);a.default=l.exports}}]);