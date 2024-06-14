(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{950:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("zsh 中有专门的插件来解决 docker 命令补全的问题，安装配置也比较简单，以下是操作的步骤。")]),s._v(" "),a("p",[s._v("安装方式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" ~/.zsh/completion\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://raw.githubusercontent.com/docker/compose/1.27.4/contrib/completion/zsh/_docker-compose "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.zsh/completion/_docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/04/cee03a95313195d3.jpg",alt:""}})]),s._v(" "),a("p",[s._v("打开 "),a("code",[s._v("~/.zshrc")]),s._v(" 文件，将下面内容粘贴进去：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("~/.zsh/completion "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nautoload "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Uz")]),s._v(" compinit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" compinit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后再插件区域添加两个内容：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v("\n\tz\n\twd\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("\n\tsublime\n\tgit-open\n\tcolored-man-pages\n\tzsh-autosuggestions\n  \tzsh-syntax-highlighting\n\tfast-syntax-highlighting\n\tweb-search\n\textract\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("接着加载 zshrc 配置文件，然后再次运行 docker 命令，就能看到已经可以使用自动补全功能了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);