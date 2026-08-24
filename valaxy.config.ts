import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from "valaxy-addon-waline"
import { addonGirls } from 'valaxy-addon-girls'
import { addonBangumi } from 'valaxy-addon-bangumi'
import { addonFace } from 'valaxy-addon-face'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '禾守の小站',
    },
    bg_image: {
      enable: true,
      url: 'https://sway-cdn.com/s/wl1r2oqIuZtCtQbJ/images/kFkUW8n1WRu10v',
      dark: 'https://sway-cdn.com/s/wl1r2oqIuZtCtQbJ/images/kFkUW8n1WRu10v',
      opacity: 0.7
    },
    say: {
      enable: true,
      api: "https://el-bot-api.vercel.app/api/words/young",
      hitokoto: {
        enable: true,
        api: "https://v1.hitokoto.cn/?c=a&c=b&c=c",
      },
    },

    // 在首页的社交导航栏下方显示的内容
    pages: [
      {
        name: '追番列表',
        url: '/bangumi/',
        icon: 'i-ri-movie-line',
        color: '#737de5',
      },
      {
        name: '友人帐',
        url: '/links/',
        icon: 'i-ri-links-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-heart-2-line',
        color: 'hotpink',
      },
    ],

   // 位于页面顶部的导航栏
    nav: [
      {
        text: '博客文章',
        link: '/posts/',
        icon: 'i-ri-article-line',
      },
      {
        text: '追番列表',
        link: '/bangumi/',
        icon: 'i-ri-movie-line',
      },
      {
        text: '友人帐',
        link: '/links/',
        icon: 'i-ri-links-line',
      },
      {
        text: '喜欢的女孩子',
        link: '/girls/',
        icon: 'i-ri-heart-2-line',
      },
    ],
    // 页脚部分
    footer: {
      since: 2022,
      icon: {
        enable: true,
        url: '/',
        title: '禾守の小站'
      },
      beian: {
        enable: true,
        icp: '萌ICP备20210730号',
        icpLink: 'https://icp.gov.moe/?keyword=20210730',
        police: '',
      },
    },
  },

  unocss: { safelist },
  siteConfig: {
    // 是否启用评论
    comment: {
      enable: true
    },
  },
  // 设置 valaxy-addon-waline 配置项（详细配置请前往'./components/YunWaline.vue'，二者存在的重复项请不要删除）
  addons: [
    addonWaline({
      serverURL: 'https://bpl.dmoe.top/',
      pageview: true, // 浏览量统计
      comment: true, // 评论数统计
    }),
    // 追番
    addonBangumi({
      api: 'https://bangumi.val.run/',
      bilibiliUid: '264994611',
      bgmUid: 'diffghjkl',
      bilibiliEnabled: true,
      bgmEnabled: true,
    }),
    // Girl
    addonGirls(),
    // 在文章中使用表情
    addonFace({
      // 配置
      defaultSuffix: 'webp'
    }),
    // 如果不配置：
    //'valaxy-addon-face'
    // 可选项：
    // defaultSize：全局默认表情图片高度，css 长度，默认3.5em，也可以在使用时传参size单独定义每个表情
    // defaultSuffix：全局默认后缀名，默认png，也可以在使用时传参单独定义每个表情
    // path：表情包和表情名之前的路径，默认/img/face/，你可以设为其他网站的
  ],
})
