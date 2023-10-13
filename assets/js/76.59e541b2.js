(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{392:function(a,t,s){"use strict";s.r(t);var r=s(7),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"交互式攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交互式攻击"}},[a._v("#")]),a._v(" 交互式攻击")]),a._v(" "),t("p",[a._v("类似于sqlmap的--os-shell选项，运行之后可以持续输入Payload并获得回显")]),a._v(" "),t("h2",{attrs:{id:"shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[a._v("#")]),a._v(" --shell")]),a._v(" "),t("p",[a._v("--shell选项支持"),t("strong",[a._v("单个漏洞")]),a._v("的持续交互模式\n使用--shell选项之前，需要先使用 -v 参数指定某个漏洞")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("python3 vulcat.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("URL"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" httpd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" cve-2021-42013 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--shell")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 注意, 在v2.0.0版本及以上, -a选项被移除, 应改为使用以下命令")]),a._v("\npython3 vulcat.py "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("URL"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" cve-2021-42013 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--shell")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("以Apache Httpd的CVE-2021-42013漏洞来做演示")]),a._v(" "),t("ul",[t("li",[a._v("添加--shell选项，如果存在该漏洞，则进入持续交互模式")]),a._v(" "),t("li",[a._v("这里还添加了日志4级，以便我们查看请求数据包\n"),t("figure",[t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/shell_01.png",alt:""}}),t("figcaption")])])]),a._v(" "),t("p",[a._v("正常情况下，在输出漏洞信息后，扫描就会退出\n如果添加了--shell选项，则会进入交换模式，如图：\n")]),t("figure",[t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/shell_02.png",alt:""}}),t("figcaption")]),t("p"),a._v(" "),t("p",[a._v("此时你可以持续输入Payload，该漏洞为RCE，所以尝试输入命令id\n可以成功看到下方的回显：uid=1(daemon)")]),a._v(" "),t("p",[a._v("（此外，--shell的日志4级有一个显示Bug，请求头与请求Body之间"),t("strong",[a._v("少了一个空行")]),a._v("）\n")]),t("figure",[t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/shell_03.png",alt:""}}),t("figcaption")]),t("p"),a._v(" "),t("figure",[t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/shell_04.png",alt:""}}),t("figcaption")]),a._v(" "),t("h2",{attrs:{id:"vcsearch语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vcsearch语法"}},[a._v("#")]),a._v(" vcsearch语法")]),a._v(" "),t("p",[a._v("如果响应内容过多，"),t("strong",[a._v("找不到回显的位置")]),a._v("怎么办？\n或者 "),t("strong",[a._v("只想要回显中的部分内容")]),a._v("\n如果是RCE漏洞，可以使用 | grep 的方式\n但并不是所有的grep都能够执行，RCE以外的漏洞也无法使用grep")]),a._v(" "),t("p",[a._v("vulcat实现了类似于grep的功能：vcsearch\nvcsearch可以在获取 响应数据包后，在其中搜索指定内容并返回")]),a._v(" "),t("h3",{attrs:{id:"演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#演示"}},[a._v("#")]),a._v(" 演示")]),a._v(" "),t("p",[a._v("以Atlassian Confluence的CVE-2015-8399漏洞为例：")]),a._v(" "),t("figure",[t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_01.png",alt:""}}),t("figcaption")]),a._v(" "),t("p",[a._v("进入交互模式后，读取/etc/passwd\n")]),t("figure",[t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_02.png",alt:""}}),t("figcaption")]),t("p"),a._v(" "),t("p",[a._v("在一大堆响应内容中，慢慢的找到了回显的位置（麻烦）\n")]),t("figure",[t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_03.png",alt:""}}),t("figcaption")]),t("p"),a._v(" "),t("p",[a._v("此时可以使用vcsearch语法，使用方式和 | grep 一样：\n"),t("strong",[a._v("payload | vcsearch 搜索内容")])]),a._v(" "),t("p",[a._v("vcsearch不会跟随Payload被发送出去，而是在Payload执行完成之后 再进行搜索\n注意：vcsearch的语法为"),t("strong",[a._v("正则表达式")])]),a._v(" "),t("figure",[a._v("匹配root前0-100，以及root后0-800个字符"),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_04.png",alt:""}}),t("figcaption")]),a._v(" "),t("figure",[a._v("语法同上，匹配root前0-100，以及root后0-800个字符"),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_05.png",alt:""}}),t("figcaption")]),a._v(" "),t("figure",[a._v("如果没有查找到内容，则："),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/vcsearch_06.png",alt:""}}),t("figcaption")])])}),[],!1,null,null,null);t.default=e.exports}}]);