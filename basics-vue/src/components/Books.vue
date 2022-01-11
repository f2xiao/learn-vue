<template>
  <div class="books-container">
    <h1>Books</h1>
    <button @click="getBooks">get book lists</button>
  </div>
</template>

<script>
export default {
  methods: {
    getBooks() {},
  },
};
</script>

<style lang="less" scoped>
.books-container {
  min-height: 300px;
  background: orange;
}
</style>
