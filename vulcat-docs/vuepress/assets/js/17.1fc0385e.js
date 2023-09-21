(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{333:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"腾讯云-cos-对象遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云-cos-对象遍历"}},[s._v("#")]),s._v(" 腾讯云 COS 对象遍历")]),s._v(" "),t("h2",{attrs:{id:"_1-环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境搭建"}},[s._v("#")]),s._v(" 1. 环境搭建")]),s._v(" "),t("p",[s._v("使用 "),t("a",{attrs:{href:"https://github.com/HXSecurity/TerraformGoat",target:"_blank",rel:"noopener noreferrer"}},[s._v("TerraformGoat"),t("OutboundLink")],1),s._v(" 搭建漏洞环境。")]),s._v(" "),t("p",[t("b",[s._v("第一步，通过 docker 来运行工具 TerraformGoat ：")])]),s._v(" "),t("ul",[t("li",[s._v("获取 TerraformGoat 镜像；")]),s._v(" "),t("li",[s._v("运行 TerraformGoat 容器；")]),s._v(" "),t("li",[s._v("进入 TerraformGoat 容器。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull registry.cn-hongkong.aliyuncs.com/huoxian_pub/terraformgoat_tencentcloud:0.0.7\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-itd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" terraformgoat_tencentcloud_0.0.7 registry.cn-hongkong.aliyuncs.com/huoxian_pub/terraformgoat_tencentcloud:0.0.7\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" terraformgoat_tencentcloud_0.0.7 /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/01.png"}}),s._v(" "),t("p",[t("b",[s._v("第二步，为相应的环境 配置腾讯云访问密钥：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /TerraformGoat/tencentcloud/cos/bucket_object_traversal/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" terraform.tfvars\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("填写你自己的腾讯云 AK 与 KEY ：")]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/02.png"}}),s._v(" "),t("p",[t("b",[s._v("第三步，初始化 并 部署环境：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("terraform init\nterraform apply\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("部署完成之后，将会返回存储桶的域名：")]),s._v(" "),t("ul",[t("li",[s._v("初始化（时间可能较长，需耐心等待）。")]),s._v(" "),t("li",[s._v("部署环境，需要输入 yes 确认操作。")])]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/03.png"}}),s._v(" "),t("p",[s._v("存储桶页面：")]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/04.png"}}),s._v(" "),t("h2",{attrs:{id:"_2-漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-漏洞复现"}},[s._v("#")]),s._v(" 2. 漏洞复现")]),s._v(" "),t("p",[s._v("如图，存储桶以 XML 列表的形式，列出了其内的所有文件，说明存在"),t("b",[s._v("存储桶遍历漏洞")]),s._v("。")]),s._v(" "),t("p",[s._v("其中有一个名为"),t("code",[s._v("weflag.txt")]),s._v("的文件。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/05.png"}}),s._v(" "),t("p",[s._v("访问该文件，获得 flag（没错，就是这么简单）。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/06.png"}}),s._v(" "),t("h2",{attrs:{id:"_3-漏洞修复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-漏洞修复"}},[s._v("#")]),s._v(" 3. 漏洞修复")]),s._v(" "),t("p",[s._v("打开腾讯云控制台，找到"),t("code",[s._v("对象存储 --\x3e 存储桶列表 --\x3e 配置管理")]),s._v("。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/07.png"}}),s._v(" "),t("p",[s._v("进入配置管理之后，找到"),t("code",[s._v("权限管理 --\x3e Policy权限设置 --\x3e 编辑")]),s._v("。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/08.png"}}),s._v(" "),t("p",[s._v("在配置策略中，可以看到一个名为"),t("code",[s._v("GetBucket")]),s._v("的策略项，它将导致"),t("b",[s._v("存储桶遍历漏洞")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("删除GetBucket配置项 --\x3e 完成")])]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/09.png"}}),s._v(" "),t("p",[s._v("有许多配置项 都会导致"),t("b",[s._v("存储桶遍历漏洞")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("读操作（含列出对象列表）")]),s._v(" "),t("li",[s._v("GetBucket")]),s._v(" "),t("li",[s._v("...等危险配置项")])]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/10.png"}}),s._v(" "),t("p",[s._v("删除对应配置项，保存配置。")]),s._v(" "),t("p",[s._v("刷新存储桶页面，显示 AccessDenied ，修复成功。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/11.png"}}),s._v(" "),t("p",[s._v("虽然 存储桶遍历 不存在了，但是攻击者依然可以通过"),t("b",[s._v("目录/文件枚举")]),s._v("的方式，找到存储桶内的敏感文件。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/12.png"}}),s._v(" "),t("h2",{attrs:{id:"_4-销毁环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-销毁环境"}},[s._v("#")]),s._v(" 4. 销毁环境")]),s._v(" "),t("p",[s._v("练习完成之后，请立马销毁环境，防止：")]),s._v(" "),t("ul",[t("li",[s._v("环境一直运行，持续扣费；")]),s._v(" "),t("li",[s._v("环境是公网访问的，容易遭受攻击；")]),s._v(" "),t("li",[s._v("...等问题")])]),s._v(" "),t("h3",{attrs:{id:"_1-销毁方式一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-销毁方式一"}},[s._v("#")]),s._v(" （1）销毁方式一")]),s._v(" "),t("p",[s._v("通过命令行进行销毁操作，")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("terraform destroy\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/13.png"}}),s._v(" "),t("h3",{attrs:{id:"_2-销毁方式二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-销毁方式二"}},[s._v("#")]),s._v(" （2）销毁方式二")]),s._v(" "),t("p",[s._v("通过控制台进行销毁：")]),s._v(" "),t("p",[t("code",[s._v("对象存储 --\x3e 存储桶列表 --\x3e 更多 --\x3e 删除")])]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/14.png"}}),s._v(" "),t("p",[s._v("再次访问存储桶页面，将会提示 "),t("b",[s._v("NoSuchBucket（没有找到存储桶）")]),s._v("，说明销毁成功。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-traversal/15.png"}})])}),[],!1,null,null,null);t.default=r.exports}}]);