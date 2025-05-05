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
export const teekBlogConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,
  wallpaper: {
    enabled: true,
  },

  post: {
    excerptPosition: "top", // 文章摘要位置
    showMore: false, // 是否顯示更多按鈕
    coverImgMode: "default", // 文章封面圖模式
    showCapture: false, // 是否在摘要位置顯示文章部分文字，當為 true 且不使用 frontmatter.describe 和 <!-- more --> 時，會自動截取前 400 個字元作為摘要
    imageViewer: {
      hideOnClickModal: true,
    },
  },

  banner: {
    name: "SnowLin Blog",
    enabled: true,
    bgStyle: "fullImg", // Banner 背景風格：pure 為純色背景，partImg 為局部圖片背景，fullImg 為全螢幕圖片背景
    imgInterval: 8000,  // 當多張圖片時（imgSrc 為數組），設置切換時間，單位：毫秒
    imgShuffle: true,  // 当多张大图时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgSrc: ["/bg1.jpg"], // Banner 圖片連結。bgStyle 為 partImg 或 fullImg 時生效
    descStyle: "types", // 描述資訊風格：default 為純文字渲染風格（如果 description 為數組，則取第一個），types 為文字列印風格，switch 為文字切換風格
    // descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    mask: false, // Banner 圖片遮罩，bgStyle 為 partImg 或 fullImg 時生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 大图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 default 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    description: ["一個溫暖的地方"], // 描述資訊
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
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

  comment: {
    // provider: "giscus",
    provider: "twikoo",
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      envId: "https://twikoo.onedayxyy.cn/",
      link: "https://cdn.jsdelivr.net/npm/twikoo@1.6.41/dist/twikoo.min.js",

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
