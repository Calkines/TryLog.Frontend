<template>
  <div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="events"
      :items-per-page="5"
      item-key="id"
      class="elevation-1"
      :single-select="false"
      :search="search"
      show-select
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
              <v-btn class="primary" end>Pesquisar</v-btn>
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
  </div>
</template>
<script>
import eventsData from "../data/events.json";

export default {
  name: "DetalhesTableLog",

  data() {
    return {
      search: "",
      selectSlot: false,
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
      ],
      events: eventsData
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
    }
  },
  watch: {
    multiple(val) {
      if (val) this.selectedEnviroments = [this.selectedEnviroments];
      else this.selectedEnviroments = this.selectedEnviroments[0] || "Foo";
    }
  }
};
</script>
