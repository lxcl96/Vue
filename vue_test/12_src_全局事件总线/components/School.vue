<template>
  <div class="demo">
    <h4>学校：{{name}} </h4>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name: '弱智学院',
            stuName:""
        }
    },
    mounted(){
      // console.log(this);
      // $on 绑定事件 第二参数为事件被触发时的回调函数
      this.$bus.$on("studentName",(data)=>{
        this.stuName=data;
        alert("接受到来自student组件的数据:" + this.stuName);
      });
    },
    // 在销毁前解绑事件，更标准，因为这个是通用组件
    beforeDestory(){
      // 注意要指定解绑的事件名字
      this.$bus.$off('studentName')
    }
}
</script>