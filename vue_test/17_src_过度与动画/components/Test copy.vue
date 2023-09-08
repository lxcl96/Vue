<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <br>
    <transition>
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

/* 使用动画  默认就是from*/
.v-enter-active{
    animation: change 1s linear;
}
/* 使用动画  reverse就是to*/
.v-leave-active{
    /* 播放动画：动画名 持续事件 平滑播放 反转播放 */
    animation: change 1s linear reverse;
}
/* 定义动画 */
@keyframes change {
    /* from是动画来的关键字 */
    from{
        transform: translateX(-100%) ;
    }
    /* to是动画去的关键字 */
    to{
        transform: translateX(0px);
    }
}
</style>