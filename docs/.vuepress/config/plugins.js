const autometa_options = {
  site: {
    name: 'Eryajf',
  },
  canonical_base: 'https://wiki.eryajf.net',
};

// 插件配置
module.exports = [
  'vuepress-plugin-baidu-autopush', // 百度自动推送
  'cursor-effects',
  // 全文搜索插件
  'fulltext-search',
  [
    // 'vuepress-plugin-rss-support',
    // {
    //   // 网站地址
    //   site_url: 'https://wiki.eryajf.net',
    //   // 版权信息
    //   copyright: '二丫讲梵',
    //   // 目录过滤
    //   filter: (page) => { return /.+/.test(page.path) },
    //   // 显示条数
    //   count: 60,
    'vuepress-plugin-rss',
        {
          base_url: '/', // required
          site_url: 'https://wiki.eryajf.net', // required
          copyright: '二丫讲梵', // optional
          // filter some post
          filter: (frontmatter) => { return [true] },
          // How much articles
          count: 20,
    }
  ],
  // 访问统计插件
  [
    'umami',
     {
       trackerUrl: 'http://f.eryajf.net',
       siteId: '360ec71a-d5d6-45d7-8aed-471ebe51a812'
      }
  ],
  // meta优化 https://github.com/webmasterish/vuepress-plugin-autometa
  ['autometa',autometa_options],
  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  // [
  //   'thirdparty-search',
  //   {
  //     thirdparty: [
  //       // 可选，默认 []
  //       {
  //         title: '在MDN中搜索',
  //         frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
  //         behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
  //       },
  //       {
  //         title: '在Runoob中搜索',
  //         frontUrl: 'https://www.runoob.com/?s=',
  //       },
  //       {
  //         title: '在Vue API中搜索',
  //         frontUrl: 'https://cn.vuejs.org/v2/api/#',
  //       },
  //       {
  //         title: '在Bing中搜索',
  //         frontUrl: 'https://cn.bing.com/search?q=',
  //       },
  //       {
  //         title: '通过百度搜索本站的',
  //         frontUrl: 'https://www.baidu.com/s?wd=site%3Awiki.eryajf.net%20',
  //       },
  //     ],
  //   },
  // ],
  // ['@vuepress/pwa', {
  //   serviceWorker: true,
  //   updatePopup: {
  //     message: "发现新内容可用",
  //     buttonText: "刷新"
  // }
  // }],
  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功 🎉', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: 'f8fd5c4e21ca384b4785396a87bcc468',
    },
  ],
  'vuepress-plugin-mermaidjs',
  [
    'sitemap', {
      hostname: 'https://wiki.eryajf.net',
      exclude: ["/404.html"],
    },
  ],
  'robots', {
    host: "https://wiki.eryajf.net",
    disallowAll: false,
    allowAll: true,      
    sitemap: "/sitemap.xml",
    // policies: [
    //     {
    //         userAgent: '*',
    //         disallow: [
    //             '/admin','/login'
    //         ],
    //         allow: [    // Optional: Allowed paths. 
    //             'products','blog'
    //         ]
    //     }
    // ]
  },
  [
    'vuepress-plugin-comment', // 评论
    {
      choosen: 'gitalk',
      options: {
        clientID: 'fb7da8986eeef58a7bdf',
        clientSecret: '9bf3f6d604fa86275b546c0d04654ec362c2a864',
        repo: 'eryajf.github.io', // GitHub 仓库
        owner: 'eryajf', // GitHub仓库所有者
        admin: ['eryajf'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
