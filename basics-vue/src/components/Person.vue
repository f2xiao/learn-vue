<template>
  <div>
    <h1>Person List</h1>
    <h1>Sum in Count component: {{ sum }}</h1>
    <input v-model="name" type="text" placeholder="Type a person's name" />
    <button @click="addPerson(name)">Add</button>
    <ul>
      <li v-for="p in list" :key="list.indexOf(p)">
        {{ p }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState("person", ["list"]),
    // list() {
    //   return this.$store.state.person.list;
    // },
    sum() {
      return this.$store.state.count.sum;
    },
  },
  methods: {
    addPerson(name) {
      this.$store.commit("person/addPerson", name);
      this.name = "";
    },
  },
};
</script>
