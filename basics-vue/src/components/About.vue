<template>
  <div class="about-container">
    <h1>About</h1>
    <router-link to="/about">Left</router-link>
    <router-link to="/about/right">Right</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.about-container {
  min-height: 300px;
  background: skyblue;
}
</style>
