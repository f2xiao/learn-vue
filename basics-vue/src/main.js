import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import axios from "axios";

axios.defaults.baseURL = "http://www.liulongbin.top:3006";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
