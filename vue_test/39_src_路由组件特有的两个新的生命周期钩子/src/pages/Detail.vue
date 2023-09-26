<template>
    <ul>
        <!-- <li>消息编号：{{this.$route.query.id}}</li>
        <li>消息标题：{{this.$route.query.title}}</li> -->
        <!-- <li>消息编号：{{this.$route.params.id}}</li>
        <li>消息标题：{{this.$route.params.title}}</li> -->
        <li>消息编号：{{id}}</li>
        <li>消息标题：{{title}}</li>
    </ul>
</template>

<script>
export default {
    name:'Detail',
    // mounted(){
    //     console.log(this.$route);
    // },
    //子组件通过props属性接收
    props:['id','title']
}
</script>

<style>

</style>