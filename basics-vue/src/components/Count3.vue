<template>
  <div>
    <h1>Current sum is : {{ this.$store.state.sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="oddIncrement(n)">When the sum is odd then add again</button>
    <button @click="waitIncrement(n)">
      Wait for a few seconds then add again
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: 0,
      n: 1,
    };
  },
  mounted() {
    // console.log('Count with Vuex',this);
  },
  methods: {
    increment(n) {
      this.$store.commit('add', n)
    },
    decrement(n) {
      this.$store.commit('subtract', n)
    },
    oddIncrement(n) {
     this.$store.dispatch('odd', n)
    },
    waitIncrement(n) {
      this.$store.dispatch('wait', n)
    },
  },
};
</script>

<style></style>
