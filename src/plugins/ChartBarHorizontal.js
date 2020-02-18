import {
    HorizontalBar,
    mixins
} from 'vue-chartjs'

export default {
    extends: HorizontalBar,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'option'],
    data() {
        return {
            options: {
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true,
                        },
                        scaleLabel:{
                            display:false
                        },
                        gridLines: {
                        }, 
                        stacked: true
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false,
                            color: "#fff",
                            zeroLineColor: "#fff",
                            zeroLineWidth: 0
                        },
                        stacked: true
                    }]
                },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem, data) {
                          return data.datasets[tooltipItem.datasetIndex].label +': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
                        }
                    },
                    mode: 'nearest',
                    backgroundColor: '#FFF',
                    titleFontSize: 18,
                    titleFontColor: '#0066ff',
                    bodyFontColor: '#1775a5',
                    bodyFontSize: 20
                },
                animation: {
                    duration: 0,
                    onComplete: function () {
                        // render the value of the chart above the bar
                        var ctx = this.chart.ctx;
                        ctx.font = Chart.helpers.fontString(18, 'normal', Chart.defaults.global.defaultFontFamily);
                        ctx.fillStyle = 'white';
                        ctx.textAlign = 'right';
                        ctx.textBaseline = 'bottom';
                        this.data.datasets.forEach(function (dataset) {
                            for (var i = 0; i < dataset.data.length; i++) {
                                var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                                ctx.fillText(dataset.data[i], model.x - 10, model.y + 10);
                            }
                        });
                    }
                }
            }
        }
    },
    mounted() {
        this.renderChart(this.chartdata, this.options)
    }

}