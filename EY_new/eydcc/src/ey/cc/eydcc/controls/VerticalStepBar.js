/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new VerticalStepBar Control.
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
		 * @alias ey.cc.eydcc.controls.VerticalStepBar
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oVerticalStepBar = Control.extend("ey.cc.eydcc.controls.VerticalStepBar", {
			metadata: {

				library: "ey.cc.eydcc",
			
				properties: {

				},
				events: {

				},
				aggregations:{
					items:{
						type:"ey.cc.eydcc.controls.VerticalStepItem",
						multiple:true,
						singularName:"item"
					}
				}
			
			}
		});

		return oVerticalStepBar;

	}, /* bExport= */ true);