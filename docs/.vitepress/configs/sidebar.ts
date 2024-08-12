import { type DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/': [
    {
      text: '',
      items: []
    }
  ],
  '/sky/': [
    {
      text: '目錄',
      link: 'sky/index',
    },
    {
      text: '一般',
      collapsed: false,
      items: [
        {
          text: '關於',
          items: [
            {
              text: '關於光遇',
              link: 'sky/sky-index',
            },
            {
              text: '垃圾光遇',
              link: 'sky/sky-garbage',
            },
          ]
        }
      ]
    }
  ]
}
