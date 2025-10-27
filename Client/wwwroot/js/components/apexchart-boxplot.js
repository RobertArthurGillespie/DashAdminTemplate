/**
 * Theme: Reback - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Apex Boxplot Charts
 */
window.loadBoxplotCharts = function () {

    //
    // BASIC BOXPLOT
    //

    try {
        const basicBoxplotChart = document.getElementById("basic-boxplot");

        if (basicBoxplotChart) {
            let colors = ["#1c84ee", "#22c55e"];
        
            const dataColors = basicBoxplotChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                series: [{
                    type: 'boxPlot',
                    data: [{
                        x: 'Jan 2015',
                        y: [54, 66, 69, 75, 88]
                    },
                    {
                        x: 'Jan 2016',
                        y: [43, 65, 69, 76, 81]
                    },
                    {
                        x: 'Jan 2017',
                        y: [31, 39, 45, 51, 59]
                    },
                    {
                        x: 'Jan 2018',
                        y: [39, 46, 55, 65, 71]
                    },
                    {
                        x: 'Jan 2019',
                        y: [29, 31, 35, 39, 44]
                    },
                    {
                        x: 'Jan 2020',
                        y: [41, 49, 58, 61, 67]
                    },
                    {
                        x: 'Jan 2021',
                        y: [54, 59, 66, 71, 88]
                    }]
                }],
                chart: {
                    type: 'boxPlot',
                    height: 350,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    boxPlot: {
                        colors: {
                            upper: colors[0],
                            lower: colors[1]
                        }
                    }
                },
                stroke: {
                    colors: ['#a1a9b1']
                },
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            toolbar: {
                                show: false
                            }
                        },
                        legend: {
                            show: false
                        },
                    }
                }]
            };

            const chart = new ApexCharts(basicBoxplotChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'basic-boxplot' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }


    //
    // SCATTER BOXPLOT
    //

    try {
        const scatterBoxplotChart = document.getElementById("scatter-boxplot");

        if (scatterBoxplotChart) {
            let colors = ["#1c84ee", "#22c55e"];
        
            const dataColors = scatterBoxplotChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                series: [{
                    name: 'Box',
                    type: 'boxPlot',
                    data: [{
                        x: new Date('2017-01-01').getTime(),
                        y: [54, 66, 69, 75, 88]
                    },
                    {
                        x: new Date('2018-01-01').getTime(),
                        y: [43, 65, 69, 76, 81]
                    },
                    {
                        x: new Date('2019-01-01').getTime(),
                        y: [31, 39, 45, 51, 59]
                    },
                    {
                        x: new Date('2020-01-01').getTime(),
                        y: [39, 46, 55, 65, 71]
                    },
                    {
                        x: new Date('2021-01-01').getTime(),
                        y: [29, 31, 35, 39, 44]
                    }]
                },
                {
                    name: 'Outliers',
                    type: 'scatter',
                    data: [{
                        x: new Date('2017-01-01').getTime(),
                        y: 32
                    },
                    {
                        x: new Date('2018-01-01').getTime(),
                        y: 25
                    },
                    {
                        x: new Date('2019-01-01').getTime(),
                        y: 64
                    },
                    {
                        x: new Date('2020-01-01').getTime(),
                        y: 27
                    },
                    {
                        x: new Date('2020-01-01').getTime(),
                        y: 78
                    },
                    {
                        x: new Date('2021-01-01').getTime(),
                        y: 25
                    }]
                }],
                chart: {
                    type: 'boxPlot',
                    height: 350,
                    toolbar: {
                        show: false
                    }
                },
                colors: colors,
                stroke: {
                    colors: ['#a1a9b1']
                },
                legend: {
                    offsetY: 10,
                },
                xaxis: {
                    type: 'datetime',
                    tooltip: {
                        formatter: function (val) {
                            return new Date(val).getFullYear()
                        }
                    }
                },
                grid: {
                    padding: {
                        bottom: 5
                    }
                },
                tooltip: {
                    shared: false,
                    intersect: true
                },
                plotOptions: {
                    boxPlot: {
                        colors: {
                            upper: colors[0],
                            lower: colors[1]
                        }
                    }
                },
            };

            const chart = new ApexCharts(scatterBoxplotChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'scatter-boxplot' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

}