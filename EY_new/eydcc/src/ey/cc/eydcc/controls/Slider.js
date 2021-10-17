/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control', './EYButton'],
	function (jQuery, library, Control, EYButton) {
		"use strict";

		/**
		 * Constructor for a new OverLayPopOver Control.
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
		 * @alias ey.cc.eydcc.controls.OverLayPopOver
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oOverLayPopOver = Control.extend("ey.cc.eydcc.controls.Slider", {
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
					}

				},
				events: {

					/**
					 * Event is fired when the user clicks on the control.
					 */
					press: {}

				},
				aggregations: {
					content: {
						type: "sap.ui.core.Control"
					}
				},
				defaultAggregation: "content"
			}
		});
		oOverLayPopOver.prototype._createButton = function () {
			var that = this;
			var Btn = new EYButton({
				icon: "sap-icon://navigation-right-arrow",
				background: "#AFAFBB",
				height: "59px",
				press: function () {
					that._slideOVerLayPopOver(this);
				}
			}).addStyleClass('eyDOverLayPopOverClosebtn');

			return Btn;
		};
		oOverLayPopOver.prototype._slideOVerLayPopOver = function (Btn) {
			if(Btn.hasStyleClass('eyDOverLayPopOverClosebtnRotate')){
			Btn.removeStyleClass("eyDOverLayPopOverClosebtnRotate");
				Btn.removeStyleClass("eyDOverLayPopOverClosebtnExpand");
					this.removeStyleClass("eyDOverLayPopOverExpand");
		 
			}
			else{
				Btn.addStyleClass("eyDOverLayPopOverClosebtnRotate");
					Btn.addStyleClass("eyDOverLayPopOverClosebtnExpand");
				
					this.addStyleClass("eyDOverLayPopOverExpand");
				
				
			}
		};
		return oOverLayPopOver;

	}, /* bExport= */ true);