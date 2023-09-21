export default {
    namespaced:true,
    actions:{
        addOdd(context,value){
            // console.log('mutations -add',context.state,value);
            // console.log(context);
            if(context.state.sum % 2) {
                context.commit('ADD',value);
            }
        },
        addWait(context,value){
            // console.log(context);
            setTimeout(() => {
                context.commit('ADD',value);
            }, 1000);
        }
    },
    mutations:{
        ADD(state,value,e){
            state.sum += value;
        },
        SUB(state,value){
            state.sum -= value;
        },
    },
    state:{
        sum:0
    },
    getters:{
        bigSum(state){
            return state.sum*10;
        }
    }
}