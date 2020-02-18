<template>
  <div class="our-process-chart">
    <h3 class="pb-3">Equity Sector Allocation</h3>
    <div class="legend d-flex justify-content-around align-items-center">
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>25%</h4>
        <p>Technology</p>
      </div>
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>15%</h4>
        <p>Energy</p>
      </div>
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>20%</h4>
        <p>Real Estate Investment Trust</p>
      </div>
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>20%</h4>
        <p>Other</p>
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
          "Technology",
          "Energy",
          "Real Estate Investment Trust",
          "Others"
        ],
        datasets: [
          {
            backgroundColor: ["#393D3F", "#6E8898", "#9FB1BC", "#1d5a79"],
            data: [25, 15, 20, 20]
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

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
    @media (max-width: 768px) {
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
  h3 {
    color: $brand-color-primary;
  }
}
</style>
