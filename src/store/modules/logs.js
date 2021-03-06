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
          commit("SET_LOGS", r.data.data);
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
    fetchLogs(
      { commit, dispatch },
      { itemsPerPage, startPage, selectedEnv, query }
    ) {
      api
        .getLogs(itemsPerPage, startPage, selectedEnv, query)
        .then((r) => {
          let totalItens = r.headers["x-total-count"] ?? r.data.totalItemCount;
          let totalPage = Math.ceil(totalItens / itemsPerPage);
          commit("SET_LOGS_TOTAL_PAGES", totalPage);
          commit("SET_LOGS", r.data.data);
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
  getters: {
    isLoadingLog(state) {
      return state.logs.length == 0;
    },
  },
};
