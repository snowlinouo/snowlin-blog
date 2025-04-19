import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";
import timeline from "vitepress-markdown-timeline"; // 導入時間線插件
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"; // 导入代码组图标插件

import { nav } from './configs'
import { sidebar } from './configs'

const description = ["vitepress-theme-teek 使用文件", "vitepress 主題框架"].toString();

const teekConfig = defineTeekConfig({
  author: { name: "雪鈴", link: "https://github.com/snowlinouo" },
  siteAnalytics: {
    provider: "google",
    options: {
      id: "G-90WQ945DK0",
    },
  },
  footerInfo: {
    theme: {
      show: true, // 是否顯示主題版權，建議顯示
      name: `Theme By Teek@${version}`, // 自訂名稱
      link: "https://github.com/Kele-Bingtang/vitepress-theme-teek", // 自訂連結
    },
    copyright: {
      createYear: 2024,
      suffix: "雪鈴 SnowLin",
    },
  },
  articleShare: {
    enabled: true
  },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      ignoreList: ["nav"], //忽略的文件夹和文件
    },
  },
  markdown: {
    config: (md) => {
      md.use(timeline); //时间线插件
      md.use(groupIconMdPlugin); //代碼圖示
    },
  },
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  base: "/",
  title: "SnowLin Blog",
  description: description,
  cleanUrls: true,
  lastUpdated: true,
  lang: "zh-TW",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-TW" }],
    ["meta", { property: "og:title", content: "Blog | SnowLin Blog" }],
    ["meta", { property: "og:site_name", content: "Teek" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { name: "author", content: "Teek" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    [
      "meta",
      {
        name: "description",
        description,
      },
    ],
    ["meta", { name: "keywords", description }],
  ],
  markdown: {
    // 開啟行號
    lineNumbers: true,
    image: {
      // 預設禁用；設置為 true 可為所有圖片啟用懶載入。
      lazyLoading: true,
    },
    // 更改容器預設值標題
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危險",
      infoLabel: "訊息",
      detailsLabel: "詳細訊息",
    },
  },
  sitemap: {
    hostname: "https://blog.snowlinlan.com",
    transformItems: items => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig.permalinks;
      items.forEach(item => {
        const permalink = permalinks?.map[item.url];
        if (permalink) permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    darkModeSwitchLabel: "主題",
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
    sidebarMenuLabel: "選單",
    returnToTopLabel: "返回頂部",
    lastUpdatedText: "上次更新時間",
    outline: {
      level: [2, 4],
      label: "本頁導航",
    },
    docFooter: {
      prev: "上一頁",
      next: "下一頁",
    },
    nav,
    sidebar,
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
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜尋", buttonAriaLabel: "搜尋" },
          modal: {
            noResultsText: "無法找到相關結果",
            resetButtonTitle: "清除查詢條件",
            footer: {
              selectText: "選擇",
              navigateText: "切換",
              closeText: "關閉",
            },
          },
        },
        locales: {
          cn: {
            translations: {
              button: { buttonText: "搜索", buttonAriaLabel: "搜索" },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    // editLink: {
    //   text: "在 GitHub 上編輯此頁",
    //   pattern: "https://github.com/snowlinouo/snowlin-blog/edit/main/docs/:path",
    // },
  },
  vite: {
    server: {
      open: true
    },
    plugins: [
      groupIconVitePlugin(), //代码组图标
    ],
    //其他配置项 
    build: {
      chunkSizeWarningLimit: 35000, // 限制警告的块大小   
      rollupOptions: {
        external: ['**/_*.md'], // 忽略所有以下划线开头的 Markdown 文件
      },
    },
  },
});
