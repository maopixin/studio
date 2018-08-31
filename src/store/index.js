import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    navList:[],
    bodyList:[],
    navL:false,
    userInfo:{}
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
    userInfo: state => {
      return state.userInfo
    }
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
    },
    changeuserInfo(state,payload){
      state.userInfo = payload
    },
  }
});
