<template>
  <div>
    <h1 v-text="msg"></h1>
    <h4 class="demo">学生姓名：{{name}}</h4>
    <button @click="sendStudentNameToApp">点我给兄弟组件School传递学生名</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            msg: '欢迎，',
            name: '张三'
        }
    },
    methods:{
      sendStudentNameToApp(){
        // Vue的原型对象上属性可以通过原型链获取到
        this.$bus.$emit('studentName',this.name);
      }
    }
}
</script>