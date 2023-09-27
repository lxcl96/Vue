import Vue from 'vue'
import App from './App.vue'
// 引入全部的elementui库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 使用该插件库
Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
    // h其实就是createElement
    render:h=>h(App)
}).$mount('#app')