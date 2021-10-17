/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new Input Control.
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
		 * @alias ey.cc.eydcc.controls.Input
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oInput = Control.extend("ey.cc.eydcc.controls.EYInput", {
			metadata: {

				library: "ey.cc.eydcc",
				properties: {
					value: {
						type: "string",
						defaultValue: ""
					},
					labeltext: {
						type: "string",
						defaultValue: ""
					},
					labelclass: {
						type: "string",
						defaultValue: "eyDInputLabelText"
					},
					inputclass: {
						type: "string",
						defaultValue: "eyDInput"
					},
					inputtext: {
						type: "string",
						defaultValue: ""
					},
					width: {
						type: "sap.ui.core.CSSSize", //this is optional, but it helps prevent errors in your code by enforcing a type
						defaultValue: "300px" //this is also optional, but recommended, as it prevents your properties being null
					},
					height: {
						type: "sap.ui.core.CSSSize",
						defaultValue: "45px"
					},
					placeholder:{
							type: "string",
						defaultValue: ""
					}
				},
				events: {

					/**
					 * Event is fired when the user clicks on the control.
					 */
					livechange: {},
					change: {}

				}
			}

		});
		oInput.prototype.onfocusout = function (oEvent) {

			oEvent.preventDefault();

			this.fireChange();

		};
		oInput.prototype.oninput = function (oEvent) {

			oEvent.preventDefault();
			this.setProperty("value", oEvent.target.value, true);
			this.fireLivechange();

		};

		oInput.prototype.getValue = function () {
			return this.getProperty("value");
		};
		return oInput;

	}, /* bExport= */ true);