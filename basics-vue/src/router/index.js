import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Movies from "@/components/Movies.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "/home", component: Home },
    { path: "/about", component: About },
    { path: "/movies", component: Movies },
  ],
});
export default router;
