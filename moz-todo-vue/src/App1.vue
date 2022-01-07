<template>
  <div id="app">
    <h1 ref="myh1">App Root Comp</h1>
    <button @click="showThis">Print this</button>
    <button @click="onReset">Reset the count on Left Component </button>
    <hr>
    <input type="text" v-if="inputVisible" ref="ipt" @blur="showButton">
    <button v-else @click="showInput">Show input</button>
    <hr>
   <Left ref="comLeft"></Left>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
export default {
  data(){
    return {
      inputVisible: false
    }
  },
  methods: {
    showThis(){
      console.log(this);
      this.$refs.myh1.style.color = 'red';
    },
    onReset(){
      this.$refs.comLeft.countFromSon=0;
    },
    showInput(){
      this.inputVisible = true;
     this.$nextTick(()=>{
        this.$refs.ipt.focus();
     })
    },
    showButton(){
      this.inputVisible = false;
    }
  },
  components:{
    Left
  }
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
