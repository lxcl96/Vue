import Vue from 'vue'
import Vuex from 'vuex'
// 引入模块组件
import CountInfo from './Count' 
import PersonInfo from './Person' 
// 必选在创建Store前使用vuex，否则会报错
Vue.use(Vuex)

// 创建并暴露store （注意是Store对象而不是Vuex）
export default new Vuex.Store({
    // 使用vuex 模块化
    modules:{
        // 还可以这样写可以指定自己的命名空间，否则继承自父类
        CountInfo,
        PersonInfo
    }
})