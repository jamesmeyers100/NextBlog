const withCSS = require('@zeit/next-css')

module.exports = withCSS({
exportPathMap: function() {
    return {
      '/': { page: '/' },
    //   '/about': { page: '/about' },
      // '/posts/hello-nextjs': { page: '/post', query: { title: 'Hello Next.js' } },
      // '/posts/learn-nextjs': { page: '/post', query: { title: 'Learn Next.js is awesome' } },
      // '/posts/deploy-nextjs': { page: '/post', query: { title: 'Deploy apps with Zeit' } }
    }
  }
})

// module.exports = withCSS({
//   webpack(config, options) {
//     return config
//   }
// })