import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    navList:[],
    bodyList:[],
    navL:false
  },
  getters: {
    navList: state => {
      return state.navList
    },
    bodyList: state => {
      return state.bodyList
    },
    navL: state => {
      return state.navL
    },
  },
  mutations: {
    changeNavList(state,payload) {
      state.navList = payload
    },
    changeBodyList(state,payload) {
      state.bodyList = payload
    },
    changeNavL(state){
      state.navL = true;
    }
  }
});
