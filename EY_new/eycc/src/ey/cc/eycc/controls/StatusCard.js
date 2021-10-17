/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./StatusCardRenderer", "./libs/Angular"
], function (library, Control, StatusCardRenderer, Angular) {
	"use strict";

	var ULText = Control.extend("ey.cc.eycc.controls.StatusCard", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				title: {
					type: "string",
					defaultValue: ''
				},
				tags : {
					type: "string",
					defaultValue: 'No tags found'
				},
				statusText : {
					type: "string",
					defaultValue: '. . . '
				},
				attrLeft : {
					type: "string",
					defaultValue: '. . . '
				},
				mesLeft : {
					type: "string",
					defaultValue: '. . . '
				},
				attrCenter : {
					type: "string",
					defaultValue: '. . . '
				},
				mesCenter : {
					type: "string",
					defaultValue: '. . . '
				},
				attrRight : {
					type: "string",
					defaultValue: '. . . '
				},
				mesRight : {
					type: "string",
					defaultValue: '. . . '
				},
			},
			aggregations: {
				actionArea: {
					type: "sap.ui.core.Control",
					multiple: true,
					visibility: "public"
				}
			},
			events: {
				press: {}
			}
		},
		onclick : function(e){
			if(e.target.tagName !== 'I'){
				this.firePress(e);	
			}
		},
		renderer: StatusCardRenderer
	});
	return ULText;
});