
<template>
  <div class="demo">
    <h4>学校：{{name}} </h4>
    <!-- 自定义事件绑定到子组件实例上(即vc) -->
    <button @click="sendSchoolNameToApp">点我给App传递学院名</button>
    <button @click="unbindSchool">点我解绑School的自定义事件</button>
  </div>
</template>

<script>

export default {
    name:'School',
    data(){
        return {
            name: '弱智学院'
        }
    },
    methods:{
      sendSchoolNameToApp(){
        // this.$emit(自定义事件名,data1,data2,..) 这是触发事件动作
        this.$emit('sendToUp',this.name);
        // this.$emit('secondEvent');
        // this.$emit('click');
      },
      unbindSchool(){
        // $off解绑
        // this.$off('sendToUp');//解绑一个自定义事件，即secondEvent事件还是会被触发
        // this.$off(['sendToUp','secondEvent']);//解绑多个自定义事件
        this.$off();//解绑当前组件的所有自定义事件
      }
    }
}
</script>
<style scoped>
.demo{
  background-color: orange;
  padding: 5px;/*内边距*/
  margin-top: 30px;
}
</style>