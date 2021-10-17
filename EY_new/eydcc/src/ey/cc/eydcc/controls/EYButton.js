/*!
 * ${copyright}
 */

// Provides control eypacontrols.customcontroleypa.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control', 'sap/ui/core/IconPool', './EYButtonRenderer'],
	function (jQuery, library, Control, IconPool, EYButtonRenderer) {
		"use strict";

		/**
		 * Constructor for a new EYButton Control.
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
		 * @alias ey.cc.eydcc.controls.EYButton
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oEYButton = Control.extend("ey.cc.eydcc.controls.EYButton", {
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
					subtext: {
						type: "string",
						group: "Misc",
						defaultValue: null
					},
					height: {
						type: "sap.ui.core.CSSSize",
						group: "Misc",
						defaultValue: "auto"
					},
					width: {
						type: "sap.ui.core.CSSSize",
						group: "Misc",
						defaultValue: "100%"
					},
					background: {
						type: "sap.ui.core.CSSColor",
						group: "Misc",
						defaultValue: "yellow"
					},
					border: {
						type: "string",
						group: "Misc",
						defaultValue: "0px"
					},
					borderRadius: {
						type: "sap.ui.core.CSSSize",
						group: "Misc",
						defaultValue: "0px"
					},
					padding: {
						type: "string",
						group: "Misc",
						defaultValue: "0px"
					},
					icon: {
						type: "sap.ui.core.URI",
						group: "Appearance",
						defaultValue: null
					},
					iconFirst: {
						type: "boolean",
						group: "Appearance",
						defaultValue: true
					},
					justifyContent: {
						type: "sap.m.FlexJustifyContent",
						group: "Misc",
						defaultValue: "Inherit"
					},
					textColor: {
						type: "sap.ui.core.CSSColor",
						group: "Misc",
						defaultValue: "#333333"
					},
					textLineHeight: {
						type: "sap.ui.core.CSSSize",
						group: "Misc",
						defaultValue: "2.375rem"
					},
					toolTipText:{
						type: "string",
						group: "Misc",
						defaultValue: ""
					},

					/**
					 * The source property of an alternative icon for the active (depressed) state of the button.
					 * Both active and default icon properties should be defined and have the same type: image or icon font.
					 * If the <code>icon</code> property is not set or has a different type, the active icon is not displayed.
					 */
					activeIcon: {
						type: "sap.ui.core.URI",
						group: "Misc",
						defaultValue: null
					},

					/**
					 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
					 *
					 * If only one version of image is provided, set this value to false to avoid the attempt of fetching density perfect image.
					 */
					iconDensityAware: {
						type: "boolean",
						group: "Misc",
						defaultValue: true
					}

				},
				events: {

					/**
					 * Event is fired when the user clicks on the control.
					 */
					press: {}

				}
			},
			setNewValue: function (textVal) {
				this.setText(textVal);
			},
			onclick: function (evt) {
					evt.stopPropagation(); 
				this.firePress();
			},
			renderer: EYButtonRenderer
		});
		oEYButton.prototype._getImage = function (sImgId, sSrc, sActiveSrc, bIconDensityAware) {

			// check if image source has changed - if yes destroy and reset image control
			if (this._image && (this._image.getSrc() !== sSrc)) {
				this._image.destroy();
				this._image = undefined;
			}

			// update or create image control
			var oImage = this._image;
			var bIconFirst = this.getIconFirst();

			if (!!oImage) {
			/*	if (!!oImage) {*/
				oImage.setSrc(sSrc);
				if (oImage instanceof sap.m.Image) {
					oImage.setActiveSrc(sActiveSrc);
					oImage.setDensityAware(bIconDensityAware);
				}
			} else {
				oImage = IconPool.createControlByURI({
					id: sImgId,
					src: sSrc,
					activeSrc: sActiveSrc,
					densityAware: bIconDensityAware,

					// do not use default tootip in icon as the button renders it's own tooltip
					useIconTooltip: false

				}, sap.m.Image).addStyleClass("sapMBtnCustomIcon").setParent(this, null, true);
			}

			// add style classes to the object
			oImage.addStyleClass("sapMBtnIcon");

			// check and set absolute position depending on icon and icon position
			oImage.toggleStyleClass("sapMBtnIconLeft", bIconFirst);
			oImage.toggleStyleClass("sapMBtnIconRight", !bIconFirst);

			this._image = oImage;
			return this._image;
		};
		
	 

		return oEYButton;

	}, /* bExport= */ true);