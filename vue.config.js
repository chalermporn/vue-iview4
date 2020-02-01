// https://cli.vuejs.org/config/
module.exports = {
  productionSourceMap: false,
  lintOnSave: true,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
        // https://github.com/iview/iview-admin/issues/841
      }
    }
  },
  transpileDependencies: [
    'iview',
    'view-design'
  ],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('iview-loader')
      .loader('iview-loader')
      .options({
        prefix: true
      })
  }
}
