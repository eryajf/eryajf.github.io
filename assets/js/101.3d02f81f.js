(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{444:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("卸载磁盘：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果报错如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("umount: /data: target is busy.\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("In some cases useful info about processes that use\n         the device is found by lsof"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" or fuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("则说明磁盘有程序在占用，需要检查占用的程序并关闭，可以直接使用如下命令查看：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fuser")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" /data\n/data:                9265m  9276m "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22762")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22763")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22764")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22765")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22766")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22767")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("下边的都是进程号，再加上 "),a("code",[s._v("-k")]),s._v("参数可以直接杀掉：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fuser")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" /data\n/data:                9265m  9276m "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22762")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22763")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22764")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22765")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22766")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22767")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("杀掉之后就能正常卸载了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);