sap.ui.define([
		"../../library", "sap/ui/core/Control", "../ProcessFlowBuilderRenderer", "../libs/go"
], function (library, Control, ProcessFlowBuilderRenderer, Go) {
	"use strict";
	return{
		createDataset: function(that){
			var chartData = {};
			var borderColor = that.getBorderColor();
			var labels= that.getLabels();
			var data = that.getData();
			var dimension = that.getDimension();
			var measure = that.getMeasure();
			var measureColours = that.getMeasureColour();
			if (measure.length < 1) {
				return;
			}
			if(labels.length>0){
				chartData.labels = labels;
			}
			else{
				chartData.labels = data.map(function (e) {
				return e[dimension];
			});
			}
			switch (that.getChartType()) {
			case "scatter":
				chartData["datasets"] = measure.map(function (e, i) {
					return {
						label: e,
						pointRadius :5,
						backgroundColor: measureColours[i],
						data: data.map(function (f) {
							return {
								x: f[dimension[i]],
								y: f[e]
							};
						})

					};
				});
				break;
			case "bubble":
				var radius = that.getRadius();
				chartData["datasets"] = measure.map(function (e, i) {
					return {
						
						label: e,
						backgroundColor: measureColours[i],
						data: data.map(function (f) {
							return {
								x: f[dimension[i]],
								y: f[e],
								r:f[radius[i]]
							};
						})

					};
				});
				break;
			case "line":
				var filVal = that.getEnableFilledLine();
				chartData["datasets"] = measure.map(function (e, i) {
					return {
						fill: filVal,
						label: e,
						backgroundColor: measureColours[i],
						pointBackgroundColor : "white",
						pointRadius :5,
						borderColor: borderColor[i],
						data: data.map(function (f) {
							return {
								x: f[dimension[i]],
								y: f[e]
							};
						})

					};
				});
				break;	
			case "doughnut":
				chartData["datasets"] = measure.map(function (e, i) {
					return {
						label: e,
						backgroundColor: measureColours,
						data: data.map(function (f) {
							return f[e];
						})
					};
				});
				break;	
			default:
				chartData["datasets"] = measure.map(function (e, i) {
					return {
						label: e,
						backgroundColor: measureColours[i],
						data: data.map(function (f) {
							return f[e];
						})
					};
				});
			}
			return chartData;
		}
	};
	
});