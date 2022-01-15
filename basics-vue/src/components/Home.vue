<template>
  <div class="home-container">
    <h1>Home</h1>
    <button @click="isShow = !isShow">Show or Hide</button>
    <h2 v-show="isShow" class="enter">Welcome!</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style lang="less" scoped>
.home-container {
  padding: 50px;
  min-height: 300px;
  background: pink;

  h2 {
    background-color: lightblue;
  }

  .enter {
    animation: show 0.5s;
  }
  .leave {
    animation: show 0.5s reverse;
  }

  @keyframes show {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
}
</style>
