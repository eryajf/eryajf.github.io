(window.webpackJsonp=window.webpackJsonp||[]).push([[441],{784:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("自 OpenAI 公司于 2022 年 11 月 30 日发布 ChatGPT 以来，经过 23 年一整年的发展之后，大语言模型的概念已逐渐普及，各种基于大语言模型的周边产品，以及集成层出不穷，可以说已经玩出花来了。")]),a._v(" "),t("p",[a._v("在这个过程中，也有不少本地化的模型应用方案冒了出来，针对一些企业知识库问答的场景中，模型本地化是第一优先考虑的问题，因此如何在本地把模型调教的更加智能，就是一个非常重要的技能了。")]),a._v(" "),t("p",[a._v("在 23 年的时候，我也接触过一些本地模型的开源项目(比如 "),t("a",{attrs:{href:"https://github.com/mudler/LocalAI",target:"_blank",rel:"noopener noreferrer"}},[a._v("LocalAI"),t("OutboundLink")],1),a._v(")，当时在本地部署跑起来之后，发现交互的体验，回答的速度，以及智能程度，都远低于预期。")]),a._v(" "),t("p",[a._v("最近又一次了解本地模型的玩法，从微信群里了解到了 "),t("a",{attrs:{href:"https://github.com/ollama/ollama",target:"_blank",rel:"noopener noreferrer"}},[a._v("ollama"),t("OutboundLink")],1),a._v("，经过几天业余时间的研究及了解，发现现在模型本地化的玩法，以及能力都早已不可同日而语，本文，将记录我这几天来对于 ollama 的粗浅认识以及快速入门玩起来。")]),a._v(" "),t("div",{staticClass:"center-container"},[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1710053311663.png",width:"700",height:"400"}})]),t("h2",{attrs:{id:"什么是-ollama"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ollama"}},[a._v("#")]),a._v(" 什么是 ollama")]),a._v(" "),t("p",[a._v("先来记录一些 ollama 相关的快链：")]),a._v(" "),t("ul",[t("li",[a._v("项目地址："),t("a",{attrs:{href:"https://github.com/ollama/ollama",target:"_blank",rel:"noopener noreferrer"}},[a._v("ollama"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("官网地址： "),t("a",{attrs:{href:"https://ollama.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://ollama.com/"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("模型仓库： "),t("a",{attrs:{href:"https://ollama.com/library",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://ollama.com/library"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("此文撰写时项目最新版本："),t("a",{attrs:{href:"https://github.com/ollama/ollama/releases/tag/v0.1.28",target:"_blank",rel:"noopener noreferrer"}},[a._v("v0.1.28"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("官方 logo 是一只可爱的羊驼")])]),a._v(" "),t("div",{staticClass:"center-container"},[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709994685044.png",width:"200",height:"205"}})]),t("p",[a._v("一句话来说， "),t("code",[a._v("Ollama")]),a._v(" 是一个基于 Go 语言开发的简单易用的本地大语言模型运行框架。可以将其类比为 docker（同基于 "),t("a",{attrs:{href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[a._v("cobra"),t("OutboundLink")],1),a._v(" 包实现命令行交互中的 list,pull,push,run 等命令），事实上它也的确制定了类 docker 的一种模型应用标准，在后边的内容中，你能更加真切体会到这一点。")]),a._v(" "),t("p",[a._v("在管理模型的同时，它还基于 Go 语言中的 Web 框架 "),t("a",{attrs:{href:"https://github.com/gin-gonic/gin",target:"_blank",rel:"noopener noreferrer"}},[a._v("gin"),t("OutboundLink")],1),a._v(" 提供了一些 Api 接口，让你能够像跟 OpenAI 提供的接口那样进行交互。")]),a._v(" "),t("p",[a._v("虽然一开始官方开发的接口没有兼容 OpenAI 的接口交互标准，后来也有社区开发者提交此类兼容的 pr，比较优秀的 pr 可见："),t("a",{attrs:{href:"https://github.com/ollama/ollama/pull/1331",target:"_blank",rel:"noopener noreferrer"}},[a._v("1331"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709995151241.png",alt:""}})]),a._v(" "),t("p",[a._v("在 issue 最后是该项目的发起者给到的回复，在社区 pr 没有被合并的情况下，其所表现出的礼貌与风度，令人钦佩，那么这个项目将会是什么样，也大概可据此管窥。")]),a._v(" "),t("p",[a._v("项目官方在 "),t("a",{attrs:{href:"https://github.com/ollama/ollama/pull/2376",target:"_blank",rel:"noopener noreferrer"}},[a._v("2376"),t("OutboundLink")],1),a._v(" 这次 pr 中集成了 OpenAI 接口的兼容，此次 pr 被合并在 "),t("a",{attrs:{href:"https://github.com/ollama/ollama/releases/tag/v0.1.24",target:"_blank",rel:"noopener noreferrer"}},[a._v("v0.1.24"),t("OutboundLink")],1),a._v(" 中，因此，只要是在这之后的版本，你可以利用此前与 OpenAI 的集成任何包来与 Ollama 进行交互。")]),a._v(" "),t("p",[a._v("官方还为此专门发布了一篇官方博客： "),t("a",{attrs:{href:"https://ollama.com/blog/openai-compatibility",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://ollama.com/blog/openai-compatibility"),t("OutboundLink")],1),a._v("，并配了如下一个可爱的图。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709995014383.png",alt:""}})]),a._v(" "),t("p",[a._v("同时：官方还提供了类似 GitHub，DockerHub 一般的，可类比理解为 ModelHub，用于存放大语言模型的仓库(有 llama 2，mistral，qwen 等模型，同时你也可以自定义模型上传到仓库里来给别人使用)。目前我体验下来，通过官方地址拉取模型的速度都基本上可以跑满带宽，应该是官方目前比较大的一笔支出。")]),a._v(" "),t("p",[a._v("我想，以上应该就是 Ollama 这个项目几个比较核心的概念了。一些地方你看了介绍之后还不熟悉，没关系，接下来的内容会帮你认识并映照上边提到的这些内容。")]),a._v(" "),t("h2",{attrs:{id:"ollama-怎么玩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ollama-怎么玩"}},[a._v("#")]),a._v(" Ollama 怎么玩")]),a._v(" "),t("h3",{attrs:{id:"mac-安装-ollama"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-安装-ollama"}},[a._v("#")]),a._v(" Mac 安装 ollama")]),a._v(" "),t("p",[a._v("要想玩起来，首先要把它安装起来，Ollama 支持多平台部署，你可以在官网，选择适合的平台，下载对应的安装包。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709993696192.png",alt:""}})]),a._v(" "),t("p",[a._v("当然也可以选择在项目的 GitHub 的 "),t("a",{attrs:{href:"https://github.com/ollama/ollama/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Releases"),t("OutboundLink")],1),a._v(" 页面进行下载。")]),a._v(" "),t("p",[a._v("同时，该项目还支持 docker 一键部署，可以说在部署方面，只需要有比较简单的运维基础就可以在你当下的平台中部署起来。")]),a._v(" "),t("p",[a._v("我这里个人使用的是 Mac M2(32G 内存版)，直接下载安装包，安装即可，安装之后，运行软件。")]),a._v(" "),t("p",[a._v("运行之后，项目默认监听 "),t("code",[a._v("11434")]),a._v(" 端口，在终端执行如下命令可验证是否正常运行：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" localhost:11434\nOllama is running\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("此时只是相当于把一个架子，一个舞台搭好了，想要在本地玩转模型，还需要接下来的主角，模型登场。")]),a._v(" "),t("h3",{attrs:{id:"模型管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型管理"}},[a._v("#")]),a._v(" 模型管理")]),a._v(" "),t("p",[a._v("ollama 安装之后，其同时还是一个命令，与模型交互就是通过命令来进行的。")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("ollama list")]),a._v("：显示模型列表。")]),a._v(" "),t("li",[t("code",[a._v("ollama show")]),a._v("：显示模型的信息")]),a._v(" "),t("li",[t("code",[a._v("ollama pull")]),a._v("：拉取模型")]),a._v(" "),t("li",[t("code",[a._v("ollama push")]),a._v("：推送模型")]),a._v(" "),t("li",[t("code",[a._v("ollama cp")]),a._v("：拷贝一个模型")]),a._v(" "),t("li",[t("code",[a._v("ollama rm")]),a._v("：删除一个模型")]),a._v(" "),t("li",[t("code",[a._v("ollama run")]),a._v("：运行一个模型")])]),a._v(" "),t("p",[a._v("前边提到过，官方提供了一个模型仓库，"),t("a",{attrs:{href:"https://ollama.com/library",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://ollama.com/library"),t("OutboundLink")],1),a._v("，在这里你可以找到你想要运行的模型。")]),a._v(" "),t("blockquote",[t("p",[a._v("官方建议：应该至少有 8 GB 可用 RAM 来运行 7 B 型号，16 GB 来运行 13 B 型号，32 GB 来运行 33 B 型号。")])]),a._v(" "),t("p",[a._v("在这里我选择下载阿里开源的 "),t("a",{attrs:{href:"https://github.com/QwenLM/Qwen1.5",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qwen1.5"),t("OutboundLink")],1),a._v(" 模型来做演示。模型地址为："),t("a",{attrs:{href:"https://ollama.com/library/qwen:latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("qwen"),t("OutboundLink")],1),a._v("，因我的电脑有 32G，所以选择了 14b 的模型来调试。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ ollama run qwen:14b\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果本地没有该模型，则会先下载模型再运行。首次运行启动可能略慢，考验电脑性能的时刻到了。")]),a._v(" "),t("p",[a._v("自己调试制定模型，官方也提供了一种类似 Dockerfile 的 Modelfile，这里用一个简单的例子来讲解一下用法。")]),a._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" qwen:14b")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# set the temperature to 1 [higher is more creative, lower is more coherent]")]),a._v("\nPARAMETER temperature 1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# set the system message")]),a._v('\nSYSTEM """\n请你每句话都以“真是我的小可爱，”开头\n"""\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("p",[a._v("然后执行如下命令制作模型并运行：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ ollama create qwen:eryajf "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" Modelfile\n$ ollama run qwen:eryajf\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709993722094.png",alt:""}})]),a._v(" "),t("p",[a._v("更多模型调试的参数及用法请看官方文档： "),t("a",{attrs:{href:"https://github.com/ollama/ollama/blob/main/docs/modelfile.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/ollama/ollama/blob/main/docs/modelfile.md"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"简单交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单交互"}},[a._v("#")]),a._v(" 简单交互")]),a._v(" "),t("p",[a._v("模型运行之后，会默认进入到交互状态，你可以按下 "),t("code",[a._v("Ctrl + D")]),a._v(" 退出交互，但此时模型并不会退出，仍旧可以正常通过 Api 接口交互。")]),a._v(" "),t("p",[a._v("终端交互示例：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709993738719.png",alt:""}})]),a._v(" "),t("p",[a._v("接口请求参考官方文档的介绍 "),t("a",{attrs:{href:"https://github.com/ollama/ollama/blob/main/docs/api.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("api"),t("OutboundLink")],1),a._v("，下边是简单的示例：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709993753277.png",alt:""}})]),a._v(" "),t("p",[a._v("接口请求支持 stream 模式，上边这个请求响应 10s 左右，如果使用 stream 模式，体验会提升不少。")]),a._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[a._v("申明")]),a._v(" "),t("p",[t("strong",[a._v("原创文章"),t("Badge",{attrs:{text:"eryajf"}}),a._v("，未经授权，严禁转载，侵权必究！此乃文中随机水印，敬请读者谅解。")],1)]),a._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[a._v("Copyright "),t("a",{attrs:{href:"https://wiki.eryajf.net",target:"_blank",rel:"noopener noreferrer"}},[a._v("二丫讲梵"),t("OutboundLink")],1),a._v(" 版权所有")])])]),a._v(" "),t("h3",{attrs:{id:"三个-web-客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三个-web-客户端"}},[a._v("#")]),a._v(" 三个 web 客户端")]),a._v(" "),t("p",[a._v("围绕 ollama 生态，也有一大批优秀的开源项目，这里介绍两个在本地可直接与模型进行交互的项目。")]),a._v(" "),t("p",[t("strong",[a._v("项目一")]),a._v("："),t("a",{attrs:{href:"https://github.com/lobehub/lobe-chat",target:"_blank",rel:"noopener noreferrer"}},[a._v("lobe-chat"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("这是一个集成多种模型能力的对话 web 项目，部署简单，设计优雅。")]),a._v(" "),t("p",[a._v("官方提供了 docker 部署方案，可直接部署：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-itd")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("lobechat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3210")]),a._v(":3210 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("OLLAMA_PROXY_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://host.docker.internal:11434/v1 docker.mirrors.sjtug.sjtu.edu.cn/lobehub/lobe-chat\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果你像我一样，ollama 部署在本地，那么可以直接使用 "),t("code",[a._v("http://host.docker.internal:11434/v1")]),a._v(" 来作为接口地址。")]),a._v(" "),t("p",[a._v("启动之后，就可以在 web 界面进行交互了。效果如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1710043063595.png",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("项目二")]),a._v("："),t("a",{attrs:{href:"https://github.com/ollama-webui/ollama-webui-lite",target:"_blank",rel:"noopener noreferrer"}},[a._v("ollama-webui-lite"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("项目自述中，他说是 open-webui 的简化版，而复杂版也许的确复杂，我始终没能够部署起来，因此推荐使用这个简化的。")]),a._v(" "),t("p",[a._v("注意需要 "),t("code",[a._v("node >= 16")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/ollama-webui/ollama-webui-lite.git\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ollama-webui-lite\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" dev\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("运行之后，你可以点击设置，对连接信息进行设置,默认是连接本机的 "),t("code",[a._v("http://localhost:11434/api")]),a._v("，如果你跟我一样在本机部署，那就不用更改。然后就是选择已经 run 过了的模型，接着就可以进行对话了。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709993767362.png",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("项目三")]),a._v("："),t("a",{attrs:{href:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",target:"_blank",rel:"noopener noreferrer"}},[a._v("ChatGPT-Next-Web"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("这个项目支持桌面端，可直接下载 Mac 版本，然后在本地进行交互。")]),a._v(" "),t("p",[a._v("下载安装之后，点击设置，进行如下几项设置，此处正说明当下 ollama 已兼容 OpenAI 的接口标准。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709993780857.png",alt:""}})]),a._v(" "),t("p",[a._v("保存之后，交互请求的时候发现有报错，这个是因为默认启动之后，有一些请求跨域的问题。")]),a._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"error"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Load failed"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("详见此问题相关的 issue："),t("a",{attrs:{href:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/4119#issuecomment-1978819136",target:"_blank",rel:"noopener noreferrer"}},[a._v("4119"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("把 ollama 退出，然后重新使用如下命令运行：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("OLLAMA_ORIGINS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("OLLAMA_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("ollama serve\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后运行模型：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ ollama run qwen:14b\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("之后再次交互，发现就能正常进行了：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709993795558.png",alt:""}})]),a._v(" "),t("p",[a._v("以上，粗浅地介绍了 ollama 的入门玩法，希望通过如上内容，你可以快速了解这个优秀的项目，从而开启属于你的大语言模型折腾之路。")]),a._v(" "),t("h2",{attrs:{id:"补充-linux-部署方式两种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充-linux-部署方式两种"}},[a._v("#")]),a._v(" 补充：Linux 部署方式两种")]),a._v(" "),t("h3",{attrs:{id:"通过-systemd-方式部署。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-systemd-方式部署。"}},[a._v("#")]),a._v(" 通过 systemd 方式部署。")]),a._v(" "),t("p",[a._v("事实上基于 systemd 的部署官方文档介绍的也非常仔细，这里就快速记录一下，主要有一些注意点，踩过一些坑，在这里一并记录一下。")]),a._v(" "),t("p",[a._v("安装步骤参考： "),t("a",{attrs:{href:"https://github.com/ollama/ollama/blob/main/docs/linux.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/ollama/ollama/blob/main/docs/linux.md"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("这里着重介绍一下，配置 system 启动配置的时候，应该注意的一些点：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/systemd/system/ollama.service\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Ollama Service\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("network-online.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OLLAMA_HOST=0.0.0.0"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OLLAMA_ORIGINS=*"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Environment")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OLLAMA_MODELS=/data/ollama/.ollama/models"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/bin/ollama serve\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("User")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Group")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RestartSec")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("default.target\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br")])]),t("p",[a._v("我这里把用户改成了 root，以免出现权限问题。")]),a._v(" "),t("p",[a._v("另外增加了三个环境变量的声明：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("OLLAMA_HOST")]),a._v("：指定监听地址，默认为 "),t("code",[a._v("127.0.0.1")]),a._v("。")]),a._v(" "),t("li",[t("code",[a._v("OLLAMA_ORIGINS")]),a._v("：指定允许跨域请求的源，这里因为都在内网，因此设置为 "),t("code",[a._v("*")]),a._v("。")]),a._v(" "),t("li",[t("code",[a._v("OLLAMA_MODELS")]),a._v("：声明模型存放的路径，默认模型存放于 "),t("code",[a._v("~/.ollama/models")]),a._v("，一般用户家目录的磁盘分区不会很大，而模型文件通常都比较大，因此不适合放在用户家目录中。")])]),a._v(" "),t("h3",{attrs:{id:"通过-docker-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-docker-部署"}},[a._v("#")]),a._v(" 通过 docker 部署")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/03/1709994840029.svg",alt:""}})]),a._v(" "),t("p",[a._v("官方介绍了 docker 的运行方式，我这里做了一些调整，可直接通过 docker-compose 拉起：")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"3"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ollama")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ollama\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ollama/ollama"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"11434:11434"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" /data/ollama"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/root/.ollama\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("OLLAMA_ORIGINS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"*"')]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("OLLAMA_HOST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.0.0"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("p",[a._v("docker 拉起之后，你可以 exec 到容器里边，然后执行与模型的交互。")]),a._v(" "),t("h2",{attrs:{id:"最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[a._v("#")]),a._v(" 最后")]),a._v(" "),t("p",[a._v("以上是我个人最近几天在 ollama 领域的一些心得体会，分享给大家。")]),a._v(" "),t("p",[a._v("️ 接下来还有很多值得琢磨的方向可以走，这里也先简单记录一下自己所了解知道的，以备后续继续研究发力。")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://waytoagi.feishu.cn/wiki/QPe5w5g7UisbEkkow8XcDmOpn8e",target:"_blank",rel:"noopener noreferrer"}},[a._v("通往 AGI 之路"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/sugarforever/chat-ollama",target:"_blank",rel:"noopener noreferrer"}},[a._v("chat-ollama"),t("OutboundLink")],1),a._v("：一个本地知识库结合 ollama 的问答对话探索项目。")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/n4ze3m/page-assist",target:"_blank",rel:"noopener noreferrer"}},[a._v("page-assist"),t("OutboundLink")],1),a._v(": 后来又了解了一下，发现也有浏览器插件集成了 Ollama，还挺不错，有这方面需求的朋友可以了解一下。")])]),a._v(" "),t("p",[a._v("最后，愿你在本地大语言模型中摸索出自己的一片天地。如果你在部署配置过程中遇到问题，或者有新的好玩的思路，欢迎在评论区一块儿交流。")])])}),[],!1,null,null,null);t.default=r.exports}}]);