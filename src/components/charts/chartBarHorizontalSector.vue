<template>
  <div class="our-process-chart mb-4 mt-5">
    <h3 class="pb-3">Sector Allocation</h3>
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
            label: ["Technology"],
            backgroundColor: ["#393D3F"],
            data: [25]
          },
          {
            label: ["Energy"],
            backgroundColor: ["#6E8898"],
            data: [15]
          },
          {
            label: ["Real Estate Investment Trust"],
            backgroundColor: ["#9FB1BC"],
            data: [20]
          },
          {
            label: ["Others"],
            backgroundColor: ["#999999"],
            data: [20]
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