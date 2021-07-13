import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import hoSoModule from "./modules/ho-so";

export default new Vuex.Store({
  modules: {
    hoSo: hoSoModule,
  },
  state: {},
  getters: {},
  mutations: {},
});
