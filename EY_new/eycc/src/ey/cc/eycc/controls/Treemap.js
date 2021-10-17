/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
    "./../library", "sap/ui/core/Control", "./TreemapRenderer", "./libs/ChartJS", "./libs/chartJSExtensions/TreemapExt",
], function(library, Control, TreemapRenderer, ChartJS, TreemapExt) {
    "use strict";

    var Treemap = Control.extend("ey.cc.eycc.controls.Treemap", {
        metadata: {
            library: "ey.cc.eycc",
            properties: {
                height: {
                    type: "string",
                    defaultValue: "100%"
                },
                width: {
                    type: "string",
                    defaultValue: "100%"
                },
                color: {
                    type: "object",
                    defaultValue: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]
                },
                data: {
                    type: "object",
                    defaultValue: {}
                },
                dimensions: {
                    type: "object",
                    defaultValue: {}
                },
                measures: {
                    type: "object",
                    defaultValue: {}
                },
                title: {
                    type: "string",
                    defaultValue: ""
                }
            },
            aggregations: {
                content: {
                    type: "sap.ui.core.Control",
                    multiple: true,
                    visibility: "public"
                }
            },
            events: {
                press: {}
            }
        },
        onclick: function(e) {
            this.firePress(e);
        },
        onAfterRendering: function() {
            var contextId = this.getId() + '--treemap';
            var ctx = document.getElementById(contextId).getContext('2d');
            new Chart(ctx, {
                type: "treemap",
                data: {
                    datasets: [{
                        tree: this.getData(),
                        key: this.getMeasures()[0],
                        groups: this.getDimensions(), //dimension
                        fontColor: "black",
                        fontFace: "EYInterstate",
                        fontSize: 16,
                        backgroundColor: function(ctx) {
                            var maxValue = 0;
                            var measureForColor = this.getMeasures()[1] ? this.getMeasures()[1] : this.getMeasures()[0];
                            ctx.dataset.tree.forEach(function(e) {
                                maxValue = e[measureForColor] > maxValue ? e[measureForColor] : maxValue
                            }.bind(this));
                            if (ctx.dataIndex > ctx.dataset.tree.length - 1) {
                                var value = ctx.dataset.data[ctx.dataIndex]._data.children[0][measureForColor];
                            } else {
                                var value = ctx.dataset.tree[ctx.dataIndex][measureForColor];
                            }
                            return this._generateColor(maxValue, value, this.getColor())
                        }.bind(this)
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    title: {
                        text: this.getTitle(),
                        display: true
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        callbacks: {
                            title: function(item, data) {
                                var aText = [];
                                this.getDimensions().forEach(function(e) {
                                    aText.push(
                                        data.datasets[item[0].datasetIndex].data[item[0].index]._data[e]
                                    )
                                })
                                return aText.join('\n');
                            }.bind(this),
                            label: function(item, data) {
                                var aText = [];
                                this.getMeasures().forEach(function(e) {
                                    if (data.datasets[item.datasetIndex].data[item.index]._data.children.length == 1) {
                                        aText.push(
                                            ` ${e} : ${data.datasets[item.datasetIndex].data[item.index]._data.children[0][e]}`
                                        )
                                    } else {
                                        var sum = 0;
                                        data.datasets[item.datasetIndex].data[item.index]._data.children.forEach(function(f) {
                                            sum = sum + f[e]
                                        }.bind(this));
                                        aText.push(
                                            ` ${e} : ${sum}`
                                        )
                                    }
                                })
                                return aText.join('\n');
                            }.bind(this)
                        }
                    }
                }
            });
        },
        _generateColor: function(max, value, aColor) {
            var valueParts = max / aColor.length;
            var valueBucket = Math.ceil(value / valueParts);
            return Color(aColor[valueBucket - 1]).alpha(value / (valueParts * valueBucket)).rgbString();
        },
        renderer: TreemapRenderer
    });
    return Treemap;
});