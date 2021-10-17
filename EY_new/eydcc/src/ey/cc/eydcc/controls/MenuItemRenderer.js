/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * MenuItem renderer.
		 * @namespace
		 */
		var MenuItemRenderer = {};

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
		MenuItemRenderer.render = function (oRm, oControl) {
				oRm.write('<div><a href="JavaScript:Void(0);" class="ey-popup-vertical-menu-item"');

				oRm.writeControlData(oControl);

				oRm.writeClasses();

				oRm.write('>' + oControl.getText() + '</a> </div>');

			};

		return MenuItemRenderer;

	}, /* bExport= */ true);