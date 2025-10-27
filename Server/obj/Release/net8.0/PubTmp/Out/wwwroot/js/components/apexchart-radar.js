/**
 * Theme: Reback - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Apex Radar Charts
 */

window.loadRadarCharts = function () {

    //
    // BASIC RADAR CHART
    //


    try {
        const basicRadarChart = document.getElementById("basic-radar");

        if (basicRadarChart) {
            let colors = ["#7f56da"];

            const dataColors = basicRadarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                series: [{
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20],
                }],
                colors: colors,
                labels: ['January', 'February', 'March', 'April', 'May', 'June']
            };

            const chart = new ApexCharts(basicRadarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'basic-radar' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

    //
    // RADAR WITH POLYGON-FILL
    //
    try {
        const polygonRadarChart = document.getElementById("radar-polygon");

        if (polygonRadarChart) {
            let colors = ["#ff6c2f"];

            const dataColors = polygonRadarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 350,
                    type: "radar",
                    toolbar: {
                        show: false
                    }
                },
                series: [
                    {
                        name: "Series 1",
                        data: [20, 100, 40, 30, 50, 80, 33]
                    }
                ],
                labels: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                plotOptions: {
                    radar: {
                        size: 140
                    }
                },
                colors: colors,
                markers: {
                    size: 4,
                    colors: ["#fff"],
                    strokeColor: colors,
                    strokeWidth: 2
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val;
                        }
                    }
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function (val, i) {
                            return i % 2 === 0 ? val : "";
                        }
                    }
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

            const chart = new ApexCharts(polygonRadarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'radar-polygon' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the polygon radar chart:", error);
    }


    //
    // RADAR – MULTIPLE SERIES
    //
    try {
        const multiSeriesRadarChart = document.getElementById("radar-multiple-series");

        if (multiSeriesRadarChart) {
            let colors = ["#5b69bc", "#02a8b5", "#fd7e14"];

            const dataColors = multiSeriesRadarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 350,
                    type: 'radar'
                },
                series: [{
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20],
                }, {
                    name: 'Series 2',
                    data: [20, 30, 40, 80, 20, 80],
                }, {
                    name: 'Series 3',
                    data: [44, 76, 78, 13, 43, 10],
                }],
                stroke: {
                    width: 0
                },
                fill: {
                    opacity: 0.4
                },
                markers: {
                    size: 0
                },
                legend: {
                    offsetY: -10,
                },
                colors: colors,
                labels: ['2011', '2012', '2013', '2014', '2015', '2016']
            };

            const chart = new ApexCharts(multiSeriesRadarChart, options);
            chart.render();

            function update() {
                function randomSeries() {
                    var arr = [];
                    for (var i = 0; i < 6; i++) {
                        arr.push(Math.floor(Math.random() * 100));
                    }

                    return arr;
                }

                chart.updateSeries([
                    {
                        name: "Series 1",
                        data: randomSeries(),
                    },
                    {
                        name: "Series 2",
                        data: randomSeries(),
                    },
                    {
                        name: "Series 3",
                        data: randomSeries(),
                    },
                ]);
            }

            const updateButton = document.getElementById("btn-update");

            // Attach the click event listener
            updateButton.addEventListener("click", update);
            
        } else {
            console.warn("Chart container with ID 'radar-multiple-series' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

}