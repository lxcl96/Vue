import Vue from 'vue'
import App from './App'
//引入mixin文件
import {mixin} from './mixin'

Vue.config.productionTip = false;
//挂载到全局vue上
Vue.mixin(mixin)

new Vue({
    render: h => h(App)
}).$mount('#app')