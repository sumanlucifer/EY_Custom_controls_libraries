sap.ui.define([
	"./../library", "sap/ui/core/Control", "./CardRenderer"
], function (library, Control, CardRenderer) {
	"use strict";
	var Card = Control.extend("ey.cc.eycc.controls.Card", {
		metadata: {
			library: "ey.cc.eycc",
			properties: {
				width: {
					type: "string",
					defaultValue: '400px'
				},
				height: {
					type: "string",
					defaultValue: "230px"
				},
				title: {
					type: "string",
					defaultValue: ''
				},
				description: {
					type: "string",
					defaultValue: ''
				},
				descriptionL: {
					type: "string",
					defaultValue: 'Rule Description'
				},
				labelB: {
					type: "string",
					defaultValue: 'Created By'
				},
				labelR: {
					type: "string",
					defaultValue: 'Modified By'
				},
				valueB: {
					type: "string",
					defaultValue: ''
				},
				valueR: {
					type: "string",
					defaultValue: ''
				},
				buttonT: {
					type: "string",
					defaultValue: ''
				},
				iconT: {
					type: "string",
					defaultValue: ''
				}

			},
			aggregations: {
				actionItems: {
					type: "sap.ui.core.Control",
					multiple: true,
					visibility: "public"
				}
			},
			events: {
				press: {}
			}
		},
		onclick: function (e) {
			var control = e.srcControl;
			if (control.getMetadata().getName() === "ey.cc.eycc.controls.Card") {
				this.firePress(e);
			}

		},

		renderer: CardRenderer
	});
	return Card;
}, true);