<template>
  <div class="movies-container">
    <h1>Movies</h1>
    <input v-model="movie" type="text" />
    <button @click="addMovie">Add a movie</button>
    <button @click="deleteMovie">Delete a movie</button>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <router-link :to="`/movies/${movie.id}`">{{ movie.name }}</router-link>
      </li>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        { id: 1, name: "Loki" },
        { id: 2, name: "Captain American" },
        { id: 3, name: "Hulk" },
      ],
      movie: "",
    };
  },
  methods: {
    addMovie() {
      const id = this.movies.length + 1;
      const movie = { id: id, name: `${this.movie}` };
      console.log(movie);
      this.movies.push(movie);
      this.movie = "";
    },
    deleteMovie() {
      console.log(this.movie);
    },
  },
};
</script>

<style lang="less" scoped>
.movies-container {
  padding: 50px;
  min-height: 300px;
  background: orange;
}
</style>
