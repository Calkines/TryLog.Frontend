import api from "@/services/ApiService";
export default {
  state: {
    user: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    registerUser({ commit }, { user }) {
      api
        .registerUser(user)
        .then(r => {
          console.log("Value of user in action: ", user);
          commit("SET_USER", user);
        })
        .catch(er => {
          const notification = {
            type: "error",
            message: "An error has ocurred",
            detail: er
          };
          dispatch("notification/add", notification, { root: true });
        });
    }
  },
  getters: {}
};
