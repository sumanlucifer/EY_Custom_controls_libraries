/*!
 * ${copyright}
 */

// Provides control sap.m.VBox.
sap.ui.define(['jquery.sap.global', './../library'],
	function (jQuery, library) {
		"use strict";

		/**
		 * Constructor for a new VBox sap.m.VBox.
		 *
		 * @param {string} [sId] id for the new control, generated automatically if no id is given
		 * @param {object} [mSettings] initial settings for the new control
		 *
		 * @class
		 * Some class description goes here.
		 * @extends  sap.m.VBox
		 *
		 * @author SAP SE
		 * @version ${version}
		 *
		 * @constructor
		 * @public
		 * @alias ey.desktopui5lib.controls.VBox
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oVBox = sap.m.VBox.extend("ey.cc.eydcc.controls.VBox", {
			metadata: {

				library: "ey.cc.eydcc",
				properties: {},
				events: {
					press: {},
					hover: {},
					mouseout: {}
				}
			}
		});
		oVBox.prototype.onclick = function (evt) {

			this.firePress();
		};
		oVBox.prototype.onmouseover = function (evt) {

			this.fireHover();
		};
		oVBox.prototype.onmouseout = function (evt) {

			this.fireMouseout();
		};
		return oVBox;

	}, /* bExport= */ true);