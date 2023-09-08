<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <br>
    <!-- 选则自己喜欢动画 
    去https://animate.style/ 查找 直接复制
    -->
    <transition-group 
        name="animate__animated animate__bounce" 
        appear
        enter-active-class="animate__bounce"
        leave-active-class="animate__rubberBand"
        >
        <h1 v-show="isShow" key="1">你好啊！</h1>
        <h1 v-show="isShow" key='2'>张三</h1>
    </transition-group>
  </div>
</template>

<script>
// 引入动画库 animate.css
import "animate.css"
export default {
    name:"Test",
    data(){
        return{isShow:true}
    }
}
</script>

<style scoped>
h1{
    background-color: orange;
}


</style>