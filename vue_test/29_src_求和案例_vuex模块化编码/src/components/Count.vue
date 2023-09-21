<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <h2>当前BigSum为：{{bigSum}}</h2>
    <h2 style="color:red">下方人员的总人数为：{{people.length}}</h2>
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
        // 表示从store中找命名空间为CountInfo的state
       ...mapState('CountInfo',['sum']),
       ...mapState('PersonInfo',['people']),
       ...mapGetters('CountInfo',{bigSum:'bigSum'})
    },
    methods:{
        ...mapMutations('CountInfo',['ADD']),
        sub(){
            console.log(this);
            /**
             * 常规的用法 必须加上nameSpace才能找到 'namespace值/actions函数名'（mutations同理）
             */
            // 不用mapXXX正常的用法，需要去$store分析
            this.$store.commit('CountInfo/SUB',this.number);
        },
       ...mapActions('CountInfo',['addOdd']),
        addWait(){
            this.$store.dispatch('CountInfo/addWait',this.number);
        }
    }
}
</script>
<style scoped>
*{
    margin: 5px;
}
</style>