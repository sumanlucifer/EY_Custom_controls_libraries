sap.ui.define([
	"./../library", "sap/ui/core/Control", "./libs/go","ey/cc/eycc/controls/OverlayPopover"
], function (library, Control, Go,OverlayPopover) {
	"use strict";

	var ProcessFlowTemplate = Control.extend("ey.cc.eycc.controls.ProcessFlowTemplate", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				type: {
					type: "string",
					defaultValue: null
				},
				shape: {
					type: "string",
					defaultValue: "RoundedRectangle"
				},
				text: {
					type: "string",
					defaultValue: null
				},
				color: {
					type: "string",
					defaultValue: "#FAE539"
				},
				height: {
					type: "float",
					defaultValue: 1
				},
				width: {
					type: "float",
					defaultValue: 1
				}						
			},
			aggregations: {
				settingsArea: {
					type: "sap.ui.core.Control",
					multiple: true,
					visibility: "public"
				}
			},
			events: {
				press: {}
			}
		}
	});
	return ProcessFlowTemplate;
});