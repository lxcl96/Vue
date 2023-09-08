<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <br>
    <transition name="show" appear>
        <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
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
/* 要求：从左侧滑入屏幕，再从屏幕滑出左侧 */
/* 使用过渡实现效果 过渡有6个阶段 */
/* 阶段1：进入起点 */
.show-enter{ 
    /* 定义起始位置 */
    transform: translateX(-100%);
}
/* 阶段2：进入的过程 */
.show-enter-active{
    /* 太快了，所以需要过程动画  注意关键字为：transition而不是animation */
    transition: .5s linear;
}
/* 阶段3：进入的终点 */
.show-enter-to{
    /* 定义终点位置 */
    transform: translateX(0);
}
/* 阶段4：离开的起点 */
.show-leave{
    /* 定义离开起始位置 */
    transform: translateX(0);
}
/* 阶段5：离开的过程  */
.show-leave-active{
     /* 太快了，所以需要过程动画 注意关键字为：transition而不是animation */
    transition: .5s linear;
}
/* 阶段6：离开的终点 */
.show-leave-to{
    /* 定义离开终点位置 */
    transform: translateX(-100%);
}

/*
    因为样式两两一样，所以可以合并写
    .show-enter,.show-leave-to{
        
    }

*/
</style>