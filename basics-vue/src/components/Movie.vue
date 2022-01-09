<template>
  <div class="movies-container">
    <h1>Movie #:{{id}}</h1>
    <p>{{$route.fullPath}}</p>
    <button @click="showThis">Print this</button>
    <button @click="gotoMovies">Go back to Movies</button>
    <button @click="goBack">Go back</button>
    <button @click="$router.forward()">Go forward</button>
  </div>
</template>

<script>
export default {
  props:['id'],
  methods: {
    showThis(){
      console.log(this);
    },
    gotoMovies(){
      this.$router.push('/movies')
    },
    goBack(){
      this.$router.back()
    }
    // goForward(){
    //   this.$router.forward()
    // }
  },


};
</script>

<style lang="less" scoped>
.movies-container {
  min-height: 300px;
  background: orange;
}
</style>
