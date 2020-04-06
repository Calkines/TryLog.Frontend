import Vue from "vue";
import Vuex from "vuex";
import api from "../services/ApiService";
import * as error from "../store/modules/errors";
import * as log from "../store/modules/logs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statistics: []
  },
  mutations: {
    SET_STATISTICS(state, statistics) {
      state.statistics = statistics;
    }
  },
  actions: {
    fetchStatistics({ commit }) {
      api
        .getStatistics()
        .then(r => {
          commit("SET_STATISTICS", r.data);
        })
        .catch(er => {
          console.log("An error has ocurred: ", er.response);
        });
    }
  },
  getters: {},
  modules: {
    error,
    log
  }
});
