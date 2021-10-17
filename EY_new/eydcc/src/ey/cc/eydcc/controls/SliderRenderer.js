/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global', './EYButton'],

	function (jQuery, EYButton) {
		"use strict";

		/**
		 * OverLayPopOver renderer.
		 * @namespace
		 */
		var OverLayPopOverRenderer = {};

		/**
		 * Renders the HTML for the given control, using the provided
		 * {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm
		 *            the RenderManager that can be used for writing to
		 *            the Render-Output-Buffer
		 * @param Control oControl
		 *            the control to be rendered
		 */
		OverLayPopOverRenderer.render = function (oRm, oControl) {
		
			oRm.write("<div");
			
			
	oRm.addClass("eyDOverLayPopOverWrapper");
			oRm.writeClasses();
				oRm.write(">");
			//next, render the control infoRmation, this handles your sId (you must do this for your control to be properly tracked by ui5).
		
		
			/*	oRm.write('<a href="javascript:void(0)" class="eyDOverLayPopOverClosebtn" id="idClose" onclick="closeNav()">x</a>');*/
			oRm.renderControl(oControl._createButton());
			oRm.write('<div    ');
				
				oRm.writeControlData(oControl);
				oRm.addClass("eyDOverLayPopOver-innerContent");
					oRm.addClass("eyDOverLayPopOver");
			oRm.writeClasses();
				oRm.write(">");
			oRm.write('<div class="eyDOverLayPopOver-content">');
			//next, iterate over the content aggregation, and call the renderer for each control
			$(oControl.getContent()).each(function () {
				oRm.renderControl(this);
			});

			//and obviously, close off our div
			oRm.write("</div></div></div>");

		};

		return OverLayPopOverRenderer;

	}, /* bExport= */ true);