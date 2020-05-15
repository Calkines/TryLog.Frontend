<template>
  <v-container fill-height fluid>
    <v-content>
      <h1 class="text-center display-4 mb-5">Resumo de Operações</h1>
    </v-content>
    <v-row justify="center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
        v-show="isLoadingStatistic"
      ></v-progress-circular>
      <v-col
        class="d-flex justify-center align-self-center"
        fluid
        v-for="statistic in dataStatistics.statistics"
        :key="`${statistic.title}`"
        cols="12"
        sm="4"
        md="3"
        lg="3"
      >
        <StatisticCard
          :isLoading="statistic == null"
          :statistic="statistic"
          v-show="dataStatistics.statistics != null"
        />
      </v-col>
    </v-row>

    <v-row class="mt-5" justify="center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="green"
        indeterminate
        v-show="isLoadingError"
      ></v-progress-circular>
      <v-col v-for="ele in dataGraphError.errors" :key="`${ele.title}`" cols="12" md="4">
        <ErrosGraph :erro="ele" />
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
import { mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    ErrosGraph,
    StatisticCard
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("fetchErrors");
    this.$store.dispatch("fetchStatistics");
  },
  methods: {},
  computed: {
    ...mapState({
      dataGraphError: "error",
      dataStatistics: "statistic",
      dataUser: "user"
    }),
    ...mapGetters({
      errorLength: "errorsLength",
      isLoadingStatistic: "isLoadingStatistics",
      isLoadingError: "isLoadingErrors",
      isLoggedIn: "isLoggedIn"
    })
  }
  // watch: {
  //   dataUser(newValue, oldValue) {
  //     console.log(`Updating from ${oldValue} to ${newValue}`);

  //     // Do whatever makes sense now
  //     if (newValue === "success") {
  //       this.complex = {
  //         deep: "some deep object"
  //       };
  //     }
  //   }
  // }
};
</script>
