// nav
module.exports = [
  { text: '首页', link: '/' },
  { text: '运维',link: '/ops/',
    items: [
      { text: '最佳实践', link: '/best-practices/'},
      { text: '迎刃而解', link: '/solve-it/'},
      { text: 'Nginx', link: '/nginx/'},
      { text: 'Php', link: '/php/'},
      { text: 'Zabbix', link: '/zabbix/'},
      { text: 'Prometheus', link: '/prometheus/'},
      { text: 'Grafana', link: '/grafana/'},
      { text: 'CentOS', link: '/centos/'},
      { text: 'Systemd', link: '/systemd/'},
      { text: 'Docker', link: '/docker/'},
      { text: 'Rancker', link: '/rancher/'},
      { text: 'Ansible', link: '/ansible/'},
      { text: 'Ldap', link: '/OpenLdap/'},
      { text: 'Gitlab', link: '/gitlab/'},
      { text: 'GitHub', link: '/github/'},
      { text: 'Etcd', link: '/etcd/'},
      { text: 'Consul', link: '/consul/'},
      { text: 'RabbitMQ', link: '/RabbitMQ/'},
      { text: 'Kafka', link: '/kafka/'},
      { text: 'MySql', link: '/mysql/'},
      { text: 'MongoDB', link: '/MongoDB/'},
      { text: 'OpenVPN', link: '/OpenVPN/'},
      { text: 'KVM', link: '/kvm/'},
      { text: 'VMware', link: '/VMware/'},
      { text: 'Other', link: '/other/'},
    ]
  },
  { text: '专题',link: '/topic/',
    items: [
      { text: 'ELK', link: '/elk/'},
      { text: 'K8S', link: '/k8s/'},
      { text: 'Nexus', link: '/nexus/'},
      { text: 'Jenkins', link: '/jenkins/'},
    ]
  },
  { text: '生活',link: '/life/',
    items: [
      { text: '随写编年', link: '/sxbn/'},
      { text: '家人物语', link: '/jrwy/'},
      { text: '追忆青春', link: '/zyqc/'},
      { text: '父亲的朋友圈', link: '/fqdpyq/'},
      { text: '电影音乐', link: '/dyyy/'},
      { text: '效率工具', link: '/xlgj/'},
      { text: '博客相关', link: '/bkxg/'},
    ]
  },
  { text: '编程',link: '/code/',
    items: [
      { text: 'Shell', link: '/shell/'},
      { text: '前端实践', link: '/front-code/'},
      { text: 'Vue学习笔记', link: '/vue-learn/'},
      { text: 'Golang学习笔记', link: '/go-learn/'},
      { text: 'Golang编程技巧', link: '/go-code/'},
    ]
  },
  { text: '周刊', link: '/weekly/',
    items: [
      { text: '学习周刊', link: '/learning-weekly/'},
      { text: 'Obsidian插件周刊', link: '/obsidian-weekly/'},
    ]
  },
  { text: '关于', link: '/about/' },
  { text: '友链', link: '/friends/' },
  // { text: '推广', link: '/geektime/' },
  // { text: '索引', link: '/categories/',
  //   items: [
  //     { text: '分类', link: '/categories/' },
  //     { text: '标签', link: '/tags/' },
  //     { text: '归档', link: '/archives/' },
  //   ],
  // },
  {
    text: '页面',
    link: '/nav/',
    items: [
      {
        text: '本站索引',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
      {
        text: '本站页面',
        items: [
          { text: '导航', link: '/nav/' },
          { text: '打赏', link: '/reward/' },
        ]
      },
      {
        text: '我的工具',
        items: [
          { text: '备忘录清单', link: 'https://ref.eryajf.net' },
          { text: '网站状态', link: 'http://uptime.eryajf.net/dashboard' },
          { text: 'json2go', link: 'http://public.eryajf.net/json2go' },
          { text: '微信MD编辑', link: 'http://public.eryajf.net/mdnice' },
          { text: '国内镜像', link: 'http://public.eryajf.net/mirror' },
          { text: '出口IP查询', link: 'http://ip.eryajf.net' },
          { text: '代码高亮工具', link: 'http://public.eryajf.net/highlight/' },
        ]
      },
     {
        text: '外站页面',
        items: [
          { text: '开往', link: 'https://www.travellings.cn/go.html' },
          { text: 'ldapdoc', link: 'http://ldapdoc.eryajf.net' },
          { text: 'HowToStartOpenSource', link: 'https://eryajf.github.io/HowToStartOpenSource' },
          { text: 'vdoing-template', link: 'https://eryajf.github.io/vdoing-template/' },
        ]
      }
    ],
  },
  // { text: '开往', link: 'https://travellings.link' },
]