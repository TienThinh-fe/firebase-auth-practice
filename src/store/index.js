import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState();

const store = createStore({
  state: {
    isLogin: false,
    userAuth: null,
  },
  mutations,
  actions,
  getters,
  plugins: [dataState],
});

export default store;
