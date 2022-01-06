<template>
  <div class="container">
    <h3>Left Component</h3>
    <p>{{ poemFromRight }}</p>
    <button>{{ countFromSon }}</button>
    <hr />
    <count @numChange="getNewCount"></count>
  </div>
</template>
<script>
import count from "./count.vue";
import bus from "./eventBus";
export default {
  // declared component name
  name:"MyLeft",
  data: function () {
    return {
      countFromSon: 0,
      poemFromRight: "",
    };
  },
  components: { count },
  methods: {
    getNewCount(val) {
      this.countFromSon = val;
    },
  },
  created() {
    bus.$on("gotAPoem", (val) => {
      this.poemFromRight = val;
    });
    console.log("Left is created");
  },
  destroyed() {
     console.log("Left is destroyed");

  },
  activated() {
    console.log("Left is activated")
  },
  deactivated() {
    console.log("Left is deactivated")
  },
};
</script>
<style lang="less" scoped>
.container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
h3 {
  color: red;
}
/deep/ h5 {
  color: red;
}
</style>
