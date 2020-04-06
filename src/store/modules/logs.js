import api from "@/services/ApiService";

export const state = {
  logs: [],
  logsTotalPages: 0
};

export const mutations = {
  SET_LOGS(state, logs) {
    state.logs = logs;
  },
  SET_LOGS_TOTAL_PAGES(state, totalPages) {
    state.logsTotalPages = totalPages;
  }
};
export const actions = {
  fetchLogs({ commit }) {
    api
      .getLogs()
      .then(r => {
        commit("SET_LOGS", r.data);
      })
      .catch(er => {
        console.log("An error has ocurred: ", er.response);
      });
  },
  fetchLogs({ commit }, { itemsPerPage, startPage }) {
    api
      .getLogs(itemsPerPage, startPage)
      .then(r => {
        let totalItens = r.headers["x-total-count"] ?? 0;
        let totalPage = Math.ceil(totalItens / itemsPerPage);
        commit("SET_LOGS_TOTAL_PAGES", totalPage);
        commit("SET_LOGS", r.data);
      })
      .catch(er => {
        console.log("An error has ocurred: ", er.response);
      });
  }
};
export const getters = {};
