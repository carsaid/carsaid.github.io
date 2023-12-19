(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{428:function(s,a,e){"use strict";e.r(a);var t=e(7),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"certificatesigningrequest-csr-常用配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#certificatesigningrequest-csr-常用配置项"}},[s._v("#")]),s._v(" CertificateSigningRequest（CSR） 常用配置项")]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("学习更多")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/certificate-signing-requests/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档-证书和证书签名请求"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/certificate-signing-requests/#normal-user",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档-如何为用户签发证书"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"csr-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csr-示例"}},[s._v("#")]),s._v(" CSR 示例")]),s._v(" "),a("p",[s._v("字段说明：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("spec.request")]),s._v("是证书文件内容的 Base64 编码值")]),s._v(" "),a("li",[s._v("（可选）"),a("code",[s._v("spec.expirationSeconds")]),s._v("是所请求证书的有效期，单位：秒")]),s._v(" "),a("li",[a("code",[s._v("spec.signerName")]),s._v("和"),a("code",[s._v("spec.usages")]),s._v("都是固定搭配")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" certificates.k8s.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CertificateSigningRequest\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" myuser\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <经过 Base64 编码的证书"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("signerName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes.io/kube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apiserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expirationSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 86400s = 1天")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("usages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" client auth\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"创建csr步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建csr步骤"}},[s._v("#")]),s._v(" 创建CSR步骤")]),s._v(" "),a("h3",{attrs:{id:"_1、生成私钥文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、生成私钥文件"}},[s._v("#")]),s._v(" 1、生成私钥文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("openssl genrsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-out")]),s._v(" myuser.key "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\nopenssl req "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-key")]),s._v(" myuser.key "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-out")]),s._v(" myuser.csr "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-subj")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/CN=myuser"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2、创建和批准证书签名请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建和批准证书签名请求"}},[s._v("#")]),s._v(" 2、创建和批准证书签名请求")]),s._v(" "),a("p",[s._v("获得文件"),a("code",[s._v("myuser.csr")]),s._v("的 Base64 编码值：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -w0 去除换行符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" myuser.csr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" base64 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("创建一个名为"),a("code",[s._v("myuser.yaml")]),s._v("的文件，复制和粘贴以下内容，并自行填写"),a("code",[s._v("spec.request")]),s._v("字段：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" certificates.k8s.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CertificateSigningRequest\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" myuser\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <文件 myuser.csr 的 Base64 编码值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("signerName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes.io/kube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apiserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expirationSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# one day")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("usages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" client auth\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("创建证书签名请求 CSR：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" myuser.yaml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\nkubectl get csr\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("批准这个 CSR，并将证书内容导出至"),a("code",[s._v("myuser.crt")]),s._v("文件中：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl certificate approve myuser\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证，从 CSR 中导出证书")]),s._v("\nkubectl get csr myuser "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{.status.certificate}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" base64 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" myuser.crt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_3、创建角色和角色绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、创建角色和角色绑定"}},[s._v("#")]),s._v(" 3、创建角色和角色绑定")]),s._v(" "),a("p",[s._v("将角色绑定到一个名为"),a("code",[s._v("mike")]),s._v("的用户身上。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl create role myuser-role "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verb")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("get,list,update,delete "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--resource")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pods\n\nkubectl create rolebinding myuser-role-binding "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--role")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myuser-role "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mike\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_4、将这个用户添加到-kubeconfig-中-并切换用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、将这个用户添加到-kubeconfig-中-并切换用户"}},[s._v("#")]),s._v(" 4、将这个用户添加到 Kubeconfig 中，并切换用户")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("kubectl config set-credentials mike --client-key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myuser.key --client-certificate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mike.crt --embed-certs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新上下文，并切换至该上下文")]),s._v("\nkubectl config set-context mike "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cluster")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mike\nkubectl config use-context mike\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_5、验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、验证"}},[s._v("#")]),s._v(" 5、验证")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 询问当前用户是否有创建 Pod 的权限")]),s._v("\n➜ kubectl auth can-i get pods\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 角色绑定是有命名空间范围的，所以在其他命名空间中，mike 用户不具备相关权限")]),s._v("\n➜ kubectl auth can-i get pods "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" ns2\n    no\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);