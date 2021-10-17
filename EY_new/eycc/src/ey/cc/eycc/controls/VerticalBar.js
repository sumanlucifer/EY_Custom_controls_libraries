/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./VerticalBarRenderer"
], function (library, Control, VerticalBarRenderer) {
	"use strict";

	var VerticalBar = Control.extend("ey.cc.eycc.controls.VerticalBar", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				height: {
					type: "string",
					defaultValue: "1rem"
				},
				width: {
					type: "string",
					defaultValue: "5px"
				},
				color: {
					type: "string",
					defaultValue: "#ffe600"
				}
			}
		},
		renderer: VerticalBarRenderer
	});
	return VerticalBar;
});