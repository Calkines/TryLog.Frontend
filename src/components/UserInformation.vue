<template>
  <v-container class="pb-0 mb-0">
    <v-row>
      <v-col class="d-flex flex-column align-self-start justify-center">
        <v-card color="grey lighten-4">
          <v-toolbar>
            <p class="mt-3">
              Bem vindo {{ this.userData.name }}. Seu token é:
              {{ this.userData.token }}
            </p>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    bars: [{ class: "" }]
  }),
  computed: {
    ...mapState({
      userData: "user"
    })
  }
};
</script>

<style>
.greyBg {
  background-color: linear-gradient(35deg, #888, #aaa);
}
</style>
