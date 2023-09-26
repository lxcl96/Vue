import Vue from 'vue'
// 引入插件
import vueRoute from 'vue-router'
// 引入组件，用于路由跳转
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 使用插件
Vue.use(vueRoute)

// 创建并暴露自己的路由器
export default new vueRoute({
    // 配置路由规则 ,必须是数组
    routes:[
        // 可以有多组路由规则
        {
            path:'/about',
            component: About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})