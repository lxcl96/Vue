<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <br>
    <!-- 
        transition里面必须只能是一个标签
        方法1：用一个整体的div包裹
            <transition name="show" appear>
                <div>
                    <h1 v-show="isShow">你好啊！</h1>
                    <h1 v-show="isShow">张三</h1>
                </div>
            </transition>
        方法2：使用transition-group标签
     -->
    <transition-group name="show" appear>
        <h1 v-show="isShow" key="1">你好啊！</h1>
        <h1 v-show="isShow" key='2'>张三</h1>
    </transition-group>
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
/* 要求：两个标签同时从左侧滑入屏幕，再从屏幕滑出左侧 */
.show-enter,.show-leave-to{ 
    transform: translateX(-100%);
}
.show-enter-active,.show-leave-active{
    transition: .5s linear;
}
.show-enter-to,show-leave{
    transform: translateX(0);
}


</style>