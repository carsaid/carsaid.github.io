(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{354:function(t,_,v){"use strict";v.r(_);var s=v(7),a=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"应急响应基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应急响应基础"}},[t._v("#")]),t._v(" 应急响应基础")]),t._v(" "),_("div",{staticClass:"cardListContainer"},[_("div",{staticClass:"card-list"},[_("span",{staticClass:"card-item row-2",staticStyle:{"background-color":"#F0DFB1","--randomColor":"#F0DFB1",color:"#FF6000"}},[_("div",[_("p",{staticClass:"name"},[t._v("转载")]),t._v(" "),_("p",{staticClass:"desc"},[t._v("原文：https://bypass007.github.io/Emergency-Response-Notes/Summary/")])])])]),_("div",{staticClass:"language-yaml line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-yaml"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 转载\n  "),_("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("desc")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 原文：https"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//bypass007.github.io/Emergency"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Response"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Notes/Summary/\n  "),_("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bgColor")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#F0DFB1'")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("textColor")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#FF6000'")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br")])])]),_("h2",{attrs:{id:"_0x00-常见的事件分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x00-常见的事件分类"}},[t._v("#")]),t._v(" 0x00 常见的事件分类")]),t._v(" "),_("p",[t._v("Web入侵：")]),t._v(" "),_("ul",[_("li",[t._v("网页挂马")]),t._v(" "),_("li",[t._v("主页篡改")]),t._v(" "),_("li",[t._v("WebShell")])]),t._v(" "),_("p",[t._v("系统入侵：")]),t._v(" "),_("ul",[_("li",[t._v("病毒木马")]),t._v(" "),_("li",[t._v("勒索软件")]),t._v(" "),_("li",[t._v("WebShell")])]),t._v(" "),_("p",[t._v("网络攻击：")]),t._v(" "),_("ul",[_("li",[t._v("DDoS")]),t._v(" "),_("li",[t._v("DNS劫持")]),t._v(" "),_("li",[t._v("ARP欺骗")])]),t._v(" "),_("h2",{attrs:{id:"_0x01-windows-入侵排查思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x01-windows-入侵排查思路"}},[t._v("#")]),t._v(" 0x01 Windows 入侵排查思路")]),t._v(" "),_("h3",{attrs:{id:"_1-1-系统账号安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-系统账号安全"}},[t._v("#")]),t._v(" 1.1 系统账号安全")]),t._v(" "),_("h4",{attrs:{id:"_1-是否-弱口令-公网开放"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-是否-弱口令-公网开放"}},[t._v("#")]),t._v(" （1）是否 弱口令&公网开放")]),t._v(" "),_("p",[t._v("通过询问管理员进行了解。")]),t._v(" "),_("h4",{attrs:{id:"_2-是否-存在可疑账号、新增账号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-是否-存在可疑账号、新增账号"}},[t._v("#")]),t._v(" （2）是否 存在可疑账号、新增账号")]),t._v(" "),_("p",[t._v("1、计算机管理 --\x3e 本地用户和组。")]),t._v(" "),_("p",[t._v("2、Win + R 并输入 "),_("code",[t._v("lusrmgr.msc")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"_3-是否-存在隐藏账号、克隆账号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-是否-存在隐藏账号、克隆账号"}},[t._v("#")]),t._v(" （3）是否 存在隐藏账号、克隆账号")]),t._v(" "),_("p",[t._v("1、注册表 --\x3e 管理员对应键值。")]),t._v(" "),_("p",[t._v("2、D盾 --\x3e Web查杀工具 --\x3e 克隆账号检测功能。")]),t._v(" "),_("h4",{attrs:{id:"_4-日志-管理员登录时间、用户名-是否异常"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-日志-管理员登录时间、用户名-是否异常"}},[t._v("#")]),t._v(" （4）日志 管理员登录时间、用户名 是否异常")]),t._v(" "),_("p",[t._v("1、Win + R 并输入 "),_("code",[t._v("eventvwr.msc")]),t._v("。")]),t._v(" "),_("p",[t._v("2、导出 Windows 日志，使用工具"),_("b",[t._v("Log Parser")]),t._v("进行分析。")]),t._v(" "),_("h3",{attrs:{id:"_1-2-检查异常端口、进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-检查异常端口、进程"}},[t._v("#")]),t._v(" 1.2 检查异常端口、进程")]),t._v(" "),_("h4",{attrs:{id:"_1-连接情况、是否有远程连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-连接情况、是否有远程连接"}},[t._v("#")]),t._v(" （1）连接情况、是否有远程连接")]),t._v(" "),_("p",[t._v("1、命令"),_("code",[t._v("netstat -ano")]),t._v("并定位"),_("b",[t._v("ESTABLISHED")]),t._v("。")]),t._v(" "),_("p",[t._v("2、根据 netstat 定位到的 PID ，通过命令"),_("code",[t._v("tasklist | findstr <PID>")]),t._v("定位进程。")]),t._v(" "),_("h4",{attrs:{id:"_2-进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-进程"}},[t._v("#")]),t._v(" （2）进程")]),t._v(" "),_("p",[t._v("1、命令"),_("code",[t._v("msinfo32")]),t._v("，然后选择 “软件环境 --\x3e 正在运行任务”。")]),t._v(" "),_("p",[t._v("2、D盾 --\x3e Web查杀工具 --\x3e 进程查看。")]),t._v(" "),_("p",[t._v("3、微软官方工具"),_("b",[t._v("Process Explorer")]),t._v("。")]),t._v(" "),_("p",[t._v("4、查看可疑进程 及其 子进程")]),t._v(" "),_("ul",[_("li",[t._v("没有签名的进程；")]),t._v(" "),_("li",[t._v("没有描述的进程；")]),t._v(" "),_("li",[t._v("进程的属主、进程路径是否合法；")]),t._v(" "),_("li",[t._v("系统资源占用过高；")]),t._v(" "),_("li",[t._v("...等。")])]),t._v(" "),_("h4",{attrs:{id:"_3-小技巧-查看端口对应的pid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-小技巧-查看端口对应的pid"}},[t._v("#")]),t._v(" （3）小技巧 - 查看端口对应的PID")]),t._v(" "),_("p",[t._v("命令"),_("code",[t._v("netstat -ano | findstr <PORT>")])]),t._v(" "),_("h4",{attrs:{id:"_4-小技巧-查看进程对应的pid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-小技巧-查看进程对应的pid"}},[t._v("#")]),t._v(" （4）小技巧 - 查看进程对应的PID")]),t._v(" "),_("p",[t._v("1、“任务管理器 --\x3e 查看 --\x3e 选择列 --\x3e PID”。")]),t._v(" "),_("p",[t._v("2、命令"),_("code",[t._v("tasklist | findstr <PID>")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"_5-小技巧-查看进程对应的程序位置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-小技巧-查看进程对应的程序位置"}},[t._v("#")]),t._v(" （5）小技巧 - 查看进程对应的程序位置")]),t._v(" "),_("p",[t._v("1、“任务管理器 --\x3e 选择对应进程 --\x3e 右键打开文件位置”。")]),t._v(" "),_("p",[t._v("2、Win + R 输入"),_("code",[t._v("wmic")]),t._v("打开命令行，然后输入"),_("code",[t._v("process")]),t._v("。")]),t._v(" "),_("h4",{attrs:{id:"_6-小技巧-查看所有的-进程-pid-服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-小技巧-查看所有的-进程-pid-服务"}},[t._v("#")]),t._v(" （6）小技巧 - 查看所有的 进程 & PID & 服务")]),t._v(" "),_("p",[t._v("命令"),_("code",[t._v("tasklist /svc")])]),t._v(" "),_("h4",{attrs:{id:"_7-小技巧-查看-windows-服务所对应的端口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-小技巧-查看-windows-服务所对应的端口"}},[t._v("#")]),t._v(" （7）小技巧 - 查看 Windows 服务所对应的端口")]),t._v(" "),_("p",[t._v("路径"),_("code",[t._v("%system%/system32/drivers/etc/services")]),t._v("（%system% 一般为 C:\\Windows）。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("检查启动项、计划任务、服务")]),t._v(" "),_("th",[t._v("检测方法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("异常启动项")]),t._v(" "),_("td",[t._v("1、“开始 -> 所有程序 -> 启动”，该目录默认为空目录"),_("br"),t._v("2、命令"),_("code",[t._v("msconfig")]),_("br"),t._v("3、注册表"),_("br"),t._v("4、利用安全软件，查看启动项、开机时间管理"),_("br"),t._v("5、组策略，命令"),_("code",[t._v("gpedit.msc")])])]),t._v(" "),_("tr",[_("td",[t._v("检查计划任务")]),t._v(" "),_("td",[t._v("1、“开始 -> 设置 -> 控制面板 -> "),_("b",[t._v("任务计划")]),t._v("”"),_("br"),t._v("2、“cmd -> at”，检查网络之间的会话 或计划任务（at命令已弃用，改为"),_("code",[t._v("schtasks.exe")]),t._v("）")])]),t._v(" "),_("tr",[_("td",[t._v("服务自启动")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v("services.msc")]),t._v("，注意服务状态和启动类型，检查异常服务")])])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("检查系统相关信息")]),t._v(" "),_("th",[t._v("检测方法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("系统版本 以及 补丁信息")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v("systeminfo")])])]),t._v(" "),_("tr",[_("td",[t._v("可疑目录及文件")]),t._v(" "),_("td",[t._v("1、查看用户目录（"),_("code",[t._v("C:\\Documents and Settings")]),t._v("或"),_("code",[t._v("C:\\Users\\")]),t._v("或其它）"),_("br"),t._v("   2、命令"),_("code",[t._v("%UserProfile%\\Recent")]),_("br"),t._v("    3、服务器目录排查，文件夹、文件、时间，查找可疑文件"),_("br"),t._v(" 4、回收站、浏览器下载目录、浏览器历史记录"),_("br"),t._v("   5、修改时间 在 创建时间 之前的可疑文件")])]),t._v(" "),_("tr",[_("td",[t._v("得到WebShell、远控木马 的创建时间，"),_("br"),t._v("找出同一时间范围内 创建的文件")]),t._v(" "),_("td",[t._v("1、注册表编辑器"),_("code",[t._v("Registry Workshop")]),t._v("的搜索功能，找到最后写入时间区间的文件    "),_("br"),t._v("2、计算机自带文件搜索功能，指定修改时间进行搜索")])])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("自动化查杀")]),t._v(" "),_("th",[t._v("检测方法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("病毒查杀")]),t._v(" "),_("td",[t._v("安全软件，更新病毒库，全盘扫描")])]),t._v(" "),_("tr",[_("td",[t._v("WebShell查杀")]),t._v(" "),_("td",[t._v("选择具体站点路径，安全软件进行查杀 "),_("br"),t._v("建议使用两款WebShell查杀工具，相互补充规则库的不足")])])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("日志分析")]),t._v(" "),_("th",[t._v("检测方法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("系统日志")]),t._v(" "),_("td",[t._v("1、前提：开启审核策略，日后系统出现故障、安全事故 则可以查看系统的日志文件，排查故障、追查入侵者信息等     "),_("br"),t._v("2、事件查看器"),_("code",[t._v("eventvwr.msc")]),t._v(" "),_("br"),t._v("3、导出应用程序日志、安全日志、系统日志，利用"),_("code",[t._v("Log Parser")]),t._v("进行分析")])]),t._v(" "),_("tr",[_("td",[t._v("Web日志")]),t._v(" "),_("td",[t._v("1、找到中间件的Web日志，打包到本地 方便进行分析    "),_("br"),t._v("2、推荐工具：Windows下的"),_("code",[t._v("EmEditor")]),t._v("，Linux下的"),_("b",[t._v("Shell命令组合查询")])])])])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"_0x02-linux-入侵排查思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x02-linux-入侵排查思路"}},[t._v("#")]),t._v(" 0x02 Linux 入侵排查思路")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("账号安全")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("用户信息文件"),_("code",[t._v("/etc/passwd")])]),t._v(" "),_("td",[_("code",[t._v("root:x:0:0:root:/root:/bin/bash")]),t._v(" "),_("br"),_("code",[t._v("account:password:UID:GID:GECOS:directory:shell")]),t._v(" "),_("br"),_("code",[t._v("用户名:密码:用户ID:组ID:用户说明:家目录:登录之后shell")])])]),t._v(" "),_("tr",[_("td",[t._v("影子文件"),_("code",[t._v("/etc/shadow")])]),t._v(" "),_("td",[_("code",[t._v("root:$x$xx/:16809:0:99999:7:::")]),t._v(" "),_("br"),_("code",[t._v("用户名:加密密码:密码最后一次修改日期:两次密码的修改时间间隔:密码有效期:密码修改到期的警告天数:密码过期之后的宽限天数:账号失效时间:保留")])])]),t._v(" "),_("tr",[_("td",[t._v("命令"),_("code",[t._v("who")])]),t._v(" "),_("td",[t._v("查看当前登录用户（tty本地登录，pts远程登录）")])]),t._v(" "),_("tr",[_("td",[t._v("命令"),_("code",[t._v("w")])]),t._v(" "),_("td",[t._v("查看系统信息，知道某一时刻用户的行为")])]),t._v(" "),_("tr",[_("td",[t._v("命令"),_("code",[t._v("uptime")])]),t._v(" "),_("td",[t._v("查看登录多久、多少用户，负载")])]),t._v(" "),_("tr",[_("td",[t._v("查询特权用户")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v("awk -F: '$3==0{print $1}' /etc/passwd")])])]),t._v(" "),_("tr",[_("td",[t._v("查询可以远程登录的账号信息")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v("awk '/\\$1|\\$6/{print $1}' /etc/shadow")])])]),t._v(" "),_("tr",[_("td",[t._v("除root账号外，其他账号是否存在sudo权限")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v('more /etc/sudoers | grep -v "^#\\|^$" | grep "ALL=(ALL)"')])])]),t._v(" "),_("tr",[_("td",[t._v("禁用或删除 多余及可疑 的账号")]),t._v(" "),_("td",[t._v("1、命令"),_("code",[t._v("usermod -L <USER>")]),t._v("，禁用账号，无法登录，/etc/shadow第二栏为感叹号 ! 开头   "),_("br"),t._v("2、命令"),_("code",[t._v("userdel <USER>")]),t._v("，删除用户   "),_("br"),t._v("3、命令"),_("code",[t._v("userdel -r <USER>")]),t._v("，删除用户，并删除家目录")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("历史命令")]),t._v(" "),_("th",[t._v("检测")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("通过"),_("code",[t._v(".bash_history")]),t._v("查看历史执行命令")]),t._v(" "),_("td",[t._v("1、命令"),_("code",[t._v("history")]),t._v(" "),_("br"),t._v("2、家目录下的"),_("code",[t._v(".bash_history")]),t._v("文件")])]),t._v(" "),_("tr",[_("td",[t._v("为历史的命令 增加登录的IP地址、执行命令时间等信息")]),t._v(" "),_("td",[t._v("1、保存1万条命令"),_("code",[t._v("sed -i 's/^HISTSIZE=1000/HISTSIZE=10000/g' /etc/profile")]),t._v(" "),_("br"),t._v("2、在 /etc/profile 添加以下配置")])]),t._v(" "),_("tr",[_("td",[t._v("清除历史命令")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v("history -c")]),t._v("，但不会清除文件中的记录，需要手动删除"),_("code",[t._v(".bash_history")]),t._v("以及"),_("code",[t._v(".bash_profile")]),t._v("中的记录")])]),t._v(" "),_("tr",[_("td",[t._v("入侵排查")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v("cat ~/.bash_history >> history.txt")])])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")])])]),t._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /etc/profile 添加配置")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USER_IP")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("who")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" am i "),_("span",{pre:!0,attrs:{class:"token operator"}},[_("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v("/dev/null "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $NF}'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/[()]//g'")]),_("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),_("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$USER_IP")]),t._v('"')]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USER_IP")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),_("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HISTTIMEFORMAT")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%F %T '),_("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$USER_IP")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token variable"}},[_("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),_("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(' "')]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("shopt")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" histappend\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PROMPT_COMMAND")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"history -a"')]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重载配置")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br")])]),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("异常端口")]),t._v(" "),_("th",[t._v("检测")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("分析可疑端口、IP、PID")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v("netstat -atnlp | more")])])]),t._v(" "),_("tr",[_("td",[t._v("查看PID对应的进程文件路径")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v("ls -l /proc/$PID/exe")]),t._v("或"),_("code",[t._v("ls -l /proc/$PID/file")])])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("异常进程")]),t._v(" "),_("th",[t._v("检测")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("分析进程")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v("ps aux | grep pid")])])])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("开机启动项")]),t._v(" "),_("th",[t._v("检测")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("目录")]),t._v(" "),_("td",[t._v("1、"),_("code",[t._v("/etc/inittab")]),t._v(" "),_("br"),t._v("2、"),_("code",[t._v("/etc/rc.d/rc[0-6].d")])])]),t._v(" "),_("tr",[_("td",[t._v("排查")]),t._v(" "),_("td",[t._v("1、"),_("code",[t._v("more /etc/rc.local")]),t._v(" "),_("br"),t._v("2、"),_("code",[t._v("ls -l /etc/rc.d/")])])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("计划任务")]),t._v(" "),_("th",[t._v("检测")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("计划任务操作")]),t._v(" "),_("td",[t._v("1、默认存放路径"),_("code",[t._v("/var/spool/cron/<用户名>")]),t._v(" "),_("br"),t._v("2、"),_("code",[t._v("crontab -l")]),t._v("列出某个用户的计划任务  "),_("br"),t._v("3、"),_("code",[t._v("crontab -e")]),t._v("删除每个用户的计划任务（所有）   "),_("br"),t._v("4、"),_("code",[t._v("crontab -e")]),t._v("编辑当前用户的计划任务")])]),t._v(" "),_("tr",[_("td",[t._v("anacron 异步计划任务调度")]),t._v(" "),_("td",[t._v("每天运行 /home/backup.sh 脚本，命令"),_("code",[t._v("vi /etc/anacrontab @deily 10 example.deily /bin/bash /home/backup.sh")]),_("br"),t._v("anacron 会在开机十分钟后运行它")])]),t._v(" "),_("tr",[_("td",[t._v("关注以下目录")]),t._v(" "),_("td",[t._v("1、"),_("code",[t._v("/var/spool/cron/*")]),t._v(" "),_("br"),t._v("2、"),_("code",[t._v("/etc/crontab")]),t._v(" "),_("br"),t._v("3、"),_("code",[t._v("/etc/cron.d/*")]),t._v(" "),_("br"),t._v("4、"),_("code",[t._v("/etc/cron.daily/*")]),t._v(" "),_("br"),t._v("5、"),_("code",[t._v("/etc/cron.hourly/*")]),t._v(" "),_("br"),t._v("6、"),_("code",[t._v("/etc/cron.monthly/*")]),t._v(" "),_("br"),t._v("7、"),_("code",[t._v("/etc/cron.weekly/")]),t._v(" "),_("br"),t._v("8、"),_("code",[t._v("/etc/anacrontab")]),t._v(" "),_("br"),t._v("9、"),_("code",[t._v("/var/spool/anacron/*")])])]),t._v(" "),_("tr",[_("td",[t._v("小技巧-查看目录下所有文件")]),t._v(" "),_("td",[_("code",[t._v("more /etc/cron.daily/*")])])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("检查服务")]),t._v(" "),_("th",[t._v("检测")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("服务自启动-第一种修改方法")]),t._v(" "),_("td",[_("code",[t._v("chkconfig [--level 运行级别] [独立服务名] [on\\|off]")]),t._v(" "),_("br"),_("code",[t._v("chkconfig --level 2345 httpd on")]),t._v("开机自启动     "),_("br"),_("code",[t._v("chkconfig httpd on")]),t._v("（默认level为2345）")])]),t._v(" "),_("tr",[_("td",[t._v("服务自启动-第二种修改方法")]),t._v(" "),_("td",[t._v("在文件"),_("code",[t._v("/etc/re.d/rc.local")]),t._v("添加条目"),_("code",[t._v("/etc/init.d/httpd start")])])]),t._v(" "),_("tr",[_("td",[t._v("服务自启动-第三种修改方法")]),t._v(" "),_("td",[t._v("使用"),_("code",[t._v("ntsysv")]),t._v("命令管理自启动，可以管理独立服务和xinetd服务")])]),t._v(" "),_("tr",[_("td",[t._v("排查-查询RPM包安装的服务")]),t._v(" "),_("td",[_("code",[t._v("chkconfig --list")]),t._v(" 或 "),_("code",[t._v("ps aux \\| grep crond")])])]),t._v(" "),_("tr",[_("td",[t._v("排查-源码包安装的服务")]),t._v(" "),_("td",[_("code",[t._v("/usr/local/")]),t._v(" 或 "),_("code",[t._v("/etc/rc.d/init.d/")])])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("检查异常文件")]),t._v(" "),_("th",[t._v("检测")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("查看敏感目录")]),t._v(" "),_("td",[t._v("例如"),_("code",[t._v("/tmp")]),t._v("，及隐藏文件夹（以"),_("code",[t._v("..")]),t._v("为名的文件夹具有隐藏属性）")])]),t._v(" "),_("tr",[_("td",[t._v("找出同一时间范围内创建的文件")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v('find /opt -iname "*" -atime 1 -type f')])])]),t._v(" "),_("tr",[_("td",[t._v("修改文件创建时间")]),t._v(" "),_("td",[t._v("命令"),_("code",[t._v("stat")])])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")])])]),t._v(" "),_("hr"),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("检查系统日志")]),t._v(" "),_("th")])]),t._v(" "),_("tbody",[_("tr",[_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")])])]),t._v(" "),_("h2",{attrs:{id:"_0x03-工具篇"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x03-工具篇"}},[t._v("#")]),t._v(" 0x03 工具篇")]),t._v(" "),_("h3",{attrs:{id:"_2-1-病毒分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-病毒分析"}},[t._v("#")]),t._v(" 2.1 病毒分析")]),t._v(" "),_("ul",[_("li",[t._v("PCHunter：http://www.xuetr.com")]),t._v(" "),_("li",[t._v("火绒剑：https://www.huorong.cn")]),t._v(" "),_("li",[t._v("Process Explorer：https://docs.microsoft.com/zh-cn/sysinternals/downloads/process-explorer")]),t._v(" "),_("li",[t._v("processhacker：https://processhacker.sourceforge.io/downloads.php")]),t._v(" "),_("li",[t._v("autoruns：https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns")]),t._v(" "),_("li",[t._v("OTL：https://www.bleepingcomputer.com/download/otl/")]),t._v(" "),_("li",[t._v("SysInspector：http://download.eset.com.cn/download/detail/?product=sysinspector")])]),t._v(" "),_("h3",{attrs:{id:"_2-2-病毒查杀"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-病毒查杀"}},[t._v("#")]),t._v(" 2.2 病毒查杀")]),t._v(" "),_("ul",[_("li",[t._v("卡巴斯基：http://devbuilds.kaspersky-labs.com/devbuilds/KVRT/latest/full/KVRT.exe （推荐理由：绿色版、最新病毒库）")]),t._v(" "),_("li",[t._v("大蜘蛛：http://free.drweb.ru/download+cureit+free （推荐理由：扫描快、一次下载只能用1周，更新病毒库）")]),t._v(" "),_("li",[t._v("火绒安全软件：https://www.huorong.cn")]),t._v(" "),_("li",[t._v("360杀毒：http://sd.360.cn/download_center.html")])]),t._v(" "),_("h3",{attrs:{id:"_2-3-病毒动态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-病毒动态"}},[t._v("#")]),t._v(" 2.3 病毒动态")]),t._v(" "),_("ul",[_("li",[t._v("CVERC-国家计算机病毒应急处理中心：http://www.cverc.org.cn")]),t._v(" "),_("li",[t._v("微步在线威胁情报社区：https://x.threatbook.cn")]),t._v(" "),_("li",[t._v("火绒安全论坛：http://bbs.huorong.cn/forum-59-1.html")]),t._v(" "),_("li",[t._v("爱毒霸社区：http://bbs.duba.net")]),t._v(" "),_("li",[t._v("腾讯电脑管家：http://bbs.guanjia.qq.com/forum-2-1.html")])]),t._v(" "),_("h3",{attrs:{id:"_2-4-在线病毒扫描网站"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-在线病毒扫描网站"}},[t._v("#")]),t._v(" 2.4 在线病毒扫描网站")]),t._v(" "),_("ul",[_("li",[t._v("http://www.virscan.org //多引擎在线病毒扫描网 v1.02，当前支持 41 款杀毒引擎")]),t._v(" "),_("li",[t._v("https://habo.qq.com //腾讯哈勃分析系统")]),t._v(" "),_("li",[t._v("https://virusscan.jotti.org //Jotti恶意软件扫描系统")]),t._v(" "),_("li",[t._v("http://www.scanvir.com //针对计算机病毒、手机病毒、可疑文件等进行检测分析")])]),t._v(" "),_("h3",{attrs:{id:"_2-5-webshell查杀"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-webshell查杀"}},[t._v("#")]),t._v(" 2.5 webshell查杀")]),t._v(" "),_("ul",[_("li",[t._v("D盾_Web查杀：http://www.d99net.net/index.asp")]),t._v(" "),_("li",[t._v("河马webshell查杀：http://www.shellpub.com")]),t._v(" "),_("li",[t._v("深信服Webshell网站后门检测工具：http://edr.sangfor.com.cn/backdoor_detection.html")]),t._v(" "),_("li",[t._v("Safe3：http://www.uusec.com/webshell.zip")])])])}),[],!1,null,null,null);_.default=a.exports}}]);