/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control', './TileContainer'],
	function (jQuery, library, Control, TileContainer) {
		"use strict";

		/**
		 * Constructor for a new Tile Control.
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
		 * @alias ey.cc.eydcc.controls.Tile
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oTile = Control.extend("ey.cc.eydcc.controls.Tile", {
			metadata: {

				library: "ey.cc.eydcc",
				properties: {
					type: {
						type: "string",
						defaultValue: "type1"
					},
					title: {
						type: "string",
						defaultValue: ""
					},
					infoText: {
						type: "string",
						defaultValue: ""
					},
					number: {
						type: "string",
						defaultValue: ""
					},
					key: {
						type: "string",
						defaultValue: ""
					},
					infoDesc: {
						type: "string",
						defaultValue: ""
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
		oTile.prototype.onclick = function (evt) {
			if (this.getType() === "type1" || this.getType() === "type2") {
				/*if(this.getType()==="type2"){
					this.firePress();
				}*/
				TileContainer.prototype.onclick.apply(this, arguments);
			} else {
				evt.preventDefault();
				this.firePress();
			}
			/*	this.firePress();*/

		};
		return oTile;

	}, /* bExport= */ true);