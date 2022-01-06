<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div class="to-do-list">
      <h1>To-Do List</h1>
      <ul>
        <li><to-do-item label="My ToDo Item" :done="false"></to-do-item></li>
      </ul>
    </div> -->
    <p>App Root Comp</p>
    <hr>
    <div>
      <div class="tab-box">
        <button @click="showLeft" class="tab">show Left</button> 
        <button @click="showRight" class="tab">show Right</button>
      </div>
      <div class="box">
        <keep-alive>
          <component :is="comName"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";
// import HelloWorld from './components/HelloWorld.vue'
import ToDoItem from "./components/ToDoItem.vue";

export default {
  data(){
   return {
      comName:'Left',
      isLeft: true,
   }
  },
  methods: {
   showLeft(){
     this.comName = "Left"
   },
   showRight(){
     this.comName = "Right"
   }
  },
  components: {
    ToDoItem,
    Left,
    Right,
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
*{
  // margin:0;
  padding:0;
}
ul,
li {
  list-style: none;
  
}
.tab-box{
  display: flex;
  width: 200px;
}
.tab{
  flex: 1;
  border: 1px solid #999;
}


.to-do-list {
  background: #99c3ec;
}
.box {
  display: flex;
}
</style>
