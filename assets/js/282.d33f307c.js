(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{626:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一-闲言碎语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-闲言碎语"}},[s._v("#")]),s._v(" 一，闲言碎语")]),s._v(" "),a("p",[s._v("在申请加入蓝鲸 qq 群的时候，被问到一个问题。")]),s._v(" "),a("p",[s._v("蓝鲸是什么? 记得我当时的答案是这样的：对于一个尚且不会开发的运维来说，蓝鲸就是一种慈善。")]),s._v(" "),a("p",[s._v("有时候只有经历过更忙更繁杂之后才能体会到，为什么，会有一个自动化时代的到来，而这种时代，是无可阻挡与避免的。")]),s._v(" "),a("p",[s._v("决定要好好琢磨一下蓝鲸，但是一开始并没有成功，我在官方的所谓文档里翻来覆去，不明就里，后来几乎就要放弃了的，后来所幸在另外一个地方看到一篇教程的文章，虽然与官方文档相差无几，但是读起来却感觉要容易理解的多，这也是我非常郁闷的地方，许多软件工具的官方文档，也不知道是哪些人在什么情况下写出来的，总之，一旦与官方文档挂钩，就几乎与难懂不好用扯在一起了。")]),s._v(" "),a("p",[s._v("不过还有另外一层体验，这层是在充分理解了民间所写的文档之后，我又回头跑去官方文档看了两遍，发现其中许多地方，倒也能够看懂了，是已经了解其中的门路回头再看就能够轻车熟路了，还是已入门槛产生了兴趣看的更仔细认真所以才理解了，我不得而知，总之，学习这条路，不抛弃，不放弃就对啦，如果暂时不行，那就想想别的办法，兴许别的路就是通往山顶的适合自己的路呢。")]),s._v(" "),a("p",[s._v("好了，啰嗦完了，从这里开始，下边的文字基本上都是整理，整理就是拿别人的东西过来，整理成自己的东西，也就是说大部分核心东西还都是官方文档或者民间文档，然后再通过自己的理解整理出来。")]),s._v(" "),a("h2",{attrs:{id:"二-所有链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-所有链接"}},[s._v("#")]),s._v(" 二，所有链接")]),s._v(" "),a("p",[s._v("蓝鲸官网：http://bk.tencent.com/")]),s._v(" "),a("p",[s._v("蓝鲸社区版本下载：http://bk.tencent.com/download/")]),s._v(" "),a("p",[s._v("蓝鲸官方论坛：http://bbs.bk.tencent.com/forum.php")]),s._v(" "),a("p",[s._v("蓝鲸 3.X 官方部署文档：http://bbs.bk.tencent.com/forum.php?mod=viewthread&tid=505")]),s._v(" "),a("p",[s._v("民间部署文档参考：https://segmentfault.com/a/1190000011431985")]),s._v(" "),a("h2",{attrs:{id:"三-简单介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-简单介绍"}},[s._v("#")]),s._v(" 三，简单介绍")]),s._v(" "),a("p",[s._v("我们这里也着重讲解介绍的是蓝鲸社区版 3.X，算是为随后 4 版本的到来打一个前站吧。")]),s._v(" "),a("h2",{attrs:{id:"四-环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-环境准备"}},[s._v("#")]),s._v(" 四，环境准备")]),s._v(" "),a("h3",{attrs:{id:"_1-安装前准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装前准备"}},[s._v("#")]),s._v(" 1，安装前准备")]),s._v(" "),a("p",[s._v("蓝鲸相关软件包（V3.X Beta）及加密证书, 可以下载最新的，基本上本文档适用所有 3.X 版本的。")]),s._v(" "),a("p",[s._v("所需要的一共有三项，主安装包（src），安装脚本包（install），证书包（ssl）。主安装包与安装脚本包在上边下载链接处点进去都可以下载到，证书包下载可通过下边这个链接进行下载 http://bk.tencent.com/download/#ssl 注意：下载时根据官方说明需要将其中两台部署主机的 mac 地址（用 netstat -ie 看到）输入，这里可以把三台服务器的 mac 地址都填进去，并用英文的; 分开。")]),s._v(" "),a("h3",{attrs:{id:"_2-系统环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-系统环境准备"}},[s._v("#")]),s._v(" 2，系统环境准备")]),s._v(" "),a("p",[s._v("准备三台主机，这是官方要求的最少主机数配置，且每台配置最好不低于 4 核 8G。我在第一次部署的时候，其中两台主机使用了自己电脑虚拟机开出来的 1 核 1G 的主机进行协调，但是由于这个服务相当丰富庞大，较为耗费资源，所以当时就遇到了搭建部署成功之后，结果登陆的时候就一直转圈圈，加载半天也没个动静。")]),s._v(" "),a("p",[s._v("主机环境准备如下（这里统一使用 CentOS 7 系统）")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/eb8a049731380117.jpg",alt:"image"}})]),s._v(" "),a("p",[s._v("这里的模块角色听起来好像有点高端，其实就是三台服务端主机上分别安装的不同组件，看到这样一堆组件，想必就能够理解为什么蓝鲸是一个庞大的蓝鲸了吧。")]),s._v(" "),a("h3",{attrs:{id:"_3-服务器初始化配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-服务器初始化配置"}},[s._v("#")]),s._v(" 3，服务器初始化配置")]),s._v(" "),a("p",[s._v("所有机器之间保证内网络可以 SSH 免密登陆（分别将本机的密码传给另外两台以及本机，很奇怪，我在第一次部署的时候曾经遇到过登录本机需要认证的情况，所以这里为免卡壳，最好这样配置）")]),s._v(" "),a("p",[s._v("关闭 SELinux，保证机器相互之间的互通 (可以在安装完成后再根据服务所需策略添加防火墙规则)")]),s._v(" "),a("p",[s._v("安装过程中, 需要保证所有机器都可以联网，若无法做到，可以自建一个 yum 源以及 pip 源")]),s._v(" "),a("p",[s._v("安装开发工具包： yum -y groupinstall “Development Tools”")]),s._v(" "),a("p",[s._v("安装 epel 源: rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm (后面安装 rabbitmnq-server 时会用到)")]),s._v(" "),a("h2",{attrs:{id:"五-开始安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-开始安装"}},[s._v("#")]),s._v(" 五，开始安装")]),s._v(" "),a("h3",{attrs:{id:"_1-配置域名解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置域名解析"}},[s._v("#")]),s._v(" 1，配置域名解析")]),s._v(" "),a("p",[s._v("首先，先将以下解析全部写入到每台服务器的 hosts 中，就不必再去搭建本地 dns 了。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("192.168.106.2 bk-1\n192.168.106.3 bk-2\n192.168.106.4 bk-3\n\n192.168.106.2 paas.ops.aniu.so jobs.ops.aniu.so cmdb.ops.aniu.so\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("同时，也要将最后一条解析写入到本地 hosts 当中，以便部署完成之后本地通过域名访问。注意：如果跟随我的文档进行部署，那么请暂时所有的配置与我保持一致，能够全部都做通了之后，最后会有更换域名啦之类的操作方法的。所有的学习都是这样的一个过程。")]),s._v(" "),a("h3",{attrs:{id:"_2-初步的部署准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-初步的部署准备"}},[s._v("#")]),s._v(" 2，初步的部署准备")]),s._v(" "),a("p",[s._v("在中控主机上创建 / data 目录，然后将三包传到这个目录下，以后所有操作也都在这台主机上，所有数据也都会自动进行同步的。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ cd /data\n$ tar xf bkce_src-3.1.6.tgz\n$ tar xf install_ce-1.0.14.tgz\n$ tar xf ssl_certificates.tar.gz -C ./src/cert/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_3-配置相关配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置相关配置文件"}},[s._v("#")]),s._v(" 3，配置相关配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ vi install.config\n\n192.168.106.2 nginx,appt,rabbitmq,kafka,zk,es,bkdata,consul,fta\n192.168.106.3 license,appo,kafka,zk,es,mysql,beanstalk,consul\n192.168.106.4 paas,cmdb,job,gse,kafka,zk,es,consul,redis,bkarchiva\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("注\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("\\1. zk 表示 zookeeper， es 表示 elasticsearch")]),s._v(" "),a("p",[s._v("\\2. 该配置文件，要保证逗号前后没有空白字符，行末没有空白字符， ip 后面使用空格与服务名称隔开 (不能使用 tab)")]),s._v(" "),a("p",[s._v("\\3. 含有多个内网 ip 的机器，install.config 中使用 /sbin/ifconfig 输出中的第一个内网 ip")]),s._v(" "),a("p",[s._v("\\4. 在 ip 后面写上该机器要安装的服务列表即可。")]),s._v(" "),a("p",[s._v("\\5. nginx 与 cmdb 不能部署在同一台机器")]),s._v(" "),a("p",[s._v("\\6. gse 与 redis 需要部署在同一台机器上")]),s._v(" "),a("p",[s._v("\\7. 安装 zk 的机器， 不能有外网 IP， 或者必须通过防火墙策略限制 zk 端口的访问")]),s._v(" "),a("p",[s._v("\\8. gse 若需要跨云支持， gse 所在机器必须有外网 IP")]),s._v(" "),a("p",[s._v("\\9. 增加机器数量时， 可以将以上配置中的服务挪到新的机器上。 要保证: kafka， es， zk 的每个组件的总数量为 3")]),s._v(" "),a("p",[s._v("\\10. 设置的 mysql 密码不能有 #以及 / .")]),s._v(" "),a("h3",{attrs:{id:"根据实际情况修改-global-env-ports-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据实际情况修改-global-env-ports-env"}},[s._v("#")]),s._v(" 根据实际情况修改 global.env , ports.env")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("- ports.env 中可以配置各项服务的端⼝信息\n- globals.env 配置⽂件中, 设定域名,账号密码等信息, 强烈建议修改掉默认值\n- global.env 中配置的域名,必须保证可以在服务器上被解析到, 建议使⽤ DNS 进⾏配置,域名解析对应的 A 记录要求填写 nginx 所在机器的 ip 地址.若⽆ DNS 服务, 则,需要在安装蓝鲸服务的机器上都配置 hosts , 把 paas , job , cmdb 的域名都指向 nginx 所在 ip ,\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("示例如下\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ vi globals.env\n\n# vim:ft=sh\n\n# 产品信息含义\n#   PAAS    集成平台\n#   CMDB    配置平台\n#   JOB     作业平台\n#   GSE     管控平台\n#   BKDATA  数据平台\n\n## environment variables\n\n# 域名信息\nexport BK_DOMAIN="ops.aniu.so"           # 蓝鲸根域名(不含主机名)\nexport PAAS_FQDN="paas.$BK_DOMAIN"       # PAAS 完整域名\nexport CMDB_FQDN="cmdb.$BK_DOMAIN"       # CMDB 完整域名\nexport JOB_FQDN="job.$BK_DOMAIN"         # JOB 完整域名\nexport APPO_FQDN="o.$BK_DOMAIN"          # 正式环境完整域名\nexport APPT_FQDN="t.$BK_DOMAIN"          # 测试环境完整域名\n\n# DB 信息\nexport MYSQL_USER="root"                 # mysql 用户名\nexport MYSQL_PASS="@Aniudb123."          # mysql 密码\nexport REDIS_PASS="@Aniuredis123."       # redis 密码\n\n# 账户信息(建议修改)\nexport MQ_USER=admin\nexport MQ_PASS=aniumq\nexport ZK_USER=aniuzk\nexport ZK_PASS=\'anwg123.\'\n\nexport PAAS_ADMIN_USER=admin\nexport PAAS_ADMIN_PASS=anwg123.\n\n# 以下变量值不可以修改.每个企业统一\nexport IMAGE_NAME=\'bkbase/python:1.0\'\nYou have new mail in /var/spool/mail/root\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("h3",{attrs:{id:"_4-更改-pip-源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-更改-pip-源"}},[s._v("#")]),s._v(" 4，更改 pip 源")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim src/.pip/pip.conf\n\n[global]\nindex-url = http://mirrors.aliyun.com/pypi/simple\ntrusted-host = mirrors.aliyun.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_5-配置-nginx-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置-nginx-repo"}},[s._v("#")]),s._v(" 5，配置 Nginx repo")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 在bk1 bk3上配置\n\nrpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_6-开始安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-开始安装"}},[s._v("#")]),s._v(" 6，开始安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("安装过程的输出说明：\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("白色: 普通输出")]),s._v(" "),a("p",[s._v("蓝色: 步骤说明")]),s._v(" "),a("p",[s._v("黄色: 警告消息，可忽略")]),s._v(" "),a("p",[s._v("红色: 失败提示，或者错误提示")]),s._v(" "),a("p",[s._v("注：安装过程中会出现少量的非脚本输出日志 (无 ip 和日期前缀的输出行)。也会出现红色的 警告 消息，请忽略。")]),s._v(" "),a("p",[s._v("这里使用集群安装，单步安装请参考官方文档。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./bk_install base_service  # 安装基础环境\n$ ./bk_install bk_products  # 安装蓝鲸主要产品，并初始化数据\n# 该步骤安装完成后，可以通过浏览器打开蓝鲸了。cmdb，job 都应该能访问才算是正常\n$ ./bk_install app_mgr        # 安装 开发者中心的 App 管理器\n# 该步骤安装完成后， 可以在开发者中心的 服务器信息 和 第三方服务信息 中看到已经成功激活的服务器\n# 此步骤可能会提示安装Rabbitmq失败，解决方法：\n** yum install erlang -y # 安装Rabbitmq-server需要的环境 **\n$ ./bk_install gse_agent    # 在所有机器上安装 gse_agent\n# 该步骤安装完成后，可以在 CC 的资源池中看到安装蓝鲸的服务器 ip 列表\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("如果安装过程中出现什么问题，请根据出现问题进行解决，这里有官方论坛收集的问题可以参考。 http://bbs.bk.tencent.com/forum.php?mod=viewthread&tid=570&extra=page%3D1")]),s._v(" "),a("p",[s._v("现在这个时候可以通过 IP 或者刚刚配置好的域名进行访问。")]),s._v(" "),a("p",[s._v("接下来就是配置使用啦！！！")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3e694356522b0d80.jpg",alt:"image"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);