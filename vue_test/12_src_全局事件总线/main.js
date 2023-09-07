import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
/* 全局事件总线 就是把第三者组件挂载到Vue原型上以供所有的vc使用 所以有两种方法：
	1、通过组件实例vc
    2、通过vm借助生命周期钩子函数
*/
//1、通过组件实例vc挂载
// const Bus =Vue.extend({});
// Vue.prototype.$bus=new Bus();
new Vue({
    render: h => h(App),
    // 2、通过vm借助生命周期钩子函数，更标准
    beforeCreate(){
        // 安装全局事件总线，$bus就是当前应用的vm
        Vue.prototype.$bus=this
    }
}).$mount('#app')