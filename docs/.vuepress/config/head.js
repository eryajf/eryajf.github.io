// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '二丫讲梵,Linux,运维,yum,运维艺术,eryajf,jenkins,nexus,golang,vue',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  [
    'script',
    {
      'data-ad-client': 'ca-pub-7828333725993554',
      async: 'async',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    },
  ], // 网站关联Google AdSense 与 html格式广告支持
  [ //百度统计
    "script",
    {},
    `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?f8fd5c4e21ca384b4785396a87bcc468";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
      `
  ]
]

head: [
  // 添加百度统计
  [
    "script",
    {},
    `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?44212d6ce872df50b804d94b24889284";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
      `
  ]
]