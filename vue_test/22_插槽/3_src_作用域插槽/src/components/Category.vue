<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 作用域插槽，v-bind 传递数据给父组件 -->
    <slot :games="games">
        <font color="red">不传递插槽值，默认显示！1</font>
    </slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data(){
      return {
        games:['红色警戒','穿越火线','劲舞团','超级玛丽']
      }
    }
}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}

/* 自带的样式，如果父组件也有img样式，则共存，冲突的以子组件的为准 */
img{
    width: 100%;
}
</style>