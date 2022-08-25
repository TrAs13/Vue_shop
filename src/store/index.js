import Vue from "vue";
import Vuex from "vuex";
import productModule from "./productModule";
import stoksModule from "./stoksModule";
import newsModule from "./newsModule";
import cartModule from "./cartModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    productModule,
    stoksModule,
    newsModule,
    cartModule,
  },
});
