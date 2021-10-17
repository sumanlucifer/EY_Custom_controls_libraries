/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new TabItem Control.
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
		 * @alias ey.cc.eydcc.controls.TabItem
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var previousItem = null;
		var oTabItem = Control.extend("ey.cc.eydcc.controls.TabBarItem", {
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
				defaultAggregation: "content",
				aggregations: {

					/**
					 * The content displayed for this item (optional).
					 *
					 * If this content is set, it is displayed instead of the general content inside the IconTabBar.
					 * @since 1.15.0
					 */
					content: {
						type: "sap.ui.core.Control",
						multiple: true,
						singularName: "content"
					}
				}
			}
		});

		oTabItem.prototype._rerenderContent = function (oContent) {
			var $content = this.getParent().$('content');
			if (oContent && ($content.length > 0)) {
				var rm = sap.ui.getCore().createRenderManager();
				for (var i = 0; i < oContent.length; i++) {
					rm.renderControl(oContent[i]);
				}
				rm.flush($content[0]);
				rm.destroy();
			}
		};
		oTabItem.prototype.onclick = function (oEvent) {
			var items = this.getParent().getItems();

			if (this.getParent().getExpand()) {
				if (previousItem === null) {
					this.getParent().removeStyleClass('eyDTabBarContentNoDsply');
					this.getParent().addStyleClass('eyDTabBarContentDsply');
					previousItem = this;
					for (var i = 0; i < items.length; i++) {
						if (items[i] == this) {
							this.getParent().oSelectedItem = this;
							this.addStyleClass('eyDITBSelected');
							this._rerenderContent(this.getContent());

						} else {
							items[i].removeStyleClass('eyDITBSelected');
						}
					}
				}
				/*	else if (previousItem === this) {
						if (this.getParent().hasStyleClass('eyDTabBarContentDsply')) {
							this.getParent().removeStyleClass('eyDTabBarContentDsply');
							this.getParent().addStyleClass('eyDTabBarContentNoDsply');
						} else if (this.getParent().hasStyleClass('eyDTabBarContentNoDsply')) {
							this.getParent().removeStyleClass('eyDTabBarContentNoDsply');
							this.getParent().addStyleClass('eyDTabBarContentDsply');
						}
					}*/
				else {
					for (var i = 0; i < items.length; i++) {
						if (items[i] == this) {
							this.getParent().oSelectedItem = this;
							this.addStyleClass('eyDITBSelected');
							this._rerenderContent(this.getContent());

						} else {
							items[i].removeStyleClass('eyDITBSelected');
						}
					}
					previousItem = this;
					this.getParent().removeStyleClass('eyDTabBarContentNoDsply');
					this.getParent().addStyleClass('eyDTabBarContentDsply');

				}
			} else {
				this.getParent().oSelectedItem = null;
				if(previousItem===null){
						previousItem=this.getParent().getItems()[0];
				}
				if (previousItem !== this) {
					previousItem = this;
					for (var i = 0; i < items.length; i++) {
						if (items[i] == this) {
							this.getParent().oSelectedItem = this;
							this.addStyleClass('eyDITBSelected');
							this._rerenderContent(this.getContent());

						} else {
							items[i].removeStyleClass('eyDITBSelected');
						}
					}
				}
			}
			this.getParent().firePress();
		
		};
		return oTabItem;

	}, /* bExport= */ true);