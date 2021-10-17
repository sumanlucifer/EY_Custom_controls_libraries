/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * Video renderer.
		 * @namespace
		 */
		var VideoRenderer = {};

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
		VideoRenderer.render = function (oRm, oControl) {
			oRm.write("<video controls ");
			oRm.writeControlData(oControl);

			oRm.writeClasses();
			oRm.writeAttributeEscaped("src", oControl.getSrc());

			oRm.addStyle("width", oControl.getWidth());
			oRm.addStyle("height", oControl.getHeight());
			oRm.writeStyles();

			oRm.write('>Your browser does not support the video tag.</video>');
		};

		return VideoRenderer;

	}, /* bExport= */ true);