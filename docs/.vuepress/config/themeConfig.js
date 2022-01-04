const nav = require('./themeConfig/nav.js');
const htmlModules = require('./htmlModules.js');
// const sidebar = require('./themeConfig/sidebar.js');
const { readFileList, readTotalFileWords, readEachFileWords } = require('../webSiteInfo/readFile.js');

// 主题配置
module.exports = {
  nav, // 顶部导航栏
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png', // 导航栏logo
  repo: 'eryajf/eryajf.github.io', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  editLinks: false, // 关闭编辑按钮,此编辑无实际意义
  // docsDir: 'docs', // 编辑的文件夹
  // editLinkText: '编辑',
  sidebarHoverTriggerOpen: true, // 侧边栏自动隐藏
  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  // bodyBgImg: [
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: true, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  // 博客站点信息（首页）
  blogInfo: {
    blogCreate: '2018-03-23', // 博客创建时间
    mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
    totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
    eachFileWords: readEachFileWords(),  // 开启每个文章页的字数。readEachFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数，无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
    moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
    pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
    readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
    // 下面两个选项：第一次获取访问量失败后的迭代时间
    indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
    pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
    // 说明：获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
  },

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: '二丫讲梵', // 必需
    link: 'https://github.com/eryajf', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: '/img/dengxia.gif',
    name: '二丫讲梵',
    slogan: '行者常至，为者常成',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:Linuxlql@163.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/eryajf',
      },
      {
        iconClass: 'icon-erji',
        title: '听音乐',
        link: 'https://music.163.com/#/user/home?id=316286554',
      },
    ],
  },
  // 此处定义了访问地球功能,注释掉了,使用首页3D的展示方式
  htmlModules,
  footer: {
    // 页脚信息
    createYear: 2017, // 博客创建年份
    copyrightInfo:
      '| <a href="https://www.foreverblog.cn/" class="d-inline-block text-muted" target="_blank" rel="external nofollow"><img src="https://t.eryajf.net/imgs/2022/01/964560013b68c2e4.png" alt="点击查看十年之约" style="width:auto;height:12px;"> | <a rel="nofollow " target="_blank" href="https://beian.miit.gov.cn/">浙ICP备18057030号</a>', // 博客版权信息，支持a标签
  },
}