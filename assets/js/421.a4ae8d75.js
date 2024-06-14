(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{761:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("kubernetes work 节点运行如下组件：")]),s._v(" "),n("ul",[n("li",[s._v("docker")]),s._v(" "),n("li",[s._v("kubelet")]),s._v(" "),n("li",[s._v("kube-proxy")])]),s._v(" "),n("p",[s._v("安装和配置 flanneld，参考前边的配置。")]),s._v(" "),n("h2",{attrs:{id:"_1-安装依赖包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装依赖包"}},[s._v("#")]),s._v(" 1，安装依赖包")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}"\n    ssh root@${node_ip} "yum install -y epel-release"\n    ssh root@${node_ip} "yum install -y conntrack ipvsadm ipset jq iptables curl sysstat libseccomp && /usr/sbin/modprobe ip_vs "\ndone\nEOF')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);