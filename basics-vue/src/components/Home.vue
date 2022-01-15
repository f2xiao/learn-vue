<template>
  <div class="home-container">
    <h1>Home</h1>

    <transition name="hello">
      <h2 v-show="isShow">Welcome!</h2>
    </transition>
    <button @click="isShow = !isShow">Show or Hide</button>
    <transition-group name="show" appear>
      <h2 v-show="isShow" key="1">Welcome!</h2>
      <h2 v-show="isShow" key="2">Welcome!</h2>
    </transition-group>
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

  // animation method
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

  // transition method
  .hello-enter,
  .hello-leave-to {
    transform: translateX(-100%);
  }
  .hello-enter-active,
  .hello-leave-active {
    transition: 0.5s linear;
  }
}
</style>
