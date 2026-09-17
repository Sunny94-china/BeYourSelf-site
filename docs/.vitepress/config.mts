import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BeYourSelf',
  description: '用行为设计让自律自然发生',
  lang: 'zh-CN',
  base: '/BeYourSelf-site/',
  ignoreDeadLinks: ['/journal/'],
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
        { text: '设计原则', link: '/ideas/principles' }
      ],
      '/journal/': [
        { text: '日志索引', link: '/journal/' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sunny94-china/BeYourSelf-site' }
    ],
    search: { provider: 'local' }
  }
})
