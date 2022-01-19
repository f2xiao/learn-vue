import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    odd(context, value) {
         console.log(context);
        if (context.state.sum % 2) context.commit('add', value)
    },
    wait(context, value) {
        console.log(context);
        setTimeout(() => {
            context.commit('add', value)
          }, 500);
         
    }
}
const mutations = {
    add(state, value) {
        // console.log(context);
        // console.log(this);
        state.sum += value
    },
    subtract(state, value) {
        state.sum -= value
    }
}
const state = {
    sum: 0,
    school: 'UW',
    program: 'ME',
}

const getters = {
    computedSum(state) {
        return state.sum * 100;
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

