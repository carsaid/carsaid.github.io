(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{401:function(a,s,e){"use strict";e.r(s);var t=e(7),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"kubeadm-alpha-certs-集群证书设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm-alpha-certs-集群证书设置"}},[a._v("#")]),a._v(" kubeadm alpha certs（集群证书设置）")]),a._v(" "),s("p",[a._v("证书过期后将无法使用 kubectl 等命令。")]),a._v(" "),s("h3",{attrs:{id:"查看集群证书有效期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看集群证书有效期"}},[a._v("#")]),a._v(" 查看集群证书有效期")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubeadm alpha certs check-expiration\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"证书续期一年"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#证书续期一年"}},[a._v("#")]),a._v(" 证书续期一年")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubeadm alpha certs renew all\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启服务 && 更新配置文件")]),a._v("\nsystemctl restart kubelet\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" /etc/kubernetes/admin.conf .kube/config\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新kubeconfig文件")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);