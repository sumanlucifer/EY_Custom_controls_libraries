/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./ExpandableTextRenderer", "./libs/Angular"
], function (library, Control, ExpandableTextRenderer, Angular) {
	"use strict";

	var ExpandableText = Control.extend("ey.cc.eycc.controls.ExpandableText", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				value: {
					type: "string",
					defaultValue: ""
				},
				//Types Available : https://material.io/tools/icons/?style=baseline
				icon: {
					type: "string",
					defaultValue: ""
				},
				iconColor:{
					type:"string",
					defaultValue:"white" 
				},
				placeholder: {
					type: "string",
					defaultValue: "miniIcon"
				},
				liveChangeDelay: {
					type: "string",
					defaultValue: 2000
				},
				width: {
					type: "string",
					defaultValue: "300px"
				}
			},
			events: {
				action: {},
				submit: {},
				liveChange: {}
			}
		},
		onclick: function (e) {
			if (e.target.className === "material-icons" && this.getValue().length > 0) {
				this.fireAction(e);
			}
		},
		onkeypress: function (e) {
			setTimeout(function () {
				this.mProperties.value = e.target.value
				if (e.which === 13) {
					this.fireSubmit(e);
				} else {
					clearTimeout(this.timeout);
					this.timeout = setTimeout(function(){
						this.fireLiveChange(e);	
					}.bind(this),this.getLiveChangeDelay());
					
				}
			}.bind(this, 0));
		},
		renderer: ExpandableTextRenderer
	});
	return ExpandableText;
});