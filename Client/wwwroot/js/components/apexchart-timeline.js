/**
 * Theme: Reback - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Apex Timeline Charts
 */

window.loadTimelineCharts = function () {

    // Basic Timeline
    try {
        const basicTimelineChart = document.getElementById("basic-timeline");

        if (basicTimelineChart) {
            let colors = ["#4ecac2"];
        
            const dataColors = basicTimelineChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                series: [{
                    data: [{
                        x: 'Code',
                        y: [
                            new Date('2019-03-02').getTime(),
                            new Date('2019-03-04').getTime()
                        ]
                    },
                    {
                        x: 'Test',
                        y: [
                            new Date('2019-03-04').getTime(),
                            new Date('2019-03-08').getTime()
                        ]
                    },
                    {
                        x: 'Validation',
                        y: [
                            new Date('2019-03-08').getTime(),
                            new Date('2019-03-12').getTime()
                        ]
                    },
                    {
                        x: 'Deployment',
                        y: [
                            new Date('2019-03-12').getTime(),
                            new Date('2019-03-18').getTime()
                        ]
                    }]
                }],
                chart: {
                    height: 350,
                    type: 'rangeBar',
                    toolbar: {
                        show: false
                    }
                },
                colors: colors,
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                xaxis: {
                    type: 'datetime'
                }
            };

            const chart = new ApexCharts(basicTimelineChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'basic-timeline' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

    
    // DISTRIBUTED TIMELINE
    try {
        const distributedTimelineChart = document.getElementById("distributed-timeline");

        if (distributedTimelineChart) {
            let colors = ["#1c84ee", "#7f56da", "#ff86c8", "#f9b931", "#4ecac2"];
        
            const dataColors = distributedTimelineChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                series: [{
                    data: [{
                        x: 'Analysis',
                        y: [
                            new Date('2019-02-27').getTime(),
                            new Date('2019-03-04').getTime()
                        ],
                        fillColor: colors[0]
                    },
                    {
                        x: 'Design',
                        y: [
                            new Date('2019-03-04').getTime(),
                            new Date('2019-03-08').getTime()
                        ],
                        fillColor: colors[1]
                    },
                    {
                        x: 'Coding',
                        y: [
                            new Date('2019-03-07').getTime(),
                            new Date('2019-03-10').getTime()
                        ],
                        fillColor: colors[2]
                    },
                    {
                        x: 'Testing',
                        y: [
                            new Date('2019-03-08').getTime(),
                            new Date('2019-03-12').getTime()
                        ],
                        fillColor: colors[3]
                    },
                    {
                        x: 'Deployment',
                        y: [
                            new Date('2019-03-12').getTime(),
                            new Date('2019-03-17').getTime()
                        ],
                        fillColor: colors[4]
                    }
                    ]
                }],
                chart: {
                    height: 350,
                    type: 'rangeBar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        distributed: true,
                        dataLabels: {
                            hideOverflowingLabels: false
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val, opts) {
                        var label = opts.w.globals.labels[opts.dataPointIndex]
                        var a = moment(val[0])
                        var b = moment(val[1])
                        var diff = b.diff(a, 'days')
                        return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
                    },
                    style: {
                        colors: ['#f3f4f5', '#fff']
                    }
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    show: false
                },
                grid: {
                    row: {
                        colors: ['#f3f4f5', '#fff'],
                        opacity: 1
                    },
                    padding: {
                        top: -15,
                        right: 10,
                        bottom: -15,
                        left: -10,
                    }
                }
            };

            const chart = new ApexCharts(distributedTimelineChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'distributed-timeline' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

    
    // MULTI SERIES TIMELINE
    try {
        const multiSeriesTimelineChart = document.getElementById("multi-series-timeline");

        if (multiSeriesTimelineChart) {
            let colors = ["#ff6c2f", "#f9b931"];
        
            const dataColors = multiSeriesTimelineChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                series: [{
                    name: 'Bob',
                    data: [{
                        x: 'Design',
                        y: [
                            new Date('2019-03-05').getTime(),
                            new Date('2019-03-08').getTime()
                        ]
                    },
                    {
                        x: 'Code',
                        y: [
                            new Date('2019-03-08').getTime(),
                            new Date('2019-03-11').getTime()
                        ]
                    },
                    {
                        x: 'Test',
                        y: [
                            new Date('2019-03-11').getTime(),
                            new Date('2019-03-16').getTime()
                        ]
                    }
                    ]
                },
                {
                    name: 'Joe',
                    data: [{
                        x: 'Design',
                        y: [
                            new Date('2019-03-02').getTime(),
                            new Date('2019-03-05').getTime()
                        ]
                    },
                    {
                        x: 'Code',
                        y: [
                            new Date('2019-03-06').getTime(),
                            new Date('2019-03-09').getTime()
                        ]
                    },
                    {
                        x: 'Test',
                        y: [
                            new Date('2019-03-10').getTime(),
                            new Date('2019-03-19').getTime()
                        ]
                    }
                    ]
                }],
                chart: {
                    height: 350,
                    type: 'rangeBar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        var a = moment(val[0]);
                        var b = moment(val[1]);
                        var diff = b.diff(a, 'days');
                        return diff + (diff > 1 ? ' days' : ' day');
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: 'vertical',
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [50, 0, 100, 100]
                    }
                },
                colors: colors,
                xaxis: {
                    type: 'datetime'
                },
                legend: {
                    position: 'top'
                }
            };

            const chart = new ApexCharts(multiSeriesTimelineChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'multi-series-timeline' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }
    

    // ADVANCED TIMELINE
    try {
        const advancedTimelineChart = document.getElementById("advanced-timeline");

        if (advancedTimelineChart) {
            let colors = ["#ef5f5f", "#f9b931", "#4ecac2"];

            const dataColors = advancedTimelineChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                series: [{
                    name: 'Bob',
                    data: [{
                        x: 'Design',
                        y: [
                            new Date('2019-03-05').getTime(),
                            new Date('2019-03-08').getTime()
                        ]
                    },
                    {
                        x: 'Code',
                        y: [
                            new Date('2019-03-02').getTime(),
                            new Date('2019-03-05').getTime()
                        ]
                    },
                    {
                        x: 'Code',
                        y: [
                            new Date('2019-03-05').getTime(),
                            new Date('2019-03-07').getTime()
                        ]
                    },
                    {
                        x: 'Test',
                        y: [
                            new Date('2019-03-03').getTime(),
                            new Date('2019-03-09').getTime()
                        ]
                    },
                    {
                        x: 'Test',
                        y: [
                            new Date('2019-03-08').getTime(),
                            new Date('2019-03-11').getTime()
                        ]
                    },
                    {
                        x: 'Validation',
                        y: [
                            new Date('2019-03-11').getTime(),
                            new Date('2019-03-16').getTime()
                        ]
                    },
                    {
                        x: 'Design',
                        y: [
                            new Date('2019-03-01').getTime(),
                            new Date('2019-03-03').getTime()
                        ],
                    }
                    ]
                },
                {
                    name: 'Joe',
                    data: [{
                        x: 'Design',
                        y: [
                            new Date('2019-03-02').getTime(),
                            new Date('2019-03-05').getTime()
                        ]
                    },
                    {
                        x: 'Test',
                        y: [
                            new Date('2019-03-06').getTime(),
                            new Date('2019-03-16').getTime()
                        ],
                        goals: [{
                            name: 'Break',
                            value: new Date('2019-03-10').getTime(),
                            strokeColor: '#CD2F2A'
                        }]
                    },
                    {
                        x: 'Code',
                        y: [
                            new Date('2019-03-03').getTime(),
                            new Date('2019-03-07').getTime()
                        ]
                    },
                    {
                        x: 'Deployment',
                        y: [
                            new Date('2019-03-20').getTime(),
                            new Date('2019-03-22').getTime()
                        ]
                    },
                    {
                        x: 'Design',
                        y: [
                            new Date('2019-03-10').getTime(),
                            new Date('2019-03-16').getTime()
                        ]
                    }
                    ]
                },
                {
                    name: 'Dan',
                    data: [{
                        x: 'Code',
                        y: [
                            new Date('2019-03-10').getTime(),
                            new Date('2019-03-17').getTime()
                        ]
                    },
                    {
                        x: 'Validation',
                        y: [
                            new Date('2019-03-05').getTime(),
                            new Date('2019-03-09').getTime()
                        ],
                        goals: [{
                            name: 'Break',
                            value: new Date('2019-03-07').getTime(),
                            strokeColor: '#CD2F2A'
                        }]
                    },
                    ]
                }],
                chart: {
                    height: 350,
                    type: 'rangeBar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '80%'
                    }
                },
                xaxis: {
                    type: 'datetime'
                },
                stroke: {
                    width: 1
                },
                colors: colors,
                fill: {
                    type: 'solid',
                    opacity: 0.6
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                }
            };

            const chart = new ApexCharts(advancedTimelineChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'advanced-timeline' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }


    // MULTIPLE SERIES - GROUP ROWS
    try {
        const groupTimelineChart = document.getElementById("group-rows-timeline");

        if (groupTimelineChart) {
            let colors = ["#1c84ee", "#7f56da", "#ff86c8", "#f9b931", "#4ecac2"];

            const dataColors = groupTimelineChart.dataset.colors;
            if (dataColors) {
                colors = dataColors.split(",");
            }

            const options = {
                series: [
                    {
                        name: 'George Washington',
                        data: [{
                            x: 'President',
                            y: [
                                new Date(1789, 3, 30).getTime(),
                                new Date(1797, 2, 4).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'John Adams',
                        data: [{
                            x: 'President',
                            y: [
                                new Date(1797, 2, 4).getTime(),
                                new Date(1801, 2, 4).getTime()
                            ]
                        },
                        {
                            x: 'Vice President',
                            y: [
                                new Date(1789, 3, 21).getTime(),
                                new Date(1797, 2, 4).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'Thomas Jefferson',
                        data: [{
                            x: 'President',
                            y: [
                                new Date(1801, 2, 4).getTime(),
                                new Date(1809, 2, 4).getTime()
                            ]
                        },
                        {
                            x: 'Vice President',
                            y: [
                                new Date(1797, 2, 4).getTime(),
                                new Date(1801, 2, 4).getTime()
                            ]
                        },
                        {
                            x: 'Secretary of State',
                            y: [
                                new Date(1790, 2, 22).getTime(),
                                new Date(1793, 11, 31).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'Aaron Burr',
                        data: [{
                            x: 'Vice President',
                            y: [
                                new Date(1801, 2, 4).getTime(),
                                new Date(1805, 2, 4).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'George Clinton',
                        data: [{
                            x: 'Vice President',
                            y: [
                                new Date(1805, 2, 4).getTime(),
                                new Date(1812, 3, 20).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'John Jay',
                        data: [{
                            x: 'Secretary of State',
                            y: [
                                new Date(1789, 8, 25).getTime(),
                                new Date(1790, 2, 22).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'Edmund Randolph',
                        data: [{
                            x: 'Secretary of State',
                            y: [
                                new Date(1794, 0, 2).getTime(),
                                new Date(1795, 7, 20).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'Timothy Pickering',
                        data: [{
                            x: 'Secretary of State',
                            y: [
                                new Date(1795, 7, 20).getTime(),
                                new Date(1800, 4, 12).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'Charles Lee',
                        data: [{
                            x: 'Secretary of State',
                            y: [
                                new Date(1800, 4, 13).getTime(),
                                new Date(1800, 5, 5).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'John Marshall',
                        data: [{
                            x: 'Secretary of State',
                            y: [
                                new Date(1800, 5, 13).getTime(),
                                new Date(1801, 2, 4).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'Levi Lincoln',
                        data: [{
                            x: 'Secretary of State',
                            y: [
                                new Date(1801, 2, 5).getTime(),
                                new Date(1801, 4, 1).getTime()
                            ]
                        }]
                    },
                    {
                        name: 'James Madison',
                        data: [{
                            x: 'Secretary of State',
                            y: [
                                new Date(1801, 4, 2).getTime(),
                                new Date(1809, 2, 3).getTime()
                            ]
                        }]
                    },
                ],
                chart: {
                    height: 350,
                    type: 'rangeBar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '50%',
                        rangeBarGroupRows: true
                    }
                },
                colors: colors,
                fill: {
                    type: 'solid'
                },
                xaxis: {
                    type: 'datetime'
                },
                legend: {
                    position: 'right'
                },
            };

            const chart = new ApexCharts(groupTimelineChart, options);
            chart.render();
        } else {
            console.warn("Chart container with ID 'group-rows-timeline' not found.");
        }
    } catch (error) {
        console.error("An error occurred while rendering the chart:", error);
    }

}