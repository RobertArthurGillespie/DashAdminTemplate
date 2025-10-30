/*
Template Name: Reback - Responsive 5 Admin Dashboard
Author: Techzaa
File: dashboard - project js
*/

window.loadSales = function () {

    try {
        const salesOverviewChart = document.getElementById("dash-overview-chart");

        if (salesOverviewChart) {
            let colors = ["#7f56da", "#22c55e"];

            const dataColors = salesOverviewChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                series: [
                    {
                        name: "Revenue",
                        type: "area",
                        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
                    },
                    {
                        name: "Orders",
                        type: "line",
                        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
                    },
                ],
                chart: {
                    height: 369,
                    type: "line",
                    toolbar: {
                        show: false,
                    },
                },
                stroke: {
                    dashArray: [0, 8],
                    width: [2, 2],
                    curve: 'smooth'
                },
                fill: {
                    opacity: [1, 1],
                    type: ['gradient', 'solid'],
                    gradient: {
                        type: "vertical",
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 70]
                    },
                },
                markers: {
                    size: [0, 0, 0],
                    strokeWidth: 2,
                    hover: {
                        size: 4,
                    },
                },
                xaxis: {
                    categories: [
                        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                    ],
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                yaxis: {
                    min: 0,
                    labels: {
                        formatter: function (val) {
                            return val + "k";
                        },
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                grid: {
                    show: true,
                    xaxis: {
                        lines: {
                            show: false,
                        },
                    },
                    yaxis: {
                        lines: {
                            show: true,
                        },
                    },
                    padding: {
                        top: 0,
                        right: -2,
                        bottom: 15,
                        left: 15,
                    },
                },
                legend: {
                    show: true,
                    horizontalAlign: "center",
                    offsetX: 0,
                    offsetY: 5,
                    markers: {
                        width: 9,
                        height: 9,
                        radius: 6,
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0,
                    },
                },
                plotOptions: {
                    bar: {
                        columnWidth: "30%",
                        barHeight: "70%",
                        borderRadius: 3,
                    },
                },
                colors: colors,
                tooltip: {
                    shared: true,
                    y: [
                        {
                            formatter: function (y) {
                                if (typeof y !== "undefined") {
                                    return "$" + y.toFixed(2) + "k";
                                }
                                return y;
                            },
                        },
                        {
                            formatter: function (y) {
                                if (typeof y !== "undefined") {
                                    return "$" + y.toFixed(2) + "k";
                                }
                                return y;
                            },
                        },
                    ],
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

            const chart = new ApexCharts(salesOverviewChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'dash-overview-chart' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

    try {
        const salesByCategoryChart = document.getElementById("sales-category-chart");

        if (salesByCategoryChart) {
            let colors = ["#f9b931", "#ff86c8", "#4ecac2", "#7f56da"];

            const dataColors = salesByCategoryChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 250,
                    type: 'donut',
                },
                legend: {
                    show: false,
                    position: 'bottom',
                    horizontalAlign: "center",
                    offsetX: 0,
                    offsetY: -5,
                    markers: {
                        width: 9,
                        height: 9,
                        radius: 6,
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0,
                    },
                },
                stroke: {
                    width: 0
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '80%',
                            labels: {
                                show: true,
                                total: {
                                    showAlways: true,
                                    show: true
                                }
                            }
                        }
                    }
                },
                series: [140, 125, 85],
                labels: ["Detection", "Dedication", "Defensive Driving"],
                colors: colors,
                dataLabels: {
                    enabled: false
                }
            };

            const chart = new ApexCharts(salesByCategoryChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'sales-category-chart' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the Sales by Category chart:", error);
    }

}