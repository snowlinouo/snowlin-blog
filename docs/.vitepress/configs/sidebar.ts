import { type DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/': [
    {
      text: '',
      items: []
    }
  ],
  '/minecraft/Masa 系列/': [
    {
      text: '介紹',
      link: 'masa-mod/masa-mod-translationpack',
    },
    {
      text: '更新日誌',
      collapsed: false,
      items: [
        {
          text: '目錄',
          link: '/masa-mod/changelogs',
        },
        {
          text: '1.21 之後版本',
          collapsed: false,
          items: [
            {
              text: '1.4.2',
              link: '/masa-mod/changelogs/1.4.2',
            },
            {
              text: '1.4.1',
              link: '/masa-mod/changelogs/1.4.1',
            },
            {
              text: '1.4.0',
              link: '/masa-mod/changelogs/1.4.0',
            },
            {
              text: '1.3.6',
              link: '/masa-mod/changelogs/1.3.6',
            },
            {
              text: '1.3.5',
              link: '/masa-mod/changelogs/1.3.5',
            },
            {
              text: '1.3.4',
              link: '/masa-mod/changelogs/1.3.4',
            },
            {
              text: '1.3.3',
              link: '/masa-mod/changelogs/1.3.3',
            },
          ],
        },
        {
          text: '1.20 含之前版本',
          collapsed: true,
          items: [
            {
              text: '1.0.1',
              link: '/masa-mod/changelogs/1.0.1-1.20',
            },
            {
              text: '1.0.0',
              link: '/masa-mod/changelogs/1.0.0-1.20',
            },
          ],
        },
      ]
    }
  ],
  '/sky/': [
    {
      text: '總目錄',
      link: 'sky/index',
    },
    {
      text: '版本更新內容',
      collapsed: false,
      items: [
        {
          text: '更新日誌',
          collapsed: false,
          items: [
            {
              text: '目錄',
              link: 'sky/patch/index',
            },
            {
              text: '0.26.5',
              link: 'sky/patch/0.26.5',
            },
            {
              text: '0.26.3',
              link: 'sky/patch/0.26.3',
            },
            {
              text: '0.26.2',
              link: 'sky/patch/0.26.2',
            },
            {
              text: '0.26.1',
              link: 'sky/patch/0.26.1',
            },
            {
              text: '0.26.0',
              link: 'sky/patch/0.26.0',
            },
          ]
        },
        {
          text: '已知問題',
          collapsed: true,
          items: [
            {
              text: '目錄',
              link: 'sky/known-issues/index',
            },
            {
              text: '0.26.5',
              link: 'sky/known-issues/0.26.5',
            },
            {
              text: '0.26.2',
              link: 'sky/known-issues/0.26.2',
            },
            {
              text: '0.26.1',
              link: 'sky/known-issues/0.26.1',
            },
            {
              text: '0.26.0',
              link: 'sky/known-issues/0.26.0',
            },
          ]
        }
      ]
    },
    {
      text: '季節',
      collapsed: true,
      items: [
        {
          text: '二重奏季',
          link: 'sky/'
        },
        {
          text: '築巢季',
          link: 'sky/'
        }
      ]
    },
    {
      text: '活動',
      collapsed: true,
      items: [
        {
          text: '新內容',
          collapsed: false,
          items: [
            {
              text: '0.26.3',
              link: 'sky/patch/0.26.3',
            },
            {
              text: '0.26.2',
              link: 'sky/patch/0.26.2',
            },
            {
              text: '0.26.1',
              link: 'sky/patch/0.26.1',
            },
            {
              text: '0.26.0',
              link: 'sky/patch/0.26.0',
            },
          ]
        }
      ]
    }
  ]
}
