<template>
  <div class="text--primary">
    <!-- Using the elevation prop -->
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          :loading="isLoading"
          :elevation="hover ? 5 : 2"
          class="mx-auto pa-6"
          height="200px"
          width="200px"
        >
          <v-tooltip :open-delay="800" top>
            <template v-slot:activator="{ on }">
              <v-card-title
                class="d-inline-block text-truncate text-center"
                style="max-width: 110%;font-size: 14px;"
                v-on="on"
              >{{ statistic != null ? statistic.title : "" }}</v-card-title>
            </template>
            <span>{{ statistic.titleToolTip }}</span>
          </v-tooltip>
          <v-card-text class="display-2 text-center display-1">{{ statistic.value }}</v-card-text>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "StatisticCard",
  props: {
    statistic: {
      type: Object,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
