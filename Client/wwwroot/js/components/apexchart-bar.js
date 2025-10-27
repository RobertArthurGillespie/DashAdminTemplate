/**
 * Theme: Reback - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Apex Bar Charts
 */

window.loadBarCharts = function () {

    //
    // BASIC BAR CHART
    //

    try {
        const basicBarChart = document.getElementById("basic-bar");

        if (basicBarChart) {
            let colors = ["#1c84ee"];

            const dataColors = basicBarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: "bar",
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                series: [
                    {
                        data: [455, 435, 410, 480, 530, 575, 685, 1345, 1165, 1075],
                    },
                ],
                colors: colors,
                xaxis: {
                    categories: [
                        "South Korea",
                        "Canada",
                        "United Kingdom",
                        "Netherlands",
                        "Italy",
                        "France",
                        "Japan",
                        "United States",
                        "China",
                        "Germany",
                    ],
                },
                states: {
                    hover: {
                        filter: "none",
                    },
                },
                grid: {
                    borderColor: "#f1f3fa",
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

            const chart = new ApexCharts(basicBarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'basic-bar' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the bar chart:", error);
    }


    //
    // GROUPED BAR CHART
    //
    try {
        const groupedBarChart = document.getElementById("grouped-bar");

        if (groupedBarChart) {
            let colors = ["#1c84ee", "#4ecac2"];

            const dataColors = groupedBarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: "bar",
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: "top"
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: "12px",
                        colors: ["#fff"]
                    }
                },
                colors: colors,
                stroke: {
                    show: true,
                    width: 1,
                    colors: ["#fff"]
                },
                series: [
                    {
                        name: "Series 1",
                        data: [51, 30, 31, 50, 11, 42, 30]
                    },
                    {
                        name: "Series 2",
                        data: [46, 57, 43, 66, 24, 45, 23]
                    }
                ],
                xaxis: {
                    categories: [2016, 2017, 2018, 2019, 2021, 2022, 2023]
                },
                legend: {
                    offsetY: 5
                },
                states: {
                    hover: {
                        filter: "none"
                    }
                },
                grid: {
                    borderColor: "#f1f3fa",
                    padding: {
                        bottom: 5
                    }
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

            const chart = new ApexCharts(groupedBarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'grouped-bar' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the grouped bar chart:", error);
    }


    //
    // STACKED BAR CHART
    //
    try {
        const stackedBarChart = document.getElementById("stacked-bar");

        if (stackedBarChart) {
            let colors = ["#1c84ee", "#4ecac2", "#22c55e", "#f9b931", "#ff6c2f"];

            const dataColors = stackedBarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: "bar",
                    stacked: true,
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    show: false,
                },
                colors: colors,
                series: [
                    {
                        name: "Marine Sprite",
                        data: [30, 17, 24, 37, 30, 29, 15],
                    },
                    {
                        name: "Striking Calf",
                        data: [11, 9, 7, 10, 8, 11, 6],
                    },
                    {
                        name: "Tank Picture",
                        data: [14, 19, 13, 11, 17, 13, 22],
                    },
                    {
                        name: "Bucket Slope",
                        data: [55, 34, 35, 54, 15, 45, 34],
                    },
                    {
                        name: "Reborn Kid",
                        data: [46, 57, 43, 39, 24, 45, 23],
                    },
                ],
                xaxis: {
                    categories: [2016, 2017, 2018, 2019, 2021, 2022, 2023],
                    labels: {
                        formatter: function (val) {
                            return val + "K";
                        },
                    },
                },
                yaxis: {
                    title: {
                        text: undefined,
                        style: {
                            color: "#fff",
                        },
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K";
                        },
                    },
                },
                fill: {
                    opacity: 1,
                },
                states: {
                    hover: {
                        filter: "none",
                    },
                },
                legend: {
                    position: "top",
                    horizontalAlign: "center",
                    offsetY: 10,
                },
                grid: {
                    borderColor: "#f1f3fa",
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

            const chart = new ApexCharts(stackedBarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'stacked-bar' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the stacked bar chart:", error);
    }


    //
    // 100% STACKED BAR CHART
    //
    try {
        const stackedBarChart2 = document.getElementById("full-stacked-bar");

        if (stackedBarChart2) {
            let colors = ["#1c84ee", "#4ecac2", "#22c55e", "#f9b931", "#ff6c2f"];

            const dataColors = stackedBarChart2.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: "bar",
                    stacked: true,
                    stackType: "100%",
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"],
                },
                series: [
                    {
                        name: "Marine Sprite",
                        data: [30, 17, 24, 37, 30, 29, 15],
                    },
                    {
                        name: "Striking Calf",
                        data: [11, 9, 7, 10, 8, 11, 6],
                    },
                    {
                        name: "Tank Picture",
                        data: [14, 19, 13, 11, 17, 13, 22],
                    },
                    {
                        name: "Bucket Slope",
                        data: [55, 34, 35, 54, 15, 45, 34],
                    },
                    {
                        name: "Reborn Kid",
                        data: [46, 57, 43, 39, 24, 45, 23],
                    },
                ],
                xaxis: {
                    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                },
                colors: colors,
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K";
                        },
                    },
                },
                fill: {
                    opacity: 1,
                },
                states: {
                    hover: {
                        filter: "none",
                    },
                },
                legend: {
                    position: "top",
                    horizontalAlign: "center",
                    offsetY: 10,
                },
                grid: {
                    borderColor: "#f1f3fa",
                    padding: {
                        top: 0,
                    },
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

            const chart = new ApexCharts(stackedBarChart2, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'full-stacked-bar' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }


    //
    // BAR WITH NEGATIVE VALUES
    //
    try {
        const negativeValueBarChart = document.getElementById("negative-bar");

        if (negativeValueBarChart) {
            let colors = ["#1c84ee", "#4ecac2"];

            const dataColors = negativeValueBarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: "bar",
                    stacked: true,
                    toolbar: {
                        show: false,
                    },
                },
                colors: colors,
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: "80%",
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"],
                },
                series: [
                    {
                        name: "Males",
                        data: [
                            0.75, 0.85, 0.96, 1.08, 1.7, 2.3, 3.1, 4.0, 4.1, 4.4, 4.2, 4.5, 4.3,
                            4.4, 4.7, 4.1, 3.7, 3.2,
                        ],
                    },
                    {
                        name: "Females",
                        data: [
                            -0.75, -0.85, -0.86, -0.98, -1.2, -2.0, -2.65, -3.5, -3.76, -4.02, -4.1,
                            -4.2, -3.9, -3.8, -3.9, -3.2, -2.9, -2.6,
                        ],
                    },
                ],
                grid: {
                    borderColor: "#f1f3fa",
                    padding: {
                        bottom: 5,
                    },
                    xaxis: {
                        showLines: false,
                    },
                },
                yaxis: {
                    min: -5,
                    max: 5,
                    title: {
                        // text: 'Age',
                    },
                },
                tooltip: {
                    shared: false,
                    x: {
                        formatter: function (val) {
                            return val;
                        },
                    },
                    y: {
                        formatter: function (val) {
                            return Math.abs(val) + "%";
                        },
                    },
                },
                xaxis: {
                    categories: [
                        "90+",
                        "85-89",
                        "80-84",
                        "75-79",
                        "70-74",
                        "65-69",
                        "60-64",
                        "55-59",
                        "50-54",
                        "45-49",
                        "40-44",
                        "35-39",
                        "30-34",
                        "25-29",
                        "20-24",
                        "15-19",
                        "10-14",
                        "0-9",
                    ],
                    title: {
                        text: "Percent",
                    },
                    labels: {
                        formatter: function (val) {
                            return Math.abs(Math.round(val)) + "%";
                        },
                    },
                },
                legend: {
                    offsetY: 7,
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

            const chart = new ApexCharts(negativeValueBarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'negative-bar' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

}