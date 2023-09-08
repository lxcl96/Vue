<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <br>

    <!-- 
        1、指定了name就用 show-enter/leave-active
        2、appear等同于 :appear="true" 类似于checked

     -->
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

/* 
    Transition标签默认使用 .v-enter-active, .v-leave-active
    如果有name属性，那么就用改为 实际的name-enter-active,实际的name-leave-active
*/
.show-enter-active{
    animation: change 1s linear;
}
.show-leave-active{
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