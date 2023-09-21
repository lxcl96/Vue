export default {
    namespaced:true,
    actions:{
        addPerson(context,value){
            console.log(value);
            if(value.trim()==""||value.trim().length==0){
                alert("不允许为空！")
                return;
            }
            context.commit('ADDPERSON',value)
        }
    },
    mutations:{
        ADDPERSON(state,value){
            state.people.push(value);
        }
    },
    state:{
        people:['张三']
    },
    getters:{
        // getters有个参数就是state
        latestPerson(state,a,b,c,d){
            // console.log(state,a,b,c,d);
            return state.people[state.people.length-1]
        }
    }
}