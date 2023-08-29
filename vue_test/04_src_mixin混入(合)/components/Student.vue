// mixin使用
<template>
  <div>
    <h1 v-text="msg"></h1>
    <h4 @click='showAlert'>学生姓名：{{name}} </h4>
  </div>
</template>

<script>
//引入公共文件
// import {mixin} from '../mixin'
//mixin使用
export default {
    name:'Student',
    data(){
        return {
            msg: '欢迎，',
            name: '张三'
        }
    },
    // mixins:[mixin]//必须是数组
}
</script>