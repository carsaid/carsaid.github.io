(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{374:function(s,t,e){"use strict";e.r(t);var a=e(7),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"为节点设置标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为节点设置标签"}},[s._v("#")]),s._v(" 为节点设置标签")]),s._v(" "),t("p",[s._v("命令格式：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl label nodes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("节点名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("键"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("值"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多个标签之间通过 空格 来分隔")]),s._v("\nkubectl label nodes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("节点名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("键"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("值"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("键"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("值"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过 减号- 来删除标签")]),s._v("\nkubectl label nodes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("节点名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("键"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("-\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"特殊标签-节点角色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊标签-节点角色"}},[s._v("#")]),s._v(" 特殊标签-节点角色")]),s._v(" "),t("p",[s._v("当使用"),t("code",[s._v("kubectl get nodes")]),s._v("列出节点信息时，会有一列名为 “ROLES”（角色）的信息。")]),s._v(" "),t("ul",[t("li",[s._v("master 节点的角色信息默认为"),t("code",[s._v("control-plane")]),s._v("（控制平面）")]),s._v(" "),t("li",[s._v("其他工作节点的角色信息默认为"),t("code",[s._v("<none>")]),s._v("（空）没有角色信息")])]),s._v(" "),t("p",[s._v("该信息可以通过标签"),t("code",[s._v("node-role.kubernetes.io/<名称>")]),s._v("来设置。该标签只通过 “键” 名称来识别，与 “标签值” 无关。")]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为节点 www.k11.com 设置角色标签 “worker1”，这里的标签值为空")]),s._v("\nkubectl label nodes www.k11.com node-role.kubernetes.io/worker1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为节点 www.k12.com 设置角色标签 “worker2”，这里的标签值为 “abcdefg”")]),s._v("\nkubectl label nodes www.k12.com node-role.kubernetes.io/worker2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("abcdefg\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);