// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: 'app',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/supabase',
    '@nuxt/icon',
    '@nuxtjs/sanity',
  ],
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui'
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/register', '/about'],
    },
  },
  // loading config
  // ssr: false,  
  // spaLoadingTemplate: true,
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          sizes: '16x16 32x32 48x48',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        }
      ]
    }
  },
  sanity: {
    projectId: '你的项目ID',
    dataset: 'production', // 默认通常是 production
    useCdn: true, // 开启后响应更快且更省流量（SSR推荐）
    apiVersion: '2026-01-01' // 建议使用当前日期
  },
})