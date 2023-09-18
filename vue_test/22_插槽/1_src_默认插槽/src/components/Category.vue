<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- slot标签就是插槽，相当于占位符。可以不传递插槽值过来，那么默认就显示其内部元素 -->
    <slot>
        <font color="red">不传递插槽值，默认显示！</font>
    </slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title','items']
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