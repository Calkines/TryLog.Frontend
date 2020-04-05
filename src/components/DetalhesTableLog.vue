<template>
  <div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="dataLogs.logs"
      item-key="id"
      class="elevation-1"
      :single-select="false"
      :search="search"
      show-select
      ref="myDataTb"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      @page-count="pageCount = $event"
      hide-default-footer
    >
      <!-- Filters -->
      <template v-slot:top>
        <v-container>
          <v-row>
            <v-col class="d-flex" cols="12" lg="2" md="3" sm="6">
              <v-select
                v-model="selectedEnviroments"
                :items="lstEnvironments"
                :item-text="item => item.description"
                :item-value="item => item.id"
                :menu-props="{ maxHeight: '200' }"
                :no-data-text="'Nenhum ambiente disponível'"
                label="Ambiente"
                multiple
                small-chips
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip v-if="index === 0" x-small>
                    <span>{{ item.description }}</span>
                  </v-chip>
                  <span v-if="index === 1" class="grey--text caption"
                    >(+{{ selectedEnviroments.length - 1 }} outros)</span
                  >
                </template>
              </v-select>
            </v-col>
            <v-col class="d-flex" cols="12" lg="2" md="3" sm="6">
              <v-select
                v-model="selectedFieldOrders"
                :items="lstAvaiableFieldOrders"
                :item-text="item => item.description"
                :menu-props="{ maxHeight: '200' }"
                label="Forma de Ordenação"
                :no-data-text="'Nenhuma ordenação disponível'"
                multiple
                persistent-hint
              ></v-select>
            </v-col>
            <!-- <v-col class="d-flex" cols="12" sm="3">
            <v-select
              v-model="selectedFieldsFind"
              :items="lstAvaiableFieldOrders"
              :item-text="item => item.description"
              :item-value="item => item.id"
              :menu-props="{ maxHeight: '100' }"
              :no-data-text="'Nenhum campo disponível'"
              label="Pesquisar em"
              flat
              clearable
              @click:clear.prevent="clearSelected"
            ></v-select>
          </v-col> -->
            <v-col class="d-flex" cols="12" lg="8" md="6" sm="12">
              <v-text-field
                label="Buscar na base"
                prepend-inner-icon="fas fa-search"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-end mr-5">
              <v-btn class="primary" end @click="pesquisar">Pesquisar</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col class="d-flex justify-end mr-5" cols="6" lg="4" xl="2">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="buscar na tabela"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </template>
      <template v-slot:item.severity="{ item }">
        <v-chip :color="getColor(item.severity)" dark>{{
          item.severity
        }}</v-chip>
      </template>
      <template v-slot:item.event="{ item }">
        <div>{{ item.event.description }}</div>
        <div>{{ item.event.origin }}</div>
        <div>{{ item.event.occurrenceDate }}</div>
      </template>
    </v-data-table>
    <v-container fluid>
      <v-row class="d-flex flex-row text-center" justify="end" align="center">
        <v-col :class="classLegendPages">
          <span> Página {{ page }} de {{ dataLogs.logsTotalPages }} </span>
        </v-col>
        <v-col :class="classPaginator">
          <v-pagination
            v-model="page"
            :length="dataLogs.logsTotalPages"
            @input="fetchData"
            :total-visible="8"
          ></v-pagination>
        </v-col>
        <v-col :class="classPagesPerPage">
          <v-text-field
            :value="itemsPerPage"
            label="Itens por página"
            type="number"
            min="-1"
            max="15"
            @input="settedItemsPerPage = parseInt($event, 10)"
            @keydown.enter="pesquisar"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "DetalhesTableLog",

  data() {
    return {
      internalLogs: [],
      page: 1,
      itemsPerPage: 3,
      settedItemsPerPage: 5,
      search: "",
      selectSlot: false,
      totalPages: this.$store.state.log.logsTotalPages,
      selectedFieldOrders: [],
      selectedEnviroments: [],
      lstEnvironments: [
        { id: 1, description: "Produção" },
        { id: 2, description: "Desenvolvimento" },
        { id: 3, description: "Testes" }
      ],
      lstAvaiableFieldOrders: [
        { id: 1, description: "Frequencia" },
        { id: 2, description: "Level" }
      ],
      selected: [],
      headers: [
        {
          text: "Level",
          align: "center",
          sortable: true,
          value: "severity",
          width: 50
        },
        {
          text: "Log",
          sortable: false,
          value: "event",
          align: "center"
        },
        {
          text: "Frequência",
          sortable: true,
          value: "quantity",
          align: "right"
        }
      ]
    };
  },
  methods: {
    getColor(severity) {
      if (severity == "error") return "red";
      else if (severity == "warning") return "orange";
      else return "green";
    },
    clearSelected() {
      this.selectedFieldsFind = [];
    },
    pesquisar() {
      this.fetchData();
      this.page = 1;
    },
    fetchData() {
      let _itemsPerPage = this.settedItemsPerPage ?? 5;
      let _pageStart = this.page ?? 1;
      this.$store.dispatch("fetchLogs", {
        itemsPerPage: _itemsPerPage,
        startPage: _pageStart
      });
      this.itemsPerPage = this.settedItemsPerPage;
    }
  },
  watch: {
    multiple(val) {
      if (val) this.selectedEnviroments = [this.selectedEnviroments];
      else this.selectedEnviroments = this.selectedEnviroments[0] || "Foo";
    }
  },
  computed: {
    Breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
    ...mapState({
      dataLogs: "log"
    }),
    classLegendPages() {
      let stringClasse = "";
      let bpName = this.$vuetify.breakpoint.name;
      stringClasse += bpName == "xs" ? "col-12" : "";
      stringClasse += bpName == "sm" ? "col-2" : "";
      stringClasse += bpName == "md" ? "col-4" : "";
      stringClasse += bpName == "lg" ? "col-4" : "";
      return stringClasse;
    },
    classPaginator() {
      let stringClasse = "";
      let bpName = this.$vuetify.breakpoint.name;
      stringClasse += bpName == "xs" ? "col-12" : "";
      stringClasse += bpName == "sm" ? "col-8" : "";
      stringClasse += bpName == "md" ? "col-4" : "";
      stringClasse += bpName == "lg" ? "col-4" : "";
      return stringClasse;
    },
    classPagesPerPage() {
      let stringClasse = "";
      let bpName = this.$vuetify.breakpoint.name;
      stringClasse += bpName == "xs" ? "col-4" : "";
      stringClasse += bpName == "sm" ? "col-2" : "";
      stringClasse += bpName == "md" ? "col-4" : "";
      stringClasse += bpName == "lg" ? "col-4" : "";
      return stringClasse;
    }
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type == "SET_LOGS_TOTAL_PAGES") {
        if (this.page > mutation.payload) {
          this.page = 1;
          this.fetchData();
        }
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
  mounted() {
    this.fetchData();
  }
};
</script>
