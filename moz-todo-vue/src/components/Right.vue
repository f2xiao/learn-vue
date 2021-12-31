<template>
  <div class="right-container">
    <h3>Right Component</h3>
    <hr />
    <count v-bind:initial-count="0"></count>
  </div>
</template>
<script>
import count from "./count.vue";

export default {
  components: { count },
};
</script>
<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: rgb(0, 255, 157);
  min-height: 250px;
  flex: 1;
}
</style>
