<template>
  <div id="app">
    <h1>App Root Comp</h1>
    <hr />
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/movies">Movies</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    
    
    
 
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
ul,li{
  list-style: none;
}
</style>
