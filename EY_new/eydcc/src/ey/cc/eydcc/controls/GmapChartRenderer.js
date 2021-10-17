/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * GmapChart renderer.
		 * @namespace
		 */
		var GmapChartRenderer = {};

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
		GmapChartRenderer.render = function (oRm, oControl) {

			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addStyle("height", oControl.getRadius() * 2 + "px");
			oRm.addStyle("width", oControl.getRadius() * 2 + "px");
			oRm.addStyle("cursor", "pointer");
			oRm.writeStyles();
			oRm.write(">");
			oRm.write("<svg");
			oRm.writeAttribute("height", oControl.getRadius() * 2);
			oRm.writeAttribute("width", oControl.getRadius() * 2);
			oRm.write(">");

			oRm.write("<circle");
			oRm.writeAttribute("cx", oControl.getRadius());
			oRm.writeAttribute("cy", oControl.getRadius());
			oRm.writeAttribute("r", oControl.getRadius());
			oRm.writeAttribute("fill", oControl.getBgColor());

			oRm.write("/>");
			oRm.write("</svg>");
			oRm.write("</div>");

		};

		return GmapChartRenderer;

	}, /* bExport= */ true);