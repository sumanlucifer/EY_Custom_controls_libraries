/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./BadgeRenderer","./libs/Angular"
], function (library, Control, BadgeRenderer,Angular) {
	"use strict";

	var Badge = Control.extend("ey.cc.eycc.controls.Badge", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				text: {
					type: "string",
					defaultValue: null
				}
			},
			events: {
				press: {}
			}
		},
		onclick : function(e){
			this.firePress(e);
		},
		renderer: BadgeRenderer
	});
	return Badge;
});