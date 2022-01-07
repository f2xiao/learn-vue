<template>
  <div id="app">
    <p>App Root Comp</p>
    <button @click="showThis">Print this</button>
    <hr>
   
  </div>
</template>

<script>

export default {
  methods: {
    showThis(){
      console.log(this);
    }
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
