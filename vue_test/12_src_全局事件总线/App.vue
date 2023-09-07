<template>
    <div class="demo1">
        <Student />
        <School />
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name: 'App',
        components: {Student,School},
    }
</script>
<style lang='css' scoped>
.demo1{
  background-color: gray;
  padding: 5px;/*内边距*/
}
</style>