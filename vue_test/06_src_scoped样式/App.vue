<template>
    <div>
        <Student class="demo" /> <hr>
    </div>
</template>
    
<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name: 'App',
        components: {Student}
    }
</script>
<style lang='css' scoped>
.demo{
  background-color: red;
}
</style>