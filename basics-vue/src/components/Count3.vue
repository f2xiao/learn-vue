<template>
  <div>
    <h1>Current sum is : {{ sum }}</h1>
    <h1>Getters sum is : {{ mySum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="odd(n)">When the sum is odd then add again</button>
    <button @click="wait(n)">Wait for a few seconds then add again</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // ...mapState({sum:'sum',countSchool:'school'})
    ...mapState("count", ["sum", "school", "program"]),
    mySum() {
      return this.$store.getters["count/computedSum"];
    },
    // ...mapGetters({ mySum: "computedSum" }),
  },
  mounted() {
    console.log("Count with Vuex", this.$store);
  },
  methods: {
    // increment(n) {
    //   this.$store.commit("add", n);
    // },
    // decrement(n) {
    //   this.$store.commit("subtract", n);
    // },
    decrement(n) {
      this.$store.commit("count/subtract", n);
    },

    ...mapMutations("count", { increment: "add" }),

    /* odd(n) {
      this.$store.dispatch("odd", n);
    },
    wait(n) {
      this.$store.dispatch("wait", n);
    }, */
    ...mapActions("count", ["odd", "wait"]),
  },
};
</script>
