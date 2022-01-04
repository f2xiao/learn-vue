<template>
  <div>
    <h5>Count component</h5>
    <p>count's value is {{ count }}</p>
    <button @click="add">+1</button>
    <button @click="reset">reset</button>
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
  methods: {
    add() {
      this.count++;
      this.$emit("numChange", this.count);
    },
    reset() {
      this.count = 0;
      this.$emit("numChange", this.count);
    },
  },
};
</script>
<style lang="less"></style>
