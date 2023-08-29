// props使用
<template>
  <div>
    <h1 v-text="msg"></h1>
    <h4>学生姓名：{{name}} </h4>
    <h4>学生性别：{{sex}} </h4>
    <h4>学生年龄：{{age}} </h4>
    <br>
    <h4>object:{{object}}</h4>
    <h4>object.value:{{object.value}}</h4>
    <br>
    <h4>json:{{json}}</h4>
    <h4>json.value:{{json.value}}</h4>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
      console.log(this);
        return {
            msg:'欢迎，'
        }
    },
    //props的简单配置
    //props: ['age','name','sex']
    //props的进阶配置
    /*
    props:{
      name:String,
      sex:String,
      age:Number
    }*/
    //props的高级配置
    props:{
      name:{
        type: String,
        required: true,
      },
      sex:{
        type: String,
        required: true,
      },
      age: {
        type: Number,
        default: 22
      },
      object: {
        type: Object
      },
      json: {
        type: Object
      }
    }
}
</script>

<style>

</style>