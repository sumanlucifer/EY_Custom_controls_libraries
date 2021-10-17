/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global', 'sap/m/VBoxRenderer'],

	function (jQuery, sapm_VBoxRenderer) {
		"use strict";

		/**
		 * VBox renderer.
		 * @namespace
		 */
		var VBoxRenderer = {};

		/**
		 * Renders the HTML for the given control, using the provided
		 * {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm
		 *            the RenderManager that can be used for writing to
		 *            the Render-Output-Buffer
		 * @param sap.m.VBox oControl
		 *            the control to be rendered
		 */
		VBoxRenderer.render = function (oRm, oControl) {

			if (!oControl.getVisible()) {
				return;
			}

			oRm.addClass("sapRULTVBox");

			sapm_VBoxRenderer.render(oRm, oControl);
		};

		return VBoxRenderer;

	}, /* bExport= */ true);