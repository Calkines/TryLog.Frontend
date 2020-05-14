import api from "@/services/ApiService";

export default {
  state: {
    logs: [],
    logsTotalPages: 0,
  },
  mutations: {
    SET_LOGS(state, logs) {
      state.logs = logs;
    },
    SET_LOGS_TOTAL_PAGES(state, totalPages) {
      state.logsTotalPages = totalPages;
    },
  },
  actions: {
    fetchLogs({ commit, dispatch }) {
      api
        .getLogs()
        .then((r) => {
          console.log("getting logs", r.data);
          commit("SET_LOGS", r.data);
        })
        .catch((er) => {
          const notification = {
            type: "error",
            message: "An error has ocurred",
            detail: er,
          };
          dispatch("notification/add", notification, { root: true });
        });
    },
    fetchLogs({ commit, dispatch }, { itemsPerPage, startPage }) {
      api
        .getLogs(itemsPerPage, startPage)
        .then((r) => {
          let totalItens = r.headers["x-total-count"] ?? 0;
          let totalPage = Math.ceil(totalItens / itemsPerPage);
          commit("SET_LOGS_TOTAL_PAGES", totalPage);
          commit("SET_LOGS", r.data);
        })
        .catch((er) => {
          const notification = {
            type: "error",
            message: "An error has ocurred",
            detail: er,
          };
          dispatch("notification/add", notification, { root: true });
        });
    },
  },
  getters: {},
};
