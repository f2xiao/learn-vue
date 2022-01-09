<template>
  <div class="movies-container">
    <h1>Movies</h1>
    <ul>
      <li> <router-link to="/movies/1">Loki</router-link></li>
      <li> <router-link to="/movies/2">Captain American</router-link></li>
      <li><router-link to="/movies/3">Hulk</router-link>
    <router-view></router-view></li>
    </ul>
      
   
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.movies-container {
  min-height: 300px;
  background: orange;
}
</style>
