<template>
  <div>
    <div class="card">
        <a :href="userInfo.html_url" target="_blank">
          <img :src="userInfo.avatar_url" style='width: 100px' />
        </a>
        <p class="card-text">{{userInfo.login}}</p>
      </div>
  </div>
</template>

<script>
// import '../../public/css/bootstrap.css'
export default {
    name:'User',
    props:['userInfo']
}
</script>

<style scoped>
@import '../../public/css/index.css';
</style>