/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * TabItem renderer.
		 * @namespace
		 */
		var TabItemRenderer = {};

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
		TabItemRenderer.render = function (oRm, oControl) {

			oRm.write("<div ");
			oRm.writeControlData(oControl);
		/*	oRm.addClass("eyDITBFilter");*/
			oRm.addClass("eyDITBVertical");
			oRm.addClass("eyDITBItem");
			oRm.writeClasses();

			oRm.write(">");
			oRm.write('<div');
			oRm.addClass("eyDITBText");
			oRm.writeClasses();
			oRm.write(">");
			oRm.writeEscaped(oControl.getText());
			oRm.write('</div>');
			oRm.write('<div');
			oRm.addClass("eyDITBContentArrow");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("</div>");
			oRm.write("</div>");

		};

		return TabItemRenderer;

	}, /* bExport= */ true);