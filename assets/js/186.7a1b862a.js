(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{501:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"dnslog平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dnslog平台"}},[s._v("#")]),s._v(" DNSLOG平台")]),s._v(" "),a("p",[s._v("vulcat目前支持三个DNSLOG平台")]),s._v(" "),a("ul",[a("li",[s._v("dnslog.cn")]),s._v(" "),a("li",[s._v("ceye.io")]),s._v(" "),a("li",[s._v("dnslog.pw")])]),s._v(" "),a("p",[s._v("如果用户同时配置了多个DNSLOG平台，则使用优先级为：")]),s._v(" "),a("ul",[a("li",[s._v("ceye.io > dnslog.pw > dnslog.cn")]),s._v(" "),a("li",[s._v("你也可以用--dns选项，手动指定其中的某个平台")])]),s._v(" "),a("h2",{attrs:{id:"dnslog-cn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dnslog-cn"}},[s._v("#")]),s._v(" dnslog.cn")]),s._v(" "),a("p",[s._v("在没有配置ceye.io和dnslog.pw的情况下")]),s._v(" "),a("ul",[a("li",[s._v("vulcat默认使用 dnslog.cn")])]),s._v(" "),a("p",[s._v("以fastjson漏洞为例，添加日志4级选项")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("python3 vulcat.py -u <URL> -v fastjson --log 4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("找到fastjson的请求日志，可以看到数据包内使用的是 dnslog.cn")]),s._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/dns_01.png",alt:""}}),a("figcaption")]),s._v(" "),a("p",[s._v("强制使用dnslog.cn平台：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("python3 vulcat.py -u <URL> --dns dnslog-cn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"ceye-io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ceye-io"}},[s._v("#")]),s._v(" ceye.io")]),s._v(" "),a("p",[a("a",{attrs:{href:"../config/vulcat-config-ceye.html"}},[s._v("点我查看ceye.io的配置方法")])]),s._v(" "),a("p",[s._v("将 域名和Token 写入config.yaml对应的位置，保存文件")]),s._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/dns_02.png",alt:""}}),a("figcaption")]),s._v(" "),a("p",[s._v("运行扫描，vulcat会"),a("strong",[s._v("自动切换")]),s._v("为 ceye.io")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("python3 vulcat.py -u <URL> -v fastjson --log 4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/dns_03.png",alt:""}}),a("figcaption")]),s._v(" "),a("p",[s._v("强制使用ceye.io平台")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("python3 vulcat.py -u <URL> --dns ceye\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"dnslog-pw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dnslog-pw"}},[s._v("#")]),s._v(" dnslog.pw")]),s._v(" "),a("p",[a("a",{attrs:{href:"../config/vulcat-config-dnslog-pw.html"}},[s._v("点我查看dnslog.pw的配置方法")])]),s._v(" "),a("p",[s._v("将 域名和Token 写入config.yaml对应的位置，保存文件")]),s._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/config/dnslog_pw_04.png",alt:""}}),a("figcaption")]),s._v(" "),a("p",[s._v("运行扫描，vulcat会"),a("strong",[s._v("自动切换")]),s._v("为 ceye.io")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("python3 vulcat.py -u <URL> -v fastjson --log 4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/usage/dns_04.png",alt:""}}),a("figcaption")]),s._v(" "),a("p",[s._v("强制使用dnslog.pw平台")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("python3 vulcat.py -u <URL> --dns dnslog-pw\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[s._v("#")]),s._v(" --dns")]),s._v(" "),a("p",[a("strong",[s._v("强制使用某个DNSLOG平台")])]),s._v(" "),a("p",[s._v("如果你在config.yaml配置了多个DNSLOG平台，想使用其中的某个平台时，可以手动指定")]),s._v(" "),a("p",[s._v("添加--dns选项，强制使用 dnslog.cn")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("python3 vulcat.py -u <URL> -v fastjson --log 4 --dns dnslog-cn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("强制使用 ceye.io：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 记得要在config.yaml添加 域名和Token，否则就算指定ceye也无法正常使用\npython3 vulcat.py -u <URL> -v fastjson --log 4 --dns ceye\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("强制使用 dnslog.pw：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 记得要在config.yaml添加 域名和Token，否则就算指定dnslog.pw也无法正常使用\npython3 vulcat.py -u <URL> -v fastjson --log 4 --dns dnslog-pw\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);