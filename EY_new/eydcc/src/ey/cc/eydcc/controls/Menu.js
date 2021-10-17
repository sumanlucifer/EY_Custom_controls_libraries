/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new Menu Control.
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
		 * @alias ey.cc.eydcc.controls.Menu
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oMenu = Control.extend("ey.cc.eydcc.controls.Menu", {
			metadata: {

				library: "ey.cc.eydcc",
				properties: {
					title: {
						type: "string",
						defaultValue: ""
					}
				},
				events: {

				},
				aggregations: {
					items: {
						type: "ey.cc.eydcc.controls.MenuItem",
						multiple: true,
						singularName: "item"
					}
				}
			},
				close: function () {
				var isvisible = this.hasStyleClass('ey_menu-popup--is-visible');
				if (isvisible) {
					this.removeStyleClass('ey_menu-popup--is-visible');
				} 
			},
			open: function () {
			 
				var isvisible = this.hasStyleClass('ey_menu-popup--is-visible');
				if (isvisible) {
					this.removeStyleClass('ey_menu-popup--is-visible');
				} else {
					this.addStyleClass('ey_menu-popup--is-visible');
				}
			}

		});

		return oMenu;

	}, /* bExport= */ true);