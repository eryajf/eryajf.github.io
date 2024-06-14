(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{538:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("我写的"),t("a",{attrs:{href:"https://github.com/eryajf/go-ldap-admin",target:"_blank",rel:"noopener noreferrer"}},[s._v("go-ldap-admin"),t("OutboundLink")],1),s._v("的 demo 环境是通过 docker-compose 一键拉起的。")]),s._v(" "),t("p",[s._v("因为服务器部署，与本地拉起测试有一些配置需要调整，于是打算用脚本做一下，这个时候发现执行带有通配符的命令会报如下错误：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" go-ldap-admin-ui  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" static/js/app.*.js\nls: cannot access static/js/app.*.js: No such "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("申明")]),s._v(" "),t("p",[t("strong",[s._v("原创文章"),t("Badge",{attrs:{text:"eryajf"}}),s._v("，未经授权，严禁转载，侵权必究！此乃文中随机水印，敬请读者谅解。")],1)]),s._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[s._v("Copyright "),t("a",{attrs:{href:"https://wiki.eryajf.net",target:"_blank",rel:"noopener noreferrer"}},[s._v("二丫讲梵"),t("OutboundLink")],1),s._v(" 版权所有")])])]),s._v(" "),t("p",[s._v("一开始想着加个单引号把命令包起来，发现仍然不行。")]),s._v(" "),t("p",[t("strong",[s._v("解决方案")]),s._v("：用双引号将命令包裹起来，就不会报错了。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" go-ldap-admin-ui "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ls static/js/app.*.js"')]),s._v("\nstatic/js/app.580a29c6.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/06/8647d5b91f458b86.png",alt:""}})]),s._v(" "),t("p",[s._v("参考："),t("a",{attrs:{href:"https://stackoverflow.com/questions/50742892/using-in-docker-exec-command",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://stackoverflow.com/questions/50742892/using-in-docker-exec-command"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);