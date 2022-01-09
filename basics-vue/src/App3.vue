<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>App Root Comp</h1>
    <hr />
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
      <Article>
        <template #title="{ time, user }">
          <h3>
            俠客行 <span>{{ time }}</span
            ><span>{{ user }}</span>
          </h3>
        </template>
        <template #content>
          <p>赵客缦胡缨，吴钩霜雪明；</p>
          <p>银鞍照白马，飒沓如流星。</p>
          <p>十步杀一人，千里不留行；</p>
          <p>事了拂衣去，深藏身与名。</p>
          <p>闲过信陵饮，脱剑膝前横；</p>
          <p>将炙啖朱亥，持觞劝侯嬴。</p>
          <p>三杯吐然诺，五岳倒为轻；</p>
          <p>眼花耳热后，意气素霓生。</p>
          <p>救赵挥金槌，邯郸先震惊；</p>
          <p>千秋二壮士，烜赫大梁城。</p>
          <p>纵死侠骨香，不惭世上英；</p>
          <p>谁能书阁下，白首太玄经。</p>
        </template>
        <template #author>
          <p>李白</p>
        </template>
      </Article>
    </div>
  </div>
</template>

<script>
// registered component name is Left
import Left from "@/components/Slot-left.vue";
import Right from "@/components/Slot-right.vue";
import Article from "@/components/Article.vue";
// import HelloWorld from './components/HelloWorld.vue'
import ToDoItem from "@/components/ToDoItem.vue";

export default {
  data() {
    return {
      showTabs: false,
      comName: "Left",
      count: 99,
    };
  },
  methods: {
    showLeft() {
      this.comName = "Left";
    },
    showRight() {
      this.comName = "Right";
    },
  },
  components: {
    ToDoItem,
    Left,
    Right,
    Article,
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
* {
  // margin:0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
.tab-box {
  display: flex;
  width: 200px;
}
.tab {
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
