(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{446:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("这个问题之前遇到过一次，也记录过解决的办法，没想到最近又安装项目，之前记录的办法竟然也不管用了。今天再来记录一下新找到的解决办法。")]),s._v(" "),a("h2",{attrs:{id:"_1-老版笔记。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-老版笔记。"}},[s._v("#")]),s._v(" 1，老版笔记。")]),s._v(" "),a("p",[s._v("pip 进行安装的时候，总是报 ssl 的问题，可能是源的问题。")]),s._v(" "),a("p",[s._v("报错信息如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Could not "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" packages due to an EnvironmentError: HTTPSConnectionPool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'files.pythonhosted.org'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Max retries exceeded with url: /packages/5f/25/e52d3f31441505a5f3af41213346e5b6c221c9e086a166f3703d2ddaf940/pip-18.0-py2.py3-none-any.whl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Caused by SSLError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SSLError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", u"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:590)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("网上有说安装方式用：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --index-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://pypi.python.org/simple/ --trusted-host pypi.python.org pythonPackageName\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".pip --trusted-host pypi.python.org "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pythonPackageName\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v('其中 "pythonPackageName" 是你要安装的库名称（比如：requests、lxml 等）')]),s._v(" "),a("p",[s._v("然而经过测试发现并不行。")]),s._v(" "),a("p",[s._v("于是采用豆瓣源进行安装：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" requests "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" http://pypi.douban.com/simple/ --trusted-host pypi.douban.com  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("aioredis")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("但是这个也只是单个安装的时候没有问题，用-r 进行安装又不行了。")]),s._v(" "),a("p",[s._v("于是写入到配置里边：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /root/.pip\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.pip/pip.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("EOF\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n\tindex-url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http://pypi.douban.com/simple\n\ttrusted-host "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pypi.douban.com\n\tEOF\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("然后直接"),a("code",[s._v("pip install pack")]),s._v("即可。")]),s._v(" "),a("p",[s._v("但是发现还会报错。\n"),a("code",[s._v("祭出神器")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("packge")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v("  requirements.txt"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" requests "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" http://pypi.douban.com/simple/ --trusted-host pypi.douban.com "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$packge")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个确实是神器，非常好用！")]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("申明")]),s._v(" "),a("p",[a("strong",[s._v("原创文章"),a("Badge",{attrs:{text:"eryajf"}}),s._v("，未经授权，严禁转载，侵权必究！此乃文中随机水印，敬请读者谅解。")],1)]),s._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[s._v("Copyright "),a("a",{attrs:{href:"https://wiki.eryajf.net",target:"_blank",rel:"noopener noreferrer"}},[s._v("二丫讲梵"),a("OutboundLink")],1),s._v(" 版权所有")])])]),s._v(" "),a("h2",{attrs:{id:"_2-安装遇到-ssl-问题。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装遇到-ssl-问题。"}},[s._v("#")]),s._v(" 2，安装遇到 ssl 问题。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\nCollecting "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n  Could not fetch URL https://pypi.python.org/simple/docker/: There was a problem confirming the ssl certificate: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SSL: CERTIFICATE_VERIFY_FAILED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" certificate verify failed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_ssl.c:777"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("- skipping\n  Could not "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" a version that satisfies the requirement "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from versions: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nNo matching distribution found "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("解决办法：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .pip\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .pip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后新增配置文件。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" pip.conf\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v("\nindex-url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http://pypi.douban.com/simple/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nuse-mirrors "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nmirrors "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" http://pypi.douban.com/simple/\ntrusted-host "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pypi.douban.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("然后咋 pip install 就好了。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost .pip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\nCollecting "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/06/0b/ce97eb31058eddaef316973b8299b737ebab0bcb5798fd5a3225d53b4455/docker-3.5.0-py2.py3-none-any.whl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("125kB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 133kB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".4MB/s\nCollecting docker-pycreds"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),s._v(".0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/ea/bf/7e70aeebc40407fbdb96fa9f79fc8e4722ea889a99378303e3bcc73f4ab5/docker_pycreds-0.3.0-py2.py3-none-any.whl\nCollecting requests"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.18")]),s._v(".0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),s._v(".2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/65/47/7e02164a2a3db50ed6d8a6ab1d6d60b69c4c3fdf57a284257925dfc12bda/requests-2.19.1-py2.py3-none-any.whl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("91kB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 92kB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(".0MB/s\nCollecting websocket-client"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.32")]),s._v(".0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/14/d4/6a8cd4e7f67da465108c7cc0a307a1c5da7e2cdf497330b682069b1d4758/websocket_client-0.53.0-py2.py3-none-any.whl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("198kB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 204kB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".4MB/s\nCollecting six"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.4")]),s._v(".0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/67/4b/141a581104b1f6397bfa78ac9d43d8ad29a7ca43ea90a2d863fe3056e86a/six-1.11.0-py2.py3-none-any.whl\nCollecting urllib"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.24")]),s._v(","),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.21")]),s._v(".1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from requests"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.18")]),s._v(".0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),s._v(".2-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/bd/c9/6fdd990019071a4a32a5e7cb78a1d92c53851ef4f56f62a3486e6a7d8ffb/urllib3-1.23-py2.py3-none-any.whl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("133kB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 143kB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(".9MB/s\nCollecting chardet"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),s._v(".0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(".2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from requests"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.18")]),s._v(".0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),s._v(".2-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/bc/a9/01ffebfb562e4274b6487b4bb1ddec7ca55ec7510b22e4c51f14098443b8/chardet-3.0.4-py2.py3-none-any.whl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("133kB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 143kB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(".9MB/s\nCollecting idna"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.8")]),s._v(","),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from requests"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.18")]),s._v(".0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),s._v(".2-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/4b/2a/0276479a4b3caeb8a8c1af2f8e4355746a97fab05a372e4a2c6a6b876165/idna-2.7-py2.py3-none-any.whl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("58kB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 61kB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(".1MB/s\nCollecting certifi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017.4")]),s._v(".17 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from requests"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.18")]),s._v(".0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.14")]),s._v(".2-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Downloading http://pypi.doubanio.com/packages/df/f7/04fee6ac349e915b82171f8e23cee63644d83663b34c539f7a09aed18f9e/certifi-2018.8.24-py2.py3-none-any.whl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("147kB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 153kB "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(".5MB/s\nInstalling collected packages: six, docker-pycreds, urllib3, chardet, idna, certifi, requests, websocket-client, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\nSuccessfully installed certifi-2018.8.24 chardet-3.0.4 docker-3.5.0 docker-pycreds-0.3.0 idna-2.7 requests-2.19.1 six-1.11.0 urllib3-1.23 websocket-client-0.53.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h2",{attrs:{id:"_3-升级-pip-一直报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-升级-pip-一直报错"}},[s._v("#")]),s._v(" 3，升级 pip 一直报错")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost  ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--upgrade")]),s._v(" pip\nCollecting pip\nException:\nTraceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/basecommand.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("215")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" main\n    status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self.run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options, args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/commands/install.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("307")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" run\n    requirement_set.prepare_files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("finder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/req/req_set.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("370")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" prepare_files\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ignore_dependencies")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self.ignore_dependencies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/req/req_set.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("587")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" _prepare_file\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("session")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self.session, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hashes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hashes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/download.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("810")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" unpack_url\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hashes")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hashes\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/download.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("649")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" unpack_http_url\n    hashes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/download.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("842")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" _download_http_url\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("stream")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("True,\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/_vendor/requests/sessions.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("487")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" get\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" self.request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GET'")]),s._v(", url, **kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/download.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("378")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" request\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" super"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PipSession, self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("method, url, *args, **kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/_vendor/requests/sessions.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("475")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" request\n    resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self.send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("prep, **send_kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/_vendor/requests/sessions.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("585")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" send\n    r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" adapter.send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request, **kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/_vendor/cachecontrol/adapter.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" send\n    resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" super"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CacheControlAdapter, self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request, **kw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python2.7/site-packages/pip/_vendor/requests/adapters.py"')]),s._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("477")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" send\n    raise SSLError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("request")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSSLError: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SSL: CERTIFICATE_VERIFY_FAILED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" certificate verify failed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_ssl.c:618"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nYou are using pip version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.1")]),s._v(".2, however version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.2")]),s._v(".2 is available.\nYou should consider upgrading via the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pip install --upgrade pip'")]),s._v(" command.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("这个时候用如下命令更新：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost  ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--upgrade")]),s._v(" --trusted-host pypi.org --trusted-host files.pythonhosted.org pip\nCollecting pip\n  Downloading https://files.pythonhosted.org/packages/8d/07/f7d7ced2f97ca3098c16565efbe6b15fafcba53e8d9bdb431e09140514b0/pip-19.2.2-py2.py3-none-any.whl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".4MB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("████████████████████████████████"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".4MB 134kB/s\nInstalling collected packages: pip\n  Found existing installation: pip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.1")]),s._v(".2\n    Uninstalling pip-8.1.2:\n      Successfully uninstalled pip-8.1.2\nSuccessfully installed pip-19.2.2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost  ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-V")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.2")]),s._v(".2 from /usr/lib/python2.7/site-packages/pip "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("python "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);