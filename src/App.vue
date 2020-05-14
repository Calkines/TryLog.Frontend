<template>
  <div id="app">
    <v-app>
      <v-app-bar
        height="40px"
        app
        color="primary lighten-1"
        dark
        v-show="logged"
      >
        <v-toolbar-title class="text-center">TryLog</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn to="/" class="mr-1" text rounded>Início</v-btn>
        <v-btn to="/login" text rounded v-show="!logged">Acesso</v-btn>
        <v-btn to="/detalhes" text rounded>Detalhes</v-btn>
        <v-btn class="mr-3" icon @click.stop="logoff" v-if="logged"
          >Sair<v-icon>mdi-logout</v-icon></v-btn
        >
      </v-app-bar>

      <!-- Login Module -->
      <v-content>
        <v-container fluid>
          <NotificationContainer />

          <UserInformation v-show="logged" />
          <router-view></router-view>
        </v-container>
      </v-content>
      <Footer v-show="logged" />
    </v-app>
  </div>
</template>
<script>
import Footer from "./views/Footer";
import UserInformation from "./components/UserInformation";
import NotificationContainer from "./components/NotificationContainer";
import { mapState } from "vuex";
export default {
  components: {
    Footer,
    UserInformation,
    NotificationContainer,
  },
  data() {
    return {
      authenticated: false,
    };
  },
  methods: {
    logoff() {
      if (localStorage["user"] != undefined) {
        localStorage.removeItem("user");
        sessionStorage.clear();
        location.reload();
      }
    },
  },
  computed: mapState({
    logged: (state) => state.userModule.user.isLoggedIn,
  }),
  created() {
    this.authenticated = this.$store.state.userModule.user.isLoggedIn;
  },
};
</script>
