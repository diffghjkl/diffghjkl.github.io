import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://blog.dmoe.top/',
  favicon: "https://sway-cdn.com/s/wl1r2oqIuZtCtQbJ/images/9ecO8UCSDAkWDf",
  lang: 'zh-CN',
  title: '禾守の小站',
  subtitle: '这里是一只萌新的博客~',
  author: {
    name: '禾守',
    avatar: 'https://sway-cdn.com/s/wl1r2oqIuZtCtQbJ/images/9ecO8UCSDAkWDf',
    status: {
      emoji: '💙',
      message: '',
    },
  },
  description: '',

  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/diffghjkl',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/6170110088',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=3577283325',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/264994611',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/diffghjkl',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/HS_note',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'mailto:diffghjkl@163.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: true,
    type: 'fuse',
  },
  fuse: {
    options: {
      keys: ['title', 'excerpt', 'content'],
      /**
       * @default 0.6
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
      threshold: 0,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    },
  },
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  sponsor: {
    enable: true,
    title: '我这么可爱，真的不考虑打赏下嘛~QAQ',
    methods: [
      {
        name: '支付宝',
        url: 'https://sway-cdn.com/s/wl1r2oqIuZtCtQbJ/images/wG7t-nWvCHcy3K',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://sway-cdn.com/s/wl1r2oqIuZtCtQbJ/images/BpvGZy5IAz-uvy',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://sway-cdn.com/s/wl1r2oqIuZtCtQbJ/images/ucEaHWRQXfQ1_x',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
