<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="10" xl="6" lg="6" sm="6" xs="10">
        <h1>Registro</h1>
        <v-form ref="signUpForm" v-model="formValidity">
          <v-text-field label="Nome" v-model="name" type="text" prepend-icon="fas fa-user" />
          <v-text-field
            v-model="email"
            label="E-mail"
            type="email"
            :rules="[rules.email]"
            prepend-icon="fas fa-user-tag"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Senha"
            v-model="password"
            :rules="[rules.password, rules.length(6)]"
            prepend-icon="fas fa-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Confirmação Senha"
            v-model="passwordConfirm"
            :rules="[
              rules.password,
              rules.length(6),
              rules.passwordMatch(this.passwordConfirm, this.password),
            ]"
            prepend-icon="fas fa-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-switch
            v-model="termsAccepted"
            label="Aceita os termos e condições?"
            :rules="[rules.required]"
          />
          <v-btn type="submit" color="warning" @click.prevent="navagateLogin">Cancelar</v-btn>
          <v-btn
            type="submit"
            color="primary"
            @click.prevent="signUp"
            :disabled="!formValidity"
          >Enviar</v-btn>
        </v-form>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
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
      passwordMatch: (v, password) =>
        v == password || "As senhas precisam ser iguais",
      required: v => !!v || "Este campo é necessário"
    }
  }),
  methods: {
    signUp() {
      if (this.formValidity) {
        this.$store
          .dispatch("signup", {
            fullName: this.name,
            password: this.password,
            email: this.email,
            confirmPassword: this.passwordConfirm
          })
          .then(() => {
            setTimeout(() => {
              this.falhaAcesso = this.$store.state.userModule.user.hasLoginErrors;
              this.mensagemFalha = this.$store.state.userModule.user.loginErrorMessage;
            }, 400);
          });
      }
    },
    navagateLogin() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style></style>
