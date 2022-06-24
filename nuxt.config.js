import ar from './i18n/ar'
import en from './i18n/en'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RealVest',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [   
      '@/assets/global.css',   
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    // defaultLocale: 'ar',
    detectBrowserLanguage: false,
    strategy: process.env.NODE_ENV == 'development' ? 'no_prefix' : 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: en,
        ar: ar,
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
