import api from "@/services/ApiService";
import axios from "axios";
export default {
  state: {
    user: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    }
  },
  actions: {
    registerUser({ commit }, { user }) {
      api
        .registerUser(user)
        .then(r => {
          commit("SET_USER", r.data);
        })
        .catch(er => {
          const notification = {
            type: "error",
            message: "An error has ocurred",
            detail: er
          };
          dispatch("notification/add", notification, { root: true });
        });
    },
    realizarLogin({ commit }, { user }) {
      api
        .realizarLogin(user)
        .then(r => {
          commit("SET_USER", r.data);
        })
        .catch(er => {
          const notification = {
            type: "error",
            message: "An error has ocurred",
            detail: er
          };
          dispatch("notification/add", notification, { rrot: true });
        });
    }
  },
  getters: {}
};
