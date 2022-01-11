<template>
  <div class="books-container">
    <h1>Books</h1>
    <ul>
      <li v-for="book in books" :key="book.id">{{ book.bookname }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.initBooks();
  },
  methods: {
    async initBooks() {
      const { data: res } = await this.$http.get("/api/getBooks");
      this.books = res.data;
    },
  },
};
</script>

<style lang="less" scoped>
.books-container {
  min-height: 300px;
  background: orange;

  ul,
  li,
  a {
    list-style: none;
    text-decoration: none;
  }
  li {
    float: left;
    width: 100px;
  }
}
</style>
