<template>
  <div>
    <h1>Person List</h1>
    <input v-model="name" type="text" placeholder="Type a person's name" />
    <button @click="addPerson">Add</button>
  </div>
</template>

<script>
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
};
</script>
