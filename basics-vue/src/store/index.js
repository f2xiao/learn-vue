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
    add(context, value) {
        // console.log(context);
        // console.log(this);
        context.sum += value
    },
    subtract(context, value) {
        context.sum -= value
    }
}
const state = {
    sum: 0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})

