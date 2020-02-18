<template>
  <div class="our-process-chart">
    <h3 class="pb-3">Model Portfolio</h3>
    <div class="legend d-flex justify-content-around align-items-center">
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>55%</h4>
        <p>Stocks</p>
      </div>
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>10%</h4>
        <p>Liquid Alternatives</p>
      </div>
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>2%</h4>
        <p>Gold</p>
      </div>
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>8%</h4>
        <p>Cash</p>
      </div>
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>25%</h4>
        <p>Bonds</p>
      </div>
    </div>
    <div>
      <chart-pie :chart-data="datacollection"></chart-pie>
    </div>
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
        labels: ["Liquid Alternatives", "Gold", "Cash", "Bonds", "Stocks"],
        datasets: [
          {
            backgroundColor: [
              "#393D3F",
              "#6E8898",
              "#9FB1BC",
              "#1d5a79",
              "999999"
            ],
            data: [10, 2, 8, 25, 55]
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
