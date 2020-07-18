import pkg from './package'
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
export default {
  serverMiddleware: [
    // Will register file from project api directory to handle /api/* requires
    // { path: '/api', handler: '~/api/contact.js' }
    '~/api/contact.js'
  ],
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Cuidado del Cabello | Capilab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Capilab ofrece los mejores tratamientos reparadores para mejorar la salud del cabello, los elaboramos de manera artesanal y con la mayor calidad posible.' },
      { hid: 'keywords', name: 'keywords', content: 'Tratamiento capilar botox, Cabello seco y con frizz, Cabello dañado por decoloración, Reparación capilar, Limpieza profunda, Producto artesanal, Tratamiento reparador para el cabello, Cuidado del cabello, Tratamientos para el cabello, Cabello virgen' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://capilab.com.mx' }
    ]
  },
  server: {
    port: 3000, // default: 3000
    // host: '192.168.100.4' // default: localhost
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true,
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(vue)$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  rules: [
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }
  ]
}
