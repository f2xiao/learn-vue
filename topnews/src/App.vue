<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" class="icon-moon-o">Home</van-tabbar-item>
      <van-tabbar-item replace to="/user" >User</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
@font-face {
  font-family: 'icomoon';
  src: url('./assets/fonts/icomoon.ttf') format('truetype');
}

[class^="icon-"], [class*=" icon-"] {
  font-family: 'icomoon';
  font-size:20px;
}

.icon-moon-o::before {
  content: '\e900';
}


</style>
