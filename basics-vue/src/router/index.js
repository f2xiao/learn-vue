import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Movies from "@/components/Movies.vue";
import Books from "@/components/Books.vue";
import Movie from "@/components/Movie.vue";
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Acct from "@/components/Acct.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "" },
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
        { path: "" },
        { path: "/movies/:id", component: Movie, props: true },
      ],
    },
    { path: "/account", component: Acct },
    { path: "/login", component: Login },
    { path: "/books", component: Books },
  ],
});

router.beforeEach((to, from, next) => {
  // ...
  if (to.path === "/account") {
    const token = localStorage.getItem("token");
    if (token) {
      if (token === "123456") next();
      else next("/login");
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
export default router;
