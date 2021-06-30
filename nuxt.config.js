export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'communication-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/i18n', '~/plugins/vue-observe-visibility.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components', '~/components/templates'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://http.nuxtjs.org/
    '@nuxt/http',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
  ],

  // Http module configuration: https://http.nuxtjs.org/options
  http: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
      },
      {
        code: 'ko',
        iso: 'ko-KR',
        file: 'ko-KR.js',
        name: '한국어',
      },
    ],
    vueI18n: {
      fallbackLocale: 'ko',
    },
    defaultLocale: 'ko',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
