<template>
  <div class="our-process-chart">
    <h3 class="pb-3">Day in Strongview</h3>
    <div class="legend d-flex flex-wrap justify-content-between align-items-start">
      <div
        class="legend-item col-sm-2 col-4 d-flex flex-column justify-content-center align-items-center"
      >
        <h4>25%</h4>
        <p>Marketing</p>
      </div>
      <div
        class="legend-item col-sm-2 col-4 d-flex flex-column justify-content-center align-items-center"
      >
        <h4 class="green">30%</h4>
        <p>Security Selection</p>
      </div>
      <div
        class="legend-item col-sm-2 col-4 d-flex flex-column justify-content-center align-items-center"
      >
        <h4 class="green">30%</h4>
        <p>Global Allocation</p>
      </div>
      <div
        class="legend-item col-sm-2 col-4 d-flex flex-column justify-content-center align-items-center"
      >
        <h4 class="green">15%</h4>
        <p>Trade Execution</p>
      </div>
    </div>
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
        labels: [
          "Marketing",
          "Security Selection",
          "Global Allocation",
          "Trade Execution"
        ],
        datasets: [
          {
            backgroundColor: [
              "#393D3F",
              "#6E8898",
              "#9FB1BC",
              "#1d5a79",
              "#999999"
            ],
            data: [25, 30, 30, 15]
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.green {
  color: #13aa70 !important;
}

.legend {
  padding: 0 0 20px 0;
  .legend-item {
    h4 {
      color: $brand-color-primary-75;
      text-align: center;
      font-size: 2rem;
    }
    p {
      text-align: center;
      font-size: 1.3rem;
      font-weight: 500;
      color: $brand-color-text;
    }
    @media (max-width: 1024px) {
      h4 {
        font-size: 1.3rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
    @media (max-width: 768px) {
      h4 {
        font-size: 1.3rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
    @media (max-width: 425px) {
      h4 {
        font-size: 1.8rem;
      }
      p {
        font-size: 1rem;
      }
    }
    @media (max-width: 375px) {
      h4 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.75rem;
      }
    }
  }
}

.our-process-chart {
  text-align: center;
  font-size: 2rem;
  padding: 15px;
  color: $brand-color-primary;
}
</style>