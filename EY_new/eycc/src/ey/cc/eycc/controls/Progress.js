sap.ui.define([
	"./../library", "sap/ui/core/Control", "./ProgressRenderer", "./libs/ChartJS", "./libs/Radial"
], function (library, Control, ProgressRenderer, ChartJS, Radial) {
	"use strict";

	var Progress = Control.extend("ey.cc.eycc.controls.Progress", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				percentage: {
					type: "string",
					defaultValue: "0"
				},
				text: {
					type: "string",
					defaultValue: ""
				},
				width: {
					type: "string",
					defaultValue: "100%"
				},
				height: {
					type: "string",
					defaultValue: ".4rem"
				},
				color:{
					type: "string",
					defaultValue: "#1e90ff"
				}
			}
		},
		onAfterRendering: function (oEvent) { },
		renderer: ProgressRenderer
	});
	return Progress;
});