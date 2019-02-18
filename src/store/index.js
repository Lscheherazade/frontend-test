import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        homeSection: 'all'
    },
    mutations: {
        setHomeSection: (state, section) => {
            state.homeSection = section
        },
    },
    actions: {
    }
})
