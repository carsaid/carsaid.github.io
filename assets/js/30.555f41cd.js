(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{342:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"腾讯云-cos-任意文件上传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云-cos-任意文件上传"}},[s._v("#")]),s._v(" 腾讯云 COS 任意文件上传")]),s._v(" "),t("h2",{attrs:{id:"_1-环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境搭建"}},[s._v("#")]),s._v(" 1. 环境搭建")]),s._v(" "),t("p",[s._v("使用 "),t("a",{attrs:{href:"https://github.com/HXSecurity/TerraformGoat",target:"_blank",rel:"noopener noreferrer"}},[s._v("TerraformGoat"),t("OutboundLink")],1),s._v(" 搭建漏洞环境。")]),s._v(" "),t("p",[t("b",[s._v("第一步，通过 docker 来运行工具 TerraformGoat ：")])]),s._v(" "),t("ul",[t("li",[s._v("获取 TerraformGoat 镜像；")]),s._v(" "),t("li",[s._v("运行 TerraformGoat 容器；")]),s._v(" "),t("li",[s._v("进入 TerraformGoat 容器。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull registry.cn-hongkong.aliyuncs.com/huoxian_pub/terraformgoat_tencentcloud:0.0.7\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-itd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" terraformgoat_tencentcloud_0.0.7 registry.cn-hongkong.aliyuncs.com/huoxian_pub/terraformgoat_tencentcloud:0.0.7\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" terraformgoat_tencentcloud_0.0.7 /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/01.png"}}),s._v(" "),t("p",[t("b",[s._v("第二步，为相应的环境 配置腾讯云访问密钥：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /TerraformGoat/tencentcloud/cos/unrestricted_file_upload/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" terraform.tfvars\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("进入对应的环境配置目录，打开配置文件。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/02.png"}}),s._v(" "),t("p",[s._v("配置文件如下：")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/03.png"}}),s._v(" "),t("p",[s._v("填写你自己的腾讯云 AK 与 KEY ：")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/04.png"}}),s._v(" "),t("p",[t("b",[s._v("第三步，初始化 并 部署环境：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("terraform init\nterraform apply\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("初始化（时间可能较长，需耐心等待）。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/05.png"}}),s._v(" "),t("p",[s._v("部署环境，需要输入 yes 确认操作：")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/06.png"}}),s._v(" "),t("p",[s._v("部署完成之后，将会返回存储桶的域名：")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/07.png"}}),s._v(" "),t("p",[s._v("存储桶页面：")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/08.png"}}),s._v(" "),t("h2",{attrs:{id:"_2-漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-漏洞复现"}},[s._v("#")]),s._v(" 2. 漏洞复现")]),s._v(" "),t("p",[s._v("抓取存储桶的 HTTP 请求数据包，尝试访问"),t("code",[s._v("a.txt")]),s._v("文件，提示 404 不存在。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/09.png"}}),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("PUT")]),s._v("方法 向目标存储桶上传一个"),t("code",[s._v("a.txt")]),s._v("文件。")]),s._v(" "),t("div",{staticClass:"language-http line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token request-line"}},[t("span",{pre:!0,attrs:{class:"token method property"}},[s._v("PUT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token request-target url"}},[t("span",{pre:!0,attrs:{class:"token path"}},[t("span",{pre:!0,attrs:{class:"token path-separator"}},[s._v("/")]),s._v("a.txt")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token http-version property"}},[s._v("HTTP/1.1")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("hxlab-yyr41-1308708518.cos.ap-beijing.myqcloud.com")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Accept")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Accept-Language")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Accept-Encoding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("gzip, deflate")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("close")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Length")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("12")])]),s._v("\n\nThis is aaa.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/10.png"}}),s._v(" "),t("p",[s._v("再次访问"),t("code",[s._v("a.txt")]),s._v("，可以看到文件内容，说明上传成功，存在"),t("b",[s._v("任意文件上传漏洞")]),s._v("。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/11.png"}}),s._v(" "),t("p",[s._v("再次上传一个"),t("code",[s._v("a.txt")]),s._v("文件，文件内容有所不同。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/12.png"}}),s._v(" "),t("p",[s._v("访问"),t("code",[s._v("a.txt")]),s._v("，可以看到新的文件内容，说明"),t("b",[s._v("原先存在的文件会被覆盖")]),s._v("。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/13.png"}}),s._v(" "),t("h2",{attrs:{id:"_3-漏洞修复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-漏洞修复"}},[s._v("#")]),s._v(" 3. 漏洞修复")]),s._v(" "),t("p",[t("b",[s._v("注：修复方式不唯一。")])]),s._v(" "),t("p",[s._v("修复前，可以上传任意文件：")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/21.png"}}),s._v(" "),t("p",[s._v("进入腾讯云控制台，选择"),t("code",[s._v("对象存储 --\x3e 存储桶列表 --\x3e 配置管理")]),s._v("。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/20.png"}}),s._v(" "),t("p",[s._v("进入配置管理，修改配置项"),t("code",[s._v("权限管理 --\x3e Policy权限设置 --\x3e 公有读写 --改为--\x3e 公有读私有写")]),s._v("，修改完成后点击"),t("code",[s._v("保存")]),s._v("。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/22.png"}}),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/23.png"}}),s._v(" "),t("p",[s._v("再次上传文件，响应 403 拒绝访问，修复成功。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/24.png"}}),s._v(" "),t("h2",{attrs:{id:"_4-销毁环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-销毁环境"}},[s._v("#")]),s._v(" 4. 销毁环境")]),s._v(" "),t("p",[s._v("练习完成之后，请立马销毁环境，防止：")]),s._v(" "),t("ul",[t("li",[s._v("环境一直运行，持续扣费；")]),s._v(" "),t("li",[s._v("环境是公网访问的，容易遭受攻击；")]),s._v(" "),t("li",[s._v("...等问题")])]),s._v(" "),t("h3",{attrs:{id:"_1-销毁方式一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-销毁方式一"}},[s._v("#")]),s._v(" （1）销毁方式一")]),s._v(" "),t("p",[s._v("运行以下命令，并输入 yes 确认销毁：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("terraform destroy\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/15.png"}}),s._v(" "),t("h3",{attrs:{id:"_2-销毁方式二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-销毁方式二"}},[s._v("#")]),s._v(" （2）销毁方式二")]),s._v(" "),t("p",[s._v("通过控制台进行销毁：")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/14.png"}}),s._v(" "),t("p",[s._v("再次访问存储桶页面，将会提示 "),t("b",[s._v("NoSuchBucket（没有找到存储桶）")]),s._v("，说明销毁成功。")]),s._v(" "),t("img",{attrs:{src:"https://fastly.statically.io/gh/clincat/blog-imgs@main/vuepress/static/imgs/docs/vuln-db/cloud/tencentcloud/cos-fileupload/16.png"}})])}),[],!1,null,null,null);t.default=n.exports}}]);