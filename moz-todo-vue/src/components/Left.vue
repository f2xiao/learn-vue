<template>
  <div class="container">
    <h3>Left Component</h3>
    <hr />
    <ul>
      <li><input type="text" /></li>
    </ul>
    <count></count>
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
