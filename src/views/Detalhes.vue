<template>
  <v-container>
    <h1 class="mt-5 text-center">Detalhes</h1>

    <!-- Table -->
    <DetalhesTableLog />
  </v-container>
</template>
<script>
import DetalhesTableLog from "../components/DetalhesTableLog";

export default {
  name: "Detalhes",
  components: {
    DetalhesTableLog
  },
  data() {
    return {};
  }
};
</script>
