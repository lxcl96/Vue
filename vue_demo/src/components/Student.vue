
<template>
  <div>
    <h1 v-text="msg"></h1>
    <!-- 使用自定义过滤器 已经挂载到Vue原型上了 -->
    <h4>学生姓名：{{name|myFilter}} </h4>
    <input type="text" v-fbind:value="name" />
    <!-- hello=this.hello这里的this就是vc -->
    <button @click="hello">hello</button>
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