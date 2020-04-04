<template>
  <div class="home">
    <v-container>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

      <h1 class="text-center">Resumo das operações</h1>

      <v-row>
        <v-col
          v-for="statistic in statistics"
          :key="`${statistic.title}`"
          cols="6"
          sm="4"
          md="3"
          lg="3"
        >
          <StatisticCard :statistic="statistic" />
        </v-col>
      </v-row>

      <v-row class="mt-5">
        <v-col v-for="erro in erros" :key="`${erro.title}`" cols="12" md="4">
          <ErrosGraph :erro="erro" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ErrosGraph from "../components/ErrosGraph";
import StatisticCard from "../components/StatisticCard";

import errosData from "../data/erros.json";
import statisticsData from "../data/estatisticas.json";

export default {
  name: "Home",
  components: {
    ErrosGraph,
    StatisticCard
  },
  data() {
    return {
      erros: errosData,
      statistics: statisticsData
    };
  }
};
</script>
