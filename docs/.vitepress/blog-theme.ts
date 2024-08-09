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

  // 文章默认作者
  author: '雪鈴',

  hotArticle: {
    title: '🔥 精選文章',
    nextText: '下一頁',
    pageSize: 9,
    empty: '暫時沒有精選内容'
  },

  homeTags: {
    title: `🏷 標籤`
  },

  recommend: {
    title: '🔍 推薦文章',
    nextText: '下一頁',
    pageSize: 1,
    style: 'sidebar',
    sort: 'filename' // 文件名排序
    // empty: false // false时无推荐文章不展示此模块
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
    title: `🤝 友情連結`,
    list: [
      {
        nickname: '粥里有勺糖',
        des: '你的指尖用于改变世界的力量',
        avatar:
          'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
        url: 'https://sugarat.top',
      },
      {
        nickname: 'Vitepress',
        des: 'Vite & Vue Powered Static Site Generator',
        avatar:
          'https://vitepress.dev/vitepress-logo-large.webp',
        url: 'https://vitepress.dev/',
      },
    ],
  },

  // 公告
  popover: {
    title: '公告',
    body: [
      { type: 'text', content: '👇公众号👇---👇 微信 👇' },
      {
        type: 'image',
        src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp'
      },
      {
        type: 'text',
        content: '欢迎大家加群&私信交流'
      },
      {
        type: 'text',
        content: '文章首/文尾有群二维码',
        style: 'padding-top:0'
      },
      {
        type: 'button',
        content: '作者博客',
        link: 'https://sugarat.top'
      },
      {
        type: 'button',
        content: '加群交流',
        props: {
          type: 'success'
        },
        link: 'https://theme.sugarat.top/group.html',
      }
    ],
    duration: 0
  },
})


export { blogTheme }
