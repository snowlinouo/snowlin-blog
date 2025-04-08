import { type DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '首頁',
    link: '/' 
  },
  {
    text: 'Minecraft',
    items: [
      {
        text: 'Masa 模組中文材質包',
        items: [
          {
            text: '介紹',
            link: '/masa-mod/masa-mod-translationpack',
          },
          {
            text: '更新日誌',
            link: '/masa-mod/changelogs',
          },
        ],
      },
    ],
  },
  {
    text: '光遇',
    items: [
      {
        text: '目錄',
        link: '/sky/',
      },
      {
        text: '更新內容',
        link: '/sky/patch',
      },
      {
        text: '已知問題',
        link: '/sky/known-issues',
      },
    ],
  },
  {
    text: '關於',
    items: [
      {
        text: '關於本站',
        link: '/about-website',
      },
      {
        text: '友情連結',
        link: '/friendLink',
      },
    ],
  }
]