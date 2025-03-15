// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-tw',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  srcDir: './docs/src',
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  search: {
    btnPlaceholder: '搜尋',
    placeholder: '搜尋內容',
    emptyText: '沒有搜尋結果',
    heading: '總共：{{searchResult}} 個搜尋結果。',
    toSelect: '選擇',
    toNavigate: '切換',
    toClose: '關閉'
  },
  tabs: true,

  // markdown 图表支持（会增加一定的构建耗时）
  // mermaid: true

  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    version: false,
    copyright: 'MIT License | 雪鈴 SnowLin',
  },

  // 主题色修改
  themeColor: 'vp-green',

  //黑暗模式切換
  darkTransition: true,

  // 文章默认作者
  author: '雪鈴',

  home: {
    analysis: {
      articles: {
        title: ['文章', '本月更新', '本周更新']
      }
    }
  },

  formatShowDate: {
    justNow: '剛剛',
    secondsAgo: ' 秒前',
    minutesAgo: ' 分鐘前',
    hoursAgo: ' 小時前',
    daysAgo: ' 天前',
    weeksAgo: ' 周前',
  },

  article: {
    /**
     * 是否展示文章的预计阅读时间
     */
    readingTime: true,
    /**
     * 是否隐藏文章页的封面展示
     */
    hiddenCover: false,
    /**
     * 阅读时间分析展示位置
     */
    readingTimePosition: 'inline',
    /**
     * 自定义一系列文案标题
     */
    analyzeTitles: {
      topWordCount: '字數：{{value}} 個字',
      topReadTime: '預計：{{value}} 分鐘',
      inlineWordCount: '{{value}} 個字',
      inlineReadTime: '{{value}} 分鐘',
      wordCount: '文章字數',
      readTime: '預計閱讀時間',
      author: '作者',
      publishDate: '發布時間',
      lastUpdated: '最後修改時間',
      tag: '標籤',
    }
  },

  hotArticle: {
    title: '🔥 精選文章',
    nextText: '下一頁',
    pageSize: 10,
    empty: '暫時沒有精選内容'
  },

  homeTags: {
    title: `🏷 標籤`
  },

  recommend: {
    filter: (page) => {
      if (page.route.startsWith('/sky/')) {
        return false
      }
      return true
    },
    title: '🔍 推薦文章',
    nextText: '下一頁',
    pageSize: 10,
    style: 'sidebar',
    sort: 'filename', // 文件名排序
    empty: false // false时无推荐文章不展示此模块
    // empty: '暫時沒有相關文章'
  },

  // alert: {
  //   type: 'success',
  //   title: '标配内容，这是一个不会自动关闭的弹窗',
  //   duration: 0,
  //   description: '每次打开都会展示，可通过 html 属性自定义这块内容',
  //   showIcon: true
  // },

  // 友链
  friend: {
    title: `🤝 相關連結`,
    list: [
      {
        nickname: '雪花們的小窩',
        des: 'Discord 群',
        avatar:
          '/Discord 群頭貼.png',
        url: 'https://discord.gg/W7P6UFQ',
      }
    ],
  },

  backToTop: {
    // 自定义触发高度
    top: 450,
    // 自定义图标
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16"><path fill="currentColor" d="M3 2.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 2.25Zm5.53 2.97l3.75 3.75a.749.749 0 1 1-1.06 1.06L8.75 7.561v6.689a.75.75 0 0 1-1.5 0V7.561L4.78 10.03a.749.749 0 1 1-1.06-1.06l3.75-3.75a.749.749 0 0 1 1.06 0Z"/></svg>'
  },

  // 公告
  popover: {
    title: '小公告',
    mobileMinify: true,
    body: [
      { type: 'text', content: '網站施工中' },
      {
        type: 'image',
        src: '/logo.png',
        //style: 'display: inline-block;width:46%;padding-right:6px'
      },
      //{
      //  type: 'text',
      //  content: '歡迎加群聊天'
      //},
      {
        type: 'button',
        content: 'Discord 群',
        link: 'https://discord.gg/W7P6UFQ'
      }
    ],
    duration: -1,
    twinkle: false,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20"><path fill="currentColor" d="M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3z"/></svg>'
  },
})


export { blogTheme }
