module.exports = {
  publicPath: "/eyes",
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      "/api/v1": {
        target: "http://www.example.org",
        changeOrigin: true,
        ws: true
      }
    }
  }
};
