<template>
  <div>
    <h2 style="color:red">上方组件的求和为：{{sum}}</h2>
    <h2>人员列表</h2>
    <input type="text" placeholder="请输入名字" v-model="person"> <button @click="addPerson(person)">添加</button>
    <ul>
        <font v-show="!people.length">还没有人员，请添加！</font>
        <li v-for="(person,index) in people" :key="index">{{person}}</li>
    </ul>
  </div>
</template>

import { mapState,mapActions } from "vuex";
export default {
    name:"Person",
    data(){
        return {person:''}
    },
    computed:{
        ...mapState(['people','sum'])
    },
    methods:{
        ...mapActions({addPerson:'addPerson'})
    }
}
</script>

<style>

</style>