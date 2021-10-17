/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * TileContainer renderer.
		 * @namespace
		 */
		var TileContainerRenderer = {};

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
		TileContainerRenderer.render = function (oRm, oControl) {

		oRm.write("<div");
			oRm.writeControlData(oControl);

		 
			oRm.addClass("eyDTileContainer");
			oRm.writeClasses();
			oRm.write(">");
			$.each(oControl.getTiles(), function (key, value) {
			 
				oRm.renderControl(value);
			});
			oRm.write("</div>");

		};

		return TileContainerRenderer;

	}, /* bExport= */ true);