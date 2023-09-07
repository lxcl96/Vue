<template>
  <div>
    <h1 v-text="msg"></h1>
    <h4 class="demo">学生姓名：{{name}}</h4>
    <button @click="sendStudentNameToApp">点我给兄弟组件School传递学生名</button>
  </div>
</template>

<script>
// 引入第三方库
import pubsub from 'pubsub-js'
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
        // 发布指定消息 第一个参数为指定消息名，第二个参数为要传递的数据
        pubsub.publish('demo',this.name);
      }
    }
}
</script>