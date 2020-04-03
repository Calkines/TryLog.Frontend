<template>
  <v-data-table
    :headers="headers"
    :items="events"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.severity="{ item }">
      <v-chip :color="getColor(item.severity)" dark>{{ item.severity }}</v-chip>
    </template>
    <template v-slot:item.event="{ item }">
      <div>{{ item.event.description }}</div>
      <div>{{ item.event.origin }}</div>
      <div>{{ item.event.occurrenceDate }}</div>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: "DashboardTableLog",
  data() {
    return {
      headers: [
        {
          text: "Level",
          align: "center",
          sortable: false,
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
          text: "Eventos",
          sortable: false,
          value: "quantity",
          align: "right"
        }
      ],
      events: [
        {
          severity: "success",
          event: {
            description: "Descricao do log de erro",
            origin: "Origem do log",
            occurrenceDate: "24/05/2019 - 09:53:00"
          },
          quantity: 951
        },
        {
          severity: "error",
          event: {
            description: "Descricao do log de erro",
            origin: "Origem do log",
            occurrenceDate: "24/05/2019 - 09:53:00"
          },
          quantity: 888
        },
        {
          severity: "warning",
          event: {
            description: "Descricao do log de erro",
            origin: "Origem do log",
            occurrenceDate: "24/05/2019 - 09:53:00"
          },
          quantity: 15
        },
        {
          severity: "error",
          event: {
            description: "Descricao do log de erro",
            origin: "Origem do log",
            occurrenceDate: "24/05/2019 - 09:53:00"
          },
          quantity: 205
        },
        {
          severity: "success",
          event: {
            description: "Descricao do log de erro",
            origin: "Origem do log",
            occurrenceDate: "24/05/2019 - 09:53:00"
          },
          quantity: 573
        }
      ]
    };
  },
  methods: {
    getColor(severity) {
      if (severity == "error") return "red";
      else if (severity == "warning") return "orange";
      else return "green";
    }
  }
};
</script>
