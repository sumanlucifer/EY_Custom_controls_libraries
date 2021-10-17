/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./HeroBoxRenderer"
], function (library, Control, HeroBoxRenderer) {
	"use strict";

	var HeroBox = Control.extend("ey.cc.eycc.controls.HeroBox", {
		metadata: {
			library: "ey.ss.eygdscc",
			properties: {
				bgImage: {
					type: "string",
					defaultValue: null
				},
				height: {
					type: "string",
					defaultValue: "8rem"
				},
				width: {
					type: "string",
					defaultValue: "100%"
				},
				color: {
					type: "string",
					defaultValue: "white"
				}
			},
			aggregations: {
				content: {
					type: "sap.ui.core.Control",
					multiple: true,
					visibility: "public"
				}
			}
		},
		renderer: HeroBoxRenderer
	});
	return HeroBox;
});