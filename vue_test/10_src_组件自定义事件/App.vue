<template>
    <div class="demo1">
        <!-- 1.借助props属性实现子组件给父组件传递信息-->
        <Student :receiveStudentName="receiveStudentName" />

        <!-- 2.借助自定义组件实现子组件给父组件传递信息
                    这样就是父组件将自定义事件绑定给子组件的实例(即vc)
                第一种方法：标准写法
                v-on:sendToUp=""简写 @sendToUp=""
            -->
        <!-- <School v-on:sendToUp.once="receiveSchoolName"/> -->

        <!-- 3.借助自定义组件实现子组件给父组件传递信息
                    这样就是父组件将自定义事件绑定给子组件的实例(即vc)
                第二种方法：借助ref【这样可以直接通过$ref定位vc】 + mounted
                特别灵活,可以定制化事件生效时间
            -->
        <!-- <School ref="school" @secondEvent="demo" @click="show"/> -->
        <School ref="school" @secondEvent="demo" @click.native="show"/>
    </div>
</template>
    // 目的：子组件给父组件传递信息
    // 第一种方法：借助props属性
    // 第二种方法：通过组件自定义属性
    //   第一种写法：
    //   第二种写法：借助ref
<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name: 'App',
        components: {Student,School},
        methods:{
            receiveStudentName(name){
                console.log("接收到学生名：",name);
            },
            //  ...args是es6语法 表示args数组接受其余参数
            receiveSchoolName(name,...args){
                console.log("接收到学院名：",name);
            },
            demo(){
                console.log("第二个自定义事件触发了...");
            },
            show(){
                alert(123);
            }
        },
        mounted(){
            // 这里school就是标签上ref="school" 不是组件的名字 
            // $on表示当触发xxx事件，就执行回调 $once和$on功能一样，但是只触发一次
            // this.$refs.school.$on("sendToUp",this.receiveSchoolName);
            // this.$refs.school.$once("sendToUp");
            // this.$refs.school.$on("sendToUp",function (name) {
            //      console.log("接收到学院名：",name,this);
            // });
            this.$refs.school.$on("sendToUp",(name)=>{
                console.log("接收到学院名：",name,this);
            });

        }
    }
</script>
<style lang='css' scoped>
.demo1{
  background-color: gray;
  padding: 5px;/*内边距*/
}
</style>