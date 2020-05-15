import api from "@/services/ApiService";
import router from "@/router/index.js";
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
        localStorage.setItem("user", user.result);
        state.user.isLoggedIn = true;
        state.user.hasLoginErrors = false;
        state.user.loginErrorMessage = "";
      }
    },
    SET_LOGIN_ERROR(state, message) {
      state.user.isLoggedIn = false;
      state.user.hasLoginErrors = true;
      state.user.loginErrorMessage = message;
      // setTimeout(() => {
      //   state.user.hasLoginErrors = false;
      //   state.user.loginErrorMessage = "";
      // }, 1600);
    },
    CLEAR_USER(state) {
      state.user = null;
    },
    CLEAR_USER_LOGIN_ERROS(state) {
      state.user.hasLoginErrors = false;
      state.user.loginErrorMessage = "";
    },
  },
  actions: {
    login({ commit }, credentials) {
      api
        .login(credentials)
        .then(({ data }) => {
          if (data.result == "Failed") {
            commit("SET_LOGIN_ERROR", data.message);
          } else {
            commit("SET_LOGIN", data);
            console.log("tentando redirecionar usuário");
            router.push({ path: "/" });
          }
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
    signup({ commit }, info) {
      console.log("acessou signup modulo de user", info);
      api
        .singup(info)
        .then(({ data }) => {
          console.log("após signup", data);
        })
        .catch(() => {
          console.log("falha no cadastro");
        });
    },
    limparErrosLogin({ commit }) {
      commit("CLEAR_USER_LOGIN_ERROS");
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
