module.exports = {
  router: {
    base: '/portfolio/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    htmlAttrs: [
      { class: 'wf-loading' }
    ],
    style: [
      { cssText: '.wf-loading { opacity: 0; visibility: hidden } .wf-active { opacity: 1; visibility: visible; transition: opacity .7s ease }', type: 'text/css' }
    ]
  },
  /*
  ** Global Styles
  */
  css: [
    {
      src: '~assets/styles/main.scss',
      lang: 'scss'
    }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    {
      src: '~plugins/webfontloader.config.js',
      ssr: false
    },
    {
      src: '~plugins/vue-waypoint.js',
      ssr: false
    },
    {
      src: '~plugins/vue-awesome.js',
      ssr: false
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'webfontloader'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      const cssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.scss$/')
      cssLoader.use.splice(2, 0, {
        loader: 'postcss-loader'
      })
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
