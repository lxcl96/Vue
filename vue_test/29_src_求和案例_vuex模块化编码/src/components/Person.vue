<template>
  <div>
    <h2 style="color:red">上方组件的求和为：{{sum}}</h2>
    <h2>人员列表</h2>
    <h2>最新添加的人为：{{latestPerson}}</h2>
    <input type="text" placeholder="请输入名字" v-model="person"> <button @click="addPerson(person)">添加</button>
    <ul>
        <font v-show="!people.length">还没有人员，请添加！</font>
        <li v-for="(person,index) in people" :key="index">{{person}}</li>
    </ul>
  </div>
</template>

<script>
import { Store } from "vuex";

import { mapState,mapActions } from "vuex";
export default {
    name:"Person",
    data(){
        return {person:''}
    },
    computed:{
        ...mapState('CountInfo',['sum']),
        ...mapState('PersonInfo',['people']),
        latestPerson(){
            // console.log(this);
            // 这样写不对 因为键为 PersonInfo/latestPerson 只能用['xxx']这种
            // return this.$Store.getters.PersonInfo.latestPerson;
            return this.$store.getters['PersonInfo/latestPerson'];
        }
    },
    methods:{
        ...mapActions('PersonInfo',{addPerson:'addPerson'})
    }
}
</script>

<style>

</style>