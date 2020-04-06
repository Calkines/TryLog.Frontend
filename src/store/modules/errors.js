import api from "@/services/ApiService";

export const state = {
  errors: []
};

export const mutations = {
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
};

export const actions = {
  fetchErrors({ commit }) {
    api
      .getErrors()
      .then(r => {
        commit("SET_ERRORS", r.data);
      })
      .catch(er => {
        console.log("An error has ocurred: ", er.response);
      });
  }
};

export const getters = {
  errorsLength: state => {
    return state.errors.length;
  }
};
