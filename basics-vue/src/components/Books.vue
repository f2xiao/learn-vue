<template>
  <div class="books-container">
    <h1>Books</h1>
    <button @click="postInfo">Send</button>
    <ul>
      <li v-for="book in books" :key="book.id">{{ book.bookname }}</li>
    </ul>
  </div>
</template>

<script>
import request from "@/utils/request.js";
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
    async postInfo() {
      const { data: res } = await request.post("/api/post", {
        name: "Pixie",
        age: 7,
      });

      console.log(res);
    },
    async initBooks() {
      const { data: res } = await request.get("/api/getBooks");
      this.books = res.data;
      console.log(res.data);
    },
  },
};
</script>

<style lang="less" scoped>
.books-container {
  padding: 50px;
  margin: 0;
  min-height: 300px;
  background: orange;

  ul,
  li,
  a {
    list-style: none;
    text-decoration: none;
  }
  // li {
  //   float: left;
  //   width: 100px;
  // }
}
</style>
