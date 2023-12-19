(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{331:function(s,e,t){"use strict";t.r(e);var a=t(7),r=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"cardListContainer"},[e("div",{staticClass:"card-list"},[e("span",{staticClass:"card-item row-2",staticStyle:{"background-color":"#F0DFB1","--randomColor":"#F0DFB1",color:"#1078E6"}},[e("div",[e("p",{staticClass:"name"},[s._v("原创")]),s._v(" "),e("p",{staticClass:"desc"},[s._v("本博客原创文章，转载请注明出处")])])])]),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 原创\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("desc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 本博客原创文章，转载请注明出处\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bgColor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#F0DFB1'")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("textColor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#1078E6'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),e("h1",{attrs:{id:"第3章-基础操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第3章-基础操作"}},[s._v("#")]),s._v(" 第3章-基础操作")]),s._v(" "),e("p",[s._v("在本章中将介绍 K8s 的一些基础操作命令。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("本章要点")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("了解及管理命名空间")])]),s._v(" "),e("tr",[e("td",[s._v("查看 Pod 及节点的负载")])]),s._v(" "),e("tr",[e("td",[s._v("添加及删除worker")])])])]),s._v(" "),e("h2",{attrs:{id:"_1-一些常用查询指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-一些常用查询指令"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"1"}}),s._v("1. 一些常用查询指令")],1),s._v(" "),e("h3",{attrs:{id:"_1-1-完整集群信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-完整集群信息"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"1.1"}}),s._v("1.1 完整集群信息")],1),s._v(" "),e("p",[s._v("运行以下命令 可以看到集群的精简信息，Kubernetes 主控端运行在 192.168.80.10 主机的 6443 端口上：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl cluster-info\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/01-cluster-info/01.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("如果添加"),e("code",[s._v("dump")]),s._v("参数，将会以 json 格式打印完整的集群信息。")]),s._v(" "),e("p",[s._v("由于完整的信息量过于庞大，所以此处使用输出重定向，把信息保存在"),e("code",[s._v("1.json")]),s._v("文件中，然后通过 vim 打开这个文件：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl cluster-info dump "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".json\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/01-cluster-info/02.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("如图所示，这些信息有助于 排查错误。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/01-cluster-info/03.png",alt:"Not Found Image"}}),s._v(" "),e("h3",{attrs:{id:"_1-2-集群版本信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-集群版本信息"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"1.2"}}),s._v("1.2 集群版本信息")],1),s._v(" "),e("p",[s._v("运行 version 命令将会打印集群的版本信息。")]),s._v(" "),e("p",[s._v("如果添加"),e("code",[s._v("--short")]),s._v("标志符，将会打印精简信息。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl version\n\nkubectl version "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--short")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("如图所示，Kubernetes 的版本为 v1.26.5，Golang 的版本为 1.19.9，平台为 amd64 架构的 linux 操作系统...等信息。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/01-cluster-info/04.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("在使用"),e("code",[s._v("--short")]),s._v("标志符的同时还打印了一条提升信息：“标志 --short 已被弃用，将来会被删除，--short 的输出将成为默认值”。真是越来越精简了！")]),s._v(" "),e("h3",{attrs:{id:"_1-3-集群所支持的api版本信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-集群所支持的api版本信息"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"1.3"}}),s._v("1.3 集群所支持的API版本信息")],1),s._v(" "),e("p",[s._v("通过调用 Kubernetes API 可以实现不同的功能，例如自动创建 Pod、创建网络策略等。")]),s._v(" "),e("p",[s._v("在之后的章节中，将会详细介绍如何创建和运用这些组件。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl api-versions\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("列出当前 Kubernetes 版本所支持的 API 版本信息：")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/01-cluster-info/05.png",alt:"Not Found Image"}}),s._v(" "),e("h2",{attrs:{id:"_2-kubernetes命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-kubernetes命名空间"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"2"}}),s._v("2. Kubernetes命名空间")],1),s._v(" "),e("h3",{attrs:{id:"_2-1-kubernetes中的命名空间是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-kubernetes中的命名空间是什么"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"2.1"}}),s._v("2.1 Kubernetes中的命名空间是什么？")],1),s._v(" "),e("p",[s._v("这里拿我们常用的 社交软件 举个例子。假设现在有 2 个群聊，每个群聊中分别有 3 个用户，每位用户又分别位于不同的城市：")]),s._v(" "),e("ul",[e("li",[s._v("群聊-1\n"),e("ul",[e("li",[s._v("A 用户（北京）")]),s._v(" "),e("li",[s._v("B 用户（上海）")]),s._v(" "),e("li",[s._v("C 用户（广州）")])])]),s._v(" "),e("li",[s._v("群聊-2\n"),e("ul",[e("li",[s._v("x 用户（北京）")]),s._v(" "),e("li",[s._v("y 用户（上海）")]),s._v(" "),e("li",[s._v("z 用户（广州）")])])])]),s._v(" "),e("p",[s._v("用户在同一个群聊里 可以无障碍地聊天，群聊与群聊之间是相互隔离的，A 用户和 x 用户虽然都在北京，但他们之间并没有什么交集。")]),s._v(" "),e("p",[s._v("假如把 命名空间 看作一个个不同的群聊：")]),s._v(" "),e("ul",[e("li",[s._v("命名空间-1\n"),e("ul",[e("li",[s._v("Pod-1（worker1）")]),s._v(" "),e("li",[s._v("Pod-2（worker2）")]),s._v(" "),e("li",[s._v("Pod-3（worker3）")])])]),s._v(" "),e("li",[s._v("命名空间-2\n"),e("ul",[e("li",[s._v("Pod-a（worker1）")]),s._v(" "),e("li",[s._v("Pod-b（worker2）")]),s._v(" "),e("li",[s._v("Pod-c（worker3）")])])])]),s._v(" "),e("p",[s._v("Pod 在同一个命名空间里 可以无障碍地通信和交互，命名空间 与 命名空间之间是相互隔离的，Pod-1 和 Pod-a 虽然都运行在 worker1 主机上，但它们之间并没有什么交集。")]),s._v(" "),e("p",[s._v("简单来讲，命名空间就是"),e("b",[s._v("把存在联系的 Pod 划分为一个整体，不相干的整体之间则相互隔离。")])]),s._v(" "),e("h3",{attrs:{id:"_2-2-kubernetes中的默认命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-kubernetes中的默认命名空间"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"2.2"}}),s._v("2.2 Kubernetes中的默认命名空间")],1),s._v(" "),e("p",[s._v("查看当前有多少命名空间：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl get namespaces\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简写")]),s._v("\nkubectl get ns\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("从图中可以看到，目前存在 4 个命名空间。这些命名空间都是部署 kubernetes 时自动创建的，也就是内置的命名空间。其中，你将会经常与"),e("code",[s._v("default")]),s._v("和"),e("code",[s._v("kube-system")]),s._v("这两个命名空间打交道。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/02-namespaces/01.png",alt:"Not Found Image"}}),s._v(" "),e("h3",{attrs:{id:"_2-3-查看不同命名空间中的pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-查看不同命名空间中的pod"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"2.3"}}),s._v("2.3 查看不同命名空间中的pod")],1),s._v(" "),e("p",[s._v("查看当前有多少 pod：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl get pods\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("提示 “在default命名空间中找不到资源”，说明默认的命名空间中没有任何 pod。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/02-namespaces/02.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("使用标志符指定一个命名空间：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl get pods "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),s._v(" kube-system\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简写")]),s._v("\nkubectl get pods "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kube-system\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("成功列出"),e("code",[s._v("kube-system")]),s._v("命名空间中的所有 pod。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/02-namespaces/03.png",alt:"Not Found Image"}}),s._v(" "),e("p",[e("code",[s._v("kube-system")]),s._v("命名空间中的 pod 都是与 kubernetes 集群的运行有关的，例如以 “calico-” 开头的 pod 是用于实现 pod 跨主机通信的，名称中带有 “www.k10.com” 的 pod 则是主控节点用于控制、分发和调度任务的，以 “metrics-server-” 开头的 pod 是用于监控集群资源使用情况的......等。")]),s._v(" "),e("h3",{attrs:{id:"_2-4-查看pod及节点的负载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-查看pod及节点的负载"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"2.4"}}),s._v("2.4 查看Pod及节点的负载")],1),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("在查询 Pod 或节点的负载信息之前，必须先安装监控类插件，例如 metrics-server。在 2.4 章节中已经演示过 metrics-server 的安装过程，还没有安装的小伙伴可以移步上一章节，先将监控插件装上。")])]),s._v(" "),e("h4",{attrs:{id:"_2-4-1-pod负载信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-pod负载信息"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"2.4.1"}}),s._v("2.4.1 Pod负载信息")],1),s._v(" "),e("p",[s._v("默认命名空间中没有任何 pod，自然也就没有负载信息。")]),s._v(" "),e("p",[s._v("查看"),e("code",[s._v("kube-system")]),s._v("命名空间中所有 pod 的负载：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" pods "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kube-system\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可以看到三列内容，分别是 pod 名称以及对应的 CPU 使用情况、内存使用情况。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/02-namespaces/04.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("此外，你还可以使用"),e("code",[s._v("--sort-by")]),s._v("标志符，对结果进行降序排序：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据 CPU 使用情况进行排序")]),s._v("\nkubectl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" pods "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kube-system --sort-by cpu\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据 内存 使用情况进行排序")]),s._v("\nkubectl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" pods "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kube-system --sort-by memory\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("CPU 排序效果：")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/02-namespaces/05.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("内存排序效果：")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/02-namespaces/06.png",alt:"Not Found Image"}}),s._v(" "),e("h4",{attrs:{id:"_2-4-2-节点负载信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-节点负载信息"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"2.4.2"}}),s._v("2.4.2 节点负载信息")],1),s._v(" "),e("p",[s._v("命名空间只作用于 pod 一类的资源，不影响集群内的节点，所以在执行命令时不需要指定命名空间：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl get nodes\n\nkubectl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" nodes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/02-namespaces/07.png",alt:"Not Found Image"}}),s._v(" "),e("h3",{attrs:{id:"_2-5-创建、切换及删除命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-创建、切换及删除命名空间"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"2.5"}}),s._v("2.5 创建、切换及删除命名空间")],1),s._v(" "),e("p",[s._v("创建命名空间：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl create namespace "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("名称"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简写")]),s._v("\nkubectl create ns "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("名称"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("命名空间的名称不能随意指定，需要遵循命名规范——只能是 数字、小写字母和"),e("code",[s._v("-")]),s._v("符号。")]),s._v(" "),e("p",[s._v("如图所示，成功创建了一个名为"),e("code",[s._v("this-is-new-ns")]),s._v("的命名空间。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/02-namespaces/08.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("切换命名空间：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("--current")]),s._v("：选择当前集群")]),s._v(" "),e("li",[e("code",[s._v("--namespace")]),s._v("：指定要切换的命名空间")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 指定集群 的某个命名空间")]),s._v("\nkubectl config set-context "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("集群名称"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("命名空间名称"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 当前集群 的某个命名空间")]),s._v("\nkubectl config set-context "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--current")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("命名空间名称"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("从图中可以看到，先执行了一次"),e("code",[s._v("kubectl get pods")]),s._v("，此时提示 “未在"),e("code",[s._v("default")]),s._v("命名空间中找到资源”。")]),s._v(" "),e("p",[s._v("然后将当前的命名空间切换为"),e("code",[s._v("kube-system")]),s._v("，再次进行 pod 查询操作，成功列出了"),e("code",[s._v("kube-system")]),s._v("命名空间中的所有 pod。在这之前，我们每次查询 pod 都需要添加标志符"),e("code",[s._v("-n kube-system")]),s._v("，但现在不需要了。")]),s._v(" "),e("p",[s._v("说明"),e("code",[s._v("kubectl get pods")]),s._v("这类命令并不是围绕"),e("code",[s._v("default")]),s._v("命名空间来执行的，而是围绕用户当前所处的命名空间。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/02-namespaces/09.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("删除命名空间：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl delete namespaces "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("名称"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简写")]),s._v("\nkubectl delete ns "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("名称"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("删除成功，第二次查询中已经没有了 this-is-new-ns 命名空间的踪迹。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/02-namespaces/10.png",alt:"Not Found Image"}}),s._v(" "),e("h2",{attrs:{id:"_3-删除节点并重新加入集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除节点并重新加入集群"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"3"}}),s._v("3. 删除节点并重新加入集群")],1),s._v(" "),e("p",[s._v("有时，我们需要把 kubernetes 中的某个节点移除。")]),s._v(" "),e("p",[s._v("现在，让我们尝试从集群中移除 worker2 节点。")]),s._v(" "),e("h3",{attrs:{id:"第一步-将worker2设置成维护模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一步-将worker2设置成维护模式"}},[s._v("#")]),s._v(" 第一步，将worker2设置成维护模式")]),s._v(" "),e("p",[s._v("在设置之前，先查看一下节点信息，此时 worker2 的状态为 Ready。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/03-nodes-delete/01.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("将 worker2 设置成维护模式，并驱逐上面运行的 pod：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("--force")]),s._v("：强制执行")]),s._v(" "),e("li",[e("code",[s._v("--ignore-daemonsets")]),s._v("：忽略其上的 DaemonSet 控制器，之后的章节中会详细介绍")]),s._v(" "),e("li",[e("code",[s._v("--delete-emptydir-data")]),s._v("：清除 pod 在主机存储中保存的本地数据")])]),s._v(" "),e("p",[s._v("原本运行在 worker2 上的 pod 将会被驱逐至其他工作节点上继续运行。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有时候不添加 --delete-emptydir-data 也能执行成功")]),s._v("\nkubectl drain www.k12.com "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v(" --ignore-daemonsets --delete-emptydir-data\n\nkubectl get nodes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("再次查看节点信息，发现 worker2 多了一个状态 “SchedulingDisabled”，说明 worker2 已经被停止调度，后续的工作任务将不会被派发给 worker2。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/03-nodes-delete/02.png",alt:"Not Found Image"}}),s._v(" "),e("h3",{attrs:{id:"第二步-从集群中删除worker2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二步-从集群中删除worker2"}},[s._v("#")]),s._v(" 第二步，从集群中删除worker2")]),s._v(" "),e("p",[s._v("使用 delete nodes 命令彻底删除这个节点：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl delete "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" www.k12.com\n\nkubectl get nodes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("再次查看节点信息，此时已经看不到 worker2 的踪迹了。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/03-nodes-delete/03.png",alt:"Not Found Image"}}),s._v(" "),e("h3",{attrs:{id:"第三步-清空worker2上的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三步-清空worker2上的配置"}},[s._v("#")]),s._v(" 第三步，清空worker2上的配置")]),s._v(" "),e("p",[s._v("转到 worker2 所在的主机，运行以下命令并输入 “y” 进行确认，重置所有 kubernetes 设置。")]),s._v(" "),e("ul",[e("li",[s._v("只会清空配置信息，并不是整个 kubernetes 都给你卸了")]),s._v(" "),e("li",[s._v("不管是 master 还是 worker 主机，如果想重置 kubernetes 设置的话，都需要执行"),e("code",[s._v("kubeadm reset")]),s._v("命令")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubeadm reset\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/03-nodes-delete/04.png",alt:"Not Found Image"}}),s._v(" "),e("h3",{attrs:{id:"第四步-重新加入集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第四步-重新加入集群"}},[s._v("#")]),s._v(" 第四步，重新加入集群")]),s._v(" "),e("p",[s._v("哎呀，加入集群的命令是什么来着？忘记了怎么办？")]),s._v(" "),e("p",[s._v("没关系，我们可以在 master 节点上使用 kubeadm 获取一个新的 “加入集群” 命令：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubeadm token create --print-join-command\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/03-nodes-delete/05.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("回到 worker2 并运行新获得的加入命令，执行命令的过程中出现错误。")]),s._v(" "),e("p",[s._v("错误信息：“"),e("code",[s._v("/proc/sys/net/bridge/bridge-nf-call-iptables")]),s._v("不存在”。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/03-nodes-delete/06.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("这个错误信息中的路径，看起来是不是很眼熟？")]),s._v(" "),e("p",[s._v("在 1.6 章节中，我们对主机进行了内核参数配置，刚刚在执行"),e("code",[s._v("kubeadm reset")]),s._v("的过程中 配置可能被清掉了，现在重新运行一遍配置命令，用以设置主机内核参数。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置内核的网络参数")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),e("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/sysctl.d/k8s.conf")]),s._v("\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\nEOF")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载br_netfilter模块")]),s._v("\nmodprobe br_netfilter\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让新的内核配置立即生效")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/sysctl.d/k8s.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/03-nodes-delete/07.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("重新加入集群，这一次没有报错。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/03-nodes-delete/08.png",alt:"Not Found Image"}}),s._v(" "),e("p",[s._v("在 master 上查看节点信息，worker2 在 32 秒之前加入了集群，说明刚刚的加入操作成功了。")]),s._v(" "),e("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/cloud-native-security/kubernetes/basic-use/03-nodes-delete/09.png",alt:"Not Found Image"}}),s._v(" "),e("h3",{attrs:{id:"_3-5-重新加入集群时-可能会遇到的各种错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-重新加入集群时-可能会遇到的各种错误"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"3.5"}}),s._v("3.5 重新加入集群时，可能会遇到的各种错误")],1),s._v(" "),e("h4",{attrs:{id:"_3-5-1-缺少内核参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-1-缺少内核参数"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"3.5.1"}}),s._v("3.5.1 缺少内核参数")],1),s._v(" "),e("p",[s._v("这个错误在 “第四步” 中已经遇到过了，只需要重新设置一下内核参数即可：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置内核的网络参数")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF"),e("span",{pre:!0,attrs:{class:"token bash punctuation"}},[s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/sysctl.d/k8s.conf")]),s._v("\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\nEOF")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载br_netfilter模块")]),s._v("\nmodprobe br_netfilter\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让新的内核配置立即生效")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/sysctl.d/k8s.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h4",{attrs:{id:"_3-5-2-清空配置不彻底"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-2-清空配置不彻底"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"3.5.2"}}),s._v("3.5.2 清空配置不彻底")],1),s._v(" "),e("p",[s._v("在 “第三步” 中，从集群删除 worker2 之后，我们曾在 worker2 上执行"),e("code",[s._v("kubeadm reset")]),s._v("命令，用以清空主机上所有旧的 kubernetes 设置。")]),s._v(" "),e("p",[s._v("这种清空方式 有时候会出现清除不彻底的情况，需要我们手动再清除一遍。")]),s._v(" "),e("p",[s._v("如果再次加入集群时 出现了这类错误的话，只需要把"),e("code",[s._v("/etc/kubernetes/pki/")]),s._v("和"),e("code",[s._v("/var/lib/kubelet/")]),s._v("这两个目录下的内容都清空，然后再次加入集群即可。注意，是删除这两个目录中的内容，而不是删除这两个目录。你可以通过以下命令来实现这个效果：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /etc/kubernetes/pki/*\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /var/lib/kubelet/*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_4-小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-小结"}},[s._v("#")]),s._v(" "),e("Badge",{attrs:{type:"error",text:"4"}}),s._v("4. 小结")],1),s._v(" "),e("p",[s._v("在本章中，我们介绍了 Kubernetes 的一些常见命令、如何管理命名空间，以及如何删除节点并使其重新加入集群。")]),s._v(" "),e("p",[s._v("我为你准备了一点课后练习（"),e("RouterLink",{attrs:{to:"/cloud-native-security/kubernetes/practice/01/"}},[s._v("练习题-1")]),s._v("），以帮助你掌握前面所学的知识点，快去试试吧！")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);