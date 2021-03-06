
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_display_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.npm_package_display_name || ''},
      { hid: 'og:title', property: 'og:title', content: process.env.npm_package_name_display_name || '' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://rabada.herokuapp.com' },
      { hid: 'og:description', property: 'og:description', content: process.env.npm_package_description },
      { hid: 'og:image', property: 'og:image', content: 'https://rabada.herokuapp.com/ogp.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:creator', property: 'twitter:creator', content: '@at_946' },
      { hid: 'twitter:text:title', property: 'twitter:text:title', content: process.env.npm_package_description },
      { hid: 'google-site-verification', name: 'google-site-verification', content: "V9WZccOAwvnBmRzeEdzhq9jto4S65oKS2gACDRpRbhA" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/localStorage.js', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: process.env.GA_ID || ''
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-material-design-icons'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
