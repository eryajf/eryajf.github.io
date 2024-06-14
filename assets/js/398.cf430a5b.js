(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{739:function(t,_,a){"use strict";a.r(_);var v=a(0),e=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("我们在网上见过无数的展示 elk 最终 dashboard 的文章，却从来没有见过哪篇文章详细讲解了那些漂亮的 dashboard 是如何绘制出来的，这，叫人恨的牙根生疼，无奈，只好去啃官方文档，官方文档非常好，它详细地介绍了每一个环节的每一个概念，但是唯一的缺憾就是，它给你了一百个点，却没有给一条线，如果你的心态不好，或者理解力差一点，恐怕早就淹没在那 100 个点里边了，事实上，我也曾不止一次淹没在那里边。")]),t._v(" "),_("p",[t._v("这一次，算是苍天眷顾，在公司之前小伙伴做好的一个模板参考中，加之不懈钻研之下，总算将之啃下，晓知了其中精髓的万千之一二，恐怕再忘记，赶紧记录下来。")]),t._v(" "),_("p",[t._v("进入正题之前，可以先看一眼最终的效果图：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ae01.alicdn.com/kf/HTB1K1NEaKL2gK0jSZFm7637iXXaU.png",alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"_1-简单介绍。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单介绍。"}},[t._v("#")]),t._v(" 1，简单介绍。")]),t._v(" "),_("p",[t._v("点击可视化，选中创建一个视图，可以看到支持了很多种类型：")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/b565f075dcac4936.jpg",alt:""}})]),t._v(" "),_("p",[t._v("以下简单列出，对应跳转链接是官方文档：")]),t._v(" "),_("ul",[_("li",[t._v("其他\n"),_("ul",[_("li",[_("a",{attrs:{href:"https://www.elastic.co/guide/cn/kibana/current/markdown-widget.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("Vega")]),t._v(" "),_("li",[t._v("控制图")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.elastic.co/guide/cn/kibana/current/tagcloud-chart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("标签云"),_("OutboundLink")],1)])])]),t._v(" "),_("li",[t._v("地图\n"),_("ul",[_("li",[t._v("区域地图")]),t._v(" "),_("li",[t._v("坐标地图")])])]),t._v(" "),_("li",[t._v("数据\n"),_("ul",[_("li",[t._v("度量")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.elastic.co/guide/cn/kibana/current/data-table.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据表"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("目标图")]),t._v(" "),_("li",[t._v("量表")])])]),t._v(" "),_("li",[t._v("时间序列\n"),_("ul",[_("li",[t._v("可视化构建")]),t._v(" "),_("li",[t._v("时间线")])])]),t._v(" "),_("li",[t._v("基本图表\n"),_("ul",[_("li",[t._v("垂直柱状图")]),t._v(" "),_("li",[t._v("折线图")]),t._v(" "),_("li",[t._v("水平柱状图")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.elastic.co/guide/cn/kibana/current/heatmap-chart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("热点图"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("面积图")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.elastic.co/guide/cn/kibana/current/pie-chart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("饼状图"),_("OutboundLink")],1)])])])]),t._v(" "),_("h3",{attrs:{id:"_2-从标签云开始看。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-从标签云开始看。"}},[t._v("#")]),t._v(" 2，从标签云开始看。")]),t._v(" "),_("p",[t._v("可能你对这些丰富的功能还不熟悉，对上边定义了那么多的字段该如何应用也不清楚，简直有一些无从下手，那么，不要着急，就先从创建一个标签云开始吧，从标签云出发，慢慢熟悉，先了解一下我们所创建的那些字段的意义吧。")]),t._v(" "),_("p",[t._v("事实上我个人在晕晕乎乎去摸索这些视图的时候，也是像无头苍蝇一样，不知哪里是哪里的，但当我在玩味标签云的时候，隐隐约约了解到了一些精髓，于是当即觉得，要入门画图行业，非先从标签云开始不可。")]),t._v(" "),_("p",[t._v("现在，正式进入体验之旅。")]),t._v(" "),_("p",[t._v("创建一个标签云的视图，会进入到索引选择界面：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ae01.alicdn.com/kf/HTB1WFxFaUT1gK0jSZFh761AtVXaW.png",alt:"img"}})]),t._v(" "),_("p",[t._v("选择我们定义了的"),_("code",[t._v("nginx-access-")]),t._v("这个索引，然后进行配置。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/1162de7571b9c4a9.jpg",alt:""}})]),t._v(" "),_("p",[t._v("针对各个参数详细说明一下，这个地方的说明整理自官方文档，可能有点详细，容易看蒙，建议先跳过，等熟悉了之后，可以再回过头来深入理解。")]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("Metrics")])]),t._v(" "),_("p",[t._v("里边包含了不同的类型内容。")]),t._v(" "),_("ul",[_("li",[t._v("Count\n计数 聚合返回所选索引模式中元素的原始计数。")]),t._v(" "),_("li",[t._v("Average\n该聚合返回数字字段的平均值 。从下拉菜单中选择一个字段。")]),t._v(" "),_("li",[t._v("Sum\n总和 聚合返回数字字段的总和。从下拉菜单中选择一个字段。")]),t._v(" "),_("li",[t._v("Min\n最小值 聚合返回数字字段的最小值。从下拉菜单中选择一个字段。")]),t._v(" "),_("li",[t._v("Max\n最大值 聚合返回数字字段的最大值。从下拉菜单中选择一个字段。")]),t._v(" "),_("li",[t._v("Unique Count\n基数 聚合返回字段中唯一值的数量。从下拉菜单中选择一个字段。")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("Parent Pipeline Aggregations")])]),t._v(" "),_("p",[t._v("（父级管道聚合）：就像使用父级管道聚合一样，您需要提供一个用于计算同级聚合的指标。除此之外，还需要提供一个桶聚合，它将定义同级聚合将在其中运行的桶。")]),t._v(" "),_("ul",[_("li",[t._v("Average Bucket\n桶平均值 计算同级聚合中指定指标的（中数）平均值")]),t._v(" "),_("li",[t._v("Sum Bucket\n桶总和 计算同级聚合中指定指标值的总和")]),t._v(" "),_("li",[t._v("Min Bucket\n桶最小值 计算同级聚合中指定指标的最小值")]),t._v(" "),_("li",[t._v("Max Bucket\n桶最大值 计算同级聚合中指定指标的最大值")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("Sibling Pipeline Aggregations")])]),t._v(" "),_("p",[t._v("（兄弟管道聚合）：对于每个父管道聚合，您必须定义用于计算聚合的指标。这可能是您现有的指标之一或新的指标。")]),t._v(" "),_("ul",[_("li",[t._v("Cumulative Sum\n累计总和 聚合计算父直方图中指定指标的累计总和。")]),t._v(" "),_("li",[t._v("Moving Average\n移动平均值 聚合将动态移动数据窗口，生成该窗口数据的平均值。")]),t._v(" "),_("li",[t._v("Serial Diff\n串行差分 是一种时间序列中的值在不同时间滞后或周期内从自身减去的技术。")])])])]),t._v(" "),_("p",[t._v("这个地方，我们就使用"),_("code",[t._v("Count")]),t._v("，下边的聚合当中，我们可以选择不同的字段，然后来通过右侧的显示效果，来理解字段所代表的意义。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/889f54bdd8be446e.jpg",alt:""}})]),t._v(" "),_("p",[t._v("因为是第一张图，所以详细说明下：")]),t._v(" "),_("ul",[_("li",[t._v("1，上边已经说明的够详细了，选择 count。")]),t._v(" "),_("li",[t._v("2，唯一的选项，tags。")]),t._v(" "),_("li",[t._v("3，选择我们自己定义的 terms。")]),t._v(" "),_("li",[t._v("4，随便选择其中的某一个字段，这里选择了 agent.keyword。")]),t._v(" "),_("li",[t._v("5，点击播放，可以在右侧看到配置效果。")]),t._v(" "),_("li",[t._v("6，通过所显示的字段，大概可以明白，刚刚的"),_("code",[t._v("agent.keyword")]),t._v("所代表的意义是客户端类型。")]),t._v(" "),_("li",[t._v("7，最下边是一些说明信息，可以在左侧的"),_("code",[t._v("Custom Label")]),t._v("当中填写以帮助理解。")])]),t._v(" "),_("p",[t._v("接下来就再更换一下 terms 类型，然后了解不同的字段意义。这就是我所说的，从标签云开始，来理解每个字段的意义。")]),t._v(" "),_("p",[_("code",[t._v("geoip.city_name.keyword：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/fad9a42ed96e6ce8.jpg",alt:""}})]),t._v(" "),_("p",[_("code",[t._v("xff.keyword：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/e325a54de5131cf5.jpg",alt:""}})]),t._v(" "),_("p",[t._v("还可以点点其他的，来画一些图，现在就把刚刚的访问地域那个保存下来，保存方法是：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ae01.alicdn.com/kf/HTB1UP0DaKT2gK0jSZFv760nFXXat.png",alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"_3-客户端-ip-请求-top。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-客户端-ip-请求-top。"}},[t._v("#")]),t._v(" 3，客户端 ip 请求 top。")]),t._v(" "),_("p",[t._v("创建一个"),_("code",[t._v("数据表")]),t._v("的视图–>度量依旧选择 count–>Custom Label 写入访问次数–>添加 Split Rows–>聚合依旧选择 terms–>字段选择 xff.keyword（你的可能要选择 clientip）–>下边 Size 填入 10–>Custom Label 写入访问 IP。")]),t._v(" "),_("p",[t._v("然后点击播放，如此，一个前十请求的 IP 以及次数就都列出来了。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/89dece05f8f25bcc.jpg",alt:""}})]),t._v(" "),_("p",[t._v("然后保存一下。")]),t._v(" "),_("h3",{attrs:{id:"_4-客户端类型-top。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-客户端类型-top。"}},[t._v("#")]),t._v(" 4，客户端类型 top。")]),t._v(" "),_("p",[t._v("创建一个"),_("code",[t._v("饼状图")]),t._v("的视图–>度量依旧选择 count–>Custom Label 写入访问次数–>添加 Split Slices–>聚合依旧选择 terms–>字段选择 agent.keyword–>下边 Size 填入 10–>Custom Label 写入客户端。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ae01.alicdn.com/kf/HTB1gtNFaUT1gK0jSZFh761AtVXa3.png",alt:"img"}})]),t._v(" "),_("p",[t._v("然后保存一下。")]),t._v(" "),_("h3",{attrs:{id:"_5-客户端-ip-切片。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-客户端-ip-切片。"}},[t._v("#")]),t._v(" 5，客户端 IP 切片。")]),t._v(" "),_("p",[t._v("创建一个"),_("code",[t._v("饼状图")]),t._v("的视图–>度量依旧选择 count–>Custom Label 写入访问次数–>添加 Split Slices–>聚合依旧选择 terms–>字段选择 xff.keyword（你的可能要选择 clientip）–>下边 Size 填入 10–>Custom Label 写入客户端。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ae01.alicdn.com/kf/HTB1pDpEaKP2gK0jSZFo761uIVXaS.png",alt:"img"}})]),t._v(" "),_("p",[t._v("这里看到其中一个"),_("code",[t._v("-")]),t._v("占了很大一部分，其实这个是自身的一些请求，不过可以通过配置将这部分过滤掉，方法是点击绿色部分–>然后在左侧标签栏排除即可，这一点是刚刚在配置过程中发现的，那么上边的几个视图也可以对不需要查看的部分进行过滤的配置。")]),t._v(" "),_("p",[t._v("如下是排除之后的效果：")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/fdf18b1a5f526bb9.jpg",alt:""}})]),t._v(" "),_("p",[t._v("这个地方还可以在左侧标签栏中的选线处，进行更细致的配置，选中显示标签，然后保存这个视图。")]),t._v(" "),_("h3",{attrs:{id:"_6-日志条数统计。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-日志条数统计。"}},[t._v("#")]),t._v(" 6，日志条数统计。")]),t._v(" "),_("p",[t._v("创建一个"),_("code",[t._v("度量")]),t._v("的视图–>度量依旧选择 count–>Custom Label 写入日志条数–>添加 Split Group–>聚合依旧选择 Date Range–>字段选择@timestamp–>其余默认即可。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ae01.alicdn.com/kf/HTB183XFaQY2gK0jSZFg7635OFXa9.png",alt:"img"}})]),t._v(" "),_("p",[t._v("注意，这个日志的条数显示依据，是根据上边时间戳显示的，所以目前这个数字是最近 15 分钟的日志条数，可以调整其他时间戳，然后看日志的条数。")]),t._v(" "),_("h3",{attrs:{id:"_7-网络流量监控。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-网络流量监控。"}},[t._v("#")]),t._v(" 7，网络流量监控。")]),t._v(" "),_("p",[t._v("创建一个"),_("code",[t._v("面积图")]),t._v("的视图–>度量选择 Sum–>字段选择 Size–>添加 X-Axis–>聚合选择 Date Histogram–>字段选择@timestamp–>Interval 选择 second。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ae01.alicdn.com/kf/HTB1LeRGaKL2gK0jSZFm7637iXXaR.png",alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"_8-异常状态码统计。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-异常状态码统计。"}},[t._v("#")]),t._v(" 8，异常状态码统计。")]),t._v(" "),_("p",[t._v("创建一个"),_("code",[t._v("饼状图")]),t._v("的视图–>度量依旧选择 count–>Custom Label 写入访问次数–>添加 Split Slices–>聚合依旧选择 terms–>字段选择 status.keyword（你的可能要选择 clientip）–>下边 Size 填入 10–>Custom Label 写入异常状态码–>右边选项当中选中显示标签。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://t.eryajf.net/imgs/2023/03/3914aafd26e3554a.jpg",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_9-将所有视图聚合。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-将所有视图聚合。"}},[t._v("#")]),t._v(" 9，将所有视图聚合。")]),t._v(" "),_("p",[t._v("接下来就可以进入到仪表盘界面，进行自由自在的绘图阶段了，上边的视图只是举了一些例子，还可以根据很多实际情况，绘制出许多的图，这里就不一一列举了。")]),t._v(" "),_("p",[t._v("最后展示一下刚刚制作的几个视图聚合在一起的样子吧：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://ae01.alicdn.com/kf/HTB1K1NEaKL2gK0jSZFm7637iXXaU.png",alt:"img"}})])])}),[],!1,null,null,null);_.default=e.exports}}]);