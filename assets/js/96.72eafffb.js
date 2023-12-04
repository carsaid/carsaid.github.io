(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{410:function(e,t,s){"use strict";s.r(t);var a=s(7),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"secret-常用配置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#secret-常用配置项"}},[e._v("#")]),e._v(" Secret 常用配置项")]),e._v(" "),t("h2",{attrs:{id:"一个简单的secret"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的secret"}},[e._v("#")]),e._v(" "),t("Badge",{attrs:{type:"error",text:"1"}}),e._v("一个简单的Secret")],1),e._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Secret\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" mysec\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Opaque            "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# secret类型")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 密钥对，格式为 “键: 值”")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("abc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" MTIz             "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 需要填写 Base64 编码过后的值")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("secret 有三种类型")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Opaque")]),e._v("：经过 Base64 编码的密钥对。一般用于存储密码、密钥等，但也可以通过 Base64 解码得到原始明文数据，加密性很弱。")]),e._v(" "),t("li",[t("code",[e._v("kubernetes.io/dockerconfigjson")]),e._v("：用来存储私有 docker registry 的认证信息。")]),e._v(" "),t("li",[t("code",[e._v("kubernetes.io/service-account-token")]),e._v("：用于被 serviceaccount 引用。")])]),e._v(" "),t("p",[e._v("创建 serviceaccount 时 kubernetes 会默认创建对应的 secret。")]),e._v(" "),t("p",[e._v("Pod 如果使用了 serviceaccount，则对应的 secret 会自动挂载到 Pod 的目录"),t("code",[e._v("/run/secrets/kubernetes.io/serviceaccount")]),e._v("中。")])])}),[],!1,null,null,null);t.default=n.exports}}]);