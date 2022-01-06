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
      <div class="tab-box" v-if="showTabs">
        <button @click="showLeft" class="tab">show Left</button> 
        <button @click="showRight" class="tab">show Right</button>
      </div>
      <div class="box" style="display: none">
        <!-- exclude and include attributes use declared name if it existed -->
        <keep-alive include="MyLeft">
          <component :is="comName"></component>
        </keep-alive>
        <Right>
           <template v-slot:smallText>
            <!-- <p>this is the content area for the Right component</p> -->
         </template>
         <template #button>
           <div>
              <button>Right button</button>
           </div>
         </template>
        </Right>
      </div>
      <!-- Article Comp -->
      <Article></Article>
    </div>
  </div>
</template>

<script>
// registered component name is Left
import Left from "@/components/Slot-left.vue";
import Right from "@/components/Slot-right.vue";
import Article from "@/components/Article.vue"
// import HelloWorld from './components/HelloWorld.vue'
import ToDoItem from "@/components/ToDoItem.vue";


export default {
  data(){
   return {
     showTabs: false,
      comName:'Left',
      count: 99
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
