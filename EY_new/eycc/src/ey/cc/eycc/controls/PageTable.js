/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./PageTableRenderer"
], function (library, Control, PageTableRenderer) {
	"use strict";

	var PageTable = Control.extend("ey.cc.eycc.controls.PageTable", {
		metadata: {
			library: "ey.ss.eygdscc",
			properties: {
				columns: {
					type: "object",
					defaultValue: []//[{name:"Abc",path:"Value"}]
				},
				path : {
					type: "string",
					defaultValue: ""//[{name:"Abc",path:"Value"}]
				}
			},
			events: {
				press: {}
			}
		},
		onclick : function(e){
			this.firePress(e);
		},
		renderer: PageTableRenderer
	});
	return PageTable;
});