/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * Menu renderer.
		 * @namespace
		 */
		var MenuRenderer = {};

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
		MenuRenderer.render = function (oRm, oControl) {
				oRm.write("<div class='ey_menu-popup ey_menu-popup--from-right js-ey_menu-popup-main'");
				oRm.writeControlData(oControl);
				oRm.write("><div class='ey_menu-popup__container'");

				oRm.write("><div class='ey_menu-popup__content'><div class='ey-popup-vertical-menu'><span class='ey-popup-vertical-menu-itemFirst'");

				oRm.write('>' + oControl.getTitle() + '</span>');

				$.each(oControl.getItems(), function (key, value) {
					oRm.renderControl(value);
				});
				oRm.write("</div></div></div></div>");

			};


		return MenuRenderer;

	}, /* bExport= */ true);