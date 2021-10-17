/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new HorizontalStepItem Control.
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
		 * @alias ey.cc.eydcc.controls.HorizontalStepItem
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oHorizontalStepItem = Control.extend("ey.cc.eydcc.controls.HorizontalStepItem", {
			metadata: {

				library: "ey.cc.eydcc",
				properties: {
					toptitle: {
						type: "string",
						defaultValue: ""
					},
					topsubtitle: {
						type: "string",
						defaultValue: ""
					},
					bottomtitle: {
						type: "string",
						defaultValue: ""
					},
					bottomsubtitle: {
						type: "string",
						defaultValue: ""
					},
					src: {
						type: "string",
						defaultValue: ""
					},
					inlineBottomHorizontal:{
						type:"boolean",
						defaultValue: false
					},
					imgText:{
						type: "string",
						defaultValue: "1"
					}
					

				},
				events: {

					/**
					 * Event is fired when the user clicks on the control.
					 */
					press: {}

				}
			}
		});

		return oHorizontalStepItem;

	}, /* bExport= */ true);