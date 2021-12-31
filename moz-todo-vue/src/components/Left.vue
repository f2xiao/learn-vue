<template>
  <div class="left-container">
    <h3>Left Component</h3>
    <hr />
    <count v-bind:initial-count="9"></count>
  </div>
</template>
<script>
import count from "./count.vue";
export default {
  components: { count },
};
</script>
<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
