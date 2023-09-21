<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <h2>当前BigSum为：{{bigSum}}</h2>
    <select v-model:value.number='number'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addOdd">当前求和为奇数再加</button>
    <button @click="addWait">等一等再加</button>
  </div>
</template>

<script>
// 注意必修带{}
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
export default {
    name:'Count',
    data(){
        return {number:1}
    },
    computed: {
        /*
        mapState借助计算属性映射到vuex的state
            第一种写法：对象写法  ...mapState({sum:'sum'})//类似于结构体赋值
            第二种写法：数组写法  ...mapState(['sum'])//即代表计算属性ming为sum且映射的state中sum
        */
       ...mapState(['sum']),
       ...mapGetters({bigSum:'bigSum'})
    },
    methods:{
        add(){
            // 不需要后端交互（额外处理），直接commit到Mutations
            this.$store.commit('ADD',this.number);
        },
        sub(){
             // 不需要后端交互（额外处理），直接commit到Mutations
            this.$store.commit('SUB',this.number);
        },
        addOdd(){
             // 可能后端交互（额外处理），分发到Actions
            this.$store.dispatch('addOdd',this.number);
        },
        addWait(){
            // 可能后端交互（额外处理），分发到Actions
            this.$store.dispatch('addWait',this.number);
        }
    }
}
</script>
<style scoped>
*{
    margin: 5px;
}
</style>