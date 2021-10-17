/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * ListItem renderer.
		 * @namespace
		 */
		var ListItemRenderer = {};

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
		ListItemRenderer.render = function (oRm, oControl) {
			var txt=oControl.getText();
			
			oRm.write("<li ");
			oRm.writeControlData(oControl);

			oRm.writeClasses();
			oRm.write(">");
			oRm.writeEscaped(txt);

			oRm.write(
				'</li>'
			);
		};

		return ListItemRenderer;

	}, /* bExport= */ true);