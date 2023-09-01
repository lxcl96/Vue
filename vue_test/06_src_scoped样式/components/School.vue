
<template>
  <div>
    <h4>学校：{{name}} </h4>
  </div>
</template>

<script>

export default {
    name:'Student',
    data(){
        return {
            name: '弱智学院'
        }
    }
}
</script>
<style scoped>
.demo{
  background-color: orange;
}
</style>