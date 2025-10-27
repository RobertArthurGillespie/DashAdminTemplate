/**
 * Theme: Reback - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Apex line Charts
 */


window.loadLineCharts = function () {
    
    //
    // Syncing charts
    //
    try {
        const syncingLineChart = document.getElementById("line-chart-syncing");

        if (syncingLineChart) {
            let colors = ["#1c84ee"];
      
            const dataColors = syncingLineChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    toolbar: {
                        show: false,
                    },
                    type: "line",
                    height: 160,
                    id: "fb",
                    group: "social",
                },
                colors: colors,
                stroke: {
                    width: [3],
                    curve: "straight",
                },
                toolbar: {
                    tools: {
                        selection: false,
                    },
                },
                fill: {
                    opacity: 1,
                },
                tooltip: {
                    followCursor: false,
                    x: {
                        show: false,
                    },
                    marker: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return "";
                            },
                        },
                    },
                },
                series: [
                    {
                        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
                            min: 10,
                            max: 30,
                        }),
                    },
                ],
                xaxis: {
                    type: "datetime",
                },
                grid: {
                    row: {
                        colors: ["transparent", "transparent"],
                        opacity: 0.2,
                    },
                    borderColor: "#f1f3fa",
                },
            };

            const chart = new ApexCharts(syncingLineChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'line-chart-syncing' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }


    //
    // Syncing Chart-2
    //

    try {
        const syncingLineChart2 = document.getElementById("line-chart-syncing2");

        if (syncingLineChart2) {
            let colors = ["#4ecac2"];
      
            const dataColors = syncingLineChart2.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    toolbar: {
                        show: false,
                    },
                    height: 200,
                    type: "line",
                    id: "yt",
                    group: "social",
                },
                colors: colors,
                dataLabels: {
                    enabled: false,
                },
                toolbar: {
                    tools: {
                        selection: false,
                    },
                },
                tooltip: {
                    followCursor: false,
                    x: {
                        show: false,
                    },
                    marker: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return "";
                            },
                        },
                    },
                },
                stroke: {
                    width: [3],
                    curve: "smooth",
                },
                series: [
                    {
                        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
                            min: 10,
                            max: 60,
                        }),
                    },
                ],
                fill: {
                    gradient: {
                        enabled: true,
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                    },
                },
                legend: {
                    position: "top",
                    horizontalAlign: "left",
                },
                xaxis: {
                    type: "datetime",
                },
                grid: {
                    row: {
                        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
                        opacity: 0.2,
                    },
                    borderColor: "#f1f3fa",
                },
            };

            const chart = new ApexCharts(syncingLineChart2, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'line-chart-syncing2' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }


    /*
      // this function will generate output in this format
      // data = [
          [timestamp, 23],
          [timestamp, 33],
          [timestamp, 12]
          ...
      ]
    */
    function generateDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }


    //
    // Missing Data
    //
    try {
        const nullValueLineChart = document.getElementById("line-chart-missing");

        if (nullValueLineChart) {
            let colors = ["#1c84ee", "#ef5f5f", "#4ecac2"];

            const dataColors = nullValueLineChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: "line",
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                    animations: {
                        enabled: false,
                    },
                },
                stroke: {
                    width: [5, 5, 4],
                    curve: "straight",
                },
                series: [
                    {
                        name: "Peter",
                        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
                    },
                    {
                        name: "Johnny",
                        data: [
                            10,
                            15,
                            null,
                            12,
                            null,
                            10,
                            12,
                            15,
                            null,
                            null,
                            12,
                            null,
                            14,
                            null,
                            null,
                            null,
                        ],
                    },
                    {
                        name: "David",
                        data: [
                            null,
                            null,
                            null,
                            null,
                            3,
                            4,
                            1,
                            3,
                            4,
                            6,
                            7,
                            9,
                            5,
                            null,
                            null,
                            null,
                        ],
                    },
                ],
                colors: colors,
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                grid: {
                    row: {
                        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
                        opacity: 0.2,
                    },
                    borderColor: "#f1f3fa",
                    padding: {
                        bottom: 5,
                    },
                },
                legend: {
                    offsetY: 7,
                },
            };

            const chart = new ApexCharts(nullValueLineChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'line-chart-missing' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

    //
    // Dashed line chart
    //
    try {
        const dashedLineChart = document.getElementById("line-chart-dashed");

        if (dashedLineChart) {
            let colors = ["#1c84ee", "#ef5f5f", "#4ecac2"];
      
            const dataColors = dashedLineChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: "line",
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: [3, 5, 3],
                    curve: "straight",
                    dashArray: [0, 8, 5],
                },
                series: [
                    {
                        name: "Session Duration",
                        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
                    },
                    {
                        name: "Page Views",
                        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
                    },
                    {
                        name: "Total Visits",
                        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
                    },
                ],
                markers: {
                    size: 0,
                    style: "hollow", // full, hollow, inverted
                },
                xaxis: {
                    categories: [
                        "01 Jan",
                        "02 Jan",
                        "03 Jan",
                        "04 Jan",
                        "05 Jan",
                        "06 Jan",
                        "07 Jan",
                        "08 Jan",
                        "09 Jan",
                        "10 Jan",
                        "11 Jan",
                        "12 Jan",
                    ],
                },
                colors: colors,
                tooltip: {
                    y: {
                        title: {
                            formatter: function (val) {
                                if (val === "Session Duration") return val + " (mins)";
                                else if (val === "Page Views") return val + " per session";
                                return val;
                            },
                        },
                    },
                },
                grid: {
                    borderColor: "#f1f3fa",
                },
                legend: {
                    offsetY: 7,
                },
            };

            const chart = new ApexCharts(dashedLineChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'line-chart-dashed' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }


    //
    // Stepline Charts
    //

    try {
        const stepLineChart = document.getElementById("line-chart-stepline");

        if (stepLineChart) {
            let colors = ["#ff6c2f"];

            const dataColors = stepLineChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    type: 'line',
                    height: 344
                },
                stroke: {
                    curve: 'stepline',
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
                }],
                colors: colors,
                title: {
                    text: 'Stepline Chart',
                    align: 'left'
                },
                markers: {
                    hover: {
                        sizeOffset: 4
                    }
                },
            };

            const chart = new ApexCharts(stepLineChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'line-chart-stepline' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }


    try {
        const brushLineChart = document.getElementById("chart-line2");
        const brushLineChart2 = document.getElementById("chart-line");

        if (brushLineChart && brushLineChart2) {
            let colors1 = ["#1c84ee"];
            let dataColors1 = brushLineChart.dataset.colors;
            if (dataColors1) {
                colors1 = dataColors1.split(",");
            }

            const data = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
                min: 30,
                max: 90
            });

            const options = {
                series: [{
                    data: data
                }],
                chart: {
                    id: 'chart2',
                    type: 'line',
                    height: 230,
                    toolbar: {
                        autoSelected: 'pan',
                        show: false
                    }
                },
                colors: colors1,
                stroke: {
                    width: 3
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    opacity: 1,
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime'
                }
            };

            const chart1 = new ApexCharts(brushLineChart, options);
            chart1.render();

            let colors2 = ["#1c84ee"];
            let dataColors2 = brushLineChart2.dataset.colors;
            if (dataColors2) {
                colors2 = dataColors2.split(",");
            }

            const optionsLine = {
                series: [{
                    data: data
                }],
                chart: {
                    id: 'chart1',
                    height: 130,
                    type: 'area',
                    brush: {
                        target: 'chart2',
                        enabled: true
                    },
                    selection: {
                        enabled: true,
                        xaxis: {
                            min: new Date('19 Jun 2017').getTime(),
                            max: new Date('14 Aug 2017').getTime()
                        }
                    },
                },
                colors: colors2,
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.91,
                        opacityTo: 0.1,
                    }
                },
                xaxis: {
                    type: 'datetime',
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: {
                    tickAmount: 2
                }
            };

            const chart2 = new ApexCharts(brushLineChart2, optionsLine);
            chart2.render();

        } else {
            console.warn("One or both chart containers not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the charts:", error);
    }


    //
    // Realtime chart
    //

    'use strict';

    try {
        const realtimeLineChart = document.getElementById("line-chart-realtime");

        if (realtimeLineChart) {
            let lastDate = 0;
            let data = [];

            function getDayWiseTimeSeries(baseval, count, yrange) {
                let i = 0;
                while (i < count) {
                    let x = baseval;
                    let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                    data.push({ x: x, y: y });
                    lastDate = baseval;
                    baseval += 86400000;
                    i++;
                }
            }

            function getNewSeries(baseval, yrange) {
                const newDate = baseval + 86400000;
                lastDate = newDate;
                data.push({
                    x: newDate,
                    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
                });
            }

            function resetData() {
                data = data.slice(data.length - 10, data.length);
            }

            getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
                min: 10,
                max: 90
            });

            let colors = ["#4ecac2"];
            const dataColors = realtimeLineChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 350,
                    type: 'line',
                    animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                            speed: 2000
                        }
                    },
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: [3],
                },
                colors: colors,
                series: [{
                    data: data
                }],
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime',
                    range: 777600000
                },
                yaxis: {
                    max: 100
                },
                legend: {
                    show: false
                },
                grid: {
                    borderColor: '#f1f3fa',
                }
            };

            const chart = new ApexCharts(realtimeLineChart, options);
            chart.render();

            const dataPointsLength = 10;

            window.setInterval(function () {
                getNewSeries(lastDate, {
                    min: 10,
                    max: 90
                });

                chart.updateSeries([{ data: data }]);
            }, 2000);

            window.setInterval(function () {
                resetData();
                chart.updateSeries([{ data: data }], false, true);
            }, 60000);
        } else {
            console.warn("Chart container with ID 'line-chart-realtime' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

}