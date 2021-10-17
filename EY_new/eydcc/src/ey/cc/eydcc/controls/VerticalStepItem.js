/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new VerticalStepItem Control.
		 *
		 * @param {string} [sId] id for the new control, generated automatically if no id is given
		 * @param {object} [mSettings] initial settings for the new control
		 *
		 * @class
		 * Some class description goes here.
		 * @extends  Control
		 *
		 * @author SAP SE
		 * @version ${version}
		 *
		 * @constructor
		 * @public
		 * @alias ey.cc.eydcc.controls.VerticalStepItem
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oVerticalStepItem = Control.extend("ey.cc.eydcc.controls.VerticalStepItem", {
			metadata: {

				library: "ey.cc.eydcc",
				
				properties: {
					title: {
						type: "string",
						defaultValue: ""
					},
					
						design: {
						type: "string",
						defaultValue: "standard"
					},

					description: {
						type: "string",
						defaultValue: ""
					},
					
						linktext: {
						type: "string",
						defaultValue: ""
					}
					
					
					
				},
				events: {
					"press": {}
				}
			},
			onclick: function (evt) {
				if (evt.target.tagName.toLowerCase() === 'a') {

					this.firePress();
				} else {
					evt.stopPropagation();
				}
			}
		});

		return oVerticalStepItem;

	}, /* bExport= */ true);