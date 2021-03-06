module.exports = {
  lintOnSave: false,
  publicPath: "/",
  configureWebpack: {
    devtool: 'eval-source-map',
    devServer: {
      // hot: false,
      proxy : "http://localhost:3344/",
      liveReload: false,
      overlay: {
        warnings: false,
        // errors: false,
      },
    },
  },
};
