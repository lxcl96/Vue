
<template>
  <div>
    <h1 v-text="msg"></h1>
    <!-- 使用自定义过滤器 已经挂载到Vue原型上了 -->
    <h4 class="demo">学生姓名：{{name}} </h4>
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
    }
}
</script>
<style lang='less' scoped>
.demo{
  background-color: blue;
}
</style>