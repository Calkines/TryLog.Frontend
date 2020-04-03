<template>
  <div id="app">
    <v-app>
      <v-app-bar height="40px" app color="primary lighten-1" dark>
        <v-toolbar-title class="text-center">TryLog </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/" class="mr-1" text rounded>Início</v-btn>
        <v-btn to="/login" text rounded>Acesso</v-btn>
        <v-btn to="/dashboard" text rounded>Dashboard</v-btn>
      </v-app-bar>
      <v-container>
        <UserInformation class="mt-3" v-show="authenticated" />
      </v-container>
      <!-- Login Module -->
      <v-content>
        <router-view></router-view>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>
<script>
import Footer from "./views/Footer";
import UserInformation from "./components/UserInformation";

export default {
  components: {
    Footer,
    UserInformation
  },
  data() {
    return {
      authenticated: false
    };
  },
  methods: {
    isUserLoggedOn() {
      this.authenticated = false;
    }
  }
};
</script>
