/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new TileContainer Control.
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
		 * @alias ey.cc.eydcc.controls.TileContainer
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oTileContainer = Control.extend("ey.cc.eydcc.controls.TileContainer", {
			metadata: {

				library: "ey.cc.eydcc",
				properties: {

					/**
					 * text
					 */
					selectedKey: {
						type: "string",
						group: "Data",
						defaultValue: null
					}

				},
				events: {

					/**
					 * Fires when an item is selected.
					 */
					select: {

					}
				},
				aggregations: {
					tiles: {
						type: "ey.cc.eydcc.controls.Tile",
						multiple: true,
						singularName: "item"
					}
				}
			}
		});
		oTileContainer.prototype.onclick = function (evt) {

			evt.stopPropagation();
			if (this.getType() === 'type2') {
				this.getParent().highlightSelectedTile(this);
					this.firePress();
			}
			else{
			this.getParent().setSelectedKey(this.getKey());	
			}
		/*	this.getParent().setSelectedKey(this.getKey());*/
		
			this.getParent().fireSelect();

		};
		oTileContainer.prototype.getSelectedKey = function () {
			return this.getProperty("selectedKey");
		};
		oTileContainer.prototype.setSelectedKey = function (key) {
			return this.setProperty("selectedKey", key);
		};
		oTileContainer.prototype.highlightSelectedTile = function (selectedItem) {
			var tiles = selectedItem.getParent().getTiles();

			for (var i = 0; i < tiles.length; i++) {
				if (selectedItem.getKey() === tiles[i].getKey()) {
					if (selectedItem.aCustomStyleClasses === undefined) {
						tiles[i].addStyleClass('eyDTileSelected');
							this.setProperty("selectedKey", tiles[i].getKey());
					} else {
						var result = false;

						selectedItem.aCustomStyleClasses.forEach(function (item) {
							if (item === "eyDTileSelected") {
								result = true;
							}
						});

						if (result) {
							tiles[i].removeStyleClass('eyDTileSelected');
							this.setProperty("selectedKey", "");
						} else {
							tiles[i].addStyleClass('eyDTileSelected');
								this.setProperty("selectedKey", tiles[i].getKey());
						}
					}
				} else {
					tiles[i].removeStyleClass('eyDTileSelected');
				}
			}
		};

		return oTileContainer;

	}, /* bExport= */ true);