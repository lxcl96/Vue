import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
// 导入Store 等价于import store from './Store/index'
import store from './Store'


Vue.config.productionTip = false;
// 使用插件
Vue.use(vueResource);
new Vue({
    render: h => h(App),
    // 配置store
    store,////es6同名赋值简写 s必须小写
    beforeCreate(){
        Vue.prototype.$bus=this
    }
}).$mount('#app')