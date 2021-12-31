<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="to-do-list">
      <h1>To-Do List</h1>
      <ul>
        <li><to-do-item label="My ToDo Item" :done="false"></to-do-item></li>
      </ul>
    </div>
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";
// import HelloWorld from './components/HelloWorld.vue'
import ToDoItem from "./components/ToDoItem.vue";

export default {
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
ul,
li {
  list-style: none;
}
.to-do-list {
  background: #99c3ec;
}
.box {
  display: flex;
}
</style>
