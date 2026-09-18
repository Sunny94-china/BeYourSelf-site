import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BeYourSelf',
  description: '用行为设计让自律自然发生',
  lang: 'zh-CN',
  base: '/BeYourSelf-site/',
  themeConfig: {
    nav: [
      { text: '产品', link: '/' },
      { text: '理念', link: '/ideas/' },
      { text: '开发日志', link: '/journal/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/guide/': [
        { text: '入门', link: '/guide/' }
      ],
      '/ideas/': [
        { text: '思想与设计', link: '/ideas/' },
        { text: '如何科学地实现自律', link: '/ideas/self-discipline-science' },
        { text: '设计原则', link: '/ideas/principles' }
      ],
      '/journal/': [
        { text: '日志索引', link: '/journal/' },
        { text: '2026-09-17 产品说明站上线', link: '/journal/2026-09-17-site-launch' },
        { text: '2026-09-17 方向说明', link: '/journal/2026-09-17-direction' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sunny94-china/BeYourSelf-site' }
    ],
    search: { provider: 'local' }
  }
})
