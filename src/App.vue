<template>
  <div id="app">
    <v-app>
      <v-app-bar height="40px" app color="primary lighten-1" dark>
        <v-toolbar-title class="text-center">TryLog</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn to="/" class="mr-1" text rounded>Início</v-btn>
        <v-btn to="/login" text rounded>Acesso</v-btn>
        <v-btn to="/detalhes" text rounded>Detalhes</v-btn>
      </v-app-bar>

      <!-- Login Module -->
      <v-content>
        <v-container fluid>
          <NotificationContainer />

          <UserInformation v-show="authenticated" />
          <router-view></router-view>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>
<script>
import Footer from "./views/Footer";
import UserInformation from "./components/UserInformation";
import NotificationContainer from "./components/NotificationContainer";

export default {
  components: {
    Footer,
    UserInformation,
    NotificationContainer
  },
  data() {
    return {
      authenticated: false
    };
  },
  methods: {
    isUserLoggedOn() {
      this.authenticated = true;
    }
  }
};
</script>
