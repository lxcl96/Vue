// ref 使用
<template>
    <div>
        <!-- vue必须在一个标签内 -->
        <h1 v-text="msg" ref="title" id="title"></h1>
        <br>
        <button @click="show">点我输出上方dom元素</button>
        <br>
        <School ref="stu" id="stu"/>
    </div>
</template>
<script>
import School from './components/School'
export default {
    name:"App",
    data(){
        return {
            msg:"你好ref"
        }
    },
    methods:{
        show(){
            var d1=document.getElementById("title");
            console.log(d1);
            //html标签获取到的就是dom元素
            console.log(this.$refs.title);
            //组件获取到的就是vc
            console.log(this.$refs.stu);
        }
    },
    components:{School}
}
</script>