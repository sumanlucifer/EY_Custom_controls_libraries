/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./AppBarRenderer","./libs/Angular","sap/m/Toolbar"
], function (library, Control, AppBarRenderer,Angular,Toolbar) {
	"use strict";

	var Badge = Toolbar.extend("ey.cc.eycc.controls.AppBar", {
		metadata: {
			library: "ey.ss.eygdscc",
			properties: {
				text: {
					type: "string",
					defaultValue: null
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
		onclick : function(e){
			this.firePress(e);
		},
		renderer: AppBarRenderer
	});
	return Badge;
});