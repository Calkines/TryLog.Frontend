import Vue from "vue";
import Vuex from "vuex";

import error from "../store/modules/errors";
import log from "../store/modules/logs";
import statistic from "../store/modules/statistics";
import userModule from "@/store/modules/users";
import * as notification from "@/store/modules/notification";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    //TODO: change to Cookies
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  modules: {
    error,
    log,
    statistic,
    notification,
    userModule,
  },
});
