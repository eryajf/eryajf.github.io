(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{657:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("安卓同学也想使用私服管理包，他们通过 gradle 打包，此时通过类似 Java 同学按 maven 的思路一样，通过在 maven 的 setting 文件中指定私服对应的 group 地址，然后定义好包对应的三要素即可上传，然而这个思路，在 gradle 这里似乎并不可行。")]),e._v(" "),s("p",[e._v("如果配置直连 group 的地址上传，会报如下错误：")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("Return code is: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("405")]),e._v(", ReasonPhrase: PUT.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这个时候，网上有不少说是因为地址搞错了什么的，但是我明明直接拷贝的地址呀，其实根本不是这个原因，在 gradle 中并不能通过 group 分发上传的包，而是要将地址指向对应的库才行。")]),e._v(" "),s("p",[e._v("想要上传"),s("code",[e._v("release")]),e._v("包，则上传到本地的 release 包的位置，想要上传"),s("code",[e._v("snapshot")]),e._v("包，就要配置连接快照包的配置。核心配置如图：")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d58716e00f724c54.jpg",alt:"image"}})]),e._v(" "),s("p",[e._v("创建 hosted 类型的仓库是指定不同的类型，上传的时候往不同类型的地址传即可。")]),e._v(" "),s("p",[e._v("如果快照包往 release 类型的仓库传，会报如下错误：")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Could not GET "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://nexus.eryajf.net/repository/wpt-maven-local/com/eryajf/wpt/libs/wpt_util/1.0.0-SNAPSHOT/maven-metadata.xml'")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" Received status code "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("400")]),e._v(" from server: Repository version policy: RELEASE does not allow metadata "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" path: com/eryajf/wpt/libs/wpt_util/1.0.0-SNAPSHOT/maven-metadata.xml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);