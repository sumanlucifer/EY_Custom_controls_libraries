/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control', './EYButton'],
	function (jQuery, library, Control, EYButton) {
		"use strict";

		/**
		 * Constructor for a new TabBar Control.
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
		 * @alias ey.cc.eydcc.controls.TabBar
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */

		var oTabBar = Control.extend("ey.cc.eydcc.controls.TabBar", {
			metadata: {

				library: "ey.cc.eydcc",
				properties: {

					type: {
						type: "string",

						defaultValue: 'normal'
					},

					/**
					 * text
					 */
					 
					expand: {
						type: "boolean",
						defaultValue: false
					},
					alignHeader: {
						type: "string",

						defaultValue: 'right'
					},
					alignTabContent: {
						type: "string",

						defaultValue: 'left'
					}

				},
				events: {

					/**
					 * Event is fired when the user clicks on the control.
					 */
					press: {}

				},
				aggregations: {
					items: {
						type: "ey.cc.eydcc.controls.TabBarItem",
						multiple: true,
						singularName: "item"
					},
					customHeader: {
						type: "sap.ui.core.Control",
						multiple: true,
						singularName: "customHeader"
					},
					icon: {
						type: "sap.ui.core.Control",
						multiple: false,
						singularName: "icon"
					}
				}

			}
		});
			oTabBar.prototype.select = function (evt) {

			
		};
	 
		oTabBar.prototype._createIcon = function () {
			var that = this;
			var oEYButton5 = new EYButton({

				// text: "",
				subtext: "subTextPart",
				height: "4.3rem",
				width: "4.3rem",
				background: "transparent",
				padding: "14px",
				// border:"1px solid",
				borderRadius: "10px",
				justifyContent: "Center",

				// icon:"sap-icon://accelerated",
				icon: "sap-icon://navigation-up-arrow",
				press: function () {
					that._setExpand(this);
				}
			}).addStyleClass('eyDTabBarBtn');

			return oEYButton5;
		};
		oTabBar.prototype._setExpand = function (button) {

			if (button.hasStyleClass('eyDTabBarIconRotate')) {
				button.removeStyleClass('eyDTabBarIconRotate');
			} else {
				button.addStyleClass('eyDTabBarIconRotate');
			}
			if (!this.hasStyleClass('eyDTabBarContentDsply') && !this.hasStyleClass('eyDTabBarContentDsply')) {
				this.addStyleClass('eyDTabBarContentDsply');
			} else if (this.hasStyleClass('eyDTabBarContentDsply')) {
				this.removeStyleClass('eyDTabBarContentDsply');
				this.addStyleClass('eyDTabBarContentNoDsply');
			} else if (this.hasStyleClass('eyDTabBarContentNoDsply')) {
				this.removeStyleClass('eyDTabBarContentNoDsply');
				this.addStyleClass('eyDTabBarContentDsply');
			}
		};
		oTabBar.prototype.onAfterRendering = function () {
			var items = this.getItems();
			this.oSelectedItem = items[0];
		};
		return oTabBar;

	}, /* bExport= */ true);