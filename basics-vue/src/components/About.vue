<template>
  <div class="about-container">
    <h1>About</h1>
    <ul>
      <li><router-link to="/about">Left</router-link></li>
      <li><router-link to="/about/right">Right</router-link></li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.about-container {
  padding: 50px;
  min-height: 300px;
  background: skyblue;
}
</style>
