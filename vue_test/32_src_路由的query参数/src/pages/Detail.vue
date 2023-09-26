<template>
    <ul>
        <!-- <li>消息编号：{{this.$route.query.id}}</li>
        <li>消息标题：{{this.$route.query.title}}</li> -->
        <li>消息编号：{{this.$route.params.id}}</li>
        <li>消息标题：{{this.$route.params.title}}</li>
    </ul>
</template>

<script>
export default {
    name:'Detail',
    mounted(){
        console.log(this.$route);
    }
}
</script>

<style>

</style>