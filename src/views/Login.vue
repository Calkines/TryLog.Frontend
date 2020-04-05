<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col class="d-flex justify-center align-self-start">
        <v-card width="400px">
          <v-card-title class="justify-center">
            <h2>Credenciais</h2>
          </v-card-title>

          <v-card-text>
            <v-form>
              <v-text-field
                label="Usuário"
                :rules="[rules.email]"
                prepend-icon="fas fa-user-tag"
              ></v-text-field>
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Senha"
                prepend-icon="fas fa-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" x-small rounded>Registrar</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info" x-small rounded>Acessar</v-btn>
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
export default {
  name: "App",
  data() {
    return {
      showPassword: false,
      isLoading: false,
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
  }
};
</script>
