const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');


module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "二丫讲梵",
  description: '💻学习📝记录🔗分享\n学无止境是永远前进的基础，跃然纸上是对知识的总结交代，与众分享则是实现价值的最好方式。',
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]
  },

  head,
  plugins,
  themeConfig,

  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: '-[Comment]-<%- frontmatter.title %>',
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "fb7da8986eeef58a7bdf",
        clientSecret: "9bf3f6d604fa86275b546c0d04654ec362c2a864",
        owner: "eryajf",
        repo: "eryajf.github.io",
      },
    ],
  ],
}
