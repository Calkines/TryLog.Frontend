<template>
  <div id="app">
    <v-app>
      <v-app-bar height="40px" app color="primary lighten-1" dark>
        <v-toolbar-title class="text-center">TryLog </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="mr-1" text rounded>Home</v-btn>
        <v-btn text rounded>Login</v-btn>
      </v-app-bar>
      <!-- Login Module -->
      <v-content>
        <v-card width="40%" min-width="400px" class="mx-auto mt-5">
          <v-card-title>
            <v-spacer></v-spacer>
            <h2>Credentials</h2>
            <v-spacer></v-spacer>
          </v-card-title>

          <v-card-text>
            <v-form>
              <v-text-field
                label="User"
                prepend-icon="fas fa-user-tag"
              ></v-text-field>
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="fas fa-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" x-small rounded>Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info" x-small rounded>Access</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>
<script>
import Footer from "./components/Footer";

export default {
  components: {
    Footer
  },
  data() {
    return {
      //
      showPassword: false
    };
  }
};
</script>
