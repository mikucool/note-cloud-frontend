import Vue from 'vue'
import Vuex from 'vuex'
import user from  './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    user: state => state.user.user,  // 用户对象
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  },
})
