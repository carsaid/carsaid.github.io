(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{334:function(s,a,e){"use strict";e.r(a);var t=e(7),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"课后练习题-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课后练习题-1"}},[s._v("#")]),s._v(" 课后练习题-1")]),s._v(" "),a("h2",{attrs:{id:"理论练习-开放性试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理论练习-开放性试题"}},[s._v("#")]),s._v(" 理论练习（开放性试题）")]),s._v(" "),a("p",[s._v("涵盖第 1 章的内容。")]),s._v(" "),a("ol",[a("li",[s._v("在部署 kubernetes 集群之前，需要对主机参数进行配置，为 kubernetes 创造一个良好的运行环境。主机参数配置共需要配置六项内容，是哪六项？")]),s._v(" "),a("li",[s._v("kubernetes 需要安装哪些软件？")]),s._v(" "),a("li",[s._v("主机参数和软件都已经准备就绪。从部署到加入集群，需要几步？")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("答案")]),s._v(" "),a("ol",[a("li",[s._v("IP地址配置、主机名配置、系统安全措施配置（设置防火墙和关闭selinux）、关闭交换分区、配置yum源、设置内核参数。")]),s._v(" "),a("li",[s._v("共六个软件，三个主要软件（kubeadm、kubectl 和 kubelet），三个依赖软件（containerd、runC 和 CNI plugins）。")]),s._v(" "),a("li",[s._v("三步，第一步初始化 master 节点，第二步在 master 节点上生成配置文件，第三步在 worker 上加入集群。")])])]),s._v(" "),a("h2",{attrs:{id:"实操练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实操练习"}},[s._v("#")]),s._v(" 实操练习")]),s._v(" "),a("p",[s._v("涵盖第 2 章和第 3 章的内容。")]),s._v(" "),a("ol",[a("li",[s._v("查看集群的完整信息。")]),s._v(" "),a("li",[s._v("查看集群中共有多少台主机。")]),s._v(" "),a("li",[s._v("找出命名空间"),a("code",[s._v("kube-system")]),s._v("中，CPU 消耗最高的 pod 是哪一个。")]),s._v(" "),a("li",[s._v("创建命名空间"),a("code",[s._v("ns1")]),s._v("，切换至命名空间"),a("code",[s._v("ns1")]),s._v("，删除命名空间"),a("code",[s._v("ns1")]),s._v("。")]),s._v(" "),a("li",[s._v("将一个节点设置成维护模式，然后将其从集群中彻底删除。")]),s._v(" "),a("li",[s._v("如果忘记了 worker 用于加入集群的命令，该怎么获取一个新的加入命令？")]),s._v(" "),a("li",[s._v("命令行工具 kubectl 和 kubeadm 的子命令及其选项，都是不能使用 Tab 键自动补全的。应该如何配置，才能使其支持 Tab 补全？请写出步骤（三步）。")])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("答案分隔线")]),s._v(" "),a("h2",{attrs:{id:"实操练习答案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实操练习答案"}},[s._v("#")]),s._v(" 实操练习答案")]),s._v(" "),a("h4",{attrs:{id:"_1-查看集群的完整信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看集群的完整信息"}},[s._v("#")]),s._v(" 1. 查看集群的完整信息")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl cluster-info dump\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搭配输出重定向")]),s._v("\nkubectl cluster-info dump "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" info.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_2-查看集群中共有多少台主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看集群中共有多少台主机"}},[s._v("#")]),s._v(" 2. 查看集群中共有多少台主机")]),s._v(" "),a("p",[s._v("运行以下命令之后，数一下共有多少台主机。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl get nodes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("搭配管道符，获得一个具体的主机数量：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("wc -l")]),s._v("：统计行数")])]),s._v(" "),a("p",[s._v("如果返回数字 4，则说明集群内有 3 台主机。为什么是 3 台？因为"),a("code",[s._v("kubectl get nodes")]),s._v("的结果中包含一行标题，四行内容去掉一行标题，剩下的三行就是主机信息，所以是 3 台主机。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl get nodes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("再搭配 expr 算术命令，自动减去一行标题，获得的结果数字就是实际的主机数量：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl get nodes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_3-找出命名空间kube-system中-cpu-消耗最高的-pod-是哪一个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-找出命名空间kube-system中-cpu-消耗最高的-pod-是哪一个"}},[s._v("#")]),s._v(" 3. 找出命名空间"),a("code",[s._v("kube-system")]),s._v("中，CPU 消耗最高的 pod 是哪一个")]),s._v(" "),a("p",[s._v("运行以下命令，然后看第一行的 CPU 信息即可：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("--sort-by cpu")]),s._v("：根据 CPU 使用情况进行降序排序")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" pods "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kube-system --sort-by cpu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_4-创建命名空间ns1-切换至命名空间ns1-删除命名空间ns1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建命名空间ns1-切换至命名空间ns1-删除命名空间ns1"}},[s._v("#")]),s._v(" 4. 创建命名空间"),a("code",[s._v("ns1")]),s._v("，切换至命名空间"),a("code",[s._v("ns1")]),s._v("，删除命名空间"),a("code",[s._v("ns1")])]),s._v(" "),a("p",[s._v("即使你位于 ns1 中，你也可以直接删除 ns1。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl create ns ns1\n\nkubectl config set-context "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--current")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--namespace")]),s._v(" ns1\n\nkubectl delete ns ns1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"_5-将一个节点设置成维护模式-然后将其从集群中彻底删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-将一个节点设置成维护模式-然后将其从集群中彻底删除"}},[s._v("#")]),s._v(" 5. 将一个节点设置成维护模式，然后将其从集群中彻底删除")]),s._v(" "),a("p",[s._v("删除之后 自己尝试加回来。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl drain "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("节点名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v(" --ignore-daemonsets\n\nkubectl delete nodes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("节点名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_6-如果忘记了-worker-用于加入集群的命令-该怎么获取一个新的加入命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-如果忘记了-worker-用于加入集群的命令-该怎么获取一个新的加入命令"}},[s._v("#")]),s._v(" 6. 如果忘记了 worker 用于加入集群的命令，该怎么获取一个新的加入命令")]),s._v(" "),a("p",[s._v("加入集群的命令可以忘，但是获取它的命令不能忘。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubeadm token create --print-join-command\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_7-命令行工具-kubectl-和-kubeadm-的子命令及其选项-都是不能使用-tab-键自动补全的。应该如何配置-才能使其支持-tab-补全-请写出步骤-三步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-命令行工具-kubectl-和-kubeadm-的子命令及其选项-都是不能使用-tab-键自动补全的。应该如何配置-才能使其支持-tab-补全-请写出步骤-三步"}},[s._v("#")]),s._v(" 7. 命令行工具 kubectl 和 kubeadm 的子命令及其选项，都是不能使用 Tab 键自动补全的。应该如何配置，才能使其支持 Tab 补全？请写出步骤（三步）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第一步，打开系统配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第二步，添加以下内容，然后保存退出。注意符号 < 和 ( 之间没有空格")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kubectl completion "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kubeadm completion "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新配置文件，使配置立即生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);