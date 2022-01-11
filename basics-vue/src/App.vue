<template>
  <div id="app">
    <div class="links">
      <ul class="nav">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/movies">Movies</router-link></li>
        <li><router-link to="/books">Books</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <ul class="acct">
        <li><router-link to="/account">Account</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  ul,
  li,
  a {
    list-style: none;
    text-decoration: none;
    height: 50px;
  }

  .links {
    height: 50px;
  }
  li {
    float: left;
    width: 100px;
  }
  .nav {
    float: left;
  }
  .acct {
    float: right;
  }
}
</style>
