import Vue from "vue";
import Vuex from "vuex";
import count from "./count";
import person from "./person";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count,
    person,
  },
});
