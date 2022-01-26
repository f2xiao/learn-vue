import { createApp } from "vue";
// import { Vue } from "vue";
import App from "./App.vue";
import "./index.css";

// return a lighter version of VueComponent compared to Vue2
console.log(createApp(App));

createApp(App).mount("#app");
// new Vue({
//   render: (h) => h(App),
// }).mount("#app");
