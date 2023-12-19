(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{435:function(e,s,t){"use strict";t.r(s);var n=t(7),r=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"特殊标签-节点角色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊标签-节点角色"}},[e._v("#")]),e._v(" 特殊标签-节点角色")]),e._v(" "),s("p",[e._v("当使用"),s("code",[e._v("kubectl get nodes")]),e._v("列出节点信息时，会有一列名为 “ROLES”（角色）的信息。")]),e._v(" "),s("ul",[s("li",[e._v("master 节点的角色信息默认为"),s("code",[e._v("control-plane")]),e._v("（控制平面）")]),e._v(" "),s("li",[e._v("其他工作节点的角色信息默认为"),s("code",[e._v("<none>")]),e._v("（空）没有角色信息")])]),e._v(" "),s("p",[e._v("该信息可以通过标签"),s("code",[e._v("node-role.kubernetes.io/<名称>")]),e._v("来设置。该标签只通过 “键” 名称来识别，与 “标签值” 无关。")]),e._v(" "),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 为节点 www.k11.com 设置角色标签 “worker1”（此处的标签值为空）")]),e._v("\nkubectl label nodes www.k11.com node-role.kubernetes.io/worker1"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);