<template>
  <div class="our-process-chart mb-4">
    <h3 class="pb-3">Asset Allocation</h3>
    <chart-bar-horizontal :chart-data="datacollection"></chart-bar-horizontal>
  </div>
</template>
    
<script>
import ChartBarHorizontal from "~/plugins/ChartBarHorizontal.js";

export default {
  components: {
    ChartBarHorizontal
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [" "],
        datasets: [
          {
            label: ["Stocks"],
            backgroundColor: ["#393D3F"],
            data: [45]
          },
          {
            label: ["Bonds"],
            backgroundColor: ["#6E8898"],
            data: [50]
          },
          {
            label: ["Cash"],
            backgroundColor: ["#9FB1BC"],
            data: [5]
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.our-process-chart {
  text-align: center;
  font-size: 2rem;
  padding: 40px 15px;
  h3 {
    color: $brand-color-primary;
  }
}
</style>