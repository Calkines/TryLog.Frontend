import api from "@/services/ApiService";

export default {
  state: {
    errors: [],
  },
  mutations: {
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
  },
  actions: {
    fetchErrors({ commit, dispatch }) {
      api
        .getErrors()
        .then((r) => {
          commit("SET_ERRORS", r.data);
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
    errorsLength: (state) => {
      return state.errors.length;
    },
    isLoadingErrors(state) {
      return state.errors.length == 0;
    },
  },
};
