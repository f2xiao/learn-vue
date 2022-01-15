<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/home"
        ><van-icon class-prefix="ico" name="moon" /> Home</van-tabbar-item
      >
      <van-tabbar-item replace to="/user">User</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
#app {
  @font-face {
    font-family: "ico";
    src: url("./assets/fonts/icomoon.ttf") format("truetype");
  }

  .ico {
    font-family: "ico";
    font-size: 20px;
  }

  .ico-moon::before {
    content: "\e900";
  }
}
</style>
