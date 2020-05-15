<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col class="d-flex justify-center align-self-start">
        <v-card width="400px">
          <v-card-title class="justify-center">
            <h2>Credenciais</h2>
          </v-card-title>
          <v-img src="@/assets/logo.png" />
          <v-card-text>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                v-model="email"
                label="Usuário"
                :rules="[rules.email]"
                prepend-icon="fas fa-user-tag"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Senha"
                :rules="[rules.password]"
                prepend-icon="fas fa-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <div>
            <p v-if="hasLoginErrors" class="text-center red lighten-2">{{ mensagemFalhaLogin }}</p>
          </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              x-small
              rounded
              @click="() => this.$router.push({ path: '/signup' })"
            >Registrar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info" x-small rounded @click="validarAcesso" :disabled="!valid">Acessar</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-card-actions>
            <v-btn text x-small class="mx-auto">Recuperar senha</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      valid: true,
      lazy: false,
      showPassword: false,
      isLoading: false,
      email: "",
      password: "",
      falhaAcesso: false,
      mensagemFalha: "",
      rules: {
        email: v =>
          /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/g.test(
            v || ""
          ) || "Por favor informe um e-mail valido",
        length: len => v =>
          (v || "").length >= len ||
          `Tamanho já inválido, necessário ${len} caracteres`,
        password: v =>
          (v || "").match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
          ) ||
          "A senha precisa ter uma letra maiuscúla, um caracter número, e um caracter especial",
        required: v => !!v || "Este campo é necessário"
      }
    };
  },
  methods: {
    validarAcesso() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          setTimeout(() => {
            this.falhaAcesso = this.$store.state.userModule.user.hasLoginErrors;
            this.mensagemFalha = this.$store.state.userModule.user.loginErrorMessage;
          }, 200);
        });
    }
  },
  computed: {
    ...mapGetters(["hasLoginErrors", "mensagemFalhaLogin"]),
    isValid() {
      return false;
    }
  },
  created() {
    this.$store.dispatch("limparErrosLogin");
  }
};
</script>
