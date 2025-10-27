/**
 * Theme: Reback - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Apex RadialBar Charts
 */

window.loadRadialbarCharts = function () {

    //
    // BASIC RADIALBAR CHART
    //


    try {
        const basicRadialbarChart = document.getElementById("basic-radialbar");

        if (basicRadialbarChart) {
            let colors = ["#7f56da"];

            const dataColors = basicRadialbarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 320,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        },
                        track: {
                            background: "rgba(170,184,197, 0.4)"
                        }
                    },
                },
                colors: colors,
                series: [70],
                labels: ['CRICKET'],
            };

            const chart = new ApexCharts(basicRadialbarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'basic-radialbar' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the radial bar chart:", error);
    }



    //
    // MULTIPLE RADIALBARS
    //
    try {
        const multiRadialbarChart = document.getElementById("multiple-radialbar");

        if (multiRadialbarChart) {
            let colors = ["#1c84ee", "#7f56da", "#ff6c2f", "#4ecac2"];

            const dataColors = multiRadialbarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 320,
                    type: 'radialBar'
                },
                plotOptions: {
                    circle: {
                        dataLabels: {
                            showOn: 'hover'
                        }
                    },
                    radialBar: {
                        track: {
                            background: "rgba(170,184,197, 0.4)"
                        }
                    }
                },
                colors: colors,
                series: [44, 55, 67, 83],
                labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
                responsive: [{
                    breakpoint: 380,
                    options: {
                        chart: {
                            height: 260
                        }
                    }
                }]
            };

            const chart = new ApexCharts(multiRadialbarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'multiple-radialbar' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }



    //
    // CIRCLE CHART - CUSTOM ANGLE
    //
    try {
        const customAngleRadialbarChart = document.getElementById("circle-angle-radial");

        if (customAngleRadialbarChart) {
            let colors = ["#1c84ee", "#7f56da", "#ff6c2f", "#4ecac2"];

            const dataColors = customAngleRadialbarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: -30,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        track: {
                            background: "rgba(170,184,197, 0.4)"
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: colors,
                series: [76, 67, 61, 90],
                labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '13px',
                    position: 'left',
                    offsetX: 10,
                    offsetY: 10,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        horizontal: 1,
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            };

            const chart = new ApexCharts(customAngleRadialbarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'circle-angle-radial' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }



    //
    // CIRCLE CHART WITH IMAGE
    //
    try {
        const imageRadialbarChart = document.getElementById("image-radial");

        if (imageRadialbarChart) {
            const options = {
                chart: {
                    height: 360,
                    type: 'radialBar',
                },
                fill: {
                    type: 'image',
                    image: {
                        src: ['/images/small/img-2.jpg'],
                    }
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                series: [70],
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Volatility'],
                responsive: [{
                    breakpoint: 380,
                    options: {
                        chart: {
                            height: 280
                        }
                    }
                }]
            };

            const chart = new ApexCharts(imageRadialbarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'image-radial' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the radial bar chart:", error);
    }



    //
    // STROKED CIRCULAR GAUGE
    //
    try {
        const gaugeRadialbarChart = document.getElementById("stroked-guage-radial");

        if (gaugeRadialbarChart) {
            let colors = ["#ff6c2f"];

            const dataColors = gaugeRadialbarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: '22px',
                                color: undefined,
                                formatter: function (val) {
                                    return val + "%";
                                }
                            }
                        },
                        track: {
                            background: "rgba(170,184,197, 0.4)",
                            margin: 0
                        },
                    }
                },
                fill: {
                    gradient: {
                        enabled: true,
                        shade: 'dark',
                        shadeIntensity: 0.2,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 4
                },
                colors: colors,
                series: [67],
                labels: ['Median Ratio'],
                responsive: [{
                    breakpoint: 380,
                    options: {
                        chart: {
                            height: 280
                        }
                    }
                }]
            };

            const chart = new ApexCharts(gaugeRadialbarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'stroked-guage-radial' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the radial bar chart:", error);
    }


    // window.setInterval(function () {
    //     chart.updateSeries([Math.floor(Math.random() * (100 - 1 + 1)) + 1])
    // }, 2000)


    //
    // GRADIENT CIRCULAR CHART
    //
    try {
        const gradientRadialbarChart = document.getElementById("gradient-chart");

        if (gradientRadialbarChart) {
            let colors = ["#8f75da", "#727cf5"];

            const dataColors = gradientRadialbarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 330,
                    type: 'radialBar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: 'transparent',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: "rgba(170,184,197, 0.4)",
                            strokeWidth: '67%',
                            margin: 0
                        },
                        dataLabels: {
                            showOn: 'always',
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#888',
                                fontSize: '17px'
                            },
                            value: {
                                formatter: function (val) {
                                    return parseInt(val);
                                },
                                color: '#111',
                                fontSize: '36px',
                                show: true,
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: colors,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                series: [75],
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Percent']
            };

            const chart = new ApexCharts(gradientRadialbarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'gradient-chart' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }


    //
    // SEMI CIRCLE GAUGE
    //
    try {
        const semiCircleRadialbarChart = document.getElementById("semi-circle-gauge");

        if (semiCircleRadialbarChart) {
            let colors = ["#1c84ee"];

            const dataColors = semiCircleRadialbarChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                series: [76],
                chart: {
                    type: 'radialBar',
                    offsetY: -20,
                    height: 400,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "rgba(170, 184, 197, 0.1)",
                            strokeWidth: '97%',
                            margin: 5,
                            dropShadow: {
                                top: 2,
                                left: 0,
                                color: '#eef2f7',
                                opacity: 1,
                                blur: 2
                            }
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: '22px'
                            }
                        }
                    }
                },
                grid: {
                    padding: {
                        top: -10
                    }
                },
                colors: colors,
                labels: ['Average Results']
            };

            const chart = new ApexCharts(semiCircleRadialbarChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'semi-circle-gauge' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the semi-circle radial bar chart:", error);
    }
}