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
      icon: {
        enable: true,
        url: '/',
        title: '禾守の小站'
      },
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
      api: 'https://bangumi.val.run/',
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

  // 代码块标题图标(默认禁用)
  groupIcons: {
    customIcon: {
      // valaxy: 'https://valaxy.site/favicon.svg',
      valaxy: (import.meta.url, './public/favicon.svg'),
      nodejs: 'vscode-icons:file-type-node',
      playwright: 'vscode-icons:file-type-playwright',
      typedoc: 'vscode-icons:file-type-typedoc',
      eslint: 'vscode-icons:file-type-eslint',
  // package managers
  pnpm: 'vscode-icons:file-type-light-pnpm',
  npm: 'vscode-icons:file-type-npm',
  yarn: 'vscode-icons:file-type-yarn',
  bun: 'vscode-icons:file-type-bun',
  deno: 'vscode-icons:file-type-deno',
  // frameworks
  vue: 'vscode-icons:file-type-vue',
  svelte: 'vscode-icons:file-type-svelte',
  angular: 'vscode-icons:file-type-angular',
  react: 'vscode-icons:file-type-reactjs',
  next: 'vscode-icons:file-type-light-next',
  nuxt: 'vscode-icons:file-type-nuxt',
  solid: 'logos:solidjs-icon',
  astro: 'vscode-icons:file-type-light-astro',
  // bundlers
  rollup: 'vscode-icons:file-type-rollup',
  webpack: 'vscode-icons:file-type-webpack',
  vite: 'vscode-icons:file-type-vite',
  esbuild: 'vscode-icons:file-type-esbuild',
  // configuration files
  'package.json': 'vscode-icons:file-type-node',
  'tsconfig.json': 'vscode-icons:file-type-tsconfig',
  '.npmrc': 'vscode-icons:file-type-npm',
  '.editorconfig': 'vscode-icons:file-type-editorconfig',
  '.eslintrc': 'vscode-icons:file-type-eslint',
  '.eslintignore': 'vscode-icons:file-type-eslint',
  'eslint.config': 'vscode-icons:file-type-eslint',
  '.gitignore': 'vscode-icons:file-type-git',
  '.gitattributes': 'vscode-icons:file-type-git',
  '.env': 'vscode-icons:file-type-dotenv',
  '.env.example': 'vscode-icons:file-type-dotenv',
  '.vscode': 'vscode-icons:file-type-vscode',
  'tailwind.config': 'vscode-icons:file-type-tailwind',
  'uno.config': 'vscode-icons:file-type-unocss',
  'unocss.config': 'vscode-icons:file-type-unocss',
  '.oxlintrc': 'vscode-icons:file-type-oxlint',
  // filename extensions
  '.mts': 'vscode-icons:file-type-typescript',
  '.cts': 'vscode-icons:file-type-typescript',
  '.ts': 'vscode-icons:file-type-typescript',
  '.tsx': 'vscode-icons:file-type-typescript',
  '.mjs': 'vscode-icons:file-type-js',
  '.cjs': 'vscode-icons:file-type-js',
  '.json': 'vscode-icons:file-type-json',
  '.js': 'vscode-icons:file-type-js',
  '.jsx': 'vscode-icons:file-type-js',
  '.md': 'vscode-icons:file-type-markdown',
  '.py': 'vscode-icons:file-type-python',
  '.ico': 'vscode-icons:file-type-favicon',
  '.html': 'vscode-icons:file-type-html',
  '.css': 'vscode-icons:file-type-css',
  '.scss': 'vscode-icons:file-type-scss',
  '.yml': 'vscode-icons:file-type-light-yaml',
  '.yaml': 'vscode-icons:file-type-light-yaml',
  '.php': 'vscode-icons:file-type-php',
    },
  },
})
