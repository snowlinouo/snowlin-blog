import type { TeekConfig } from "vitepress-theme-teek/config";

// 文档配置
export const teekDocConfig: TeekConfig = {

  //公告栏
  notice: {
    enabled: false,
    position: "center",
  },  
};

// 博客配置
const teekBlogCommonConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,
  wallpaper: {
    enabled: true,
  },

  blogger: {
    avatar: "/logo.png",
    shape: "circle",
    name: "雪鈴",
    slogan: "喵喵(?",
  },

  // 文章
  article: {
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    // dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
    dateFormat: "yyyy-MM-dd", // 文章日期格式，首页和文章页解析日期时使用
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: true, // 是否展示作者
    showCreateDate: true, // 是否展示创建日期
    showUpdateDate: true, // 是否展示更新日期，是否展示更新时间，仅在文章页显示
    showCategory: true, // 是否展示分类
    showTag: true, // 是否展示标签
    topTip: frontmatter => {
      const tip: Record<string, string> = {
        type: "warning",
        title: "注意",
        text: "文章发布较早，内容可能过时，阅读注意甄别。",
      };

      // frontmatter.long 为 true，则添加提示
      if (frontmatter.long) return tip;

      // frontmatter.date 大于半年，则添加提示
      const longTime = 6 * 30 * 24 * 60 * 60 * 1000;
      if (frontmatter.date && Date.now() - new Date(frontmatter.date).getTime() > longTime) return tip;
    },

    // imageViewer: {
    //   hideOnClickModal: true,
    // },    
  },  
  // 设置主题尺寸
  // themeSetting: {
  //   themeSize: "large",
  // },

  
  friendLink: {
    enabled: true, // 是否启用友情链接卡片
    list: [
        {
          avatar: "/teek-logo-large.png",
          name: "Teek",
          desc: "一個好看的 VitePress 主題",
          link: "https://vp.teek.top/",
        },
        {
          avatar: "https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
          name: "天客",
          desc: "Teek 主題的作者",
          link: "http://notes.teek.top/",
        },
        {
          avatar: "/img/friends/one.png",
          name: "One",
          desc: "明心静性，爱自己",
          link: "https://onedayxyy.cn/",
        },
        {
          avatar: "/img/friends/hyde-logo.ico",
          name: "Hyde Blog",
          desc: "人心中的成见是一座大山",
          link: "https://teek.seasir.top/",
        },
        {
          avatar: "/img/friends/sinc-us-kg-favicon.ico",
          name: "凿壁偷光不算偷 Blog",
          desc: "Teek 道友",
          link: " https://sinc.us.kg/",
        },
      ], // 友情链接数据列表
    limit: 5, // 一页显示的数量
    autoScroll: false, // 是否自动滚动
    scrollSpeed: 2500, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    titleClick: router => router.go("/friendLink"), // 查看更多友链
  },


  // 社交链接
  social: [
    {
      icon: "mdi:youtube",
      name: "Youtube",
      link: 'https://www.youtube.com/@nightsnowlin'
    },
    {
      icon: "mdi:facebook",
      name: "Facebook",
      link: 'https://www.facebook.com/SnowLinOuO/'
    },
    {
      icon: "mdi:twitter",
      name: "Twitter",
      link: 'https://x.com/nightsnowlin'
    },
    {
      icon: "mdi:github",
      name: "GitHub",
      link: 'https://github.com/snowlinouo/snowlin-blog'
    },
  ],
};

export const teekBlogConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "SnowLin Blog",
    description: "一個溫暖的地方",
  },
};

export const teekBlogParkConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  banner: {
    name: "SnowLin Blog",
    bgStyle: "partImg",
    imgSrc: ["bg1.jpg"],
    description: [
      "一個溫暖的地方",
    ],
    descStyle: "switch",
  },
};

export const teekBlogCardConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    imageViewer: { hideOnClickModal: true },
    postStyle: "card",
  },
  homeCardListPosition: "left",
  banner: {
    name: "SnowLin Blog",
    bgStyle: "fullImg",
    imgSrc: ["bg1.jpg"],
    description: [
      "一個溫暖的地方",
    ],
    descStyle: "types",
  },
};

export const teekBlogFullConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  post: {
    imageViewer: { hideOnClickModal: true },
    coverImgMode: "full",
  },
  banner: {
    name: "SnowLin Blog",
    bgStyle: "fullImg",
    imgSrc: ["bg1.jpg"],
    description: [
      "一個溫暖的地方",
    ],
    descStyle: "types",
  },

  comment: {
    // provider: "giscus",
    provider: "twikoo",
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      envId: "https://twikoo.onedayxyy.cn/",

      // waline 配置，官网：https://waline.js.org/
      // serverURL: "https://tk.waline.youngkbt.cn/",
      // jsLink: "https://unpkg.com/@waline/client@v3/dist/waline.js",
      // cssLink: "https://unpkg.com/@waline/client@v3/dist/waline.css",

      // giscus 配置，官网：https://giscus.app/zh-CN
      // repo: "Kele-Bingtang/vitepress-theme-kt",
      // repoId: "R_kgDONpVfBA",
      // category: "Announcements",
      // categoryId: "DIC_kwDONpVfBM4Cm3v9",

      // artalk 配置，官网：https://artalk.js.org/
      // server: "",
      // site: "",
    },
  },

  //公告栏
  notice: {
    enabled: false,
    position: "center",
  },
};

export const teekBlogBodyConfig: TeekConfig = {
  ...teekBlogCommonConfig,
  pageStyle: "segment-nav",
  bodyBgImg: {
    imgSrc: ["bg1.jpg"],
  },
};