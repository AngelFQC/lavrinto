import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        targetsCount: 0,
        targetGoals: 0,
    },
    mutations: {
        shotTarget(state) {
            return state.targetGoals++;
        }
    }
});

export default store;