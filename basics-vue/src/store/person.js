const actions = {};
const mutations = {
  addPerson(state, value) {
    // console.log(context);
    // console.log(this);
    state.list.push(value);
  },
};
const state = {
  list: [],
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
};
