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
        target: "http://10.12.110.122:8081", //eyes测试环境
        changeOrigin: true,
        ws: true
      }
    }
  }
};
