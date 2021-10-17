sap.ui.define([
    "./../library", "sap/ui/core/Control", "./KPIChartTileRenderer", "./libs/ChartJS", "./libs/Radial", "./helper/ChartFunctions", "./libs/chartJSExtensions/Zoom"
], function(library, Control, KPIChartTileRenderer, ChartJS, Radial, ChartFunctions, Zoom) {
    "use strict";

    var KPIChartTile = Control.extend("ey.cc.eycc.controls.KPIChartTile", {
        metadata: {
            library: "ey.ss.test.eygdscc",
            properties: {
                title: {
                    type: "string",
                    defaultValue: ""
                },
                xGrid: {
                	type: "boolean",
                    defaultValue: false
                },
                yGrid: {
                	type: "boolean",
                    defaultValue: false
                },
                enableAxisLabels: {
                    type: "boolean",
                    defaultValue: true
                },
                chartType: {
                    type: "string",
                    defaultValue: "bar"
                },
                labels: {
                    type: "object",
                    defaultValue: []
                },
                radius: {
                    type: "object",
                    defaultValue: ""
                },
                enableFilledLine: {
                    type: "string",
                    defaultValue: false
                },
                borderColor: {
                    type: "object",
                    defaultValue: []
                },
                xAxisLabel: {
                    type: "string",
                    defaultValue: ""
                },
                yAxisLabel: {
                    type: "string",
                    defaultValue: ""
                },
                size: {
                    type: "string",
                    defaultValue: "4x4"
                },
                measure: {
                    type: "object",
                    defaultValue: ""
                },
                measureColour: {
                    type: "object",
                    defaultValue: []
                },
                dimension: {
                    type: "object",
                    defaultValue: []
                },
                data: {
                    type: "object",
                    defaultValue: []
                },
                cardType: {
                    type: "string",
                    defaultValue: "chart" //chart //info //numeric // radial //measureBlock
                },
                info: {
                    type: "string",
                    defaultValue: "N/A"
                },
                mesL: {
                    type: "string",
                    defaultValue: ""
                },
                mesR: {
                    type: "string",
                    defaultValue: ""
                },
                labL: {
                    type: "string",
                    defaultValue: ""
                },
                labR: {
                    type: "string",
                    defaultValue: ""
                },
                radialPerc: {
                    type: "string",
                    defaultValue: ""
                },
                radialColor: {
                    type: "string",
                    defaultValue: ""
                },
                radialSummaryBase: {
                    type: "string",
                    defaultValue: "Total"
                },
                radialSummaryValue: {
                    type: "string",
                    defaultValue: "Sum Achieved"
                },
                measureBlock: {
                    type: "object",
                    defaultValue: []
                },
                progressVisible: {
                    type: "boolean",
                    defaultValue: true
                },
                cutOutPercentage: { //Only Applied to doughnut chart
                    type: "float",
                    defaultValue: 70
                },
                panDirection: {
                    type: "string",
                    defaultValue: 'x'
                },
                zoomDirection: {
                    type: "string",
                    defaultValue: 'x'
                },
                zoomEnabled: {
                    type: "boolean",
                    defaultValue: false
                },
                showBorder: {
                    type: "boolean",
                    defaultValue: true
                },
                fitToParent: {
                    type: "boolean",
                    defaultValue: false
                },
				draggable: {
					type: "boolean",
					defaultValue: false
				},
				_chart: {
					type: "string",
					defaultValue: ""
				},
				showLegend: {
					type: "boolean",
					defaultValue: true
				}
			},
			events: {
				onAreaSelection:{}
			}
        },
        onAfterRendering: function(oEvent) {
            var oControl = oEvent.srcControl;
            if (oControl.getCardType() === "chart") {
                var contextId = oControl.getId() + '--chartCanvas';
                var ctx = document.getElementById(contextId).getContext('2d');
				Chart.Legend.prototype.afterFit = function() {
				    this.height = this.height +20;
				};
				var canvas =  document.getElementById(contextId);
				canvas.addEventListener('contextmenu', function (e) {
					e.preventDefault();
					this._chart.resetZoom();
				}.bind(this), false);
                new Chart(ctx, {
                    type: oControl.getChartType(),
                    data: oControl.createMeasureDim(),
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        cutoutPercentage: oControl.getCutOutPercentage(),
                        legend: {
                            display: oControl.getShowLegend(),
                            labels: {
                                fontFamily: "EYInterstate",
                                fontColor: "#737384",

                            }
                        },
                        scales: {
                            xAxes: [{
                                display: oControl.getEnableAxisLabels(),
                                ticks: {
                                    display: oControl.getEnableAxisLabels()
                                },
                                gridLines: {
                                    display: oControl.getXGrid()
                                },
                                scaleLabel: {
                                    display: oControl.getEnableAxisLabels(),

                                    labelString: oControl.getXAxisLabel()
                                }
                            }],
                            yAxes: [{
                                display: oControl.getEnableAxisLabels(),
                                ticks: {
                                    display: oControl.getEnableAxisLabels(),
                                    precision: 0
                                },
                                gridLines: {
                                    display: oControl.getYGrid()
                                },

                                scaleLabel: {
                                    display: oControl.getEnableAxisLabels(),
                                    labelString: oControl.getYAxisLabel()
                                }
                            }],
                        },
                        pan: {
                            enabled: false,
                            mode: oControl.getPanDirection()
                        },
                        zoom: {
                            enabled: oControl.getZoomEnabled(),
                            mode: oControl.getZoomDirection(),
                            drag: oControl.getDraggable(),
							onZoomComplete: function (e) {
								var chartData = [];
								if( e.chart.data["datasets"]){
									e.chart.data["datasets"].forEach(function(e){
										e.data.forEach(function(f){
											chartData.push(f);
										});
									});
								}
								var selectedPoints = [];
								var xAxis = e.chart.scales["x-axis-1"].ticks;
								var yAxis = e.chart.scales["y-axis-1"].ticks;
								chartData.forEach(function (e) {
									if (e.x >= xAxis[0] && e.x <= xAxis[xAxis.length - 1] && e.y <= yAxis[0] && e.y >= yAxis[yAxis.length-1]) {
										selectedPoints.push(e);
									}
								});
								this._chart = e.chart;
								sap.m.MessageToast.show("Please Right Click to reset the chart");
								this.fireOnAreaSelection({"selectedPoints":selectedPoints},this);
							}.bind(this)
                        }
                    }
                })
            }
            if (oControl.getCardType() === "radial") {
                $('#' + oControl.getId() + '--radialChart').radialIndicator({
                    barColor: oControl.getRadialColor(),
                    barWidth: 10,
                    initValue: oControl.getRadialPerc(),
                    roundCorner: true,
                    percentage: false
                });
            }
            if (oControl.getCardType() === "radialSummary") {
                $('#' + oControl.getId() + '--radialChartSummary').radialIndicator({
                    barColor: oControl.getRadialColor(),
                    radius: 100,
                    barWidth: 10,
                    initValue: oControl.getRadialPerc(),
                    roundCorner: true,
                    percentage: false
                });
            }
            if (oControl.getCardType() === "measureBlock") {
                $('#' + oControl.getId() + '--radialChartMeasureBlock').radialIndicator({
                    barColor: oControl.getRadialColor(),
                    radius: 100,
                    barWidth: 10,
                    initValue: oControl.getRadialPerc(),
                    roundCorner: true,
                    percentage: false
                });
            }

        },
        createMeasureDim: function() {
            var chartData = ChartFunctions.createDataset(this);
            return chartData;
        },
        renderer: KPIChartTileRenderer
    });
    return KPIChartTile;
});