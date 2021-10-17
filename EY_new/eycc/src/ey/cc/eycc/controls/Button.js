/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./ButtonRenderer", "./libs/Angular"
], function (library, Control, ButtonRenderer, Angular) {
	"use strict";

	var Button = Control.extend("ey.cc.eycc.controls.Button", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				text: {
					type: "string",
					defaultValue: null
				},
				visible:{
					type: "boolean",
					defaultValue: "true"
				},
				//Types Available : https://material.io/tools/icons/?style=baseline
				icon: {
					type: "string",
					defaultValue: null
				},
				//Types Available : miniIcon,profileView,textOnly
				type: {
					type: "string",
					defaultValue: "miniIcon"
				},
				enablePropagation: {
					type: "boolean",
					defaultValue: false
					
				},
				bgColor: {
					type: "string",
					defaultValue: "miniIcon"
				},
				iconColor: {
					type: "string",
					defaultValue: "white"
				},
				textColor: {
					type: "string",
					defaultValue: "miniIcon"
				}
			},
			events: {
				press: {}
			}
		},
		onclick: function (e) {
			if(this.getEnablePropagation()){
				e.stopPropagation();
			}
			this.firePress(e);
		},
		renderer: ButtonRenderer
	});
	return Button;
});