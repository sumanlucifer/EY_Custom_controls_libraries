/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./InfoCardRenderer", "./libs/Angular"
], function (library, Control, InfoCardRenderer, Angular) {
	"use strict";

	var ULText = Control.extend("ey.cc.eycc.controls.InfoCard", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				height : {
					type: "string",
					defaultValue: "22rem"
				},
				width: {
					type: "string",
					defaultValue: '18rem'
				},
				icon: {
					type: "string",
					defaultValue: ''
				},
				title: {
					type: "string",
					defaultValue: ''
				},
				description: {
					type: "string",
					defaultValue: ''
				}
			},
			events: {
				press: {}
			}
		},
		onclick : function(e){
			this.firePress(e);	
		},
		renderer: InfoCardRenderer
	});
	return ULText;
});