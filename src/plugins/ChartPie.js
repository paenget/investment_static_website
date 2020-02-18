import { Pie, mixins } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
export default {
  extends: Pie,
  mixins: [mixins.reactiveProp],
  props: ["chartData", "option"],
  data() {
    return {
      options: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          // display: true,
          // text: 'test'
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return (
                data.labels[tooltipItem.index] +
                ": " +
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ] +
                "%"
              );
            }
          },
          backgroundColor: "#FFF",
          titleFontSize: 18,
          titleFontColor: "#0066ff",
          bodyFontColor: "#1775a5",
          bodyFontSize: 24
        },
        plugins: {
          datalabels: {
            color: "white",
            labels: {
              title: {
                font: {
                  weight: "bold",
                  size: 16
                }
              },
              value: {
                color: "green"
              }
            }
          }
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
