(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{359:function(t,s,a){"use strict";a.r(s);var e=a(7),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"特斯拉挖矿事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特斯拉挖矿事件"}},[t._v("#")]),t._v(" 特斯拉挖矿事件")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("相关链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/betterfxx2017/article/details/109686572",target:"_blank",rel:"noopener noreferrer"}},[t._v("kubernetes-dashboard免密登录配置"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"事件详情"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件详情"}},[t._v("#")]),t._v(" 事件详情")]),t._v(" "),s("p",[t._v("2018 年 2 月，特斯拉公司的 Kubernetes 集群被曝遭受入侵，攻击者在集群中创建了一个恶意 Pod ，并在其中部署了挖矿程序。S3 存储桶还被窃取了部分敏感数据。")]),t._v(" "),s("h2",{attrs:{id:"技术原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术原理"}},[t._v("#")]),t._v(" 技术原理")]),t._v(" "),s("h3",{attrs:{id:"_1-免密登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-免密登录"}},[t._v("#")]),t._v(" （1）免密登录")]),t._v(" "),s("p",[t._v("特斯拉的 Kubernetes 集群启用了图形管理界面 Kubernetes-Dashboard 。默认情况下，访问 Dashboard 需要进行身份认证。")]),t._v(" "),s("p",[t._v("特斯拉的管理员在 Dashboard 的配置中添加了"),s("code",[t._v("--enable-skip-login")]),t._v("选项，该选项可用于"),s("b",[t._v("跳过登录")]),t._v("。")]),t._v(" "),s("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/event-lab/config-error/2018-02-tesla/01.png"}}),t._v(" "),s("h3",{attrs:{id:"_2-应用权限过高-关键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用权限过高-关键"}},[t._v("#")]),t._v(" （2）应用权限过高（关键）")]),t._v(" "),s("p",[t._v("特斯拉的管理员为 Dashboard 绑定了过高权限，用户进行免密登录之后为"),s("b",[t._v("管理员身份")]),t._v("，拥有整个集群的管理权限。")])])}),[],!1,null,null,null);s.default=r.exports}}]);