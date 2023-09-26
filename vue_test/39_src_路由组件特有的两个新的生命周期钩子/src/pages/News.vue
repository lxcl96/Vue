<template>
    <ul>
        <li :style="{opacity:num}">你好</li>
        <li>news001 <input type="text"/></li>
        <li>news002 <input type="text"/></li>
        <li>news003 <input type="text"/></li>
    </ul>
</template>

<script>
export default {
    name:'News',
    data(){
        return {num:1}
    },
    beforeDestroy(){
        console.log("News组件即将被销毁！");
        // clearInterval(this.timer)
    },
    //当前组件激活时才允许运行此定时器
    activated(){
        this.timer=setInterval(()=>{
            if(this.num>0){
                this.num -= 0.1
            }else {
                this.num =1
            }
            console.log('News 组件被激活了@');
        },100)
    },
    deactivated(){
        clearInterval(this.timer)
        console.log('News 组件失活活了@');
    }
    // mounted(){
    //     this.timer=setInterval(()=>{
    //         if(this.num>0){
    //             this.num -= 0.1
    //         }else {
    //             this.num =1
    //         }
    //         console.log('@');
    //     },100)
    // }
}
</script>