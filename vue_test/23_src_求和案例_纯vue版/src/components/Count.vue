<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <!-- 通过select选择会将select的值变为字符串，
        两种解决方式：
            1、<select v-model:value.number='number'>
            2、<option :value="1">1</option>
     -->
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
export default {
    name:'Count',
    data(){
        return {
            sum:0,
            number:1
        }
    },
    methods:{
        add(){
            this.sum+=this.number;
        },
        sub(){
            this.sum-=this.number;
        },
        addOdd(){
            if(this.sum%2){
                this.sum+=this.number;
            }
        },
        addWait(){
            setTimeout((a)=>{
                // console.log(a);
                this.sum+=this.number;
            },1000)
        }
    }
}
</script>
<style scoped>
*{
    margin: 5px;
}
</style>