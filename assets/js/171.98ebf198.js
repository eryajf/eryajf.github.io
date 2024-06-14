(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{513:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-简单了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单了解"}},[s._v("#")]),s._v(" 1，简单了解")]),s._v(" "),a("p",[s._v("logrotate 在 CentOS 系统中是默认安装的日志轮替组件，通过如下命令可以看到主配置内容：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^$|^#'")]),s._v(" logrotate.conf\nweekly\nrotate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\ncreate\ndateext\ninclude /etc/logrotate.d\n/var/log/wtmp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    monthly\n    create 0664 root utmp\n    minsize 1M\n    rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n/var/log/btmp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    missingok\n    monthly\n    create 0600 root utmp\n    rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("这个配置当中其他内容基本上可以忽略，主要内容是第 6 行的引用，我们新增一些日志管理策略也都可以在这个目录下创建相关策略来维护。")]),s._v(" "),a("p",[s._v("logrorate 默认在系统的 "),a("code",[s._v("/etc/cron.daily")]),s._v("中存放了一个执行脚本，因此默认情况下脚本将会每天执行一次：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" /etc/cron.daily/logrotate\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n/usr/sbin/logrotate "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /var/lib/logrotate/logrotate.status /etc/logrotate.conf\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EXITVALUE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$EXITVALUE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    /usr/bin/logger "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("logrotate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ALERT exited abnormally with ['),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$EXITVALUE")]),s._v(']"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("了解了这些基本信息之后，就可以对这个工具投入使用了，不过还需要了解一下配置文件中的参数意义，以便配制出符合自己需求的轮替脚本。")]),s._v(" "),a("h2",{attrs:{id:"_2-配置了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置了解"}},[s._v("#")]),s._v(" 2，配置了解")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("compress")]),s._v("：通过 gzip，压缩转储以后的日志")]),s._v(" "),a("li",[a("code",[s._v("nocompress")]),s._v("：不需要压缩时，用这个参数")]),s._v(" "),a("li",[a("code",[s._v("copytruncate")]),s._v("：用于还在打开中的日志文件，把当前日志备份并截断")]),s._v(" "),a("li",[a("code",[s._v("nocopytruncate")]),s._v("：备份日志文件但是不截断")]),s._v(" "),a("li",[a("code",[s._v("createmodeownergroup")]),s._v("：转储文件，使用指定的文件模式创建新的日志文件")]),s._v(" "),a("li",[a("code",[s._v("nocreate")]),s._v("：不建立新的日志文件")]),s._v(" "),a("li",[a("code",[s._v("delaycompress")]),s._v("和"),a("code",[s._v("compress")]),s._v("：一起使用时，转储的日志文件到下一次转储时才压缩")]),s._v(" "),a("li",[a("code",[s._v("missingok")]),s._v("：在日志轮循期间，任何错误将被忽略，例如 “文件无法找到” 之类的错误。")]),s._v(" "),a("li",[a("code",[s._v("nodelaycompress")]),s._v("：覆盖 delaycompress 选项，转储同时压缩。")]),s._v(" "),a("li",[a("code",[s._v("errorsaddress")]),s._v("：专储时的错误信息发送到指定的 Email 地址")]),s._v(" "),a("li",[a("code",[s._v("ifempty")]),s._v("：即使是空文件也转储，这个是 logrotate 的缺省选项。")]),s._v(" "),a("li",[a("code",[s._v("notifempty")]),s._v("：如果是空文件的话，不转储")]),s._v(" "),a("li",[a("code",[s._v("mailaddress")]),s._v("：把转储的日志文件发送到指定的 E-mail 地址")]),s._v(" "),a("li",[a("code",[s._v("nomail")]),s._v("：转储时不发送日志文件")]),s._v(" "),a("li",[a("code",[s._v("dateext")]),s._v("：转储后的日志文件以日期命名")]),s._v(" "),a("li",[a("code",[s._v("olddirdirectory")]),s._v("：转储后的日志文件放入指定的目录，必须和当前日志文件在同一个文件系统")]),s._v(" "),a("li",[a("code",[s._v("noolddir")]),s._v("：转储后的日志文件和当前日志文件放在同一个目录下")]),s._v(" "),a("li",[a("code",[s._v("prerotate/endscript")]),s._v("：在转储以前需要执行的命令可以放入这个对，这两个关键字必须单独成行")]),s._v(" "),a("li",[a("code",[s._v("postrotate/endscript")]),s._v("：在转储以后需要执行的命令可以放入这个对，这两个关键字必须单独成行")]),s._v(" "),a("li",[a("code",[s._v("daily")]),s._v("：指定转储周期为每天")]),s._v(" "),a("li",[a("code",[s._v("weekly")]),s._v("：指定转储周期为每周")]),s._v(" "),a("li",[a("code",[s._v("monthly")]),s._v("：指定转储周期为每月")]),s._v(" "),a("li",[a("code",[s._v("rotatecount")]),s._v("：指定日志文件删除之前转储的次数，0 指没有备份，5 指保留 5 个备份")]),s._v(" "),a("li",[a("code",[s._v("size")]),s._v("（或 minsize）：size 当日志文件到达指定的大小时才转储，Size 可以指定 bytes(缺省) 以及 KB(sizek) 或者 MB(sizem)")])]),s._v(" "),a("p",[s._v("以上是一些常用的配置，可以按需定义自己的配置文件。")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://t.eryajf.net/imgs/2021/09/307199dc573142dd.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/307199dc573142dd.jpg",alt:"img"}}),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_3-生产案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-生产案例"}},[s._v("#")]),s._v(" 3，生产案例")]),s._v(" "),a("p",[s._v("接下来介绍几个生产当中常用的例子，可以直接借鉴以使用。")]),s._v(" "),a("h3",{attrs:{id:"_1-nginx-日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-nginx-日志"}},[s._v("#")]),s._v(" 1，NGINX 日志")]),s._v(" "),a("p",[s._v("NGINX 日志的处理是一种常见的场景，处理的方式用的较多的是结合 logrotate 来进行处理，当然也可以基于 NGINX 自身的配置文件策略对日志进行自动切割，此种方案可以参考另外一篇文章："),a("a",{attrs:{href:"https://wiki.eryajf.net/pages/3537.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("从 NGINX 自身配置文件中定义访问日志按时间切割"),a("OutboundLink")],1),s._v("，这里则介绍 logrotate 方案的具体配置方式。")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/etc/logrotate.d")]),s._v("下添加如下配置：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/logrotate.d/nginx\n/data/log/access.log\n/data/log/error.log\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    daily\n    dateext\n    missingok\n    rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n    notifempty\n    create "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" www\n    sharedscripts\n    postrotate\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /var/run/nginx.pid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-USR1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/run/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    endscript\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("这个案例是针对这种提供了平滑过渡日志写操作的脚本，其他类似的应用日志也可以套用这个地方的配置。")]),s._v(" "),a("p",[s._v("当我们配置添加之后，等不了系统的执行，想要自己看一下效果，可用如下命令手动运行：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("logrotate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /etc/logrotate.d/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-catalina-日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-catalina-日志"}},[s._v("#")]),s._v(" 2，catalina 日志")]),s._v(" "),a("p",[s._v("catalina 是一个代指，与上边配置相对的，特指那种始终写到一个文件里，自身没有任何轮替策略，也无法通过调用所有平滑过渡来处理的情况下，可以使用如下配置对日志进行处理。")]),s._v(" "),a("p",[s._v("配置如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/logrotate.d/catalina\n/data/log/catalina.log\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    missingok\n    copytruncate\n    compress\n    dateext\n    notifempty\n    daily\n    rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n    create "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" root root\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("这个配置文件看起来与上边的区别除了脚本的处理之外，还多了一个重要的配置是 "),a("code",[s._v("copytruncate")]),s._v("，如果你在配置了 rotate 策略之后，发现日志转储了，但是写的对象也转移到了转储之后的文件了，那么应该就是漏了这个配置项。")]),s._v(" "),a("h3",{attrs:{id:"_3-日志量大"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-日志量大"}},[s._v("#")]),s._v(" 3，日志量大")]),s._v(" "),a("p",[s._v("有时候可能业务量非常大，默认的按天切割就有点不大能够满足我们的需求，磁盘可能很快就要满了，这个时候可以将策略自定义为每小时执行一次。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/logrotate.d/nginx\n/data/log/access.log\n/data/log/error.log\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    hourly\n    dateext\n    missingok\n    rotate "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n    notifempty\n    create "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" www\n    sharedscripts\n    postrotate\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /var/run/nginx.pid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-USR1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/run/nginx.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    endscript\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("然后记得把执行脚本往小时执行池子里拷贝一份：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/cron.daily/logrotate /etc/cron.hourly/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当然也可将策略调整为按大小进行切割，这个方案也是可以的，这里就不做示例了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);