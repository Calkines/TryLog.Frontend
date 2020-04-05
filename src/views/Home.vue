<template>
  <v-container fill-height>
    <v-content>
      <h1 class="text-center">Resumo de Operações</h1>
    </v-content>
    <v-row>
      <v-col
        class="d-flex justify-center align-self-center"
        fluid
        v-for="statistic in statistics"
        :key="`${statistic.title}`"
        cols="12"
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
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ErrosGraph from "../components/ErrosGraph";
import StatisticCard from "../components/StatisticCard";
import api from "../services/ApiService";

import errosData from "../data/erros.json";

export default {
  name: "Home",
  components: {
    ErrosGraph,
    StatisticCard
  },
  data() {
    return {
      erros: errosData,
      statistics: []
    };
  },
  created() {
    api
      .getStatistics()
      .then(r => {
        this.statistics = r.data;
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
