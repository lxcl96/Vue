<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <h2>当前BigSum为：{{bigSum}}</h2>
    <select v-model:value.number='number'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <!-- $event获取当前事件，必须带参数不然是默认的事件 -->
    <button @click="ADD(number)">+</button>
    <button @click="sub">-</button>
    <!-- $event获取当前事件，必须带参数不然是默认的事件 -->
    <button @click="addOdd(number)">当前求和为奇数再加</button>
    <button @click="addWait">等一等再加</button>
  </div>
</template>

<script>
// 注意必修带{}
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
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
        // add(){
        //     // 不需要后端交互（额外处理），直接commit到Mutations
        //     this.$store.commit('ADD',this.number);
        // },
        /*
        mapMutations借助计算属性映射到vuex的mutations，即包含$store.commit()
            第一种写法：对象写法  ...mapMutations({ADD:'ADD'})//类似于结构体赋值
            第二种写法：数组写法  ...mapMutations(['ADD'])//即代表vc中有函数add且映射的mutations中有函数add（区分大小写，ADD不对）
        注意：vc中调用函数ADD必须带参数number，默认传递参数是event
        */
        ...mapMutations(['ADD']),
        sub(){
             // 不需要后端交互（额外处理），直接commit到Mutations
            this.$store.commit('SUB',this.number);
        },

        // addOdd(){
        //      // 可能后端交互（额外处理），分发到Actions
        //     this.$store.dispatch('addOdd',this.number);
        // },

        /*
        mapActions借助计算属性映射到vuex的mapActions，即包含$store.dispatch()
            第一种写法：对象写法  ...mapActions({addOdd:'addOdd'})//类似于结构体赋值
            第二种写法：数组写法  ...mapActions(['addOdd'])//即代表vc中有函数addOdd且映射的actions中有函数addOdd（区分大小写）
        注意：vc中调用函数addOdd必须带参数number，默认传递参数是event
        */
       ...mapActions(['addOdd']),
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