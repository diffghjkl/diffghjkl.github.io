import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from "valaxy-addon-waline";
import { addonBangumi } from 'valaxy-addon-bangumi';
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

    footer: {
      since: 2022,
      beian: {
        enable: true,
        icp: '萌ICP备20210730号',
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
  // 设置 valaxy-addon-waline 配置项
  addons: [
    addonWaline({
      serverURL: 'https://bpl.dmoe.top/',
      locale: {
        placeholder: "烦请友善交流~",
      },
      reaction: [],
      comment: true, // 评论数统计
      pageview: true, // 浏览量统计
      highlighter: true,
      texRenderer: true,
      emoji: [
        '//unpkg.com/@waline/emojis@1.2.0/bilibili',
        '//unpkg.com/@waline/emojis@1.2.0/bmoji',
        '//unpkg.com/@waline/emojis@1.2.0/tieba',
        '//unpkg.com/@waline/emojis@1.2.0/qq',
      ],
    }),
    // 追番
    addonBangumi({
      api: 'https://',
      bilibiliUid: '264994611',
      bgmUid: 'diffghjkl',
      bilibiliEnabled: true,
      bgmEnabled: true,
    }),
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
