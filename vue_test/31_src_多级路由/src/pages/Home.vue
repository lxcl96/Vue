<template>
  <div>
    <h2>我是Home的内容</h2>
    <!-- 路由嵌套 即多级路由 -->
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link >
      </li>
      <li>
        <router-link  class="list-group-item" active-class="active" to="/home/message">Message</router-link >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Home',
    mounted(){
      // console.log("Home被挂载了。。。");
      // console.log(this);
    },
    // beforeDestroy(){
    //   console.log("Home被销毁了。。。");
    // }
}
</script>