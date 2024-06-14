(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{819:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言少叙。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言少叙。"}},[s._v("#")]),s._v(" 1，前言少叙。")]),s._v(" "),a("p",[s._v("突然感觉到渴，就一下子醒了，起来喝了口凉水，躺下后便再也没办法入眠，哎，那就不耗着啦，起来学会儿习呗。手机开开机，看了一眼时间，也才五点而已，此刻，一切都是静寂的，瞬间让自己仿佛有一点超然的感觉，于是，在这样的时刻里，我用着MinDoc，打算写写与它之间的故事。")]),s._v(" "),a("p",[s._v("我之所以在博客里边单独开出一个开源wiki的分类，是因为在市场上相关的，类似的实在太多太多，我个人也体验过不少，像什么confluence啦，showdoc啦，yapi啦（大家有没有什么特别好的工具推荐呢），但最终也都落脚到MinDoc来了，随着使用的越来越深入，一边使用一边又与开发的作者沟通一些功能的建议，就越发觉得这就是寻觅已久，最好用的个人知识管理工具的了。")]),s._v(" "),a("p",[s._v("注意，这里我说的是个人知识管理工具，比较偏私人一些，因为MinDoc的使用以及整体的项目风格，都与国内的两大知识平台有一些相近，这两个分别是看云与W3Cschool，我们也完全可以使用这些在线的工具进行个人文档的梳理与编写，只不过如果需求是在私人内部这一块儿，那么MinDoc就非常合适了。")]),s._v(" "),a("p",[s._v("忽然看到官网的介绍：")]),s._v(" "),a("p",[s._v("MinDoc 是一款针对IT团队开发的简单好用的文档管理系统。")]),s._v(" "),a("p",[s._v("MinDoc 的前身是 SmartWiki 文档系统。SmartWiki 是基于 PHP 框架 laravel 开发的一款文档管理系统。因 PHP 的部署对普通用户来说太复杂，所以改用 Golang 开发。可以方便用户部署和实用，同时增加Markdown和HTML两种编辑器。")]),s._v(" "),a("p",[s._v("开发缘起是公司IT部门需要一款简单实用的项目接口文档管理和分享的系统。其功能和界面源于 kancloud 。")]),s._v(" "),a("p",[s._v("可以用来储存日常接口文档，数据库字典，手册说明等文档。内置项目管理，用户管理，权限管理等功能，能够满足大部分中小团队的文档管理需求。")]),s._v(" "),a("p",[s._v("如果你的需求基本上也是这些，那么不妨试试这款工具。")]),s._v(" "),a("h2",{attrs:{id:"_2-官网等信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-官网等信息"}},[s._v("#")]),s._v(" 2，官网等信息")]),s._v(" "),a("p",[s._v("1，"),a("a",{attrs:{href:"https://www.iminho.me/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1),s._v("\n2，"),a("a",{attrs:{href:"https://github.com/lifei6671/mindoc",target:"_blank",rel:"noopener noreferrer"}},[s._v("项目地址"),a("OutboundLink")],1),s._v("\n3，"),a("a",{attrs:{href:"https://github.com/lifei6671/mindoc/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载地址"),a("OutboundLink")],1),s._v("\n4，"),a("a",{attrs:{href:"https://www.iminho.me/wiki/docs/mindoc/mindoc-summary.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档地址"),a("OutboundLink")],1),s._v("\n5，"),a("a",{attrs:{href:"https://doc.iminho.me/",target:"_blank",rel:"noopener noreferrer"}},[s._v("在线演示地址"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_3-部署安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署安装"}},[s._v("#")]),s._v(" 3，部署安装")]),s._v(" "),a("p",[s._v("此开源工具的部署真的非常非常简单以及方便。注意，我这里仅仅分享在CentOs7上部署的经验。")]),s._v(" "),a("p",[s._v("MinDoc采用go语言开发，不过不用担心，作者上传的都是已经打包好了的安装包，我们只用下载之后解压，接着直接安装即可。")]),s._v(" "),a("h3",{attrs:{id:"_1-下载安装包。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装包。"}},[s._v("#")]),s._v(" 1，下载安装包。")]),s._v(" "),a("p",[s._v("首先通过上边的下载地址下载最新的包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/lifei6671/mindoc/releases/download/v0.13.2/mindoc_linux_amd64.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-解压安装包。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解压安装包。"}},[s._v("#")]),s._v(" 2，解压安装包。")]),s._v(" "),a("p",[s._v("然后上传到服务器上，解压配置。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mindoc_linux_amd64.zip /opt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" mindoc_linux_amd64.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3-配置数据库。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置数据库。"}},[s._v("#")]),s._v(" 3，配置数据库。")]),s._v(" "),a("p",[s._v("此程序使用MySQL或者sqlite作为存储库，两者任选其一即可。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("MySQL：\nCREATE DATABASE mindoc_db  DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_general_ci"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsqlite\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果使用的是sqlite，可以直接在程序的conf/app.conf文件里进行配置，之后程序会自动创建。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db_adapter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sqlite3\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db_database")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mindoc_db\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_4-修改主配置文件。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改主配置文件。"}},[s._v("#")]),s._v(" 4，修改主配置文件。")]),s._v(" "),a("p",[s._v("主配置文件就是刚说的conf/app.conf。")]),s._v(" "),a("p",[s._v("主要配置的就是与数据库的连接，以及其他一些关于上传下载或者邮件功能缓存功能等的配置。")]),s._v(" "),a("p",[s._v("数据库的配置如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("####################MySQL 数据库配置###########################")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#支持MySQL和sqlite3两种数据库，如果是sqlite3 则 db_database 标识数据库的物理目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db_adapter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MINDOC_DB_ADAPTER||mysql}")]),s._v('"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db_host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MINDOC_DB_HOST||127.0.0.1}")]),s._v('"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此处默认即可。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db_port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MINDOC_DB_PORT||3306}")]),s._v('"')]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果端口没有修改，也用默认的。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db_database")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MINDOC_DB_DATABASE||mindoc_db}")]),s._v('"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#填入前边创建的库名称。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db_username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MINDOC_DB_USERNAME||root}")]),s._v('"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库用户名。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db_password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MINDOC_DB_PASSWORD||123456}")]),s._v('"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库密码。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("配置完成之后，需要初始化一下数据，如果缺少此步骤，则将会影响使用。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./mindoc_linux_amd64  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("稍等一分钟，看到success即表示成功。程序会自动初始化数据库，并创建一个超级管理员账号：admin 密码：123456")]),s._v(" "),a("h3",{attrs:{id:"_5-启动。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动。"}},[s._v("#")]),s._v(" 5，启动。")]),s._v(" "),a("p",[s._v("因为程序是一个前台程序，所以启动的时候放入后台。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./mindoc_linux_amd64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时访问 "),a("a",{attrs:{href:"http://localhost:8181/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8181"),a("OutboundLink")],1),s._v(" 就能访问 MinDoc 了。")]),s._v(" "),a("p",[s._v("或者使用systemd进行管理：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/lib/systemd/system/mindoc.service\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Mindoc\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("simple\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/min-wiki/mindoc_linux_amd64\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on-failure\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"_4-配置nginx代理。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置nginx代理。"}},[s._v("#")]),s._v(" 4，配置NGINX代理。")]),s._v(" "),a("p",[s._v("如果你还想配置一下域名方便使用，那么可以通过如下配置进行代理设置。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此处应该配置你的域名：")]),s._v("\n    server_name  doc.eryajf.net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    charset utf-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此处配置你的访问日志，请手动创建该目录：")]),s._v("\n    access_log  /var/log/nginx/webhook.iminho.me/access.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        try_files /_not_exists_ @backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里为具体的服务代理配置")]),s._v("\n    location @backend "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_set_header X-Forwarded-For "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header Host            "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header   X-Forwarded-Proto "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此处配置 MinDoc 程序的地址和端口号")]),s._v("\n        proxy_pass http://127.0.0.1:8181"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"_5-备份与迁移。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-备份与迁移。"}},[s._v("#")]),s._v(" 5，备份与迁移。")]),s._v(" "),a("p",[s._v("备份非常简单，只用对前边定义的数据库进行备份，然后将整个项目目录进行打包，如果需要迁移，直接按原有部署思路进行恢复即可。")]),s._v(" "),a("h2",{attrs:{id:"_6-版本升级。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-版本升级。"}},[s._v("#")]),s._v(" 6，版本升级。")]),s._v(" "),a("p",[s._v("因为这是个人开发者进行开发的产品，因此作者经常根据每个体验者给出的一些问题建议就进行更新了，因此版本更迭挺多，所以如何升级也是一个需要面对的问题。")]),s._v(" "),a("p",[s._v("1，下载新的安装包，传到服务器上，进行解压。\n2，实际的更新操作。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("比如我之前的文件是在doc目录下，现在更新解压出来是在mindoc目录下。\n\n此时：\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，先删除mindoc目录下的upload目录，然后将doc目录下的upload目录cp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" 过来。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("，如果两个版本更新不大的话，那么可以直接用老的配置。进入到mindoc目录下的conf目录中，删除app.conf，将doc目录下对应的conf文件拷过来。\n\n一般第二种操作只能在版本升级不大情况下用，如果内容更新大，要重新配置里边的内容。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("3，安装。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mindoc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./mindoc_linux_amd64 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n如果看到success则安装成功。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("4，启动。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./mindoc_linux_amd64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个时候可以访问以下看看新功能是否出来了。")]),s._v(" "),a("h2",{attrs:{id:"_7-使用建议。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-使用建议。"}},[s._v("#")]),s._v(" 7，使用建议。")]),s._v(" "),a("p",[s._v("感觉上好像使用建议是不需要写的，毕竟每个人有每个人使用的方式，直接体验就行了，但是之所以想写一下，还是因为，个人的markdown编写习惯，就是在这款工具里边养成的，现在写文档的主力战场就转移到了个人的在线doc工具上来了，各种快捷键用的那叫一个嗨皮。")]),s._v(" "),a("p",[s._v("所以关于项目如何规划之类的，我就不多说了，这里只列一下个人编写的时候常用的一些快捷键吧。\n当然这些快捷键大家也可以通过右上角的帮主页面看到。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Ctrl + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("~6            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#插入标题1~6")]),s._v("\nCtrl + A            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全选")]),s._v("\nCtrl + C            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#复制")]),s._v("\nCtrl + V            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#粘贴")]),s._v("\nCtrl + B            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加粗")]),s._v("\nCtrl + I            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#斜体")]),s._v("\nCtrl + K            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#行内代码")]),s._v("\nCtrl + Shift + C    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#插入代码块")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("基本上个人常用的就是这些，当然编写的时候还经常使用无序有序列表，以及插入图片表格等的操作，这些就不再说了。")]),s._v(" "),a("p",[s._v("最后，感谢作者的无私奉献与付出，让我们体验到这么好的开源工具！")]),s._v(" "),a("p",[s._v("另：本文教程处编写有参考原官方文档。")])])}),[],!1,null,null,null);a.default=e.exports}}]);