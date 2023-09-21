import Vue from 'vue'
import Vuex from 'vuex'

// 必选在创建Store前使用vuex，否则会报错
Vue.use(Vuex)

// 创建actions对象--用于响应组件中的动作
const actions ={
    // 第一个参数可以理解为mini $store，含有commit和state
    addOdd(context,value,e){
        console.log('mutations -add',state,value,e);
        if(context.state.sum % 2) {
            context.commit('ADD',value);
        }
    },
    addWait(context,value){
        console.log(context);
        setTimeout(() => {
            context.commit('ADD',value);
        }, 1000);
    }
}
//创建mutations对象--用于操作状态/数据（state）
const mutations ={
    //函数名推荐大写，与action区分 
    // 第一个参数为state数据，第二个参数为增量
    ADD(state,value,e){
        // console.log('mutations -add',state,value,e);
        state.sum += value;
    },
    SUB(state,value){
        state.sum -= value;
    }
}
// 创建state对象--用于存储数据
const state ={
    sum:0
}
// 创建getters对象--用于加工数据
const getters={
    bigSum(state){
        return state.sum*10;
    }
}
// 创建并暴露store （注意是Store对象而不是Vuex）
export default new Vuex.Store({
    actions,//es6同名赋值简写
    mutations,
    state,
    getters
})