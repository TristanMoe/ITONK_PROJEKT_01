import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 0
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload["newUser"];
      console.log(`User sat to ${state.user}`);
    }
  },
  getters: {
    getUser: state => {
      return state.user;
    }
  },
  actions: {},
  modules: {}
});
