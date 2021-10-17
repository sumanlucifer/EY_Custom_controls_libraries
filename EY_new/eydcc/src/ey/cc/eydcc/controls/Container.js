/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new Container Control.
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
		 * @alias ey.cc.eydcc.controls.Container
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oContainer = Control.extend("ey.cc.eydcc.controls.Container", {
			metadata: {

				library: "ey.cc.eydcc",
				properties: {
					width: {
						type: "sap.ui.core.CSSSize", //this is optional, but it helps prevent errors in your code by enforcing a type
						defaultValue: "auto" //this is also optional, but recommended, as it prevents your properties being null
					},
					height: {
						type: "sap.ui.core.CSSSize",
						defaultValue: "100%"
					}
				},
				aggregations: {
					content: {
						type: "sap.ui.core.Control"
					}
				},
				defaultAggregation: "content"
			}
		});

		return oContainer;

	}, /* bExport= */ true);