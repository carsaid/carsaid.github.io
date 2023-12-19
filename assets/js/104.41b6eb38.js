(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{418:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"service-常用配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-常用配置项"}},[s._v("#")]),s._v(" Service 常用配置项")]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("学习更多")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://kubernetes.io/zh-cn/docs/concepts/services-networking/service/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档-服务（Service）"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"一个简单的service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的service"}},[s._v("#")]),s._v(" "),a("Badge",{attrs:{type:"error",text:"1"}}),s._v("一个简单的Service")],1),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" svc1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端口")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 转发到目标容器的端口")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据哪些标签来追踪 Pod")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"通过变量的方式使用服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过变量的方式使用服务"}},[s._v("#")]),s._v(" 通过变量的方式使用服务")]),s._v(" "),a("p",[s._v("首先创建一个服务，后续创建的 Pod 将会自动学习到一些变量。")]),s._v(" "),a("ul",[a("li",[s._v("变量"),a("code",[s._v("<服务名>_SERVICE_HOST")]),s._v("是某个服务的 IP 地址")]),s._v(" "),a("li",[s._v("变量"),a("code",[s._v("<服务名>_SERVICE_PORT")]),s._v("是某个服务暴露的端口")])]),s._v(" "),a("p",[s._v("例如，创建了一个名为"),a("code",[s._v("svc1")]),s._v("的服务。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl expose pod pod-mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" svc1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后，你可以在 yaml 文件中使用这个服务的环境变量。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" c1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" WORDPRESS_DB_HOST\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $(SVC1_SERVICE_HOST)       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动转换为 svc1 的 IP 地址")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("该方式有要求限制：")]),s._v(" "),a("ul",[a("li",[s._v("服务和 Pod 必须处于同一个命名空间")]),s._v(" "),a("li",[s._v("存在创建的先后顺序，必须先创建服务，再创建 Pod，这样 Pod 才能学习到该服务的相关变量")])])]),s._v(" "),a("h3",{attrs:{id:"借助集群的-coredns-使用服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#借助集群的-coredns-使用服务"}},[s._v("#")]),s._v(" 借助集群的 coreDNS 使用服务")]),s._v(" "),a("p",[s._v("任何命名空间的服务，在创建时都会向集群 DNS 注册自身。")]),s._v(" "),a("p",[s._v("直接指定服务名称即可：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" c1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" WORDPRESS_DB_HOST\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" svc1               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 去 coreDNS 查询主机名 svc1 并返回其地址")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"cks安全-最小化外部接入网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cks安全-最小化外部接入网络"}},[s._v("#")]),s._v(" CKS安全-最小化外部接入网络")]),s._v(" "),a("p",[s._v("通过字段"),a("code",[s._v("spec.loadBalancerSourceRanges")]),s._v("实现，参阅"),a("a",{attrs:{href:"https://unofficial-kubernetes.readthedocs.io/en/latest/tasks/access-application-cluster/configure-cloud-provider-firewall/",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("当使用"),a("code",[s._v("spec.type: LoadBalancer")]),s._v("的服务时，可以使用"),a("code",[s._v("spec.loadBalancerSourceRanges")]),s._v("指定允许访问负载均衡器的 IP 范围。此字段采用 IP CIDR 范围列表，Kubernetes 将使用这些范围来配置防火墙例外。目前，仅 Google Compute Engine、Google Container Engine 和 AWS 支持此功能。如果云提供商不支持该功能，则将忽略此字段。")]),s._v(" "),a("p",[s._v("假设"),a("code",[s._v("10.0.0.0/8")]),s._v("是内部子网。在以下示例中，将创建一个负载均衡器，该负载均衡器只能由群集内部 IP 访问。这将不允许来自 Kubernetes 集群外部的客户端访问负载均衡器。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" myapp\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8765")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9376")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" example\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" LoadBalancer\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("loadBalancerSourceRanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 10.0.0.0/8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("下面的示例创建了一个负载均衡器，该负载均衡器只允许 IP 地址为"),a("code",[s._v("130.211.204.1")]),s._v("和"),a("code",[s._v("130.211.204.2")]),s._v("的客户端访问：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" myapp\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" example\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" LoadBalancer\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("loadBalancerSourceRanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 130.211.204.1/32\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 130.211.204.2/32\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);