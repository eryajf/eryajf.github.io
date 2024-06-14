(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{479:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("当我们把 zabbix 的 server 端安装完毕之后，有很多的主机，不可能一台一台进行添加，因此可以配置一个自动发现规则，以及定义好自动发现之后的动作，通过这些配置，就能够自动地把想要监控的主机添加到 zabbix 服务中了。")]),s._v(" "),a("h2",{attrs:{id:"_1-添加规则。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加规则。"}},[s._v("#")]),s._v(" 1，添加规则。")]),s._v(" "),a("p",[s._v("现在添加一个自动发现主机的程序。")]),s._v(" "),a("p",[a("code",[s._v("配置")]),s._v("==》"),a("code",[s._v("自动发现")]),s._v("==》"),a("code",[s._v("删除默认")]),s._v("==》"),a("code",[s._v("创建发现规则")]),s._v("==》"),a("code",[s._v("名称自定义")]),s._v("==》"),a("code",[s._v("IP地址范围")]),s._v("==》"),a("code",[s._v("延迟自定义")]),s._v("==》"),a("code",[s._v("检查-新的")]),s._v("==》"),a("code",[s._v("ICMP ping")]),s._v("，"),a("code",[s._v("添加")]),s._v("==》"),a("code",[s._v("添加")])]),s._v(" "),a("p",[s._v("注意：此时只是添加了发现规则")]),s._v(" "),a("h2",{attrs:{id:"_2-配置发现后动作。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置发现后动作。"}},[s._v("#")]),s._v(" 2，配置发现后动作。")]),s._v(" "),a("p",[s._v("接下来设置发现之后的动作配置。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/29a14d1237654f9e.jpg",alt:"image"}})]),s._v(" "),a("p",[a("code",[s._v("操作类型配置")]),s._v("==》"),a("code",[s._v("动作")]),s._v("==》右上角选择"),a("code",[s._v("自动发现")]),s._v("==>创建动作==》"),a("code",[s._v("名称自定义")]),s._v("==》触发条件选择"),a("code",[s._v("服务端口")]),s._v("="),a("code",[s._v("22")]),s._v("==》右边操作")]),s._v(" "),a("p",[a("code",[s._v("新的")]),s._v("==》"),a("code",[s._v("操作类型")]),s._v("==》添加到"),a("code",[s._v("主机组")]),s._v("==》选择一个组"),a("code",[s._v("Zabbix servers")])]),s._v(" "),a("p",[a("code",[s._v("新的")]),s._v("==》"),a("code",[s._v("操作类型")]),s._v("==》与"),a("code",[s._v("模板关联")]),s._v("==》 选择"),a("code",[s._v("Template ICMP Ping")]),s._v(", "),a("code",[s._v("Template OS Linux")]),s._v("==》"),a("code",[s._v("添加")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8e071b166e736aaa.jpg",alt:"image"}})]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("申明")]),s._v(" "),a("p",[a("strong",[s._v("原创文章"),a("Badge",{attrs:{text:"eryajf"}}),s._v("，未经授权，严禁转载，侵权必究！此乃文中随机水印，敬请读者谅解。")],1)]),s._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[s._v("Copyright "),a("a",{attrs:{href:"https://wiki.eryajf.net",target:"_blank",rel:"noopener noreferrer"}},[s._v("二丫讲梵"),a("OutboundLink")],1),s._v(" 版权所有")])])]),s._v(" "),a("h2",{attrs:{id:"_3-客户端配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-客户端配置。"}},[s._v("#")]),s._v(" 3，客户端配置。")]),s._v(" "),a("p",[s._v("然后来一台新的主机，进行客户端配置！！")]),s._v(" "),a("p",[s._v("新开一台虚拟机，直接把客户端 zabbix-agent 的包导入")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zabbix-agent-3.4.0-1.el6.i686.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("要注意版本的区别")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("zabbix-agent-3.4.0-1.el6.i686.rpm\t\t\tCentOS6里边的\nzabbix-agent-3.2.4-1.el7.x86_64.rpm\t\tCentOS7里边的\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果需要，而又没有包，可以去官网下载。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("https://www.zabbix.com\n\n安装完成之后\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/zabbix/zabbix_agentd.conf\n\n里边有三个东西需要修改\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Server")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".66.100\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务器IP地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ServerActive")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".66.100\t        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#也是服务器IP地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Hostname")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".66.30\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#客户端本机IP地址")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("然后重启服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("service zabbix-agent restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("设置开机自启")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("chkconfig zabbix-agent on\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("等待一会儿，再去 Web 界面，就能看到监控了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/e6e894b5f6a9e3f0.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("这样一台新的客户端（被监控端）就配置完成了。而且是自动配置。")]),s._v(" "),a("p",[s._v("这个时候，可以写一个脚本，在客户端自动安装，配置，然后服务器端自动读取，就实现了全自动形式了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);