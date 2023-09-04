
<template>
  <div>
    <h1 v-text="msg"></h1>
    <!-- 使用自定义过滤器 已经挂载到Vue原型上了 -->
    <h4 class="demo">学生姓名：{{name}}</h4>
    <button @click.once="sendStudentNameToApp">点我给App传递学生名</button>
  </div>
</template>

<script>

export default {
    name:'Student',
    props:['receiveStudentName'],
    data(){
        return {
            msg: '欢迎，',
            name: '张三'
        }
    },
    methods:{
      sendStudentNameToApp(){
        this.receiveStudentName(this.name);
      }
    }
}
</script>
<style lang='css' scoped>
.demo{
  background-color: blue;
  padding: 5px;/*内边距*/
}
</style>