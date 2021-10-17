/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		"use strict";

		/**
		 * Constructor for a new HorizontalStepBar Control.
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
		 * @alias ey.cc.eydcc.controls.HorizontalStepBar
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oHorizontalStepBar = Control.extend("ey.cc.eydcc.controls.HorizontalStepBar", {
			metadata: {

				library: "ey.cc.eydcc",
			
				properties: {

				},
				events: {

				},
				aggregations:{
					items:{
						type:"ey.cc.eydcc.controls.HorizontalStepItem",
						multiple:true,
						singularName:"item"
					}
				}
			
			}
		});
			oHorizontalStepBar.prototype.onAfterRendering = function (oRm, oControl) {
		      var aItems=this.getItems();
		      if(aItems[0].getInlineBottomHorizontal()) //for horizontalbottom step bar control
		      {
		      	var itemsLength=aItems.length;
		      	var divWidth=(100/itemsLength)+"%";
		      	$("#"+this.getId()).find(".eyDHztPrsBar li").css("width",divWidth);
		      }
		};

		return oHorizontalStepBar;

	}, /* bExport= */ true);