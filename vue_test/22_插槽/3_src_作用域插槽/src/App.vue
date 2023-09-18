<template>
  <div class="container">
    <!-- 作用域插槽 接受子组件数据 -->
    <Category :title="游戏">
       <!-- 必须是template+scope-->
      <template scope="dataObj">
        <ul>
          <li v-for="(item,index) in dataObj.games" :key="index">{{item}}</li>
        </ul>
      </template> 
    </Category>
    <!-- 个性化 同一数据 -->
    <Category :title="游戏">
       <!-- 必须是template+scope-->
      <template scope="dataObj">
        <ol>
          <li v-for="(item,index) in dataObj.games" :key="index">{{item}}</li>
        </ol>
      </template> 
    </Category>
    <!-- 个性化 同一数据 -->
    <Category :title="游戏">
       <!-- 必须是template+scope-->
      <template scope="dataObj">
        <ol>
          <h4 v-for="(item,index) in dataObj.games" :key="index">{{item}}</h4>
        </ol>
      </template> 
    </Category>
  </div>
</template>
    
<script>
import Category from './components/Category.vue'
export default {
    name: 'App',
    components: {Category}
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