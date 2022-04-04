<template>
   <div class="navbar">
       <div class="links">
      <ul class="nav">
        <li><router-link :to="{path:'/'+navToA}">{{navToA}}</router-link></li>
        <li><router-link :to="{path:'/'+navToB}">{{navToB}}</router-link></li>
        <li><router-link :to="{path:'/'+navToC}">{{navToC}}</router-link></li>
        <li><router-link :to="{path:'/'+navToD}">{{navToD}}</router-link></li>
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
export default {
    name: "Navbar",
    props:['navToA','navToB','navToC','navToD']
}
</script>

<style>
 ul,
  li,
  a {
    list-style: none;
    text-decoration: none;
    height: 30px;
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

</style>