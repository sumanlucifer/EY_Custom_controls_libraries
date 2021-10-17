/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * EYArrow renderer.
		 * @namespace
		 */
		var EYArrowRenderer = {};

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
		EYArrowRenderer.render = function (oRm, oControl) {
		

			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("eyDArrowWrapper");
			oRm.writeClasses();
			oRm.write(">");
				oRm.write("<div");
		 
			oRm.addClass("eyDArrowSeprator");
			oRm.writeClasses();
				oRm.write(">");
			 oRm.write("</div>");
			oRm.write("<div");
		 
			oRm.addClass("eyDArrowTxtWrpper");
			oRm.writeClasses();
			oRm.write("> <span >");
			oRm.writeEscaped(oControl.getText());
			oRm.write(" </span></div>");
				oRm.write("<div");
		 
			oRm.addClass("eyDArrowSeprator");
			oRm.writeClasses();
				oRm.write(">");
			 oRm.write("</div>");
				oRm.write("</div>");
			
			 

		
		/*

			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("eyDArrowCrlWrapper");
			oRm.writeClasses();
			oRm.write("><div class='eyDArrowCrlTxt'>");
			oRm.writeEscaped(oControl.getText());
			oRm.write("</div><div class='eyDArrowCrl'></div></div>");
			 
			
			

		*/};

		return EYArrowRenderer;

	}, /* bExport= */ true);