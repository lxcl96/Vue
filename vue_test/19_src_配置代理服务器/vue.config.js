const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // pages: {
  //   index: {
  //     //重置入门文件
  //     entry: 'index.js'
  //   }
  // },
  //关掉js语法检查
  lintOnSave:false,
  // devServer:{
  //   proxy: 'http://localhost:5000'
  // },
  devServer: {
    proxy: {
      //这个前缀(紧跟端口后面的)自己加的，用于筛选
      '/api': { 
        target: 'http://localhost:5000',//后端服务器实际地址,根据实际要不要加路径
        ws: true,//是否使用websocket模式
        /*
          将请求路径重写，去掉自己加的前缀
          如：前端配的是http://localhost:8080/api/students，前缀是/api复合，
          就使用路径重写规则，将路径重写且转发变为http://localhost:5000/students

        */
        pathRewrite:{
          '^/api':''//key为请求路径（被替换的），支持正则，value为替换的值
        },
        /*
          是否改变请求头host的值
          false：不改变，仍为实际地址和端口
          true：改变，变为target路径的端地址和端口
        */
        changeOrigin: true
      }
    }
  }
})
