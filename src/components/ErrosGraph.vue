<template>
  <v-card :color="erro.color" dark>
    <v-card-text>
      <div class="d-flex justify-space-between">
        <span class="title">Passado</span>
        <v-icon :color="'white'" class="fas fa-long-arrow-alt-left" size="32"></v-icon>
        <v-icon :color="'white'" class="fas fa-long-arrow-alt-right" size="32"></v-icon>
        <span class="title">Futuro</span>
      </div>

      <v-sparkline
        :value="erro.errors"
        :labels="erro.labels"
        color="rgba(255, 255, 255, .7)"
        height="100"
        padding="24"
        stroke-linecap="round"
        smooth
      />
    </v-card-text>

    <v-card-text class="text-center">
      <div class="display-1">{{ erro.title }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ErrosGraph",
  props: {
    erro: {
      type: Object,
      required: true
    }
  }
};
</script>
