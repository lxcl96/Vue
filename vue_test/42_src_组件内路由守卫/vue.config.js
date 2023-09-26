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
  lintOnSave:false
})
