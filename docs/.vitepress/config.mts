import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// doc sidebar
import { sidebar } from './sidebar'

import { nav } from './nav'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = '/snowlin-blog/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  cleanUrls: true,
  // base: '/snowlin-blog/',
  lang: 'zh-tw',
  title: '雪鈴 SnowLin ',
  description: '一個溫暖的的小窩',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目錄'
    },
    // 默认文案修改
    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '相關文章',
    lastUpdatedText: '上次更新於',
    langMenuLabel: '更改語言',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
    notFound: {
      title: '這個頁面找不到了',
      quote: '404',
      linkLabel: '回到首頁',
    },

    // 设置logo
    logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: nav(),
    sidebar: sidebar(),
    docFooter: {
      prev: false,
      next: false
      //prev: '上一頁',
      //next: '下一頁'
    },
    socialLinks: [
      {
        icon: 'youtube',
        link: 'https://www.youtube.com/@nightsnowlin'
      },
      {
        icon: 'facebook',
        link: 'https://www.facebook.com/SnowLinOuO/'
      },
      {
        icon: 'twitter',
        link: 'https://x.com/nightsnowlin'
      },
      {
        icon: 'github',
        link: 'https://github.com/snowlinouo/snowlin-blog'
      }
    ]
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危險',
      infoLabel: '資訊',
      detailsLabel: '詳細資訊'
    }
  }
  //locales: {
  //  root: {
  //    lang: 'zh_tw',
  //    label: '繁體中文'
  //  },
  //  en: {
  //    lang: 'en',
  //    label: 'English',
  //  }
  //}
})

