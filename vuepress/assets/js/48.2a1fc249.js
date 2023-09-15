(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{362:function(t,a,e){"use strict";e.r(a);var r=e(7),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cve-2022-2385-潜伏5年的aws-iam-authenticator提权漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cve-2022-2385-潜伏5年的aws-iam-authenticator提权漏洞"}},[t._v("#")]),t._v(" CVE-2022-2385：潜伏5年的Aws Iam Authenticator提权漏洞")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("相关链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/2085677",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云-云IAM原理&风险以及最佳实践"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-2385",target:"_blank",rel:"noopener noreferrer"}},[t._v("CVE-2022-2385"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"aws-iam"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-iam"}},[t._v("#")]),t._v(" AWS IAM")]),t._v(" "),a("p",[t._v("Aws Iam Authenticator")]),t._v(" "),a("ul",[a("li",[t._v("一个身份验证工具。")]),t._v(" "),a("li",[t._v("使用 AWS IAM 凭据对 Kubernetes 集群进行身份验证。")])]),t._v(" "),a("h2",{attrs:{id:"cve-2022-2385"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cve-2022-2385"}},[t._v("#")]),t._v(" CVE-2022-2385")]),t._v(" "),a("p",[t._v("AWS发布了一份安全公告，通报了 Aws Iam Authenticator 中的一个漏洞（CVE-2022-2385）。")]),t._v(" "),a("p",[t._v("利用此漏洞，攻击者可以在 EKS 集群进行 权限提升攻击。该漏洞在 AWS Iam Authenticator 代码中存在了多年。")]),t._v(" "),a("ul",[a("li",[t._v("EKS（Elastic Kubernetes Service）")])]),t._v(" "),a("h2",{attrs:{id:"技术原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术原理"}},[t._v("#")]),t._v(" 技术原理")]),t._v(" "),a("p",[t._v("研究人员发现，AWS Iam Authenticator 在进行身份验证过程中存在几个缺陷：")]),t._v(" "),a("ul",[a("li",[t._v("代码中 错误的大小写校验，")]),t._v(" "),a("li",[t._v("攻击者可以制作恶意令牌，来操纵 AccessKeyID 值，")]),t._v(" "),a("li",[t._v("利用这些缺陷，攻击者可以绕过 AWS IAM 的重放攻击保护，从而进行集群提权利用。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);