<template>
  <div class="chart">
    <h3>Geographic Allocation</h3>
    <div class="legend d-flex justify-content-around align-items-center">
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>50%</h4>
        <p>Americas</p>
      </div>
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>20%</h4>
        <p>Europe</p>
      </div>
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>20%</h4>
        <p>Asia</p>
      </div>
      <div
        class="legend-item d-flex flex-column justify-content-center align-items-center"
      >
        <h4>10%</h4>
        <p>Rest of the world</p>
      </div>
    </div>
    <div>
      <GChart
        :settings="{
          packages: ['corechart', 'table', 'geochart'],
          mapsApiKey: 'AIzaSyAByDV5KcQ2ewLf98k7AVDHcXwznPBj1QI'
        }"
        type="GeoChart"
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  components: {
    GChart
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        [
          "Region Code",
          "Continent",
          "Allocation",
          { role: "tooltip", p: { html: true } }
        ],
        [
          "019",
          "Americas",
          { v: 50, f: 50 + "%" },
          "<ul><li>USA</li><li>Canada</li><li>Brazil</li><li>Mexico</li><li>Etc...</li></ul>"
        ],
        [
          "150",
          "Europe",
          { v: 20, f: 20 + "%" },
          "<ul><li>United Kingdom</li><li>Germany</li><li>France</li><li>Italy</li><li>Etc...</li</ul>"
        ],
        [
          "142",
          "Asia",
          { v: 20, f: 20 + "%" },
          "<ul><li>China</li><li>Philippines</li><li>Hongkong</li><li>Singapore</li><li>Etc...</li</ul>"
        ]
      ],
      chartOptions: {
        chart: {
          title: "Geographical Allocation"
        },
        resolution: "continents",
        colors: ["#393D3F", "#6E8898", "#9FB1BC"],
        backgroundColor: "#f1f1f1",
        datalessRegionColor: "#aeb3b6",
        tooltip: { isHtml: true, textStyle: { fontSize: 18, color: "#1e5979" } }
      }
    };
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

h3 {
  text-align: center;
  font-size: 2rem;
  color: $brand-color-primary;
  text-align: center;
  margin-bottom: 40px;
}
</style>
