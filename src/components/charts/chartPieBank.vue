<template>
  <div class="our-process-chart">
    <h3 class="pb-3">Day in A Private Bank</h3>
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
        <h4 class="red">12.5%</h4>
        <p>Portfolio Management</p>
      </div>
      <div
        class="legend-item col-sm-2 col-4 d-flex flex-column justify-content-center align-items-center"
      >
        <h4>37.5%</h4>
        <p>Admin</p>
      </div>
      <div
        class="legend-item col-sm-2 col-4 d-flex flex-column justify-content-center align-items-center"
      >
        <h4>12.5%</h4>
        <p>Client Calls</p>
      </div>
      <div
        class="legend-item col-sm-2 col-4 d-flex flex-column justify-content-center align-items-center"
      >
        <h4 class="red">12.5%</h4>
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
          "Portfolio Management",
          "Admin",
          "Client Calls",
          "Trade Execution"
        ],
        datasets: [
          {
            backgroundColor: [
              "#393D3F",
              "#6E8898",
              "#9FB1BC",
              "#999999",
              "#1d5a79"
            ],
            data: [25, 12.5, 37.5, 12.5, 12.5]
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.red {
  color: #b93939 !important;
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
  h3 {
    color: $brand-color-primary;
  }
}
</style>