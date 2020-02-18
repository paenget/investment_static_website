<template>
  <div class="our-process-chart">
    <h3 class="pb-3">Asset Allocation</h3>
    <chart-pie :chart-data="datacollection"></chart-pie>
  </div>
</template>
    
<script>
import ChartPie from "~/plugins/ChartPie.js";

export default {
  components: {
    ChartPie
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
        labels: ["Stocks", "Bonds", "Cash"],
        datasets: [
          {
            backgroundColor: ["#393D3F", "#6E8898", "#9FB1BC"],
            data: [45, 50, 5]
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
  padding: 15px;
  h3 {
    color: $brand-color-primary;
  }
}
</style>