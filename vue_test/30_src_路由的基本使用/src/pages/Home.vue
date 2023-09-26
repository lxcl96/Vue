<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
    name:'Home',
    mounted(){
      // console.log("Home被挂载了。。。");
      console.log(this);
    },
    // beforeDestroy(){
    //   console.log("Home被销毁了。。。");
    // }
}
</script>