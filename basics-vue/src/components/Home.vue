<template>
  <div class="home-container">
    <h1>Home</h1>

    <transition name="show">
      <h2 v-show="isShow">Welcome!</h2>
    </transition>
    <button @click="isShow = !isShow">Show or Hide</button>
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
    width: 100px;
  }

  .show-enter-active {
    animation: show 0.5s;
  }
  .show-leave-active {
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
