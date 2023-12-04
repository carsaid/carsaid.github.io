(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{393:function(e,s,a){"use strict";a.r(s);var r=a(7),t=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"初始化集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化集群"}},[e._v("#")]),e._v(" 初始化集群")]),e._v(" "),s("p",[e._v("一个标准的初始化集群命令：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("--image-repository")]),e._v("：指定镜像源，此处使用国内的阿里云镜像源。")]),e._v(" "),s("li",[s("code",[e._v("--kubernetes-version")]),e._v("：指定集群版本。")]),e._v(" "),s("li",[s("code",[e._v("--pod-network-cidr")]),e._v("：指定 Pod 的网段。")]),e._v(" "),s("li",[s("code",[e._v("--cri-socket")]),e._v("：指定容器运行时。")])]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("kubeadm init --image-repository registry.aliyuncs.com/google_containers "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--kubernetes-version"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("v1.26.5 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--pod-network-cidr"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.244")]),e._v(".0.0/16 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--cri-socket"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("unix:///run/containerd/containerd.sock\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"image-repository选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-repository选项"}},[e._v("#")]),e._v(" --image-repository选项")]),e._v(" "),s("p",[e._v("指定镜像源，此处使用的是阿里云镜像仓库。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("kubeadm init --image-repository registry.aliyuncs.com/google_containers\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"kubernetes-version选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-version选项"}},[e._v("#")]),e._v(" --kubernetes-version选项")]),e._v(" "),s("p",[e._v("指定要安装的集群版本，此处的版本号为"),s("code",[e._v("v1.26.5")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("kubeadm init --kubernetes-version"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("v1.26.5\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"pod-network-cidr选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pod-network-cidr选项"}},[e._v("#")]),e._v(" --pod-network-cidr选项")]),e._v(" "),s("p",[e._v("指定 Pod 的网段。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("kubeadm init --pod-network-cidr"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.244")]),e._v(".0.0/16\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"cri-socket选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cri-socket选项"}},[e._v("#")]),e._v(" --cri-socket选项")]),e._v(" "),s("p",[e._v("指定集群所使用的容器运行时，此处使用的是 "),s("a",{attrs:{href:"https://containerd.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("containerd"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("kubeadm init --cri-socket"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("unix:///run/containerd/containerd.sock\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);