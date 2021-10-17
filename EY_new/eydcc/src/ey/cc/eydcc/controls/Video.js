/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new Video Control.
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
		 * @alias ey.cc.eydcc.controls.Video
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oVideo = Control.extend("ey.cc.eydcc.controls.Video", {
			metadata: {

				library: "ey.cc.eydcc",
				properties: { 	"src": {
						type: "string",
						defaultValue: ""
					},
					width: {
						type: "sap.ui.core.CSSSize", //this is optional, but it helps prevent errors in your code by enforcing a type
						defaultValue: "100%" //this is also optional, but recommended, as it prevents your properties being null
					},
					height: {
						type: "sap.ui.core.CSSSize",
						defaultValue: "auto"
					}},
				events: {

					/**
					 * Event is fired when the user clicks on the control.
					 */
					press: {}

				}
			}
		});

		return oVideo;

	}, /* bExport= */ true);