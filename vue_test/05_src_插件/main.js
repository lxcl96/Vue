import Vue from 'vue'
import App from './App'
import plugins from './plugins'

Vue.config.productionTip = false;
Vue.use(plugins,22,111,333)

new Vue({
    render: h => h(App)
}).$mount('#app')