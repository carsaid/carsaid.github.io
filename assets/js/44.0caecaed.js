(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{359:function(s,t,e){"use strict";e.r(t);var a=e(7),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"获取完整的集群信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取完整的集群信息"}},[s._v("#")]),s._v(" 获取完整的集群信息")]),s._v(" "),t("p",[s._v("转储 “适合调试和诊断群集问题” 的集群完整信息（JSON 格式），默认将所有信息转储到标准输出。")]),s._v(" "),t("p",[s._v("注：信息量比较大，建议配合输出重定向 保存至文件中进行查看。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl cluster-info dump\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将信息保存至 info.json 文件中")]),s._v("\nkubectl cluster-info dump "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" info.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("命令"),t("code",[s._v("kubectl cluster-info dump")]),s._v("默认情况下只转储命名空间"),t("code",[s._v("kube-system")]),s._v("中的内容，但是你可以使用"),t("code",[s._v("--namespaces")]),s._v("标志来切换到不同的命名空间，或者指定"),t("code",[s._v("--all-namespaces")]),s._v("来转储所有的命名空间。")])]),s._v(" "),t("h3",{attrs:{id:"output-directory选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-directory选项"}},[s._v("#")]),s._v(" --output-directory选项")]),s._v(" "),t("p",[s._v("在指定的目录中构建一组文件，文件中包含集群的转储信息。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl cluster-info dump --output-directory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如")]),s._v("\nkubectl cluster-info dump --output-directory /opt/info/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("命令"),t("code",[s._v("kubectl cluster-info dump")]),s._v("默认情况下只转储命名空间"),t("code",[s._v("kube-system")]),s._v("中的内容，但是你可以使用"),t("code",[s._v("--namespaces")]),s._v("标志来切换到不同的命名空间，或者指定"),t("code",[s._v("--all-namespaces")]),s._v("来转储所有的命名空间。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);