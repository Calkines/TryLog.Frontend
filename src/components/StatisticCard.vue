<template>
  <div class="text--primary">
    <!-- Using the elevation prop -->
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
          :elevation="hover ? 5 : 2"
          class="mx-auto pa-6"
          height="200px"
          width="200px"
        >
          <v-tooltip :open-delay="800" top>
            <template v-slot:activator="{ on }">
              <v-card-title
                class="d-inline-block text-truncate"
                style="max-width: 110%;"
                v-on="on"
                >{{ statistic.title }}</v-card-title
              >
            </template>
            <span>{{ statistic.title_tooltip }}</span>
          </v-tooltip>
          <v-card-text class="display-2">{{ statistic.value }}</v-card-text>
        </v-card>
      </template>
    </v-hover>
  </div>
  <!-- <v-card>
    <v-card-title>{{ statistic.title }}</v-card-title>
    <v-card-text class="display-2">{{ statistic.value }}</v-card-text>
  </v-card> -->
</template>

<script>
export default {
  name: "StatisticCard",
  props: {
    statistic: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
