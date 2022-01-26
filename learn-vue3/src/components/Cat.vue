<template>
  <h1>Cat's Info</h1>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <ul>
    <li v-for="hobby in hobbies">{{ hobby }}</li>
  </ul>
</template>

<script>
export default {
  setup() {
    let data = {
      name: "Pixie",
      age: 8,
      hobbies: ["eat", "drink", "play balls"],
    };

    return data;
  },
};
</script>

<style></style>
