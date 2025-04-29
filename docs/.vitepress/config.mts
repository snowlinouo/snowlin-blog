import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";
import timeline from "vitepress-markdown-timeline"; // 导入时间线插件
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"; // 导入代码组图标插件
import { La51Plugin } from "vitepress-plugin-51la"; //导入 51la统计

import viteCompression from "vite-plugin-compression"; //导入压缩插件
import { visualizer } from "rollup-plugin-visualizer"; // 导入可视化分析插件
import viteImagemin from "vite-plugin-imagemin"; // 导入图片压缩插件

import { nav } from './configs'
import { sidebar } from './configs'

const description = ["vitepress-theme-teek 使用文档", "vitepress 主题框架"].toString();

const teekConfig = defineTeekConfig({
  author: { name: "雪鈴", link: "https://github.com/snowlinouo" },

  siteAnalytics: [
    {
      provider: "google",
      options: {
        id: "G-90WQ945DK0",
      },
    },
  ],
  footerInfo: {
    // bottomMessage: ["初闻不知曲中意，再听已是曲中人"],
    // topMessage: ["初闻不知曲中意，再听已是曲中人"],
    // bottomMessage: [
    //   `<script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8" src="https://v6-widget.51.la/v6/3LmZHLhDZIDpMaT0/quote.js?theme=#1690FF,#333333,#999999,#007BFF,#FFFFFF,#1690FF,12&f=12&display=0,0,1,1,1,1,1,1"></script>`,
    //   `<span style="margin: 0; display: inline;">本站已在地球上苟活了 <span id="footer-runtime"></span></span>`,// 搭配 ./theme/helper/useFooterRuntime.ts
    //   `<a href="https://51.la/" target="_blank" style="display:flex;align-items:center;justify-content:center;">本网站由51.LA <img src="https://51.la/favicon.ico" style="width:16px;height:16px;" alt="51.LA"> 提供数据统计服务</a>`,
    // ],   
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

  //文章分享 功能
  articleShare: {
    enabled: true
  },

  topArticle: {
    enabled: true, // 是否启用精选文章卡片
    limit: 4, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd", // 精选文章的日期格式
    // dateFormat: "yyyy-MM-dd hh:mm:ss", // 精选文章的日期格式
  },

  // 布蒜子统计分析
  docAnalysis: {
    createTime: "2021-10-19",
    statistics: {
      provider: "busuanzi",
    },
    wordCount: true,
    readingTime: true,
    // overrideInfo: [
    //   { key: "lastActiveTime", value: (_, currentValue) => `${currentValue}前` },
    //   { key: "totalPosts", label: "文章总数目" },
    // ],
    appendInfo: [{ key: "index", label: "序号", value: "SnowLin" }],
  },

  // 赞赏在文章下方
  // appreciation: {
  //   position: "doc-after",
  //   options: {
  //     icon: "weChatPay", // 赞赏图标，内置 weChatPay 和 alipay
  //     expandTitle: "打赏支持", // 展开标题，支持 HTML
  //     collapseTitle: "下次一定", // 折叠标题，支持 HTML
  //     // content: `<img src='/img/alipay/1.png'>`, // 赞赏内容，支持 HTML
  //     content: `<img src='/img/alipay/1.png'><img src='/img/alipay/2.png'>`, // 赞赏内容，支持 HTML
  //     expand: false, // 是否默认展开，默认 false
  //   },
  // },
    
  // 赞赏在 文章导航栏下侧
  // appreciation: {
  //   position: "aside-bottom",
  //   options: {
  //     title: `<span style="color: var(--tk-theme-color)">欢迎打赏支持</span>`, // 赞赏标题，支持 HTML
  //     content: `<img src='/teek-logo-large.png'>`, // 赞赏内容，支持 HTML
  //   },
  // },

  vitePlugins: {
    autoFrontmatter: true, //添加自动格式formatter插件
    sidebarOption: {
      // initItems: false, //这条命令注释后，才会让文档和目录的样式保持一致
      collapsed: true, //打开侧边栏自动收缩功能
    },
    permalinkOption: {
      ignoreList: ["private-data"], // 忽略扫描某些目录
    },
  },  

  markdown: {
    config: md => {
      md.use(timeline);
      md.use(groupIconMdPlugin);
    },
    
    demo: {
      githubUrl: "https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/docs",
  },
  },
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "SnowLin Blog",
  description: description,
  cleanUrls: true,
  lastUpdated: true,
  lang: "zh-TW",
  head: [
    ["meta",{name:"referrer",content:"no-referrer-when-downgrade"}], 
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

    // 阿里在线矢量库
  [
    "link",
    {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_2989306_w303erbip9.css",
    },
  ],

    // //添加看板娘
    // ['script', { src: 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js' }],    



    // 免费的音乐播放器
    // [
    //   "script",
    //   {
    //     type: "text/javascript",
    //     src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js",
    //     // src: "https://myhkw.cn/player/js/jquery.min.js",
    //   },
    // ], 
    // [
    //   "script",
    //   {
    //     type: "text/javascript",
    //     id: "myhk",
    //     src: "https://myhkw.cn/api/player/1741345067120",
    //     key: "1741345067120",
    //     m: "1",
    //     lr: "r",
    //     defer: "defer",  // 添加defer属性，确保脚本在DOM加载完成后执行
    //   },
    // ],


    //51la统计挂件
    [
      "script",
      {
        id: "LA-DATA-WIDGET",
        crossorigin: "anonymous",
        charset: "UTF-8",
        src: "https://v6-widget.51.la/v6/3LmZHLhDZIDpMaT0/quote.js?theme=0&col=true&f=12&badge=icon_0&icon=center",
        // src: "https://myhkw.cn/player/js/jquery.min.js",
      },
    ], 

    
    // 仅当页面包含特定 class 时加载字体
    [
      "link",
      {
        rel: "stylesheet",
        href: "../theme/styles/font.scss",
        media: "print",
        onload: "this.media='all'",
      },
    ],

    // 鼠标爆炸效果
    // [
    //   'script',
    //   {
    //     type: 'text/javascript',
    //     src: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/animejs/3.2.1/anime.min.js', //字节cdn
    //     id: 'anime.min.js-js',
    //     defer: 'defer',
    //   },
    // ],
    // [
    //   'script',
    //   {
    //     // src: "https://cpython666.github.io/js/clickjs/fireworks.js",
    //     src: 'https://live2d-hyde.netlify.app/Clickfireworks.js',
    //     defer: 'defer',
    //   },
    // ],    
  ],

  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
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
  
  // 运行后自动打开网页
  vite: {
    server: {
      open: true
    },
    plugins: [
      groupIconVitePlugin(),
      viteCompression({
        threshold: 10240,
        algorithm: "brotliCompress",
        ext: ".br",
      }),
      viteImagemin({
        gifsicle: { optimizationLevel: 7 },
        mozjpeg: { quality: 70 },
        pngquant: { quality: [0.7, 0.8] },
        svgo: {
          plugins: [
            { name: "removeViewBox" },
            { name: "removeEmptyAttrs", active: false },
          ],
        },
      }),

      La51Plugin({
        id: "你id",
        ck: "你ck",
        apply: "build", //（默认）：仅在 生产环境（用户访问正式网站）时加载统计代码。
      }),      
    ],
    //其他配置项 
    build: {
      assetsInlineLimit: 4096, // 小于 4KB 的字体转为 base64
      chunkSizeWarningLimit: 35000, // 限制警告的块大小
      minify: "terser", // 使用 Terser 进行代码压缩
      terserOptions: {
        compress: {
          drop_console: true, // 移除所有 console.* 调用（生产环境建议开启）
          drop_debugger: true, // 移除 debugger 语句（生产环境必备）
          pure_funcs: ["console.info"], // 保留 console.info 调用（白名单机制）
          dead_code: true, // 移除不可达代码（消除死代码）
          arrows: true, // 将 function 转换为箭头函数（优化代码体积）
          unused: true, // 移除未使用的变量/函数（需确保不影响程序逻辑）
          join_vars: true, // 合并连续 var 声明（优化作用域）
          collapse_vars: true, // 内联单次使用的变量（体积优化）
        },
        format: {
          comments: false, // 移除所有注释（保留版权声明需使用正则表达式）
          beautify: false, // 禁用代码美化（进一步减小体积）
          preamble: "/* 项目版本 1.0.0 */", // 文件头部添加版权声明（需遵守 MIT 协议）
        },
        mangle: {
          toplevel: true, // 混淆顶级作用域变量名（保留 class/function 名称）
          properties: false, // 保留对象属性名（防止破坏 DOM 属性绑定）
        },
      },
      rollupOptions: {
        external: ['**/_*.md'], // 忽略所有以下划线开头的 Markdown 文件
        plugins: [
          visualizer({
            filename: "../stats.html",
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ],
        output: {
          manualChunks: {
            theme: ["vitepress-theme-teek"],
            icons: ["@iconify/json"],
          },
        },
      },      
    },
  },    
});
