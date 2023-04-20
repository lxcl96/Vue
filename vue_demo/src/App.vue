<template>
    <div>
        <Student name="张三" sex="男" /> <hr>
    </div>
</template>
    
<script>
    import Student from './components/Student.vue'
    export default {
        name: 'App',
        components: {Student}
    }
</script>
