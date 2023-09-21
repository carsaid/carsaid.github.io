(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{340:function(t,a,r){"use strict";r.r(a);var s=r(7),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hydra-海德拉-九头蛇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hydra-海德拉-九头蛇"}},[t._v("#")]),t._v(" Hydra（海德拉 / 九头蛇）")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("Hydra是一款非常强大的暴力破解工具，它是由著名的黑客组织THC开发的一款开源暴力破解工具。Hydra是一个验证性质的工具，主要目的是：展示安全研究人员从远程获取一个系统认证权限。")]),t._v(" "),a("ul",[a("li",[t._v("kali 工具文档："),a("a",{attrs:{href:"https://www.kali.org/tools/hydra/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.kali.org/tools/hydra/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("下载地址："),a("a",{attrs:{href:"http://pkg.kali.org/pkg/hydra",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://pkg.kali.org/pkg/hydra"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Github："),a("a",{attrs:{href:"https://github.com/vanhauser-thc/thc-hydra",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vanhauser-thc/thc-hydra"),a("OutboundLink")],1)])]),t._v(" "),a("img",{attrs:{src:"https://www.kali.org/tools/hydra/images/hydra-logo.svg",alt:""}}),t._v(" "),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("-l")])]),t._v(" "),a("td",[t._v("指定单个用户名，适合在知道用户名，爆破密码时使用")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-L")])]),t._v(" "),a("td",[t._v("指定多个用户名，参数为存储用户名的文件的路径（建议为绝对路径）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-p")])]),t._v(" "),a("td",[t._v("指定单个密码，适合在知道密码爆破用户名时使用")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-P")])]),t._v(" "),a("td",[t._v("指定多个密码，参数值为存储密码的文件（通常称为字典）的路径（建议为绝对路径）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-C")])]),t._v(" "),a("td",[t._v("当用户名和密码存储到一个文件时使用此参数。注意，文件（字典）存储的格式必须为＂用户名:密码＂的格式")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-M")])]),t._v(" "),a("td",[t._v("指定多个攻击目标，此参数为存储攻击目标的文件的路径（建议为绝对路径）。注意：列表文件存储格式为＂地址:端口＂")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-t")])]),t._v(" "),a("td",[t._v("指定爆破时的任务数量(可以理解为线程数)，默认为16")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-s")])]),t._v(" "),a("td",[t._v("指定端口，适用于攻击目标端口非默认的情况。例如：http服务使用非80端口")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-S")])]),t._v(" "),a("td",[t._v("指定爆破时使用 SSL 链接")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-R")])]),t._v(" "),a("td",[t._v("继续从上一次爆破进度上继续爆破")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-v")]),t._v(" / "),a("code",[t._v("-V")])]),t._v(" "),a("td",[t._v("显示爆破的详细信息")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-f")])]),t._v(" "),a("td",[t._v("一但爆破成功一个就停止爆破")])]),t._v(" "),a("tr",[a("td",[t._v("Server")]),t._v(" "),a("td",[t._v("代表要攻击的目标(单个)，多个目标时请使用 "),a("code",[t._v("-M")]),t._v(" 参数")])]),t._v(" "),a("tr",[a("td",[t._v("service")]),t._v(" "),a("td",[t._v("攻击目标的服务类型(可以理解为爆破时使用的协议)，例如 http ，在hydra中，不同协议会使用不同的模块来爆破，hydra 的 http-get 和 http-post 模块就用来爆破基于 get 和 post 请求的页面")])]),t._v(" "),a("tr",[a("td",[t._v("OPT")]),t._v(" "),a("td",[t._v("爆破模块的额外参数，可以使用 "),a("code",[t._v("-U")]),t._v(" 参数来查看模块支持那些参数，例如命令："),a("code",[t._v("hydra -U http-get")])])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"常用密码字典"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用密码字典"}},[t._v("#")]),t._v(" 常用密码字典")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("kali上的字典路径")]),t._v(" "),a("th",[t._v("字典内容")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("/usr/share/wordlists/metasploit/unix_passwords.txt")])]),t._v(" "),a("td",[t._v("unix 系统常见密码")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("h3",{attrs:{id:"_1-暴破-root-用户的密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-暴破-root-用户的密码"}},[t._v("#")]),t._v(" 1. 暴破 root 用户的密码")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定单个用户名，指定密码字典")]),t._v("\nhydra "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" /usr/share/wordlists/metasploit/unix_passwords.txt ssh://192.168.0.2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定线程为 6，并显示详细信息")]),t._v("\nhydra "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" /usr/share/wordlists/metasploit/unix_passwords.txt "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-V")]),t._v(" ssh://192.168.0.2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/397779150",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/397779150"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"扩展内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展内容"}},[t._v("#")]),t._v(" 扩展内容")]),t._v(" "),a("h3",{attrs:{id:"字典生成工具-crunch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字典生成工具-crunch"}},[t._v("#")]),t._v(" 字典生成工具：crunch")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最小长度为4，最大长度为4，字符too，@符号使用任意字符进行填充，保存字典到ssh.txt")]),t._v("\ncrunch "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" too@ "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" ssh.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);