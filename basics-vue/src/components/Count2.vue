<template>
  <div>
    <h1>Current sum is : {{ sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="oddIncrement">When the sum is odd then add again</button>
    <button @click="waitIncrement">
      Wait for a few seconds then add again
    </button>
  </div>
</template>

<script>
import { initN } from "@/mixin";
export default {
  data() {
    return {
      sum: 0,
      // n: 1,
    };
  },
  mixins: [initN],
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    oddIncrement() {
      if (this.sum % 2 !== 0) {
        this.increment();
      }
    },
    waitIncrement() {
      setTimeout(() => {
        this.increment();
      }, 1000);
    },
  },
};
</script>

<style></style>
