/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./ULTextRenderer", "./libs/Angular"
], function (library, Control, ULTextRenderer, Angular) {
	"use strict";

	var ULText = Control.extend("ey.cc.eycc.controls.ULText", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				ulColor : {
					type: "string",
					defaultValue: "#ffe600"
				},
				textColor : {
					type: "string",
					defaultValue: "#333333"
				},
				ulHeight: {
					type: "string",
					defaultValue: '.3rem'
				},
				ulWidth: {
					type: "string",
					defaultValue: "4rem"
				},
				text: {
					type: "string",
					defaultValue: null
				}
			}
		},
		renderer: ULTextRenderer
	});
	return ULText;
});