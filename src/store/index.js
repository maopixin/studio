import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    list:2
  },
  getters: {
    getList: state => {
      return state.list
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
});
