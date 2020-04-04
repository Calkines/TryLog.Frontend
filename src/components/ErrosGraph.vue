<template>
  <v-card :color="erro.color" dark>
    <v-card-text>
      <v-sparkline
        :value="erro.erros"
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
