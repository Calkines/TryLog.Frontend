import api from "@/services/ApiService";

export default {
  state: {
    user: {
      isLoggedIn: false,
      loginErrorMessage: "",
      hasLoginErrors: false,
    },
  },
  mutations: {
    SET_LOGIN(state, user) {
      if (user != "") {
        localStorage.setItem("user", user);
        state.user.isLoggedIn = true;
        state.user.hasLoginErrors = false;
        state.user.loginErrorMessage = "";
      }
    },
    SET_LOGIN_ERROR(state, message) {
      state.user.isLoggedIn = false;
      state.user.hasLoginErrors = true;
      state.user.loginErrorMessage = message;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit }, credentials) {
      api
        .login(credentials)
        .then(({ data }) => {
          console.log("após login: ", data);
          if (data.result == "Failed") {
            commit("SET_LOGIN_ERROR", data.message);
          }
          // if (
          //   data ==
          //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.EJzdDeNLOQhy-2WmXuK1B49xF17Tk0pja1tCPp81YjY"
          // )
          //   commit("SET_LOGIN", data);
          // return this;
        })
        .catch(() => {
          commit("SET_LOGIN_ERROR", "Falha no processo de autenticação");
        });
    },
    logout({ commit }) {
      if (localStorage["user"] != undefined) {
        localStorage.removeItem("user");
      }
      if (this.state.user.isLoggedIn) {
        commit("CLEAR_USER");
        location.reload();
        sessionStorage.clear();
      }
    },
  },
  getters: {
    hasLoginErrors(state) {
      return state.user.hasLoginErrors;
    },
    mensagemFalhaLogin(state) {
      return state.user.loginErrorMessage;
    },
  },
};
