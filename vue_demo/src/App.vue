<template>
  <div class="container">
    <user-search />
    <user-list />
  </div>
</template>
    
<script>
import UserSearch from './components/UserSearch.vue'
import UserList from './components/UserList.vue'
export default {
    name: 'App',
    components: {UserSearch,UserList}
}
</script>


<style>
/*  <style src='../public/css/bootstrap.css'> */
/* @import '../public/bootstrap.css'; */
</style>
