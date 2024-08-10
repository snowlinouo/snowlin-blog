import { type DefaultTheme } from 'vitepress'

function sidebar(): DefaultTheme.SidebarItem[] {
  return {
    // @ts-ignore
    '/sky': [
      {
        text: '目錄',
        link: 'sky/index',
      },
      {
        text: '標題',
        collapsed: false,
        items: [
          {
            text: '一般',
            items: [
              {
                text: '關於光遇',
                link: 'sky/sky-index',
              },
              {
                text: '垃圾光遇',
                link: 'sky/sky-garbage',
              },
            ],
          },
        ],
      },
    ],
  }
}

export {sidebar}