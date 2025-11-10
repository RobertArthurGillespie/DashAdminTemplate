/**
 * Theme: Reback - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Dashboard
 */

class VectorMap {


    initWorldMapMarker() {
        const map = new jsVectorMap({
            map: 'world',
            selector: '#world-map-markers',
            zoomOnScroll: true,
            zoomButtons: false,
            markersSelectable: true,
            markers: [
                { name: "Canada", coords: [56.1304, -106.3468] },
                { name: "Brazil", coords: [-14.2350, -51.9253] },
                { name: "Russia", coords: [61, 105] },
                { name: "China", coords: [35.8617, 104.1954] },
                { name: "United States", coords: [37.0902, -95.7129] }
            ],
            markerStyle: {
                initial: { fill: "#7f56da" },
                selected: { fill: "#22c55e" }
            },
            labels: {
                markers: {
                    render: marker => marker.name
                }
            },
            regionStyle: {
                initial: {
                    fill: 'rgba(169,183,197, 0.3)',
                    fillOpacity: 1,
                },
            },
        });
    }

    init() {
        this.initWorldMapMarker();
    }

}

window.loadAnalytics = async function (dotNetRef) {
    // --- CONFIGURATION ---
    // Define a target max for the radial chart (used to calculate the percentage)
    // *** ADJUST THIS VALUE BASED ON YOUR REQUIRED MAX HOURS ***
    const MAX_HOURS_TARGET = 5000;
    // ---------------------

    // --- 1. GET DATA FROM C# (Continuing Education Hours Sum) ---
    let hoursSum = 0;
    if (dotNetRef) {
        try {
            // Call the JSInvokable method in Analytics.razor
            hoursSum = await dotNetRef.invokeMethodAsync('GetTotalContinuingEducation');
        } catch (e) {
            console.error("Failed to get total continuing education hours from C#:", e);
            hoursSum = 0;
        }
    }

    // Calculate the percentage relative to the target max
    // Ensures the chart doesn't go over 100% and is rounded to a whole number.
    const chartPercentage = Math.min(100, Math.round((hoursSum / MAX_HOURS_TARGET) * 100));
    // ------------------------------------------------------------


    // 
    // Conversions Radial Bar Chart (ID: conversions)
    //
    /*try {
        const conversionsChartElement = document.getElementById("conversions");

        if (conversionsChartElement) {

            // If the chart is already initialized, just update the data to prevent conflicts
            if (conversionsChartElement.classList.contains('apexcharts-canvas')) {
                const existingChart = ApexCharts.getChartByID(conversionsChartElement.id);
                if (existingChart) {
                    existingChart.updateSeries([chartPercentage]);
                    console.log(`Updated conversions chart series to ${chartPercentage}%`);
                    return;
                }
            }


            const options = {
                series: [chartPercentage], // <-- Use the calculated percentage
                chart: {
                    height: 250,
                    type: 'radialBar',
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '14px',
                                color: '#a9b7c5',
                                offsetY: 20,
                                // Label below the number showing the raw hours data
                                formatter: function (val) {
                                    return `Total Hours: ${hoursSum} (Target ${MAX_HOURS_TARGET})`;
                                }
                            },
                            value: {
                                // Fix: Rounds the value to 0 decimal places before adding the %
                                formatter: function (val) {
                                    return val.toFixed(0) + '%';
                                },
                                fontSize: '24px',
                                offsetY: -10,
                                color: '#495057'
                            }
                        },
                        track: {
                            background: "rgba(170,184,197, 0.4)"
                        }
                    },
                },
                colors: ["#7f56da"],
                labels: ['Continuing Education Progress'], // <-- Set the chart label
            };

            const chart = new ApexCharts(conversionsChartElement, options);
            chart.render();
            console.log(`Rendered conversions chart with ${hoursSum} total hours (${chartPercentage}%).`);
        } else {
            console.warn("Chart container with ID 'conversions' not found. Cannot render.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the conversions chart:", error);
    }*/
    //
    // Conversions
    //
    try {
        const ConversionsChart = document.getElementById("conversions");

        if (ConversionsChart) {
            // If the chart is already initialized, just update the data to prevent conflicts
            if (ConversionsChart.classList.contains('apexcharts-canvas')) {
                const existingChart = ApexCharts.getChartByID(ConversionsChart.id);
                if (existingChart) {
                    existingChart.updateSeries([chartPercentage]);
                    console.log(`Updated conversions chart series to ${chartPercentage}%`);
                    return;
                }
            }
            let colors = ["#7f56da", "#22c55e"];

            const dataColors = ConversionsChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                chart: {
                    height: 292,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '14px',
                                color: undefined,
                                offsetY: 100
                            },
                            value: {
                                offsetY: 55,
                                fontSize: '20px',
                                color: undefined,
                                formatter: function (val) {
                                    return val.toFixed(0) + '%';
                                }
                            }
                        },
                        track: {
                            background: "rgba(170,184,197, 0.2)",
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
                series: [hoursSum],
                labels: ['Total CE Hours'],
                responsive: [{
                    breakpoint: 380,
                    options: {
                        chart: {
                            height: 180
                        }
                    }
                }],
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            };

            const chart = new ApexCharts(ConversionsChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'conversions' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the ConversionsChart:", error);
    }

    //
    // Performance-chart
    //
    try {
        const performanceChart = document.getElementById("dash-performance-chart");
        console.log("loading performance chart");

        // 1. Fetch the total reputation from the C# method
        let totalReputation = 0;
        if (dotNetRef) {
            console.log("Calling C# GetTotalReputation...");
            // Call the [JSInvokable] method in the Blazor component
            totalReputation = await dotNetRef.invokeMethodAsync('GetTotalReputation');
            console.log("Total Reputation fetched:", totalReputation);
        } else {
            console.error("DotNetObjectReference is missing. Using default value.");
        }

        if (performanceChart) {
            // Get the existing data array, keeping the subsequent values
            const incidentsData = [30, 63, 40, 61, 49, 55, 42, 44, 78, 52, 63, 67];

            // 2. Overwrite the first value (which was 30) with the new totalReputation
            if (totalReputation > 0) {
                incidentsData[0] = totalReputation;
            }

            const options = {
                series: [
                    {
                        name: "Incidents",
                        type: "bar",
                        // 3. Use the updated incidentsData array
                        data: incidentsData,
                    },
                    {
                        name: "Collision Events",
                        type: "area",
                        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
                    },
                ],
                chart: {
                    height: 313,
                    type: "line",
                    toolbar: {
                        show: false,
                    },
                },
                stroke: {
                    dashArray: [0, 0],
                    width: [0, 2],
                    curve: 'smooth'
                },
                fill: {
                    opacity: [1, 1],
                    type: ['solid', 'gradient'],
                    gradient: {
                        type: "vertical",
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90]
                    },
                },
                markers: {
                    size: [0, 0],
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
                    axisBorder: {
                        show: false,
                    }
                },
                grid: {
                    show: true,
                    strokeDashArray: 3,
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
                        bottom: 0,
                        left: 10,
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
                colors: ["#7f56da", "#22c55e"],
                tooltip: {
                    shared: true,
                    y: [
                        {
                            formatter: function (y) {
                                if (typeof y !== "undefined") {
                                    return y.toFixed(1) + "k";
                                }
                                return y;
                            },
                        },
                        {
                            formatter: function (y) {
                                if (typeof y !== "undefined") {
                                    return y.toFixed(1) + "k";
                                }
                                return y;
                            },
                        },
                    ],
                },
            };

            const chart = new ApexCharts(performanceChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'dash-performance-chart' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the performance chart:", error);
    }


    // 
    // World map
    //
    new VectorMap().init();

}