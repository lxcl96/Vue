// 初始脚手架
/**
 * main.js为vue项目的入口文件
 */
//导入Vue
import Vue from 'vue'
//导入App组件，是所有组件的父组件
//import App from './App.vue'
//关闭vue生产提示
Vue.config.productionTip = false

//创建Vue实例对象
new Vue({
  //将App组件放入root容器中,
  //template:'<h1>你好</h1>'
  render(createElement){
    console.log(createElement);
    /***
     * createElement是一个函数，用于创建页面元素
     * 参数可以是组件，html元素
     */
    //render必须有返回值,且是创建的元素
    return createElement('h1','你好');
  }
  //render: h => h(App),
}).$mount('#app')
