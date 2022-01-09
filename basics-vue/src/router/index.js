import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Movies from "@/components/Movies.vue";
import Movie from "@/components/Movie.vue";
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "/home", component: Home },
    {
      path: "/about",
      component: About,
      children: [
        {
          path: "",
          component: Left,
        },
        {
          path: "right",
          component: Right,
        },
      ],
    },
    {
      path: "/movies",
      component: Movies,
      children: [
        { path: '/movies/:id',component: Movie ,props: true},
        
      ]
    },
  ],
});
export default router;
