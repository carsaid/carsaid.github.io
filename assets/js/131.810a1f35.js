(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{445:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"cardListContainer"},[s("div",{staticClass:"card-list"},[s("span",{staticClass:"card-item row-2",staticStyle:{"background-color":"#F0DFB1","--randomColor":"#F0DFB1",color:"green"}},[s("div",[s("p",{staticClass:"name"},[t._v("翻译")]),t._v(" "),s("p",{staticClass:"desc"},[t._v("原文：https://devopscube.com/cks-exam-guide-tips/#kubernetes-node-metadata-endpoints")])])])]),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 翻译\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("desc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 原文：https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//devopscube.com/cks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("exam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("guide"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("tips/"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#kubernetes-node-metadata-endpoints")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bgColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#F0DFB1'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("textColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),s("h1",{attrs:{id:"kubernetes节点的元数据端点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes节点的元数据端点"}},[t._v("#")]),t._v(" Kubernetes节点的元数据端点")]),t._v(" "),s("p",[t._v("基于云的 Kubernetes 需要设置元数据隐藏，因为其中的实例会公开元数据信息，包括凭据。")]),t._v(" "),s("p",[t._v("这意味着在每个实例上运行的 Pod 都可以访问元数据服务端点，以检索敏感信息。")]),t._v(" "),s("p",[t._v("Pod 对元数据服务器的访问可以通过网络策略进行控制。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("保护节点元数据和端点")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/securing-a-cluster/#%E9%99%90%E5%88%B6%E4%BA%91%E5%85%83%E6%95%B0%E6%8D%AE-api-%E8%AE%BF%E9%97%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("限制云元数据 API 访问"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("配置网络策略")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://cloud.google.com/kubernetes-engine/docs/tutorials/network-policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("网络策略配置指南"),s("OutboundLink")],1)])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("当您在云上使用托管 Kubernetes 服务时（GKE、EKS、AKS），它附带了禁用 Pod 元数据访问的选项。")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("译者加")]),t._v(" "),s("ul",[s("li",[s("b",[t._v("保护方式一：")]),t._v("在整个集群范围内，引入一个空的出口策略（"),s("code",[t._v("NetworkPolicy.spec.egress")]),t._v("），默认情况下，空策略会禁止一切流量通行，包括对元数据端点的访问流量。然后你再设置白名单，来允许部分流量通过。")]),t._v(" "),s("li",[s("b",[t._v("保护方式二：")]),t._v("如果不可避免地要设置"),s("code",[t._v("ipBlock.cidr: 0.0.0.0/0")]),t._v("之类的参数，则你可以通过"),s("code",[t._v("ipBlock.except")]),t._v("将元数据端点的地址排除掉。例如：")])]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("省略\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("egress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ipBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cidr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0/0\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("except")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"169.254.169.254/32"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 排除元数据端点")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ul",[s("li",[t._v("在本博客中也记录了一些"),s("RouterLink",{attrs:{to:"/knowledge/cloud-security/cloud-metadata-address/"}},[t._v("流行云厂商的元数据服务端点 IP 地址")]),t._v("。")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);