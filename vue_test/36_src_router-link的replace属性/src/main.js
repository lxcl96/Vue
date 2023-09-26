import Vue from 'vue'
import App from './App.vue'
// 必须引入自己的路由器
import router from './route/index.js'

new Vue({
    // h其实就是createElement
    render:h=>h(App),
    router
}).$mount('#app')