/**
 * Theme: Jidox - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Dashboard
 */

window.loadFinance = function () {

    try {
        const revenueChart = document.getElementById("dash-revenue-chart");

        if (revenueChart) {
            let colors = ["#7f56da", "#22c55e"];

            const options = {
                chart: {
                    height: 280,
                    type: "line",
                    toolbar: {
                        show: false
                    }
                },
                series: [
                    {
                        name: "Revenue",
                        type: "area",
                        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67]
                    },
                    {
                        name: "Expenses",
                        type: "line",
                        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35]
                    }
                ],
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
                    }
                },
                markers: {
                    size: [0, 0, 0],
                    strokeWidth: 2,
                    hover: {
                        size: 4
                    }
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                yaxis: {
                    min: 0,
                    tickAmount: 4,
                    labels: {
                        formatter: function (val) {
                            return val + "k";
                        },
                        offsetX: -15
                    },
                    axisBorder: {
                        show: false
                    }
                },
                grid: {
                    show: true,
                    strokeDashArray: 3,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                    padding: {
                        top: -10,
                        right: -2,
                        bottom: -10,
                        left: -5
                    }
                },
                legend: {
                    show: false
                },
                colors: colors,
                tooltip: {
                    shared: true,
                    y: [
                        {
                            formatter: function (y) {
                                return typeof y !== "undefined" ? "$" + y.toFixed(2) + "k" : y;
                            }
                        },
                        {
                            formatter: function (y) {
                                return typeof y !== "undefined" ? "$" + y.toFixed(2) + "k" : y;
                            }
                        }
                    ]
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

            const chart = new ApexCharts(revenueChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'dash-revenue-chart' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the revenue chart:", error);
    }

    try {
        const expensesChart = document.getElementById("daily-expenses");

        if (expensesChart) {
            const options = {
                series: [
                    {
                        name: "2024",
                        data: [2.7, 2.2, 1.3, 2.5, 1, 2.5, 1.2, 1.2, 2.7, 1, 3.6, 2.1],
                    },
                    {
                        name: "2023",
                        data: [-2.3, -1.9, -1, -2.1, -1.3, -2.2, -1.1, -2.3, -2.8, -1.1, -2.5, -1.5],
                    }
                ],
                chart: {
                    type: 'bar',
                    height: 280,
                    stacked: true,
                    toolbar: {
                        show: false
                    },
                    fontFamily: "inherit",
                    foreColor: "#ADB0BB",
                    offsetX: -15
                },
                colors: ["var(--bs-primary)", "var(--bs-info)"],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        barHeight: "80%",
                        columnWidth: "25%",
                        borderRadius: [3],
                        borderRadiusApplication: "end",
                        borderRadiusWhenStacked: "all"
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                grid: {
                    show: true,
                    strokeDashArray: 3,
                    padding: {
                        top: -10,
                        right: 0,
                        bottom: -10,
                        left: 0
                    },
                    borderColor: "rgba(0,0,0,0.05)",
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                yaxis: {
                    tickAmount: 4,
                    labels: {
                        formatter: function (val) {
                            return val + "k";
                        }
                    }
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    categories: [
                        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
                    ]
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

            const chart = new ApexCharts(expensesChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'daily-expenses' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the expenses chart:", error);
    }

    try {
        const revenueSourceChart = document.getElementById("revenue-sources");

        if (revenueSourceChart) {
            const options = {
                chart: {
                    height: 205,
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
                            size: '70%',
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
                labels: ["Online", "Offline", "Direct"],
                colors: ["var(--bs-primary)", "var(--bs-info)", "var(--bs-light)"],
                dataLabels: {
                    enabled: false
                }
            };

            const chart = new ApexCharts(revenueSourceChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'revenue-sources' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the revenue source chart:", error);
    }
}