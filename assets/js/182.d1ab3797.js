(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{497:function(t,a,v){"use strict";v.r(a);var _=v(7),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"云iam-云上身份和访问管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云iam-云上身份和访问管理"}},[t._v("#")]),t._v(" 云IAM - 云上身份和访问管理")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/2085677",target:"_blank",rel:"noopener noreferrer"}},[t._v("云IAM原理&风险以及最佳实践"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://c-csa.cn/research/results-detail/i-1672/",target:"_blank",rel:"noopener noreferrer"}},[t._v("云安全联盟大中华区-《IAM白皮书（试读本）》"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"云iam"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云iam"}},[t._v("#")]),t._v(" 云IAM")]),t._v(" "),a("p",[t._v("云上身份和访问管理服务")]),t._v(" "),a("ul",[a("li",[t._v("由云厂商提供的一种服务；")]),t._v(" "),a("li",[t._v("用于帮助用户安全地控制 对云上资源的访问；")]),t._v(" "),a("li",[t._v("用户可以使用 IAM 来控制身份验证 以及 授权，从而使用相应的资源。")])]),t._v(" "),a("h2",{attrs:{id:"iam-八大管理维度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iam-八大管理维度"}},[t._v("#")]),t._v(" IAM 八大管理维度")]),t._v(" "),a("ol",[a("li",[t._v("角色")]),t._v(" "),a("li",[t._v("用户")]),t._v(" "),a("li",[t._v("用户组")]),t._v(" "),a("li",[t._v("用户凭据")]),t._v(" "),a("li",[t._v("访问策略")]),t._v(" "),a("li",[t._v("用户密码策略")]),t._v(" "),a("li",[t._v("多因素身份认证")]),t._v(" "),a("li",[t._v("用于编程访问的API密钥")])]),t._v(" "),a("h2",{attrs:{id:"身份和访问管理概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#身份和访问管理概念"}},[t._v("#")]),t._v(" 身份和访问管理概念")]),t._v(" "),a("ol",[a("li",[t._v("配置阶段：注册和授权访问权限。")]),t._v(" "),a("li",[t._v("操作阶段：识别、验证和权限控制。")])]),t._v(" "),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/cloud-security/cloud-server/iam/01.png",alt:"图2 身份和访问管理概念图"}}),t._v(" "),a("h2",{attrs:{id:"技术体系框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术体系框架"}},[t._v("#")]),t._v(" 技术体系框架")]),t._v(" "),a("img",{attrs:{src:"https://ask.qcloudimg.com/http-save/yehe-609151/53c4c43ecab806892973574cc6074072.png?imageView2/2/w/2560/h/7000",alt:"图3 CSA GCR身份和访问管理框架"}}),t._v(" "),a("h2",{attrs:{id:"工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),a("img",{attrs:{src:"https://ask.qcloudimg.com/http-save/yehe-609151/f93c47e5c209359dbfa356ca74f65f74.png?imageView2/2/w/2560/h/7000",alt:"图4 身份和访问管理工作原理图"}}),t._v(" "),a("h2",{attrs:{id:"云iam-风险案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云iam-风险案例"}},[t._v("#")]),t._v(" 云IAM 风险案例")]),t._v(" "),a("p",[t._v("可查阅本站点 “事件库 --\x3e 云IAM安全”。")]),t._v(" "),a("h2",{attrs:{id:"云iam-最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云iam-最佳实践"}},[t._v("#")]),t._v(" 云IAM 最佳实践")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("云IAM最佳实践")]),t._v(" "),a("th",[t._v("---")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("避免使用根用户凭据")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("使用角色委派权")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("遵循最小权限原则")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("使用组的形式管理账号权限")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("不使用同一 IAM 身份 执行多个管理任务")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("为 IAM 用户配置强密码策略")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("启用多重验证")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("定期轮换凭证")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("删除不需要的 IAM 用户数据")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("制定细粒度策略条件")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("监控 IAM 事件")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("在云服务器实例上使用"),a("b",[t._v("角色")]),t._v("，而非长期凭据")]),t._v(" "),a("td")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);