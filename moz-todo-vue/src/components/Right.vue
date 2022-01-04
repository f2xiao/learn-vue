<template>
  <div class="container">
    <h3>Right Component</h3>
    <hr />
    <count v-bind:initial-count="'10'"></count>
  </div>
</template>
<script>
import count from "./count.vue";

export default {
  components: { count },
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
