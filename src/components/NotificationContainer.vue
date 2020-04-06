<template>
  <v-container fluid class="mb-5">
    <v-row>
      <v-col>
        <div class="notification-container">
          <NotificationBar
            v-for="notification in notifications"
            :key="notification.id"
            :notification="notification"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NotificationBar from "@/components/NotificationBar";
import { mapState } from "vuex";
export default {
  components: { NotificationBar },
  computed: mapState("notification", ["notifications"])
};
</script>

<style>
.notification-container {
  position: absolute;
  bottom: 0px;
}
</style>
