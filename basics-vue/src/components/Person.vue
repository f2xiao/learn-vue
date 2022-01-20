<template>
  <div>
    <h1>Person List</h1>
    <input v-model="name" type="text" placeholder="Type a person's name" />
    <button @click="addPerson(name)">Add</button>
    <ul>
      <li v-for="p in list" :key="list.indexOf(p)">{{ p }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Person",
  data() {
    return {
      name: "",
      list: [],
    };
  },
  methods: {
    addPerson(name) {
      this.list.push(name);
    },
  },
};
</script>
