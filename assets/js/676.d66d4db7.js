(window.webpackJsonp=window.webpackJsonp||[]).push([[676],{1018:function(a,t,i){"use strict";i.r(t);var n=i(0),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-项目文件是同级目录。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目文件是同级目录。"}},[a._v("#")]),a._v(" 1，项目文件是同级目录。")]),a._v(" "),t("p",[a._v("1，分文件编程（多个源文件），必须放在 src 目录下。\n2，设置 GOPATH 环境变量。\n3，同一个目录，包名必须一样，\n4，go env 查看相关的环境路径。\n5，同一个目录，调用别的文件的函数，直接调用即可，无需加包名前缀。")]),a._v(" "),t("h2",{attrs:{id:"_2-项目文件不是同级目录。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目文件不是同级目录。"}},[a._v("#")]),a._v(" 2，项目文件不是同级目录。")]),a._v(" "),t("p",[a._v("1，不同目录，包名不一样。\n2，调用不同包里面的函数格式： 包名.函数名()\n3，调用别的包的函数，这个包函数名字如果首字母是小写，别人无法调用，如果首字母是大写，则别人可以调用。")]),a._v(" "),t("h2",{attrs:{id:"main-函数和-init-函数。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-函数和-init-函数。"}},[a._v("#")]),a._v(" main 函数和 init 函数。")]),a._v(" "),t("p",[a._v("Go 里面有两个保留的函数：init 函数（能够应用于所有的 package），和 main 函数（只能应用于 package main）。这两个函数在定义时不能有任何的参数和返回值，虽然一个 package 里面可以写任意多个 init 函数，但这无论是对于可读性还是以后的可维护性来说，我们都强烈建议用户在一个 package 中每个文件只写一个 init 函数。")]),a._v(" "),t("p",[a._v("Go 程序会自动调用 init()和 main()，所以不需要再任何地方调用这两个函数。每个 package 中的 init 函数都是可选的，但 package main 就必须包含一个 main 函数。")]),a._v(" "),t("p",[a._v("如果 package main 函数当中调用了其他包，而其他包当中有 init 函数的话，那么会先执行那个 init 函数。")]),a._v(" "),t("p",[a._v("流程如下图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6c8450ac29597d3d.jpg",alt:"m_7fe9556bebd1e624a4333384cca4daf0_r"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);