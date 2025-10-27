/**
 * Theme: Reback - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Apex Pie Charts
 */

window.loadPieCharts = function () {
    //
    // SIMPLE PIE CHART
    //

    try {
        const simplePieChart = document.getElementById("simple-pie");
    
        if (simplePieChart) {
            let colors = ["#ff5b5b", "#ffcc00", "#00e5b0", "#00aaff", "#ff5b5b"];
        
            const dataColors = simplePieChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 320,
                    type: 'pie',
                },
                series: [44, 55, 41, 17, 15],
                labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
                colors: colors,
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    verticalAlign: 'middle',
                    floating: false,
                    fontSize: '14px',
                    offsetX: 0,
                    offsetY: 7
                },
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 240
                        },
                        legend: {
                            show: false
                        },
                    }
                }]
            };

            const chart = new ApexCharts(simplePieChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'simple-pie' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }



    //
    // SIMPLE DONUT CHART
    //
    try {
        const simpleDonutChart = document.getElementById("simple-donut");

        if (simpleDonutChart) {
            let colors = ["#7f56da", "#1c84ee", "#ff6c2f", "#4ecac2", "#f9b931"];
        
            const dataColors = simpleDonutChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 320,
                    type: 'donut',
                },
                series: [44, 55, 41, 17, 15],
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    verticalAlign: 'middle',
                    floating: false,
                    fontSize: '14px',
                    offsetX: 0,
                    offsetY: 7
                },
                labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
                colors: colors,
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 240
                        },
                        legend: {
                            show: false
                        },
                    }
                }]
            };

            const chart = new ApexCharts(simpleDonutChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'simple-donut' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }



    //
    // MONOCHROME PIE CHART
    //
    try {
        const monochromePieChart = document.getElementById("monochrome-pie");

        if (monochromePieChart) {
            let colors = ["#ff5b5b"];
        
            const dataColors = monochromePieChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 320,
                    type: 'pie',
                },
                series: [25, 15, 44, 55, 41, 17],
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    verticalAlign: 'middle',
                    floating: false,
                    fontSize: '14px',
                    offsetX: 0,
                    offsetY: 7
                },
                theme: {
                    monochrome: {
                        enabled: true
                    }
                },
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 240
                        },
                        legend: {
                            show: false
                        },
                    }
                }]
            };

            const chart = new ApexCharts(monochromePieChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'monochrome-pie' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

    //
    // GRADIENT DONUT CHART
    //
    try {
        const gradientDonutChart = document.getElementById("gradient-donut");

        if (gradientDonutChart) {
            let colors = ["#7f56da", "#1c84ee", "#ff6c2f", "#4ecac2", "#f9b931"];
        
            const dataColors = gradientDonutChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 320,
                    type: 'donut',
                },
                series: [44, 55, 41, 17, 15],
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    verticalAlign: 'middle',
                    floating: false,
                    fontSize: '14px',
                    offsetX: 0,
                    offsetY: 7
                },
                labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
                colors: colors,
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 240
                        },
                        legend: {
                            show: false
                        },
                    }
                }],
                fill: {
                    type: 'gradient'
                }
            };

            const chart = new ApexCharts(gradientDonutChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'gradient-donut' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }



    //
    // PATTERNED DONUT CHART
    //
    try {
        const patternedDonutChart = document.getElementById("patterned-donut");

        if (patternedDonutChart) {
            let colors = ["#7f56da", "#1c84ee", "#ff6c2f", "#4ecac2", "#f9b931"];

            const dataColors = patternedDonutChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 320,
                    type: 'donut',
                    dropShadow: {
                        enabled: true,
                        color: '#111',
                        top: -1,
                        left: 3,
                        blur: 3,
                        opacity: 0.2
                    }
                },
                stroke: {
                    show: true,
                    width: 2,
                },
                series: [44, 55, 41, 17, 15],
                colors: colors,
                labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
                dataLabels: {
                    dropShadow: {
                        blur: 3,
                        opacity: 0.8
                    }
                },
                fill: {
                    type: 'pattern',
                    opacity: 1,
                    pattern: {
                        enabled: true,
                        style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
                    },
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    verticalAlign: 'middle',
                    floating: false,
                    fontSize: '14px',
                    offsetX: 0,
                    offsetY: 7
                },
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 240
                        },
                        legend: {
                            show: false
                        },
                    }
                }]
            };

            const chart = new ApexCharts(patternedDonutChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'patterned-donut' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }



    //
    // PIE CHART WITH IMAGE FILL
    //
    try {
        const imagePieChart = document.getElementById("image-pie");

        if (imagePieChart) {
            let colors = ["#ff5b5b"];  // Default colors

            const dataColors = imagePieChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 320,
                    type: 'pie',
                },
                labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
                colors: colors,
                series: [44, 33, 54, 45],
                fill: {
                    type: 'image',
                    opacity: 0.85,
                    image: {
                        src: ['/images/small/img-1.jpg', '/images/small/img-2.jpg', '/images/small/img-3.jpg', '/images/small/img-5.jpg'],
                        width: 25,
                        imageHeight: 25
                    },
                },
                stroke: {
                    width: 4
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    verticalAlign: 'middle',
                    floating: false,
                    fontSize: '14px',
                    offsetX: 0,
                    offsetY: 7
                },
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 240
                        },
                        legend: {
                            show: false
                        },
                    }
                }]
            };

            const chart = new ApexCharts(imagePieChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'image-pie' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }



    //
    // DONUT UPDATE
    //
    try {
        const donutUpdateChart = document.getElementById("update-donut");

        if (donutUpdateChart) {
            let colors = ["#5b69bc", "#35b8e0", "#10c469", "#fa5c7c"];

            const dataColors = donutUpdateChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 320,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false
                },
                series: [44, 55, 13, 33],
                colors: colors,
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    verticalAlign: 'middle',
                    floating: false,
                    fontSize: '14px',
                    offsetX: 0,
                    offsetY: 7
                },
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 240
                        },
                        legend: {
                            show: false
                        },
                    }
                }]
            };

            const chart = new ApexCharts(donutUpdateChart, options);
            chart.render();

            function appendData() {
                var arr = chart.w.globals.series.map(function () {
                    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                });
                arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
                return arr;
            }

            function removeData() {
                var arr = chart.w.globals.series.map(function () {
                    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                });
                arr.pop();
                return arr;
            }

            function randomize() {
                return chart.w.globals.series.map(function () {
                    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                });
            }

            function reset() {
                return options.series;
            }

            document.querySelector("#randomize").addEventListener("click", function () {
                chart.updateSeries(randomize());
            });

            document.querySelector("#add").addEventListener("click", function () {
                chart.updateSeries(appendData());
            });

            document.querySelector("#remove").addEventListener("click", function () {
                chart.updateSeries(removeData());
            });

            document.querySelector("#reset").addEventListener("click", function () {
                chart.updateSeries(reset());
            });

        } else {
            console.warn("Chart container with ID 'update-donut' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

}