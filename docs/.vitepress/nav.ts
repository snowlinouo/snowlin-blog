import { type DefaultTheme } from 'vitepress'

function nav(): DefaultTheme.NavItem[] {
  return [
      {
      text: '首頁',
      link: '/' 
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
}

export {nav}