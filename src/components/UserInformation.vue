<template>
  <v-row>
    <v-col
      v-for="(bar, i) in bars"
      :key="i"
      cols="12"
      sm="12"
      md="6"
      class="my-4"
    >
      <v-card color="grey lighten-4" flat height="50px">
        <v-toolbar :color="bar.class" :dark="bar.dark">
          <p class="mt-3">
            Bem vindo Usuário. Seu token é:
            091823mzxcvkasd908AShjkfd.XkdffvVVVV.13210983asbc
          </p>
        </v-toolbar>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    bars: [{ class: "" }]
  })
};
</script>

<style>
.greyBg {
  background-color: linear-gradient(35deg, #888, #aaa);
}
</style>
