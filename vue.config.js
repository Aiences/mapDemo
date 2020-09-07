module.exports = {
  devServer: {
    host:"0.0.0.0",//要设置当前访问的ip 否则失效
    open: true, //浏览器自动打开页面
    proxy: {
      '/api': {
        target: '目标网址',
        // ws: true, 
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}