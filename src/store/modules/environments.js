import api from "@/services/ApiService";

export default {
  state: {
    environments: [],
  },
  mutations: {
    SET_ENVIRONMENT(state, env) {
      state.environments = env;
    },
  },
  actions: {
    fetchEnvironments({ commit, dispatch }) {
      api
        .getEnvironments()
        .then((r) => {
          commit("SET_ENVIRONMENT", r.data);
        })
        .catch((er) => {
          const notification = {
            type: "error",
            message: "An error has ocurred while fetching environments",
            detail: er,
          };
          dispatch("notification/add", notification, { root: true });
        });
    },
  },
  getters: {},
};
