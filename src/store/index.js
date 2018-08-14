import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    navList:[],
    navNow:{}
  },
  getters: {
    navList: state => {
      return state.navList
    },
    navNow: state => {
      return state.navNow
    }
  },
  mutations: {
    changeNavList(state,payload) {
      state.navList = payload
    },
    changeNavNow(state,payload){
      state.navNow = payload
    },
  }
});
