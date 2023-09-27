import Vue from 'vue'
import App from './App.vue'
// 引入需要的elementui库(用到什么标签就去掉el然后首字母大写)
import {Button,Row} from 'element-ui'
//样式就不许单独引入了，会自动按需引入

// 使用需要的插件库，注册为全局组件,
//第一个为组件名，默认是<el-button>当然你可以自定义，那么使用时就需要保持一致
Vue.component(Button.name,Button)
Vue.component('ly-row',Row)


Vue.config.productionTip = false
new Vue({
    // h其实就是createElement
    render:h=>h(App)
}).$mount('#app')