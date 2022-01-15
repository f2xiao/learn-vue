import Vue from "vue";
import App from "./App.vue";
import router from "@/router";

import Vant from "vant";
import "vant/lib/index.less";

import { Locale } from "vant";
// import English Language pack
import enUS from "vant/es/locale/lang/en-US";

Vue.use(Vant);

Locale.use("en-US", enUS);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
