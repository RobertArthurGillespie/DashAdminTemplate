/**
 * Theme: Reback - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Apex Bar Charts
 */

window.loadPolarAreaCharts = function () {

    //
    // BASIC POLAR AREA CHART
    //


    try {
        const basicPolarAreaChart = document.getElementById("basic-polar-area");

        if (basicPolarAreaChart) {
            let colors = ["#1c84ee", "#f9b931", "#4ecac2"];
        
            const dataColors = basicPolarAreaChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 380,
                    type: 'polarArea',
                },
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                },
                labels: ['Vote A', 'Vote B', 'Vote C', 'Vote D', 'Vote E', 'Vote F'],
                legend: {
                    position: 'bottom'
                },
                colors: colors,
                series: [14, 23, 21, 17, 15, 10],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };

            const chart = new ApexCharts(basicPolarAreaChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'basic-polar-area' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }


    //
    // MONOCHROME POLAR AREA
    //

    try {
        const monocromePolarAreaChart = document.getElementById("monochrome-polar-area");

        if (monocromePolarAreaChart) {
            let colors = ["#1c84ee"];
        
            const dataColors = monocromePolarAreaChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                series: [42, 47, 52, 58, 65],
                chart: {
                    height: 380,
                    type: 'polarArea'
                },
                labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
                fill: {
                    opacity: 1
                },
                stroke: {
                    width: 1
                },
                yaxis: {
                    show: false
                },
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 0
                        },
                        spokes: {
                            strokeWidth: 0
                        },
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        shadeTo: 'light',
                        color: '#727cf5',
                        shadeIntensity: 0.6
                    }
                }
            };

            const chart = new ApexCharts(monocromePolarAreaChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'monochrome-polar-area' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }
}