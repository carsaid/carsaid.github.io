(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{349:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"课后练习题-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课后练习题-8"}},[s._v("#")]),s._v(" 课后练习题-8")]),s._v(" "),a("h2",{attrs:{id:"理论练习-开放性试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理论练习-开放性试题"}},[s._v("#")]),s._v(" 理论练习（开放性试题）")]),s._v(" "),a("p",[s._v("涵盖第 10 章的内容。")]),s._v(" "),a("ol",[a("li",[s._v("控制器 Deployment 和 DaemonSet 之间的区别？")]),s._v(" "),a("li",[s._v("控制器 ReplicaSet（RS）的作用？")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("答案")]),s._v(" "),a("ol",[a("li",[s._v("Deployment 创建并运行多个 Pod，这些 Pod 被调度至不同的工作节点上运行，通常用于部署业务。DaemonSet 在每个节点上分别创建一个 Pod，通常用于集群自身的监控、通信和日志收集等工作。")]),s._v(" "),a("li",[s._v("RS 可以维持 Pod 数量，提供 Pod 副本数扩缩特性。RS 被作为 Deployment 的底层组件之一。")])])]),s._v(" "),a("h2",{attrs:{id:"实操练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实操练习"}},[s._v("#")]),s._v(" 实操练习")]),s._v(" "),a("p",[s._v("涵盖第 10 章的内容。")]),s._v(" "),a("ol",[a("li",[s._v("创建一个 DaemonSet 控制器，要求如下：\n"),a("ul",[a("li",[s._v("名称为"),a("code",[s._v("ds-ten")])]),s._v(" "),a("li",[s._v("通过标签表达式（选择算符）来追踪 Pod，要求匹配"),a("code",[s._v("look=good")]),a("b",[s._v("或")]),a("code",[s._v("look=bang")]),s._v("标签")]),s._v(" "),a("li",[s._v("添加一个标签表达式，拒绝标签键名为"),a("code",[s._v("bad")]),s._v("的任意 Pod")]),s._v(" "),a("li",[s._v("Pod 模板的标签为"),a("code",[s._v("look=good")])]),s._v(" "),a("li",[s._v("容器使用的镜像为"),a("code",[s._v("nginx")]),s._v("，镜像下载策略为"),a("code",[s._v("IfNotPresent")]),s._v("，容器名称为"),a("code",[s._v("c1")])])])]),s._v(" "),a("li",[s._v("解释此 DaemonSet 为什么没有在 master 上创建 Pod？")]),s._v(" "),a("li",[s._v("将此 DaemonSet 的镜像变更为"),a("code",[s._v("nginx:1.9")]),s._v("。")]),s._v(" "),a("li",[s._v("控制器 DaemonSet 是否支持镜像的历史变更记录？")]),s._v(" "),a("li",[s._v("将其中一个 Pod 的标签"),a("code",[s._v("look=good")]),s._v("修改为"),a("code",[s._v("look=bang")]),s._v("，观察 DaemonSet 是否有动作。")]),s._v(" "),a("li",[s._v("为其中一个 Pod 添加标签"),a("code",[s._v("bad=")]),s._v("，观察 DaemonSet 是否有动作。")]),s._v(" "),a("li",[s._v("删除这个 DaemonSet.")])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"实操练习答案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实操练习答案"}},[s._v("#")]),s._v(" 实操练习答案")]),s._v(" "),a("h4",{attrs:{id:"_1-控制器ds-ten"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-控制器ds-ten"}},[s._v("#")]),s._v(" 1. 控制器"),a("code",[s._v("ds-ten")])]),s._v(" "),a("p",[s._v("创建一个 DaemonSet 控制器，要求如下：\n+ 名称为"),a("code",[s._v("ds-ten")]),s._v("\n+ 通过标签表达式（选择算符）来追踪 Pod，要求匹配"),a("code",[s._v("look=good")]),a("b",[s._v("或")]),a("code",[s._v("look=bang")]),s._v("标签\n+ 添加一个标签表达式，拒绝标签键名为"),a("code",[s._v("bad")]),s._v("的任意 Pod\n+ Pod 模板的标签为"),a("code",[s._v("look=good")]),s._v("\n+ 容器使用的镜像为"),a("code",[s._v("nginx")]),s._v("，镜像下载策略为"),a("code",[s._v("IfNotPresent")]),s._v("，容器名称为"),a("code",[s._v("c1")])]),s._v(" "),a("p",[s._v("编写以下 yaml 文件：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ds-ten.yaml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DaemonSet\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ten\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchExpressions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" look"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" In"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("good"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DoesNotExist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("look")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" good\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("imagePullPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" IfNotPresent\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" c1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("创建这个控制器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" ds-ten.yaml\n\nkubectl get daemonsets "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" wide\nkubectl get pods --show-labels\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/practice/08/01.png",alt:"Not Found Image"}}),s._v(" "),a("h4",{attrs:{id:"_2-解释此-daemonset-为什么没有在-master-上创建-pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解释此-daemonset-为什么没有在-master-上创建-pod"}},[s._v("#")]),s._v(" 2. 解释此 DaemonSet 为什么没有在 master 上创建 Pod？")]),s._v(" "),a("p",[s._v("因为 master 节点默认具有污点，而此 DaemonSet 没有在 Pod 模板中配置容忍污点，所以 DaemonSet 不会在具有污点的 master 上创建 Pod。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl describe nodes www.k10.com "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" Taint\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/practice/08/02.png",alt:"Not Found Image"}}),s._v(" "),a("h4",{attrs:{id:"_3-将此-daemonset-的镜像变更为nginx-1-9。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-将此-daemonset-的镜像变更为nginx-1-9。"}},[s._v("#")]),s._v(" 3. 将此 DaemonSet 的镜像变更为"),a("code",[s._v("nginx:1.9")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" image daemonset ds-ten "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("c1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx:1.9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/practice/08/03.png",alt:"Not Found Image"}}),s._v(" "),a("h4",{attrs:{id:"_4-控制器-daemonset-是否支持镜像的历史变更记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-控制器-daemonset-是否支持镜像的历史变更记录"}},[s._v("#")]),s._v(" 4. 控制器 DaemonSet 是否支持镜像的历史变更记录？")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl rollout "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" daemonset ds-ten\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以设置注释信息，但内容不会同步到历史记录中")]),s._v("\nkubectl annotate daemonset ds-ten kubernetes.io/change-cause"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("变更原因"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("支持历史记录，但不能像 Deployment 一样自定义变更信息。")]),s._v(" "),a("h4",{attrs:{id:"_5-将其中一个-pod-的标签look-good修改为look-bang-观察-daemonset-是否有动作。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-将其中一个-pod-的标签look-good修改为look-bang-观察-daemonset-是否有动作。"}},[s._v("#")]),s._v(" 5. 将其中一个 Pod 的标签"),a("code",[s._v("look=good")]),s._v("修改为"),a("code",[s._v("look=bang")]),s._v("，观察 DaemonSet 是否有动作。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl label pods "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Pod名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("look")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bang "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--overwrite")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\nkubectl get pods --show-labels\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("DaemonSet 没有任何动作。因为它可以追踪标签"),a("code",[s._v("look=good")]),s._v("和"),a("code",[s._v("look=bang")]),s._v("中的任意一个。")]),s._v(" "),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/practice/08/04.png",alt:"Not Found Image"}}),s._v(" "),a("h4",{attrs:{id:"_6-为其中一个-pod-添加标签bad-观察-daemonset-是否有动作。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-为其中一个-pod-添加标签bad-观察-daemonset-是否有动作。"}},[s._v("#")]),s._v(" 6. 为其中一个 Pod 添加标签"),a("code",[s._v("bad=")]),s._v("，观察 DaemonSet 是否有动作。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bad 标签的值为空")]),s._v("\nkubectl label pods "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Pod名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bad")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\nkubectl get pods --show-labels\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("由于 “拒绝” 的优先级大于 “允许”，所以 DaemonSet 丢弃了这个 Pod，另外创建了一个新的 Pod。")]),s._v(" "),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/practice/08/05.png",alt:"Not Found Image"}}),s._v(" "),a("h4",{attrs:{id:"_7-删除这个-daemonset。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-删除这个-daemonset。"}},[s._v("#")]),s._v(" 7. 删除这个 DaemonSet。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl delete daemonsets ds-ten\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\nkubectl delete "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" ds-ten.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/practice/08/06.png",alt:"Not Found Image"}})])}),[],!1,null,null,null);a.default=n.exports}}]);