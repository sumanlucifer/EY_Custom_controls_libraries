sap.ui.define([
	"./../library", "sap/ui/core/Control", "./ScrollContainerRenderer",
], function (library, Control, ScrollContainerRenderer) {
	"use strict";
	var ScrollContainer = Control.extend("ey.cc.eycc.controls.ScrollContainer", {
		metadata: {
			library: "ey.cc.eycc",
			properties: {
			},
			aggregations: {
				fixedContent: {
					type: "sap.ui.core.Control",
					multiple: true,
					visibility: "public"
				},
				content: {
					type: "sap.ui.core.Control",
					multiple: true,
					visibility: "public"
				}
			}
		},
		renderer: ScrollContainerRenderer
	});
	return ScrollContainer;
}, true);