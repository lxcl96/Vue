<template>
  <div class="demo">
    <h4>学校：{{name}} </h4>
  </div>
</template>

<script>
// 引入第三方库
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data(){
        return {
            name: '弱智学院',
            stuName:""
        }
    },
    mounted(){
      // 订阅消息，第一个参数为消息名称，第二个参数为回调函数【发布者发布demo消息后会自动调用】
      // 回调函数有两个参数：1、消息名称，2、接受到的数据
      // 注意subscribe函数会返回一个pid，在取消订阅时使用
      this.pid=pubsub.subscribe('demo',(msgName,data)=>{
        // 常规函数方式里面this会丢失，箭头函数会自动找上一级
        this.stuName=data;
        console.log("接受到来自student组件的数据:" + this.stuName);
      })
    },
    beforeDestory(){
      // 取消订阅消息（注意这个和事件不一样），参数是pid而不是消息名称 
      pubsub.unsubscribe(this.pid);
    }
}
</script>