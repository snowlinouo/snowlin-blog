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
        text: '目錄',
        link: '/minecraft/',
      }
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
        text: '光遇介紹',
        link: '/sky/sky-index',
      },
      {
        text: '光遇垃圾',
        link: '/sky/sky-garbage',
      },
    ],
  },
  {
    text: '關於作者',
    link: '/about.md'
  }
]