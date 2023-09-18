<template>
  <div class="container">
    <!-- slot插槽之默认插槽，用于解决复用的多样性
      传递插槽值就是，将组件标签写成双标签，实际的元素写在其内部
       -->
    <Category :title="美食" :items="foods">
        <!-- 要显示的dom元素-->
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
    </Category>
    <Category :title="游戏" :items="games">
        <!-- 要显示的dom元素-->
      <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category :title="电影" :items="films">
        <!-- 要显示的dom元素-->
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"/>
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