<template>
  <v-container>
    <h1 class="mt-5 text-center">Dashboard</h1>

    <!-- Table -->
    <DashboardTableLog />
  </v-container>
</template>
<script>
import DashboardTableLog from "../components/DashboardTableLog";

export default {
  name: "Dashboard",
  components: {
    DashboardTableLog
  },
  data() {
    return {};
  }
};
</script>
