<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>App Root Comp</h1>
    <hr />
    <h1 v-color="'pink'">Testing</h1>
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
  components: {
    Left,
    Right,
  },
  directives: {
    color: {
      bind(el, binding) {
        console.log(binding);
        // el.style.color = "green";
        el.style.color = binding.value;
      },
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
