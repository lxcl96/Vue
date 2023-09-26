<template>
  <div>
    <h2>我是Home的内容</h2>
    <!-- 路由嵌套 即多级路由 -->
    <ul class="nav nav-tabs">
      <li>
        <router-link  class="list-group-item" active-class="active" to="/home/news">News</router-link >
      </li>
      <li>
        <router-link  class="list-group-item" active-class="active" to="/home/message">Message</router-link >
      </li>
    </ul>
    <hr>
    <!-- 保证组件一直是挂载状态，即被缓存起来
       + 不加include默认是所有组件（News+message）
       + 加了include则只缓存指定组件
       + include中是组件的名字（News.vue中name属性）
       + 多个组件写成数组 :include="['News','Message']"
       -->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
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