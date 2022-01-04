<template>
  <div class="container">
    <h3>Left Component</h3>
    <button>{{ countFromSon }}</button>
    <hr />
    <count @numChange="getNewCount"></count>
  </div>
</template>
<script>
import count from "./count.vue";
export default {
  data: function () {
    return {
      countFromSon: 0,
    };
  },
  components: { count },
  methods: {
    getNewCount(val) {
      this.countFromSon = val;
    },
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
