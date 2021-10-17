/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new GmapChart Control.
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
		 * @alias ey.cc.eydcc.controls.GmapChart
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oGmapChart = Control.extend("ey.cc.eydcc.controls.GmapChart", {
			metadata: {

				library: "ey.cc.eydcc",
				properties: {

					/**
					 * text
					 */
					text: {
						type: "string",
						group: "Misc",
						defaultValue: null
					},
				
					labels: {
						type: "object",
						defaultValue: [ /*"Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"*/ ]
					},
					dataVal: {
						type: "object",
						defaultValue: [ /*12, 19, 3, 17, 28, 24, 7*/ ]
					},
					bgColor: {
						type: "sap.ui.core.CSSColor",
						group: "Misc",
						defaultValue: "red" /*"#56545F"*/
					},
					radius: {
						type: "Number",
						defaultValue: 25

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
		oGmapChart.prototype.onclick = function (oRm, oControl) {
			this.firePress();
		};

		return oGmapChart;

	}, /* bExport= */ true);