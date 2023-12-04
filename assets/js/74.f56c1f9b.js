(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{390:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"kubectl-autoscale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-autoscale"}},[a._v("#")]),a._v(" kubectl autoscale")]),a._v(" "),s("p",[a._v("为指定控制器创建一个 HPA（水平自动扩缩）。")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("水平自动扩缩（HPA）需要搭配 Pod 的资源限制"),s("code",[a._v("spec.containers.resources.limits")]),a._v("一起使用，否则 HPA 无法生效。")])]),a._v(" "),s("h3",{attrs:{id:"可创建的资源-笔者已学或已知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可创建的资源-笔者已学或已知"}},[a._v("#")]),a._v(" 可创建的资源（笔者已学或已知）")]),a._v(" "),s("h4",{attrs:{id:"控制器deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制器deployment"}},[a._v("#")]),a._v(" 控制器deployment")]),a._v(" "),s("p",[a._v("为控制器 Deployment 创建一个水平自动扩缩。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 基本格式")]),a._v("\nkubectl autoscale deployment "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("控制器名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--min")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("最小副本数"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--max")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("最大副本数"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --cpu-percent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("CPU负载度量值"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或")]),a._v("\nkubectl autoscale deploy "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("控制器名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--min")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("最小副本数"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--max")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("最大副本数"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --cpu-percent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("CPU负载度量值"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例（最小 2 个副本数，最大 7 个副本数，CPU 阈值为 70%）")]),a._v("\nkubectl autoscale deployment "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("控制器名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--min")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--max")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(" --cpu-percent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("70")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h4",{attrs:{id:"控制器replicaset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制器replicaset"}},[a._v("#")]),a._v(" 控制器ReplicaSet")]),a._v(" "),s("p",[a._v("为控制器 ReplicaSet 创建一个水平自动扩缩。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl autoscale rs "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("控制器名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--min")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("最小副本数"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--max")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("最大副本数"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --cpu-percent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("CPU负载度量值"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"命令参数选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令参数选项"}},[a._v("#")]),a._v(" 命令参数选项")]),a._v(" "),s("h4",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" --name")]),a._v(" "),s("p",[a._v("手动指定 HPA 的名称。")]),a._v(" "),s("p",[a._v("HPA 一般不需要指定名称，创建时会自动使用与 控制器 相同的名称。例如：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例（未指定 --name 选项，则 HPA 的名称也叫做 d1-test）")]),a._v("\nkubectl autoscale deployment d1-test "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--min")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--max")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(" --cpu-percent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("70")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("添加"),s("code",[a._v("--name")]),a._v("选项后：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例（手动设置 HPA 的名称为 hpa-1）")]),a._v("\nkubectl autoscale deployment d1-test "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hpa-1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--min")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--max")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(" --cpu-percent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("70")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"min"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min"}},[a._v("#")]),a._v(" --min")]),a._v(" "),s("p",[a._v("指定 HPA 缩减时的副本数下限（最小副本数）。")]),a._v(" "),s("h4",{attrs:{id:"max"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max"}},[a._v("#")]),a._v(" --max")]),a._v(" "),s("p",[a._v("指定 HPA 扩展时的副本数上限（最大副本数）。")]),a._v(" "),s("h4",{attrs:{id:"cpu-percent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu-percent"}},[a._v("#")]),a._v(" --cpu-percent")]),a._v(" "),s("p",[a._v("指定 CPU 度量值（默认单位为：百分比）。")]),a._v(" "),s("ul",[s("li",[a._v("当 Pod 的平均 CPU 负载超过这个值时，将会自动扩展副本数。")]),a._v(" "),s("li",[a._v("当 （"),s("code",[a._v("Pod 总数量-1")]),a._v("）个 Pod 的平均 CPU 负载低于这个值时，将会自动缩减副本数。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);