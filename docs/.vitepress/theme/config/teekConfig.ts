import type { TeekConfig } from "vitepress-theme-teek/config";

// 文档配置
export const teekDocConfig: TeekConfig = {
  themeSetting: {
    themeSize: "large",
  },
};

// 博客配置
export const teekBlogConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,
  themeSetting: {
    themeStyle: "vp-green",
    themeSize: "default",
    // useThemeSize: false,
  },
  wallpaper: {
    enabled: true,
  },
  post: {
    excerptPosition: "top", // 文章摘要位置
    showMore: false, // 是否顯示更多按鈕
    moreLabel: "閱讀全文 >", // 更多按鈕文字
    coverImgMode: "default", // 文章封面圖模式
    showCapture: false, // 是否在摘要位置顯示文章部分文字，當為 true 且不使用 frontmatter.describe 和 <!-- more --> 時，會自動截取前 400 個字元作為摘要
    imageViewer: {
      hideOnClickModal: true,
    },
  },
  banner: {
    enabled: true,
    bgStyle: "partImg", // Banner 背景風格：pure 為純色背景，partImg 為局部圖片背景，fullImg 為全螢幕圖片背景
    pureBgColor: "#28282d", // Banner 背景色，bgStyle 為 pure 時生效
    imgSrc: ["/bg1.jpg"], // Banner 圖片連結。bgStyle 為 partImg 或 fullImg 時生效
    imgInterval: 15000, // 當多張圖片時（imgSrc 為數組），設置切換時間，單位：毫秒
    imgShuffle: false, // 圖片是否隨機切換，為 false 時按順序切換，bgStyle 為 partImg 或 fullImg 時生效
    imgWaves: true, // 是否開啟 Banner 圖片波浪紋，bgStyle 為 fullImg 時生效
    mask: true, // Banner 圖片遮罩，bgStyle 為 partImg 或 fullImg 時生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 遮罩顏色，如果為數字，則是 rgba(0, 0, 0, ${maskBg})，如果為字串，則作為背景色。bgStyle 為 partImg 或 fullImg 且 mask 為 true 時生效
    textColor: "#ffffff", // Banner 字體顏色，bgStyle 為 pure 時為 '#000000'，其他為 '#ffffff'
    titleFontSize: "3.2rem", // 標題字體大小
    descFontSize: "1.4rem", // 描述字體大小
    descStyle: "default", // 描述資訊風格：default 為純文字渲染風格（如果 description 為數組，則取第一個），types 為文字列印風格，switch 為文字切換風格
    description: ["一個溫暖的地方"], // 描述資訊
    switchTime: 4000, // 描述資訊切換間隔時間，單位：毫秒。descStyle 為 switch 時生效
    switchShuffle: false, // 描述資訊是否隨機切換，為 false 時按順序切換。descStyle 為 switch 時生效
    typesInTime: 200, // 輸出一個文字的時間，單位：毫秒。descStyle 為 types 時生效
    typesOutTime: 100, // 刪除一個文字的時間，單位：毫秒。descStyle 為 types 時生效
    typesNextTime: 800, // 打字與刪字的間隔時間，單位：毫秒。descStyle 為 types 時生效
    typesShuffle: false, // 描述資訊是否隨機打字，為 false 時按順序打字，descStyle 為 types 時生效
  },
  article: {
    showIcon: true, // 作者、日期、分類、標籤、字數、閱讀時長、瀏覽量等文章資訊的圖示是否顯示
    dateFormat: "yyyy-MM-dd", // 文章日期格式，首頁和文章頁解析日期時使用
    showInfo: true, // 是否展示作者、日期、分類、標籤、字數、閱讀時長、瀏覽量等文章資訊，分別作用於首頁和文章頁
    showAuthor: true, // 是否展示作者
    showCreateDate: true, // 是否展示創建日期
    showUpdateDate: false, // 是否展示更新日期，僅在文章頁顯示
    showCategory: true, // 是否展示分類
    showTag: true, // 是否展示標籤
  },
  breadcrumb: {
    enabled: true, // 是否启用面包屑
    showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
    separator: "/", // 面包屑分隔符
    homeLabel: "首頁",
  },
  blogger: {
    avatar: "/logo.png",
    shape: "circle",
    name: "雪鈴",
    slogan: "喵喵(?",
  },
  docAnalysis: {
    enabled: false,
    createTime: "2025-04-03",
    statistics: {
      provider: "busuanzi",
    },
    overrideInfo: [
      { key: "runtime", show: false },
      { key: "lastActiveTime", show: false },
      { key: "viewCount", show: false },
      { key: "visitCount", show: false }
    ],
  },
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
  social: [
    {
      icon: "icon-youtube",
      iconType: "iconfont",
      name: "Youtube",
      link: 'https://www.youtube.com/@nightsnowlin'
    },
    {
      icon: "icon-facebook",
      iconType: "iconfont",
      name: "Facebook",
      link: 'https://www.facebook.com/SnowLinOuO/'
    },
    {
      icon: "icon-twitter",
      iconType: "iconfont",
      name: "Twitter",
      link: 'https://x.com/nightsnowlin'
    },
    {
      icon: "icon-github",
      iconType: "iconfont",
      name: "GitHub",
      link: 'https://github.com/snowlinouo/snowlin-blog'
    },
  ],
};
