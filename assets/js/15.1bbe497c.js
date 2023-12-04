(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{329:function(s,t,e){"use strict";e.r(t);var a=e(7),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"cardListContainer"},[t("div",{staticClass:"card-list"},[t("span",{staticClass:"card-item row-2",staticStyle:{"background-color":"#F0DFB1","--randomColor":"#F0DFB1",color:"#1078E6"}},[t("div",[t("p",{staticClass:"name"},[s._v("原创")]),s._v(" "),t("p",{staticClass:"desc"},[s._v("本博客原创文章，转载请注明出处")])])])]),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 原创\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 本博客原创文章，转载请注明出处\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bgColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#F0DFB1'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("textColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#1078E6'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),t("h1",{attrs:{id:"第2章-便捷性设置以及集群插件的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第2章-便捷性设置以及集群插件的安装"}},[s._v("#")]),s._v(" 第2章-便捷性设置以及集群插件的安装")]),s._v(" "),t("p",[s._v("在上一章中，我们已经成功部署了 K8s 集群。在本章中将进行一些额外的配置，使得今后的工作更加便捷和高效。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("本章要点")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("配置命令行Tab自动补全")])]),s._v(" "),t("tr",[t("td",[s._v("优化vim参数")])]),s._v(" "),t("tr",[t("td",[s._v("掌握集群插件的部署")])])])]),s._v(" "),t("h2",{attrs:{id:"_1-命令行tab自动补全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令行tab自动补全"}},[s._v("#")]),s._v(" "),t("Badge",{attrs:{type:"error",text:"1"}}),s._v("1. 命令行Tab自动补全")],1),s._v(" "),t("p",[s._v("我们使用的 K8s 命令行工具主要有两个："),t("code",[s._v("kubeadm")]),s._v("和"),t("code",[s._v("kubectl")]),s._v("。前者是集群的管理，后者是集群的应用。")]),s._v(" "),t("p",[s._v("默认情况下，这两个工具都不支持 Tab 键命令补全，如果能够使用该功能，则会为我们的命令输入带来极大的便捷性（听闻高版本的 K8s 已经自带了 Tab 补全，但经过测试并没有......还是得自己配置）。")]),s._v(" "),t("p",[s._v("1、编辑"),t("code",[s._v("/etc/profile")]),s._v("文件，在文件上方添加以下内容，然后刷新配置。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在文件中添加以下内容，添加完成后保存退出！注意！符号 < 和 ( 之间没有空格")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kubeadm completion "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kubectl completion "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/1-tab/01.png",alt:"Not Found Image"}}),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/1-tab/02.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("2、在命令行输入以下命令，边输入 边按 Tab 键，测试是否能够自动补全。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新的 token 并打印加入集群的命令")]),s._v("\nkubeadm token create --print-join-command\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_2-vim配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-vim配置"}},[s._v("#")]),s._v(" "),t("Badge",{attrs:{type:"error",text:"2"}}),s._v("2. vim配置")],1),s._v(" "),t("p",[s._v("我们经常使用 vim 来编辑文件，在 K8s 中也有大量的配置文件等着我们编写。")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("学习更多")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.runoob.com/linux/linux-vim.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("vi/vim基本使用"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("配置 vim 相关参数，让我们编辑得更加顺畅（也不一定非得 vim，你用别的编辑器也行）。")]),s._v(" "),t("p",[s._v("1、编辑"),t("code",[s._v("~/.vimrc")]),s._v("文件，添加以下内容。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("set nu")]),s._v("：编辑文件时，显示行号。")]),s._v(" "),t("li",[t("code",[s._v("syntax on")]),s._v("：开启文件着色。")]),s._v(" "),t("li",[t("code",[s._v("set tabstop=X")]),s._v("：设置制表符的长度为 X 个字符。")]),s._v(" "),t("li",[t("code",[s._v("set shiftwidth=X")]),s._v("：设置自动缩进的长度为 X 个字符")]),s._v(" "),t("li",[t("code",[s._v("set expandtab")]),s._v("：用相等数量的 空格 来替换 缩进。")]),s._v(" "),t("li",[t("code",[s._v("set autoindent")]),s._v("：自动缩进。")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.vimrc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在文件中添加以下内容，添加完成后保存退出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" nu\nsyntax on\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tabstop")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("shiftwidth")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" expandtab autoindent\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/2-vim/01.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("2、保存退出后，再次打开文件，左边已经显示了行号，说明刚刚的配置生效了。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/2-vim/02.png",alt:"Not Found Image"}}),s._v(" "),t("h2",{attrs:{id:"_3-安装calico网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装calico网络"}},[s._v("#")]),s._v(" "),t("Badge",{attrs:{type:"error",text:"3"}}),s._v("3. 安装calico网络")],1),s._v(" "),t("p",[s._v("在 K8s 集群中，Pod 一般都部署在不同的主机上，想要实现 Pod 之间的跨主机通信，就必须安装 CNI 网络插件。")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("学习更多")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/7236182358817800251",target:"_blank",rel:"noopener noreferrer"}},[s._v("K8s七大CNI网络插件用法和对比 "),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("本篇教程选择 "),t("a",{attrs:{href:"https://github.com/projectcalico/calico",target:"_blank",rel:"noopener noreferrer"}},[s._v("calico"),t("OutboundLink")],1),s._v(" 网络。")]),s._v(" "),t("p",[s._v("1、安装之前，查看集群状态，所有节点的状态都为 “NotReady”（未准备就绪），说明存在问题。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl get nodes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/3-calico/01.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("2、在 master 节点上，下载 calico 的配置文件。然后使用"),t("code",[s._v("grep")]),s._v("命令筛选出 安装过程中需要用到的镜像名称。")]),s._v(" "),t("p",[s._v("筛选出了五个镜像条目，其中有两个是重复的，实际上只有 3 个镜像。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/projectcalico/calico/v3.26.0/manifests/calico.yaml\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 筛选需要的镜像名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" image calico.yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/3-calico/02.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("3、在所有节点上，运行以下命令，将三个镜像下载到本地。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("集群内所有节点都需要下载镜像，保证每个 master 和 worker 节点上都有镜像")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过for循环拉取每一个镜像（时间可能较长，需要耐心等待）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" docker.io/calico/cni:v3.26.0 docker.io/calico/node:v3.26.0 docker.io/calico/kube-controllers:v3.26.0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" ctr "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" k8s.io i pull "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/3-calico/03.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("4、在 master 节点上，编辑"),t("code",[s._v("calico.yaml")]),s._v("文件，修改其中的 Pod 网段。")]),s._v(" "),t("p",[s._v("在上一章中， kubeadm 初始化时指定的网段为"),t("code",[s._v("10.244.0.0/16")]),s._v("，所以此处也要设置为相同的值。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/3-calico/04.png",alt:"Not Found Image"}}),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/3-calico/05.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("5、修改文件之后，在 master 节点上运行以下命令，安装 calico 网络。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" calico.yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/3-calico/06.png",alt:"Not Found Image"}}),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("一些用户可能喜欢用"),t("code",[s._v("kubectl apply")]),s._v("来创建 calico 应用。")]),s._v(" "),t("p",[s._v("但"),t("a",{attrs:{href:"https://docs.tigera.io/calico/latest/getting-started/kubernetes/quickstart",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),t("OutboundLink")],1),s._v("里提到：由于 CRD 捆绑包的大小很大，使用"),t("code",[s._v("kubectl apply")]),s._v("可能会超出请求限制。所以，请使用"),t("code",[s._v("kubectl create")]),s._v("或"),t("code",[s._v("kubectl replace")]),s._v("。")])]),s._v(" "),t("p",[s._v("6、安装 calico 网络之后，等待一段时间，所有节点的状态都会变为 “Ready” 。")]),s._v(" "),t("p",[s._v("图：节点状态依次变为 Ready")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/3-calico/07.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("图：所有节点的状态都变为 Ready ，Pod 网络环境配置成功。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/3-calico/08.png",alt:"Not Found Image"}}),s._v(" "),t("h2",{attrs:{id:"_4-安装metrics-server监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装metrics-server监控"}},[s._v("#")]),s._v(" "),t("Badge",{attrs:{type:"error",text:"4"}}),s._v("4. 安装metrics-server监控")],1),s._v(" "),t("p",[s._v("如果想查看 K8s 集群里每个 节点或Pod 的工作负载（例如 CPU、内存使用情况），则需要安装监控类插件。")]),s._v(" "),t("p",[s._v("此处选择 "),t("a",{attrs:{href:"https://github.com/kubernetes-sigs/metrics-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("metrics-server"),t("OutboundLink")],1),s._v(" 监控。")]),s._v(" "),t("p",[s._v("1、尝试运行"),t("code",[s._v("kubectl top nodes")]),s._v("和"),t("code",[s._v("kubectl top pods")]),s._v("命令，出现错误 “度量API不可用”")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/4-metric-server/01.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("2、在 master 主机上，下载 metrics-server 的配置文件。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/4-metric-server/02.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("3、查找所需镜像名称，然后通过阿里云源 下载相应镜像，并修改镜像名称。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("集群内所有节点都需要下载镜像，并修改镜像名称，保证每个 master 和 worker 节点上都有正确的镜像")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找所需镜像名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" image components.yaml\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像（对所有节点执行该操作）")]),s._v("\nctr "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" k8s.io i pull registry.aliyuncs.com/google_containers/metrics-server:v0.6.3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改镜像名称（对所有节点执行该操作）")]),s._v("\nctr "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" k8s.io i tag registry.aliyuncs.com/google_containers/metrics-server:v0.6.3 registry.k8s.io/metrics-server/metrics-server:v0.6.3\nctr "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" k8s.io i "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" metr\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("图：搜索和下载镜像")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/4-metric-server/03.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("图：修改镜像名称")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/4-metric-server/04.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("4、在 master 主机上，编辑"),t("code",[s._v("components.yaml")]),s._v("文件，添加两个运行参数。")]),s._v(" "),t("p",[t("code",[s._v("hostNetwork: true")]),s._v("，使用主机的物理 IP 地址，而非 Pod 虚拟网络地址。")]),s._v(" "),t("ul",[t("li",[s._v("该参数是为了确保 集群内的节点 能够与 metrics-server 应用进行通信。")])]),s._v(" "),t("p",[t("code",[s._v("--kubelet-insecure-tls")]),s._v("，允许不安全的 TLS 连接，不检查证书。")]),s._v(" "),t("ul",[t("li",[s._v("kubelet 证书需要由 集群证书颁发机构 签名，配置证书的步骤较为繁琐。但由于我们只是学习 K8s，所以忽略证书检查（在 生产环境 中不建议这样做，因为这不安全）。")])]),s._v(" "),t("p",[s._v("如果不添加以上两个参数，则 metrics-server 无法正常运行。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/4-metric-server/05.png",alt:"Not Found Image"}}),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/4-metric-server/06.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("5、修改文件之后，运行以下命令，安装 metrics-server 监控。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kubectl apply "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" components.yaml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/4-metric-server/07.png",alt:"Not Found Image"}}),s._v(" "),t("p",[s._v("6、等待一段时间后，运行以下命令，查看 节点/pod 的工作负载。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看节点工作负载")]),s._v("\nkubectl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" nodes\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有Pod工作负载")]),s._v("\nkubectl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" pods "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("成功查看 CPU和内存 使用情况。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/knowledge-base/container/kubernetes/k8s-env-config/4-metric-server/08.png",alt:"Not Found Image"}}),s._v(" "),t("h2",{attrs:{id:"_5-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-小结"}},[s._v("#")]),s._v(" "),t("Badge",{attrs:{type:"error",text:"5"}}),s._v("5. 小结")],1),s._v(" "),t("p",[s._v("在本章中，我们完成了 K8s 集群的便捷性配置 以及 相关插件的安装，现在可以正式投入使用。")]),s._v(" "),t("p",[s._v("在下一章中，将介绍 K8s 的一些常用命令及操作。")])])}),[],!1,null,null,null);t.default=n.exports}}]);