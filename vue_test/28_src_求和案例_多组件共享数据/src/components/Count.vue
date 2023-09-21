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
       ...mapState(['sum','people']),
       ...mapGetters({bigSum:'bigSum'})
    },
    methods:{
        ...mapMutations(['ADD']),
        sub(){
            this.$store.commit('SUB',this.number);
        },
       ...mapActions(['addOdd']),
        addWait(){
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