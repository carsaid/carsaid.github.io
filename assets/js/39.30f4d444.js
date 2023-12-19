(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{355:function(a,s,e){"use strict";e.r(s);var t=e(7),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"kubectl-create"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-create"}},[a._v("#")]),a._v(" kubectl create")]),a._v(" "),s("p",[a._v("创建一个集群资源。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 基本格式")]),a._v("\nkubectl create "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("资源类型"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"可创建的资源-笔者已学或已知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可创建的资源-笔者已学或已知"}},[a._v("#")]),a._v(" 可创建的资源（笔者已学或已知）")]),a._v(" "),s("h4",{attrs:{id:"控制器deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制器deployment"}},[a._v("#")]),a._v(" 控制器deployment")]),a._v(" "),s("p",[a._v("官方不推荐你通过命令行的方式来创建 Deployment 资源，所以"),s("code",[a._v("--image")]),a._v("是其唯一支持的选项。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 格式")]),a._v("\nkubectl create deployment "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nkubectl create deploy "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 快速生成一个 Deployment 的 yaml 文件")]),a._v("\nkubectl create deployment "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --dry-run"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("client "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" yaml "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" test.yaml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h4",{attrs:{id:"其他控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他控制器"}},[a._v("#")]),a._v(" 其他控制器")]),a._v(" "),s("p",[a._v("其他控制器（DaemonSet、RC 和 RS）都无法通过命令行创建，你必须先生成一个 Deployment 的配置文件，然后对其进行编辑。")]),a._v(" "),s("h4",{attrs:{id:"任务job"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务job"}},[a._v("#")]),a._v(" 任务Job")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 通过命令行创建 job")]),a._v("\nkubectl create job "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -- "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"命令"')]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例（快速生成 job 的 yaml 配置文件）")]),a._v("\nkubectl create job job1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" busybox --dry-run"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("client "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" yaml -- "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"echo hello ; sleep 10"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" job1.yaml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h4",{attrs:{id:"周期任务cronjob"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#周期任务cronjob"}},[a._v("#")]),a._v(" 周期任务CronJob")]),a._v(" "),s("p",[a._v("CronJob 的计划任务时间和 Linux 系统的计划任务格式一样："),s("code",[a._v("分 时 日 月 周")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 通过命令行创建 CronJob")]),a._v("\nkubectl create cronjob "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--schedule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<计划任务时间>"')]),a._v(" -- "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("命令"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nkubectl create cj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("镜像"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--schedule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<计划任务时间>"')]),a._v(" -- "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("命令"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例（快速生成 CronJob 的 yaml 配置文件）")]),a._v("\nkubectl create cj job2 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("busybox "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--schedule")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*/1 * * * *"')]),a._v(" --dry-run"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("client "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" yaml -- "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"echo hello world"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" job2.yaml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h4",{attrs:{id:"密码存储secret"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#密码存储secret"}},[a._v("#")]),a._v(" 密码存储secret")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 格式")]),a._v("\nkubectl create secret generic "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("有 4 种创建 Secret 资源的方式：")]),a._v(" "),s("ul",[s("li",[a._v("通过 键值对 创建")]),a._v(" "),s("li",[a._v("将一个文件创建为 secret")]),a._v(" "),s("li",[a._v("通过一个变量文件来创建 secret")]),a._v(" "),s("li",[a._v("通过 yaml 配置文件来创建 secret")])]),a._v(" "),s("h5",{attrs:{id:"from-literal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-literal"}},[a._v("#")]),a._v(" --from-literal")]),a._v(" "),s("p",[a._v("以键值对的形式创建 secret。")]),a._v(" "),s("p",[a._v("可以指定多个"),s("code",[a._v("--from-literal=")]),a._v("选项，基于多个键值对 创建 多个密钥对。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl create secret generic "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("键"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("值"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例（以 abc 作为密钥键，以 123 作为密钥值）")]),a._v("\nkubectl create secret generic mysec --from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h5",{attrs:{id:"from-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-file"}},[a._v("#")]),a._v(" --from-file")]),a._v(" "),s("p",[a._v("将一个文件创建为 secret。")]),a._v(" "),s("p",[a._v("可以指定多个"),s("code",[a._v("--from-file=")]),a._v("选项，基于多个文件 创建 多个密钥对。")]),a._v(" "),s("ul",[s("li",[a._v("文件名称作为密钥的 “键”")]),a._v(" "),s("li",[a._v("文件内容作为密钥的 “值”")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl create secret generic "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("文件名"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例（以文件名 hosts 作为键，文件内容作为值）")]),a._v("\nkubectl create secret generic mysec --from-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/etc/hosts\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h5",{attrs:{id:"from-env-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-env-file"}},[a._v("#")]),a._v(" --from-env-file")]),a._v(" "),s("p",[a._v("通过一个整合过的变量文件来创建 secret。")]),a._v(" "),s("p",[a._v("和"),s("code",[a._v("--from-literal")]),a._v("选项差不多，也是以键值对的方式来创建密钥。但这次将键值对整合到了一个文件当中，一行一个键值对，逐行识别并创建密钥对。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),s("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" test.txt")]),a._v("\nabc=123\nxyz=456\njkl=789\nEOF")]),a._v("\n\nkubectl create secret generic mysec --from-env-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("test.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h4",{attrs:{id:"密码存储configmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#密码存储configmap"}},[a._v("#")]),a._v(" 密码存储ConfigMap")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 格式")]),a._v("\nkubectl create configmap "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nkubectl create cm "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("选项"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h5",{attrs:{id:"from-literal-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-literal-2"}},[a._v("#")]),a._v(" --from-literal")]),a._v(" "),s("p",[a._v("以键值对的形式创建 configmap。")]),a._v(" "),s("p",[a._v("可以指定多个"),s("code",[a._v("--from-literal=")]),a._v("选项，基于多个键值对 创建 多个密钥对。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl create cm "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("键"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("值"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例（以 abc 作为密钥键，以 123 作为密钥值）")]),a._v("\nkubectl create cm mymap --from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h5",{attrs:{id:"from-file-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-file-2"}},[a._v("#")]),a._v(" --from-file")]),a._v(" "),s("p",[a._v("将一个文件创建为 configmap。")]),a._v(" "),s("p",[a._v("可以指定多个"),s("code",[a._v("--from-file=")]),a._v("选项，基于多个文件 创建 多个密钥对。")]),a._v(" "),s("ul",[s("li",[a._v("文件名称作为密钥的 “键”")]),a._v(" "),s("li",[a._v("文件内容作为密钥的 “值”")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl create cm "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("文件名"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例（以文件名 hosts 作为键，文件内容作为值）")]),a._v("\nkubectl create cm mymap --from-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/etc/hosts\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h4",{attrs:{id:"角色role"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#角色role"}},[a._v("#")]),a._v(" 角色Role")]),a._v(" "),s("p",[a._v("注意"),s("code",[a._v("--resource")]),a._v("没有"),s("code",[a._v("s")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl create role "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--verb")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("权限"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--resource")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("资源"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 快速生成 yaml 配置文件")]),a._v("\nkubectl create role "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--verb")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("权限"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--resource")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("资源"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --dry-run"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("client "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" yaml "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" role.yaml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h5",{attrs:{id:"verb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verb"}},[a._v("#")]),a._v(" --verb")]),a._v(" "),s("p",[a._v("为角色分配的权限，多个权限之间通过逗号分隔。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("patch")]),a._v("（修改）权限，例如对 Deployment 的"),s("code",[a._v("scale")]),a._v("或"),s("code",[a._v("edit")]),a._v("操作")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl create role "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--verb")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("get,list,watch,create,update,patch,delete\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h5",{attrs:{id:"resource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[a._v("#")]),a._v(" --resource")]),a._v(" "),s("p",[a._v("角色权限作用于哪些集群资源上，多个资源之间通过逗号分隔。注意"),s("code",[a._v("--resource")]),a._v("没有"),s("code",[a._v("s")]),a._v("。")]),a._v(" "),s("p",[a._v("资源的名称和"),s("code",[a._v("kubectl get <资源名称>")]),a._v("时提供的名称一样。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--resource")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pods,\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"集群角色clusterrole"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群角色clusterrole"}},[a._v("#")]),a._v(" 集群角色ClusterRole")]),a._v(" "),s("p",[a._v("和角色 Role 一样。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl create clusterrole "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--verb")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("权限"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--resource")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("资源"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\nkubectl create clusterrole "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--verb")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("权限"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--resource")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("资源"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --dry-run"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("client "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" yaml "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" clusterrole.yaml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h4",{attrs:{id:"角色绑定rolebinding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#角色绑定rolebinding"}},[a._v("#")]),a._v(" 角色绑定RoleBinding")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将角色授权给一个用户")]),a._v("\nkubectl create rolebinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--role")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("角色名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定的目标用户"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将角色授权给某个命名空间中的一个 SA（服务账户）")]),a._v("\nkubectl create rolebinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--role")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("角色名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--serviceaccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("命名空间"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("SA名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 普通的角色绑定 可以使用集群角色，但只作用于单个命名空间")]),a._v("\nkubectl create rolebinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--clusterrole")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("集群角色名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("省略\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 快速生成 yaml 配置文件")]),a._v("\nkubectl create rolebinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --dry-run"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("client "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" yaml "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" role1binding.yaml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h5",{attrs:{id:"role"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#role"}},[a._v("#")]),a._v(" --role")]),a._v(" "),s("p",[a._v("指定要绑定给用户的角色名称，需要提前创建角色。")]),a._v(" "),s("h5",{attrs:{id:"clusterrole"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clusterrole"}},[a._v("#")]),a._v(" --clusterrole")]),a._v(" "),s("p",[a._v("如果你对一个集群角色 应用了 普通的绑定，则只作用于单个命名空间。")]),a._v(" "),s("h5",{attrs:{id:"user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[a._v("#")]),a._v(" --user")]),a._v(" "),s("p",[a._v("指定受绑定的集群用户，需要提前创建集群用户。")]),a._v(" "),s("h5",{attrs:{id:"serviceaccount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[a._v("#")]),a._v(" --serviceaccount")]),a._v(" "),s("p",[a._v("指定受绑定的服务账户，需要提前创建。指定的格式为"),s("code",[a._v("--serviceaccount=<命名空间>:<SA名称>")])]),a._v(" "),s("h4",{attrs:{id:"集群角色绑定clusterrolebinding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群角色绑定clusterrolebinding"}},[a._v("#")]),a._v(" 集群角色绑定ClusterRoleBinding")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将集群角色授权给一个用户")]),a._v("\nkubectl create clusterrolebinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--clusterrolerole")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("集群角色名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定的目标用户"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将集群角色授权给一个 SA（服务账户）")]),a._v("\nkubectl create clusterrolebinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--clusterrolerole")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("集群角色名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--serviceaccount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("命名空间"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("SA名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 禁止！！！集群角色绑定不能使用普通角色")]),a._v("\nkubectl create clusterrolebinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--role")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".这是不可能的"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 生成 yaml 配置文件")]),a._v("\nkubectl create clusterrolebinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--clusterrolerole")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("集群角色名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("绑定的目标用户"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --dry-run"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("client "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" yaml "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" role1binding.yaml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h4",{attrs:{id:"服务账户serviceaccount-sa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务账户serviceaccount-sa"}},[a._v("#")]),a._v(" 服务账户ServiceAccount（SA）")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl create sa "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("名称"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("一般情况下，当创建一个 SA 之后，会自动为其创建一个格式为"),s("code",[a._v("<sa名称>-token-<随机字符>")]),a._v("的 secret 资源，例如：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("kubectl create sa web\nkubectl get secrets "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" web      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# web-token-000000")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"让我们稍微讨论一下rbac资源-来自第三方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#让我们稍微讨论一下rbac资源-来自第三方"}},[a._v("#")]),a._v(" 让我们稍微讨论一下RBAC资源（来自第三方）")]),a._v(" "),s("p",[a._v("ClusterRole|Role 定义了一组权限及其"),s("b",[a._v("可用范围")]),a._v("，是在整个集群中 还是 仅在单个命名空间中。")]),a._v(" "),s("p",[a._v("ClusterRoleBinding|RoleBinding 将一组权限与帐户连接起来，并定义"),s("b",[a._v("应用权限的位置")]),a._v("，是在整个群集中还是仅在单个命名空间中。")]),a._v(" "),s("p",[a._v("因此，有 4 种不同的 RBAC 组合和 3 种有效的组合：")]),a._v(" "),s("ol",[s("li",[a._v("Role + RoleBinding（可在单个空间中使用，在单个命名空间中应用）")]),a._v(" "),s("li",[a._v("ClusterRole + ClusterRoleBinding（群集范围内可用，群集范围内应用）")]),a._v(" "),s("li",[a._v("ClusterRole + RoleBinding（群集范围内可用，应用于单个命名空间）")]),a._v(" "),s("li",[a._v("Role + ClusterRoleBinding（"),s("b",[a._v("不可能")]),a._v("：在单个命名空间中可用，在群集范围内应用）")])])])}),[],!1,null,null,null);s.default=r.exports}}]);