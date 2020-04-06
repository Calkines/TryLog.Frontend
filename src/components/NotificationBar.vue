<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <span>{{ notification.message }}: {{ notification.detail.message }}</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  methods: mapActions("notification", ["remove"]),
  computed: {
    notificationTypeClass() {
      return `text-${this.notification.type}`;
    }
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.remove(this.notification);
    }, 5000);
  }
};
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
.text-error {
  color: rgba(233, 50, 50, 1);
}
</style>
