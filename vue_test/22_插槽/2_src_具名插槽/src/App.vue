<template>
  <div class="container">
    <!-- slot插槽之具名插槽，通过name属性值用于使用指定插槽
       -->
    <Category :title="美食" :items="foods">
      <!-- dom元素中使用slot指定name值 -->
      <img slot='center' src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
      <a href="#" slot="bottom">欢迎品尝</a>
    </Category>
    <Category :title="游戏" :items="games">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <!-- 父组件中多个slot属性值会叠加，不会覆盖 -->
      <a href="#" slot="bottom">单机游戏 &nbsp</a>
      <a href="#" slot="bottom">网络游戏</a>
    </Category>
    <Category :title="电影" :items="films">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"/>
      <!-- 当有多个slot属性值时，可以使用template,没错就是template中使用template
          slot搭配template简写为:v-slot:name值 （没有引号，中间是冒号,只能搭配template使用）
         -->
        <template v-solt:bottom>
          <a href="#" >经典</a> 
          <a href="#" >推荐</a>
          <a href="#" >热销</a>
        </template>

        <!-- 比这种方法省了一层div结构 -->
        <!-- <div slot="bottom"> 
          <a href="#" >经典</a> 
          <a href="#" >推荐</a>
          <a href="#" >热销</a>
        </div> -->
    </Category>
  </div>
</template>
    
<script>
import Category from './components/Category.vue'
export default {
    name: 'App',
    components: {Category},
    data(){
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
      }
    }
}
</script>
<style>
/* 设置三个并列 */
.container{
  display: flex;
  justify-content: space-around;
}
 /* 样式定义在父组件，那么插槽值（Category标签内元素）解析带有此样式，传入子组件Category中 */   
video{
  width: 100%;
}

img{
    width: 100px;
    height: 100px;
}
</style>