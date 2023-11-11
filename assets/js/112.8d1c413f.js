(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{423:function(t,a,s){"use strict";s.r(a);var i=s(7),l=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义攻击载荷-exp示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义攻击载荷-exp示例"}},[t._v("#")]),t._v(" 自定义攻击载荷-EXP示例")]),t._v(" "),a("h5",{attrs:{id:"vulcat只提供poc-不提供exp-如有需要-可以自行编写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vulcat只提供poc-不提供exp-如有需要-可以自行编写"}},[t._v("#")]),t._v(" vulcat只提供POC，不提供EXP，如有需要 可以自行编写")]),t._v(" "),a("h5",{attrs:{id:"本节以apache-tomcat的cve-2017-12615漏洞为例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节以apache-tomcat的cve-2017-12615漏洞为例"}},[t._v("#")]),t._v(" 本节以Apache Tomcat的CVE-2017-12615漏洞为例")]),t._v(" "),a("h2",{attrs:{id:"_1-vulcat的poc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vulcat的poc"}},[t._v("#")]),t._v(" 1. vulcat的POC")]),t._v(" "),a("p",[t._v("在CVE-2017-12615的POC中，vulcat只会上传一个示例文件，而不会上传WebShell以及其它有危害的文件\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/02.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("如图\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/03.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("h2",{attrs:{id:"_2-编写exp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写exp"}},[t._v("#")]),t._v(" 2. 编写EXP")]),t._v(" "),a("p",[t._v("原有的POC："),a("code",[t._v("vulcat/payloads/ApacheTomcat/apache-tomcat-cve-2017-12615-fileupload.py")])]),t._v(" "),a("p",[t._v("将其复制一份，在__init__方法中，添加EXP所使用的Payload")]),t._v(" "),a("ul",[a("li",[t._v("path：文件上传路径")]),t._v(" "),a("li",[t._v("data：jsp一句话")]),t._v(" "),a("li",[t._v("path-2：命令执行路径\n"),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/04.png",alt:""}}),a("figcaption")])])]),t._v(" "),a("p",[t._v("编写EXP方法")]),t._v(" "),a("ul",[a("li",[t._v("定义基本变量：client、vul_info")]),t._v(" "),a("li",[t._v("遍历载荷，生成随机文件路径，生成随机WebShell密码")]),t._v(" "),a("li",[t._v("获取载荷，并装入 随机文件路径 与 随机密码\n"),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/05.png",alt:""}}),a("figcaption")])])]),t._v(" "),a("p",[t._v("发出HTTP请求")]),t._v(" "),a("ul",[a("li",[t._v("第一个请求，上传WebShell")]),t._v(" "),a("li",[t._v("第二个请求，访问WebShell，判断结果是否为None\n"),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/06.png",alt:""}}),a("figcaption")])])]),t._v(" "),a("p",[t._v("修改方法Start()")]),t._v(" "),a("ul",[a("li",[t._v("注释self.POC()")]),t._v(" "),a("li",[t._v("返回一个self.EXP()的调用\n"),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/07.png",alt:""}}),a("figcaption")])])]),t._v(" "),a("h2",{attrs:{id:"_3-扫描测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-扫描测试"}},[t._v("#")]),t._v(" 3. 扫描测试")]),t._v(" "),a("p",[t._v("修改EXP文件的文件名称，然后放入载荷路径\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/08.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("运行EXP载荷，成功检测到漏洞，并返回了WebShell的URL链接\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/09.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("p",[t._v("访问WebShell\n")]),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/10.png",alt:""}}),a("figcaption")]),a("p"),t._v(" "),a("figure",[a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/hub/static/imgs/custom-payloads-exp/11.png",alt:""}}),a("figcaption")])])}),[],!1,null,null,null);a.default=l.exports}}]);