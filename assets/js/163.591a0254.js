(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{479:function(t,a,_){"use strict";_.r(a);var s=_(7),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"防火墙-firewall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙-firewall"}},[t._v("#")]),t._v(" 防火墙（Firewall）")]),t._v(" "),a("p",[t._v("防火墙是一个由计算机硬件 或 软件组成的系统，一般部署在网络边界，用于隔离内网和公网的网络，对进出的流量进行过滤，防止恶意入侵 以及其它攻击行为，保障内部网络和数据的安全。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("知识还不完善，待补充。")]),t._v(" "),a("p",[t._v("如果你有好的想法，可以提交 issue 。")])]),t._v(" "),a("h2",{attrs:{id:"_1、防火墙支持的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、防火墙支持的功能"}},[t._v("#")]),t._v(" 1、防火墙支持的功能")]),t._v(" "),a("h3",{attrs:{id:"_1-1-网络规则-允许或拒绝-某个连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-网络规则-允许或拒绝-某个连接"}},[t._v("#")]),t._v(" 1.1 网络规则（允许或拒绝 某个连接）")]),t._v(" "),a("p",[t._v("防火墙会判定 允许哪些网络流量通过，以及哪些流量存在危险。从本质上看，其工作原理是过滤掉异常或不受信任的流量，允许正常或受信任的流量通过。")]),t._v(" "),a("p",[t._v("可以按照以下内容，来配置某一条规则：")]),t._v(" "),a("ul",[a("li",[t._v("协议类型")]),t._v(" "),a("li",[t._v("源IP 或 目的IP")]),t._v(" "),a("li",[t._v("源端口 或 目的端口")]),t._v(" "),a("li",[t._v("某个应用程序")]),t._v(" "),a("li",[t._v("数据包内容")]),t._v(" "),a("li",[t._v("......等")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-nat-网络地址转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-nat-网络地址转换"}},[t._v("#")]),t._v(" 1.2 NAT（网络地址转换）")]),t._v(" "),a("p",[t._v("硬件类的防火墙一般都支持 NAT 功能，可以将一个公网地址进行复用，使整个内网的机器都可以访问公网。")]),t._v(" "),a("h3",{attrs:{id:"_1-3-vpn-虚拟专用网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-vpn-虚拟专用网络"}},[t._v("#")]),t._v(" 1.3 VPN（虚拟专用网络）")]),t._v(" "),a("p",[t._v("部分防火墙还支持 VPN 功能。")]),t._v(" "),a("h3",{attrs:{id:"_1-4-病毒防护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-病毒防护"}},[t._v("#")]),t._v(" 1.4 病毒防护")]),t._v(" "),a("p",[t._v("防火墙的病毒防护功能，例如蠕虫病毒的防护。")]),t._v(" "),a("h3",{attrs:{id:"_1-5-流量日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-流量日志"}},[t._v("#")]),t._v(" 1.5 流量日志")]),t._v(" "),a("p",[t._v("防火墙的流量日志功能，可以记录 经过防火墙的所有流量。")]),t._v(" "),a("h2",{attrs:{id:"_2、常见的软硬件防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、常见的软硬件防火墙"}},[t._v("#")]),t._v(" 2、常见的软硬件防火墙")]),t._v(" "),a("h3",{attrs:{id:"_2-1-硬件防火墙-厂商"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-硬件防火墙-厂商"}},[t._v("#")]),t._v(" 2.1 硬件防火墙（厂商）")]),t._v(" "),a("ul",[a("li",[t._v("思科")]),t._v(" "),a("li",[t._v("华为")]),t._v(" "),a("li",[t._v("华三（H3C）")]),t._v(" "),a("li",[t._v("山石网科")]),t._v(" "),a("li",[t._v("神州数码")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-软件防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-软件防火墙"}},[t._v("#")]),t._v(" 2.2 软件防火墙")]),t._v(" "),a("p",[t._v("操作系统一般会自带防火墙：")]),t._v(" "),a("ul",[a("li",[t._v("Windows 10：Windows Defender 防火墙")]),t._v(" "),a("li",[t._v("Centos（版本 7 以下）：iptables")]),t._v(" "),a("li",[t._v("Centos （版本 7 及以上）：firewalld")])]),t._v(" "),a("p",[t._v("杀毒软件有防火墙的相关功能，但其并不是一个防火墙。")]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://baike.baidu.com/item/%E9%98%B2%E7%81%AB%E5%A2%99%E6%8A%80%E6%9C%AF",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度百科-防火墙技术"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.kaspersky.com.cn/resource-center/definitions/firewall",target:"_blank",rel:"noopener noreferrer"}},[t._v("卡巴斯基-防火墙"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=v.exports}}]);