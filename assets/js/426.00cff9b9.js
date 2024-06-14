(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{768:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改配置文件"}},[s._v("#")]),s._v(" 1，修改配置文件")]),s._v(" "),a("p",[s._v("将下载的 kubernetes-server-linux-amd64.tar.gz 解压后，再解压其中的 kubernetes-src.tar.gz 文件。")]),s._v(" "),a("p",[s._v("coredns 对应的目录是：cluster/addons/dns。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pwd")]),s._v("\n/home/k8s/k8s/kubernetes/cluster/addons/dns\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" coredns.yaml.base coredns.yaml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改第61行以及第153行的内容。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$vim")]),s._v(" coredns.yaml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改后内容与原内容对比如下：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$diff")]),s._v(" coredns.yaml.base coredns.yaml\n61c61\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("         kubernetes __PILLAR__DNS__DOMAIN__ in-addr.arpa ip6.arpa "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("         kubernetes cluster.local. in-addr.arpa ip6.arpa "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n153c153\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("   clusterIP: __PILLAR__DNS__SERVER__\n---\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   clusterIP: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"_2-创建-coredns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-coredns"}},[s._v("#")]),s._v(" 2，创建 coredns")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" coredns.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-检查-coredns-功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-检查-coredns-功能"}},[s._v("#")]),s._v(" 3， 检查 coredns 功能")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl get all "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" kube-system\nNAME                                        READY     STATUS    RESTARTS   AGE\npod/coredns-77c989547b-j77lp                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          15h\npod/coredns-77c989547b-t6mxc                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          15h\nNAME                           TYPE        CLUSTER-IP     EXTERNAL-IP   PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         AGE\nservice/coredns                ClusterIP   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.2     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("/UDP,53/TCP   15h\nNAME                                   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/coredns                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("           15h\nNAME                                              DESIRED   CURRENT   READY     AGE\nreplicaset.apps/coredns-77c989547b                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         15h\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("新建一个 Deployment。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" my-nginx.yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: my-nginx\nspec:\n  replicas: 2\n  template:\n    metadata:\n      labels:\n        run: my-nginx\n    spec:\n      containers:\n      - name: my-nginx\n        image: nginx:1.7.9\n        ports:\n        - containerPort: 80\nEOF")]),s._v("\n$ kubectl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" my-nginx.yaml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("Export 该 Deployment, 生成 "),a("code",[s._v("my-nginx")]),s._v(" 服务：")]),s._v(" "),a("p",[s._v("创建另一个 "),a("code",[s._v("Pod")]),s._v("，查看 "),a("code",[s._v("/etc/resolv.conf")]),s._v(" 是否包含 "),a("code",[s._v("kubelet")]),s._v(" 配置的 "),a("code",[s._v("--cluster-dns")]),s._v(" 和 "),a("code",[s._v("--cluster-domain")]),s._v("，是否能够将服务 "),a("code",[s._v("my-nginx")]),s._v(" 解析到上面显示的 Cluster IP "),a("code",[s._v("10.254.22.37")]),s._v("。")]),s._v(" "),a("p",[s._v("验证一下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" pod-nginx.yaml\n$ kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v("  nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" -- /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" nginx "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\nroot@nginx:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/resolv.conf")]),s._v("\nnameserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.2\nsearch default.svc.cluster.local. svc.cluster.local. cluster.local.\noptions ndots:5\nroot@nginx:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping my-nginx")]),s._v("\nPING my-nginx.default.svc.cluster.local "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".22.37"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v(" data bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".22.37: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.118")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".22.37: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.085")]),s._v(" ms\n^C--- my-nginx.default.svc.cluster.local "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" packets transmitted, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" packets received, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% packet loss\nround-trip min/avg/max/stddev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.085")]),s._v("/0.102/0.118/0.000 ms\nroot@nginx:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping kubernetes")]),s._v("\nPING kubernetes.default.svc.cluster.local "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v(" data bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.1: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.111")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.1: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.098")]),s._v(" ms\n^C--- kubernetes.default.svc.cluster.local "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" packets transmitted, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" packets received, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% packet loss\nround-trip min/avg/max/stddev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.098")]),s._v("/0.105/0.111/0.000 ms\nroot@nginx:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping coredns.kube-system.svc.cluster.local")]),s._v("\nPING coredns.kube-system.svc.cluster.local "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v(" data bytes\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.2: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.120")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.2: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.083")]),s._v(" ms\n^C--- coredns.kube-system.svc.cluster.local "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" packets transmitted, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" packets received, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% packet loss\nround-trip min/avg/max/stddev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.083")]),s._v("/0.102/0.120/0.000 ms\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h2",{attrs:{id:"_4-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考"}},[s._v("#")]),s._v(" 4，参考")]),s._v(" "),a("ul",[a("li",[s._v("https://community.infoblox.com/t5/Community-Blog/CoreDNS-for-Kubernetes-Service-Discovery/ba-p/8187")]),s._v(" "),a("li",[s._v("https://coredns.io/2017/03/01/coredns-for-kubernetes-service-discovery-take-2/")]),s._v(" "),a("li",[s._v("https://www.cnblogs.com/boshen-hzb/p/7511432.html https://github.com/kubernetes/kubernetes/tree/master/cluster/addons/dns")])])])}),[],!1,null,null,null);a.default=n.exports}}]);