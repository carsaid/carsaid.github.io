(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{351:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"通过命令行创建pod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过命令行创建pod"}},[a._v("#")]),a._v(" 通过命令行创建Pod")]),a._v(" "),s("p",[a._v("基本语法。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"image-pull-policy选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-pull-policy选项"}},[a._v("#")]),a._v(" --image-pull-policy选项")]),a._v(" "),s("p",[a._v("指定镜像下载策略，可选值有三个：")]),a._v(" "),s("ul",[s("li",[a._v("（推荐）"),s("code",[a._v("IfNotPresent")]),a._v("如果本地存在相应镜像，则使用本地镜像创建 Pod，如果没有则尝试到网络上下载镜像")]),a._v(" "),s("li",[s("code",[a._v("Always")]),a._v("：不管本地有没有镜像，总是到网络上去下载，用所下载的镜像来创建 Pod")]),a._v(" "),s("li",[s("code",[a._v("Never")]),a._v("从不下载镜像，只使用本地镜像来创建 Pod")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --image-pull-policy "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像下载策略"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"n-namespace选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#n-namespace选项"}},[a._v("#")]),a._v(" -n/--namespace选项")]),a._v(" "),s("p",[a._v("在指定命名空间中创建 Pod。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("命名空间"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"l-labels选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#l-labels选项"}},[a._v("#")]),a._v(" -l/--labels选项")]),a._v(" "),s("p",[a._v("创建 Pod 时为其设置标签。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("标签"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("标签值"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nkubectl run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--labels")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("标签"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("标签值"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 多个标签之间使用 逗号, 分隔")]),a._v("\nkubectl run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("标签"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("值"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v(","),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("标签"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("值"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"env选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env选项"}},[a._v("#")]),a._v(" --env选项")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("变量名"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("值"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"port选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#port选项"}},[a._v("#")]),a._v(" --port选项")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("端口号"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"选项-创建pod的同时执行命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项-创建pod的同时执行命令"}},[a._v("#")]),a._v(" "),s("code",[a._v("--")]),a._v("选项（创建Pod的同时执行命令）")]),a._v(" "),s("p",[a._v("指定 Pod/容器 启动时将要执行的命令，这会覆盖镜像中定义的默认命令。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Pod名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -- "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("命令"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 例如")]),a._v("\nkubectl run pod1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" alpine -- "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'echo 123456 && sleep 99999'")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"通过yaml文件创建pod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过yaml文件创建pod"}},[a._v("#")]),a._v(" 通过yaml文件创建Pod")]),a._v(" "),s("h3",{attrs:{id:"dry-run选项以及-o选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dry-run选项以及-o选项"}},[a._v("#")]),a._v(" --dry-run选项以及-o选项")]),a._v(" "),s("p",[s("code",[a._v("--dry-run")]),a._v("：试运行，并不会真的创建一个 Pod。")]),a._v(" "),s("p",[s("code",[a._v("-o yaml")]),a._v("：以 YAML 格式输出 Pod 的所有配置信息。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 快速生成一个 Pod 的 yaml 文件")]),a._v("\nkubectl run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --dry-run"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("client "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" yaml "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" test.yaml\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 应用文件并创建Pod")]),a._v("\nkubectl apply "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" test.yaml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("文件内容：")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# test.yaml")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("creationTimestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[a._v("null")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" pod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("y\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" pod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("y\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" pod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("y\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dnsPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterFirst\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restartPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Always\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);