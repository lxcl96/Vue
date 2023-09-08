<template>
    <div>
      <button @click="getStuInfo">点我获取学生信息</button>
    </div>

</template>
    
<script>
import axios from 'axios'
export default {
    name: 'App',
    methods: {
      getStuInfo(){
        axios.get(
          // 'http://localhost:5000/students', //开启代理前
          'http://localhost:8080/api/students',//开启代理后
        ).then(
          response=>{
            console.log(response);
          },
          err=>{
            console.log(err);
          }
        )
      }
    }
}
</script>
