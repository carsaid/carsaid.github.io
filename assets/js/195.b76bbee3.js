(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{509:function(t,a,e){"use strict";e.r(a);var v=e(7),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"github市场应用-waydev-服务客户凭据泄露事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github市场应用-waydev-服务客户凭据泄露事件"}},[t._v("#")]),t._v(" GitHub市场应用 Waydev 服务客户凭据泄露事件")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("相关链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/2085677",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云-云IAM原理&风险以及最佳实践"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"waydev-平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#waydev-平台"}},[t._v("#")]),t._v(" Waydev 平台")]),t._v(" "),a("p",[t._v("Waydev")]),t._v(" "),a("ul",[a("li",[t._v("一个工程团队使用的分析平台，SaaS 架构。")]),t._v(" "),a("li",[t._v("通过分析基于 gitbase 的代码库，来跟踪软件工程师的工作输出。")]),t._v(" "),a("li",[t._v("用户可以通过 Waydev 在 GitHub App 商店中提供的应用，来使用此服务。")])]),t._v(" "),a("p",[t._v("客户在使用 Waydev 服务时，客户需要提供其 GitHub IAM 服务所生成的 OAuth token，以便 Waydev 访问客户在 GitHub 上部署的项目。")]),t._v(" "),a("h2",{attrs:{id:"技术原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术原理"}},[t._v("#")]),t._v(" 技术原理")]),t._v(" "),a("h3",{attrs:{id:"数据库明文存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库明文存储"}},[t._v("#")]),t._v(" 数据库明文存储")]),t._v(" "),a("p",[t._v("Waydev 将这些客户的 GitHub OAuth token 以"),a("b",[t._v("明文形式")]),t._v("保存在内部数据库中。")]),t._v(" "),a("p",[t._v("攻击者通过传统的入侵手段，成功的入侵 Waydev 公司内部数据库，并窃取了数据库中的客户凭据。")]),t._v(" "),a("p",[t._v("攻击者利用窃取到的 GitHub IAM 凭据，成功访问客户代码仓库，从而窃取项目源代码。")]),t._v(" "),a("h2",{attrs:{id:"影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影响"}},[t._v("#")]),t._v(" 影响")]),t._v(" "),a("p",[t._v("此次 云IAM 凭据泄露事件，对 Waydev 的客户造成了严重的影响。")]),t._v(" "),a("p",[t._v("以数字银行应用 Dave.com 为例，在此次事件中，由于 Dave.com 存储于 Waydev 中的 IAM 凭据被窃取，导致 Dave.com 750万用户数据泄露，对 Dave.com 造成了严重的损失。")])])}),[],!1,null,null,null);a.default=s.exports}}]);