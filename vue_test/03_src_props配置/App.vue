// props使用
<template>
    <div>
        <Student name="张三" sex="男" :object="object" :json="{'value':'i am  props object value by json string','text':'...'}" /> <hr>
    </div>
</template>
    
<script>
    import Student from './components/Student.vue'
    export default {
        name: 'App',
        data(){
            return {
                object:{
                    value: "i am  props object value",
                    text: "..."
                }
            }
        },
        components: {Student}
    }
</script>
