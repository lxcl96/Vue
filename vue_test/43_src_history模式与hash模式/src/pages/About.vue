<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    // mounted(){
    //   console.log("About被挂载了。。。");
    //   console.log(this);
    // },
    // beforeDestroy(){
    //   console.log("About被销毁了。。。");
    // }
    // 组件内置路由 调用时机：进入组件前
    beforeRouteEnter(to,from,next){
      console.log(to,from);
      if(confirm("确定要进入About组件？")) {
        next();
      }
    },
    //调用时机：离开组件前
    beforeRouteLeave(to,from,next){
      console.log(to,from);
      if(confirm("确定要离开About组件？")) {
        next();
      }
    }
}
</script>