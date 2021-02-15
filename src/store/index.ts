import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
})

export default store