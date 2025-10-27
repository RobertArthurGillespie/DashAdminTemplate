/**
 * Theme: Reback - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Apex Area Charts
 */

window.loadHeatmapCharts = function () {

    //
    // BASIC HEATMAP - SINGLE SERIES
    //

    /*
    // this function will generate output in this format
    // data = [
        [timestamp, 23],
        [timestamp, 33],
        [timestamp, 12]
        ...
    ]
    */


    function generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = (i + 1).toString();
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }

    try {
        const basicHeatmapChart = document.getElementById("basic-heatmap");

        if (basicHeatmapChart) {
            let colors = ["#1c84ee"];

            const dataColors = basicHeatmapChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    toolbar: {
                        show: false
                    },
                    height: 380,
                    type: 'heatmap'
                },
                dataLabels: {
                    enabled: false
                },
                colors: colors,
                series: [
                    {
                        name: 'Metric 1',
                        data: generateData(20, { min: 0, max: 90 })
                    },
                    {
                        name: 'Metric 2',
                        data: generateData(20, { min: 0, max: 90 })
                    },
                    {
                        name: 'Metric 3',
                        data: generateData(20, { min: 0, max: 90 })
                    },
                    {
                        name: 'Metric 4',
                        data: generateData(20, { min: 0, max: 90 })
                    },
                    {
                        name: 'Metric 5',
                        data: generateData(20, { min: 0, max: 90 })
                    },
                    {
                        name: 'Metric  6',
                        data: generateData(20, { min: 0, max: 90 })
                    },
                    {
                        name: 'Metric 7',
                        data: generateData(20, { min: 0, max: 90 })
                    },
                    {
                        name: 'Metric 8',
                        data: generateData(20, { min: 0, max: 90 })
                    },
                    {
                        name: 'Metric 9',
                        data: generateData(20, { min: 0, max: 90 })
                    }
                ],
                xaxis: {
                    type: 'category'
                },
                grid: {
                    borderColor: '#f1f3fa'
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
                        }
                    }
                }]
            };

            const chart = new ApexCharts(basicHeatmapChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'basic-heatmap' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the heatmap chart:", error);
    }



    //
    // HEATMAP - MULTIPLE SERIES
    //

    /*
    // this function will generate output in this format
    // data = [
        [timestamp, 23],
        [timestamp, 33],
        [timestamp, 12]
        ...
    ]
    */

    try {
        const multiSeriesHeatmapChart = document.getElementById("multiple-series-heatmap");

        if (multiSeriesHeatmapChart) {
            let colors = [
                "#1c84ee", "#53389f", "#7f56da", "#ff86c8",
                "#ef5f5f", "#ff6c2f", "#f9b931", "#22c55e", "#4ecac2"
            ];

            const dataColors = multiSeriesHeatmapChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: 'heatmap',
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: colors,
                series: [
                    { name: 'Metric 1', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric 2', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric 3', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric 4', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric 5', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric 6', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric 7', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric 8', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric 9', data: generateData(20, { min: 0, max: 90 }) }
                ],
                xaxis: {
                    type: 'category'
                },
                grid: {
                    borderColor: '#f1f3fa'
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
                        }
                    }
                }]
            };

            const chart = new ApexCharts(multiSeriesHeatmapChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'multiple-series-heatmap' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the heatmap chart:", error);
    }


    //
    // HEATMAP - COLOR RANGE
    //

    /*
    // this function will generate output in this format
    // data = [
        [timestamp, 23],
        [timestamp, 33],
        [timestamp, 12]
        ...
    ]
    */

    try {
        const colorRangeHeatmapChart = document.getElementById("color-range-heatmap");

        if (colorRangeHeatmapChart) {
            let colors = ["#1c84ee", "#ef5f5f", "#f9b931", "#22c55e"];

            const options = {
                chart: {
                    height: 380,
                    type: 'heatmap',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    heatmap: {
                        shadeIntensity: 0.5,
                        colorScale: {
                            ranges: [
                                {
                                    from: -30,
                                    to: 5,
                                    name: 'Low',
                                    color: colors[0]
                                },
                                {
                                    from: 6,
                                    to: 20,
                                    name: 'Medium',
                                    color: colors[1]
                                },
                                {
                                    from: 21,
                                    to: 45,
                                    name: 'High',
                                    color: colors[2]
                                },
                                {
                                    from: 46,
                                    to: 55,
                                    name: 'Extreme',
                                    color: colors[3]
                                }
                            ]
                        }
                    }
                },
                dataLabels: {
                    enabled: false
                },
                series: [
                    { name: 'Jan', data: generateData(20, { min: -30, max: 55 }) },
                    { name: 'Feb', data: generateData(20, { min: -30, max: 55 }) },
                    { name: 'Mar', data: generateData(20, { min: -30, max: 55 }) },
                    { name: 'Apr', data: generateData(20, { min: -30, max: 55 }) },
                    { name: 'May', data: generateData(20, { min: -30, max: 55 }) },
                    { name: 'Jun', data: generateData(20, { min: -30, max: 55 }) },
                    { name: 'Jul', data: generateData(20, { min: -30, max: 55 }) },
                    { name: 'Aug', data: generateData(20, { min: -30, max: 55 }) },
                    { name: 'Sep', data: generateData(20, { min: -30, max: 55 }) }
                ],
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
                        }
                    }
                }]
            };

            const chart = new ApexCharts(colorRangeHeatmapChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'color-range-heatmap' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the heatmap chart:", error);
    }



    //
    // HEATMAP - RANGE WITHOUT SHADES
    //

    /*
    // this function will generate output in this format
    // data = [
        [timestamp, 23],
        [timestamp, 33],
        [timestamp, 12]
        ...
    ]
    */

    try {
        const roundedHeatmapChart = document.getElementById("rounded-heatmap");

        if (roundedHeatmapChart) {
            let colors = ["#1c84ee", "#4ecac2"];

            const dataColors = roundedHeatmapChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: 'heatmap',
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    width: 0
                },
                plotOptions: {
                    heatmap: {
                        radius: 30,
                        enableShades: false,
                        colorScale: {
                            ranges: [
                                {
                                    from: 0,
                                    to: 50,
                                    color: colors[0]
                                },
                                {
                                    from: 51,
                                    to: 100,
                                    color: colors[1]
                                }
                            ]
                        }
                    }
                },
                colors: colors,
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ['#fff']
                    }
                },
                series: [
                    { name: 'Metric1', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric2', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric3', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric4', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric5', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric6', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric7', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric8', data: generateData(20, { min: 0, max: 90 }) },
                    { name: 'Metric9', data: generateData(20, { min: 0, max: 90 }) }
                ],
                xaxis: {
                    type: 'category'
                },
                grid: {
                    borderColor: '#f1f3fa'
                }
            };

            const chart = new ApexCharts(roundedHeatmapChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'rounded-heatmap' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the heatmap chart:", error);
    }

}