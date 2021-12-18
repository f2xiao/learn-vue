const app = new Vue({
  el: "#app",
  data: {
    message1: "Hello Vue2!",
    message2: "页面加载于 " + new Date().toLocaleString(),
    seen: false,
    todos: [
      { text: "学习 JavaScript" },
      { text: "学习 Vue" },
      { text: "整个牛项目" },
    ],
    message3: "Hello Vue.js!",
    message4: "Hello Vue!",
    groceryList: [
      { id: 0, text: "蔬菜" },
      { id: 1, text: "奶酪" },
      { id: 2, text: "随便其它什么人吃的东西" },
    ],
    isDone:'',
    date: "2020-12-15",
    city: "",
    username: "Pixie",
    checkedNames:'',
  },
  methods: {
    reverseMessage: function (a) {
      console.log(a.target);
      this.message3 = this.message3.split("").reverse().join("");
    },
  },
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

app.message1 = "Hello Vue";
