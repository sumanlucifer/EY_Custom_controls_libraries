/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * VerticalStepBar renderer.
		 * @namespace
		 */
		var VerticalStepBarRenderer = {};

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
		VerticalStepBarRenderer.render = function (oRm, oControl) {
	oRm.write("<div ");
				oRm.writeControlData(oControl);
				oRm.addClass("eyDVrtStepPrsBarWrapper");
				oRm.writeClasses();
				oRm.write(">");
				oRm.write("<ul class='eyDVrtStepPrsBar'");
				oRm.write(">");
				$.each(oControl.getItems(),function(key,value){
				oRm.renderControl(value);	
				});
				oRm.write("</ul>");
				oRm.write("</div>");

		};

		return VerticalStepBarRenderer;

	}, /* bExport= */ true);