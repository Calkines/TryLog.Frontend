import api from "@/services/ApiService";

export default {
  state: {
    statistics: [],
  },
  mutations: {
    SET_STATISTICS(state, statistics) {
      state.statistics = statistics;
    },
  },
  actions: {
    fetchStatistics({ commit, dispatch }) {
      api
        .getStatistics()
        .then((r) => {
          commit("SET_STATISTICS", r.data);
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
    isLoadingStatistics(state) {
      return state.statistics.length == 0;
    },
  },
};
