<template>
  <div>
    <UserInformation class="mt-5" />

    <h1 class="mt-5 text-center">Dashboard</h1>

    <!-- Table -->
    <DashboardTableLog />
  </div>
</template>
<script>
import DashboardTableLog from "../components/DashboardTableLog";
import UserInformation from "../components/UserInformation";

export default {
  name: "Dashboard",
  components: {
    DashboardTableLog,
    UserInformation
  },
  data() {
    return {};
  }
};
</script>
