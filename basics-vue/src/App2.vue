<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>App Root Comp</h1>
    <hr />
    <h1 v-color="color">Testing</h1>
    <button @click="changeToBlue">Change color to blue</button>
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
// registered component name is Left
import Left from "@/components/Slot-left.vue";
import Right from "@/components/Slot-right.vue";

export default {
  data() {
    return {
      color: "pink",
    };
  },
  methods: {
    changeToBlue() {
      this.color = "blue";
    },
  },
  components: {
    Left,
    Right,
  },
  directives: {
    /* color: {
      bind(el, binding) {
        console.log(binding);
        // el.style.color = "green";
        el.style.color = binding.value;
      },
      update(el, binding) {
        console.log(binding);
        // el.style.color = "green";
        el.style.color = binding.value;
      },
    }, */

    color(el, binding) {
      console.log(binding);
      el.style.color = binding.value;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  display: flex;
}
</style>
