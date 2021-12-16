<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>To-Do List</h1>
   <ul>
     <li><to-do-item label="My ToDo Item" :done="false"></to-do-item></li>
   </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ToDoItem from './components/ToDoItem.vue'

export default {
  name: 'App',
  components: {
    ToDoItem
  }
}
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
