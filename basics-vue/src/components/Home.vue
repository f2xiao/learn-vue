<template>
  <div class="home-container">
    <h1>Home</h1>

    <Count2></Count2>
    <hr />
    <h3>Count with Vuex</h3>
    <Count3></Count3>
    <hr />
    <h3>Person with Vuex</h3>
    <Person></Person>

    <hr />
    <h3>Animation with css transition</h3>
    <transition name="hello">
      <h2 v-show="isShow">Welcome!</h2>
    </transition>
    <button @click="isShow = !isShow">Show or Hide</button>
    <hr />
    <h3>Animation with animate.css</h3>
    <transition-group
      enter-active-class="animate__animated animate__rotateIn"
      leave-active-class="animate__animated animate__zoomOutDown"
      appear
    >
      <h2 v-show="isShow" key="1">Welcome!</h2>
      <h2 v-show="isShow" key="2">Welcome!</h2>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
import Count2 from "@/components/Count2.vue";
import Count3 from "@/components/Count3.vue";
import Person from "@/components/Person.vue";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  mounted() {
    console.log("Home", this);
  },
  components: { Count2, Count3, Person },
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
