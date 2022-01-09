<template>
  <div class="movies-container">
    <h1>Movie #:{{id}}</h1>
    <button @click="showThis">Print this</button>
  </div>
</template>

<script>
export default {
  props:['id'],
  methods: {
    showThis(){
      console.log(this.id);
    }
  },


};
</script>

<style lang="less" scoped>
.movies-container {
  min-height: 300px;
  background: orange;
}
</style>
