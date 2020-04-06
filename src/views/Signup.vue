<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="10" xl="6" lg="6" sm="6" xs="10">
        <h1>Registro</h1>
        <v-form ref="signUpForm" v-model="formValidity">
          <v-text-field
            v-model="name"
            label="Nome"
            type="text"
            prepend-icon="fas fa-user"
          />
          <v-text-field
            v-model="email"
            label="E-mail"
            type="email"
            :rules="[rules.email]"
            prepend-icon="fas fa-user-tag"
          />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Senha"
            :rules="[rules.password, rules.length(6)]"
            prepend-icon="fas fa-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-switch
            v-model="termsAccepted"
            label="Aceita os termos e condições?"
            :rules="[rules.required]"
          />
          <v-btn type="submit" color="primary" @click="validateForm($event)"
            >Enviar</v-btn
          >
        </v-form>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    password: "",
    name: "",
    email: "",
    termsAccepted: false,
    showPassword: false,
    isLoading: false,
    formValidity: false,
    rules: {
      email: v =>
        /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/g.test(
          v || ""
        ) || "Por favor informe um e-mail valido",
      length: len => v =>
        (v || "").length >= len ||
        `Tamanho já inválido, necessário ${len} caracteres`,
      password: v =>
        (v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        "A senha precisa ter uma letra maiuscúla, um caracter número, e um caracter especial",
      required: v => !!v || "Este campo é necessário"
    },
    register() {
      const userObj = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      console.log("user: ", userObj);
      this.$store.dispatch("registerUser", { user: userObj });
    }
  }),
  methods: {
    resetForm() {
      this.$refs.signUpForm.reset();
    },
    resetValidation() {
      this.$refs.signUpForm.resetValidation();
    },
    validateForm(event) {
      event.preventDefault();
      let isValid = this.$refs.signUpForm.validate();
      if (isValid) {
        this.register();
      }
    }
  }
};
</script>

<style></style>
