(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{465:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("之前在 ldap 的文章里有提到 NGINX 结合 ldap 认证一些公共服务的时候，会非常方便，那么如何将我们需要的 ldap 模块儿添加到部署好了的 openresty 中呢，这篇文章就来讲解一下。")]),s._v(" "),t("h2",{attrs:{id:"_1-下载相关包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载相关包"}},[s._v("#")]),s._v(" 1，下载相关包")]),s._v(" "),t("p",[s._v("如果之前安装之后，删除了安装包，现在找不到了，那么可以从如下网站下载与当前一致的版本。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://openresty.org/download/openresty-1.13.6.2.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("下载所需的 ldap 模块儿，项目地址为：https://github.com/kvspb/nginx-auth-ldap.git 考虑到不好下载，于是直接在国内同步了一份。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意拉取代码存放位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/eryajf/nginx-auth-ldap.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("接下来就进入正式的编译安装了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/61fd0c1a6d17c72b.jpg",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"_2-安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装依赖"}},[s._v("#")]),s._v(" 2，安装依赖")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc gcc-c++ pcre pcre-devel openldap-devel lua-devel systemtap-sdt-devel openssl-devel openssl\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("申明")]),s._v(" "),t("p",[t("strong",[s._v("原创文章"),t("Badge",{attrs:{text:"eryajf"}}),s._v("，未经授权，严禁转载，侵权必究！此乃文中随机水印，敬请读者谅解。")],1)]),s._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[s._v("Copyright "),t("a",{attrs:{href:"https://wiki.eryajf.net",target:"_blank",rel:"noopener noreferrer"}},[s._v("二丫讲梵"),t("OutboundLink")],1),s._v(" 版权所有")])])]),s._v(" "),t("h2",{attrs:{id:"_3-进行编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-进行编译"}},[s._v("#")]),s._v(" 3，进行编译")]),s._v(" "),t("p",[s._v("需要注意"),t("code",[s._v("编译并不能在 openresty 根目录进行，否则将会失败。已经有同学在这里踩坑了🤣🤣🤣")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf openresty-1.13.6.2.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" openresty-1.13.6.2/bundle/nginx-1.13.6/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后再进行编译：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./configure "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prefix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/openresty/nginx --with-cc-opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-O2 -DNGX_LUA_ABORT_AT_PANIC -I/usr/local/openresty/zlib/include -I/usr/local/openresty/pcre/include -I/usr/local/openresty/openssl/include'")]),s._v(" --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/ngx_devel_kit-0.3.0 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/echo-nginx-module-0.61 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/xss-nginx-module-0.06 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/ngx_coolkit-0.2rc3 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/set-misc-nginx-module-0.32 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/form-input-nginx-module-0.12 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/encrypted-session-nginx-module-0.08 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/srcache-nginx-module-0.31 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/ngx_lua-0.10.13 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/ngx_lua_upstream-0.07 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/headers-more-nginx-module-0.33 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/array-var-nginx-module-0.05 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/memc-nginx-module-0.19 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/redis2-nginx-module-0.15 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/redis-nginx-module-0.3.7 --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/ngx_stream_lua-0.0.5 --with-ld-opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-Wl,-rpath,/usr/local/openresty/luajit/lib -L/usr/local/openresty/zlib/lib -L/usr/local/openresty/pcre/lib -L/usr/local/openresty/openssl/lib -Wl,-rpath,/usr/local/openresty/zlib/lib:/usr/local/openresty/pcre/lib:/usr/local/openresty/openssl/lib'")]),s._v(" --with-pcre-jit --with-stream --with-stream_ssl_module --with-http_v2_module --without-mail_pop3_module --without-mail_imap_module --without-mail_smtp_module --with-http_stub_status_module --with-http_realip_module --with-http_addition_module --with-http_auth_request_module --with-http_secure_link_module --with-http_random_index_module --with-http_gzip_static_module --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-threads --with-file-aio --with-dtrace-probes --with-http_image_filter_module --with-stream --with-stream_ssl_module --with-http_ssl_module --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/nginx-auth-ldap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注意如上步骤，"),t("code",[s._v("如果在一个已经安装过openresty的环境中新增，则需要先把原来的安装包移走")]),s._v("，不然下边 make 的时候会报如下错误：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("/bin/ld: warning: libssl.so.10, needed by /usr/lib/gcc/x86_64-redhat-linux/4.8.5/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/lib64/libldap.so, may conflict with libssl.so.1.1\n/bin/ld: objs/src/event/ngx_event_openssl.o: undefined reference to symbol "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SSL_CTX_get_ex_new_index@@libssl.so.10'")]),s._v("\n/usr/lib64/libssl.so.10: error adding symbols: DSO missing from "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line\ncollect2: error: ld returned "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" status\nmake"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": *** "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("objs/nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Error "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmake"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Leaving directory `/usr/local/src/openresty-1.13.6.2/bundle/nginx-1.13.6'\nmake: *** "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("build"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Error "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("安装：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("安装完成之后，重新软链一下 nginx 的主程序，就可以投入使用了。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-snf")]),s._v(" /usr/local/openresty/nginx/sbin/nginx  /usr/sbin/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_4-配置参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置参考"}},[s._v("#")]),s._v(" 4，配置参考")]),s._v(" "),t("p",[s._v("具体 NGINX 配置 ldap 认证，可以参考如下文章：https://wiki.eryajf.net/pages/3416.html#_6-nginx")])])}),[],!1,null,null,null);t.default=n.exports}}]);