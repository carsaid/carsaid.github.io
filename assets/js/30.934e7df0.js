(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{344:function(t,e,a){"use strict";a.r(e);var s=a(7),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"驱逐节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#驱逐节点"}},[t._v("#")]),t._v(" 驱逐节点")]),t._v(" "),e("p",[t._v("停止对该 node 的调度，node 状态变为"),e("code",[t._v("SchedulingDisabled")]),t._v("，并清空上面的所有 Pod，被清空的 Pod 会被调度到其他 node 上运行。")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("kubectl drain "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("节点名称"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"一些选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些选项"}},[t._v("#")]),t._v(" 一些选项")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("kubectl drain "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("节点名称"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--force")]),t._v(" --delete-local-data --ignore-daemonsets\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",[t._v("序号")]),t._v(" "),e("th",[t._v("可选标志")]),t._v(" "),e("th",[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[e("code",[t._v("--force")])]),t._v(" "),e("td",[t._v("强制进行当前操作。")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[e("code",[t._v("--delete-local-data")])]),t._v(" "),e("td",[t._v("删除节点本地数据——即使该节点上的某个 Pod 使用 emptyDir 来存储数据（节点丢失时将被删除的本地数据），也继续进行删除操作。")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[e("code",[t._v("--ignore-daemonsets")])]),t._v(" "),e("td",[t._v("忽略由 DaemonSet 管理的 Pod。")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);