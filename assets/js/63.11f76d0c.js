(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{378:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"kubectl-auth-can-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-auth-can-i"}},[s._v("#")]),s._v(" kubectl auth can-i")]),s._v(" "),a("p",[s._v("询问当前使用的用户，是否具有某个操作权限。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 询问当前用户是否可以列出 Pod")]),s._v("\n➜ kubectl auth can-i get pods\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 询问当前用户是否可以在命名空间 ns1 中创建 Deployment")]),s._v("\n➜ kubectl auth can-i create deployment "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" ns1\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"参数选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数选项"}},[s._v("#")]),s._v(" 参数选项")]),s._v(" "),a("h3",{attrs:{id:"as"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#as"}},[s._v("#")]),s._v(" --as")]),s._v(" "),a("p",[s._v("不询问当前用户，而是模拟另一个用户。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 询问 anon-user 用户是否可以列出 Pod")]),s._v("\n➜ kubectl auth can-i get pods "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--as")]),s._v(" anon-user\n    no\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);