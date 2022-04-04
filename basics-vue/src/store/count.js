export default {
  namespaced: true,
  actions: {
    odd(context, value) {
      console.log(context);
      if (context.state.sum % 2) context.commit("add", value);
    },
    wait(context, value) {
      console.log(context);
      setTimeout(() => {
        context.commit("add", value);
      }, 500);
    },
  },
  mutations: {
    add(state, value) {
      // console.log(context);
      // console.log(this);
      state.sum += value;
    },
    subtract(state, value) {
      state.sum -= value;
    },
  },
  getters: {
    computedSum(state) {
      return state.sum * 100;
    },
  },
  state: { sum: 0, school: "UW", program: "ME" },
};
