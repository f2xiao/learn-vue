<template>
  <div class="container">
    <h3>Right Component</h3>
    <slot name="smallText">There should be some text here</slot>
    <slot name="button"></slot>
    <hr />
    <count v-bind:initial-count="'10'"></count>
    <button @click="generatePoem">pass a poem to the left</button>
  </div>
</template>
<script>
import count from "./count.vue";
import bus from "./eventBus";
export default {
  components: { count },
  methods: {
    generatePoem() {
      const poem = "there is an apple tree";
      bus.$emit("gotAPoem", poem);
    },
  },
  created() {
    console.log("Right is created");
  },
  destroyed(){
    console.log("Right is destroyed");
  },
  activated() {
    console.log("Right is activated")
  },
  deactivated() {
    console.log("Right is deactivated")
  },
};
</script>
<style lang="less" scoped>
.container {
  padding: 0 20px 20px;
  background-color: rgb(0, 255, 157);
  min-height: 250px;
  flex: 1;
}
h3 {
  color: blue;
}
/deep/ h5 {
  color: blue;
}
</style>
