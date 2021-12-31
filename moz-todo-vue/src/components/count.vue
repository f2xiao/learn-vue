<template>
  <div>
    <h5>Count component</h5>
    <p>count's value is {{ count }}</p>
    <button @click="count++">+1</button>
  </div>
</template>
<script>
export default {
  props: {
    initialCount: {
      default: 0,
      type: [Number, String],
      //   required: true,
    },
  },
  data() {
    return {
      count: this.initialCount,
    };
  },
};
</script>
<style lang="less"></style>
