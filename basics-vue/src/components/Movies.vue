<template>
  <div class="movies-container">
    <h1>Movies</h1>
    <input v-model="movie.name" type="text" />
    <button @click="addMovie">Add a movie</button>
    <button @click="deleteMovie">Delete a movie</button>
    <button @click="modifyMovies">Modify a movie</button>
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
      id: 4,
      movies: [
        { id: 1, name: "Loki" },
        { id: 2, name: "Captain American" },
        { id: 3, name: "Hulk" },
      ],
      movie: {},
    };
  },
  methods: {
    addMovie() {
      /* console.log(this.movie);
      this.movie["name"] = "Alice in Wonderland";
      console.log(this.movie); */

      this.$set(this.movie, "name", "Alice in Wonderland");
      this.$set(this.movie, "id", this.id);
      this.movies.push(this.movie);
      // this.movie.id++;
      // delete this.movie.name;
      this.id++;
    },
    modifyMovies() {
      // Vue 2 can't react to the data change of the new added property in an object
      // this.movie.name = "Black Widow";
      this.$set(this.movie, "name", "Black Widow");
      // this.movies[1].name = "Alice in Wonderland";
    },
    deleteMovie() {
      // Vue 2 can't react to the data change of the new added property in an object
      // delete this.movie.name;
      this.$delete(this.movie, "name");
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
