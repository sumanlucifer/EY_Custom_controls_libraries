/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * CheckBox renderer.
		 * @namespace
		 */
		var CheckBoxRenderer = {};

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
		CheckBoxRenderer.render = function (oRm, oControl) {

			oRm.write("<div");
			oRm.addClass("eyDRoundCheckBox");

			oRm.writeClasses();

			oRm.write('>');

			if (oControl.getSelectable()) {
				if (oControl.getSelected()) {
					oRm.write(' <input type="checkbox" checked="checked"');

				} else {
					oRm.write(' <input type="checkbox"');
				}

				oRm.writeControlData(oControl);

				oRm.writeClasses();
				oRm.write('/><label style="cursor: pointer;" for="' + oControl.getId() + '"></label></div>');
			} else {
				oRm.write(' <input type="checkbox"  disabled="disabled" checked="checked"');
				oRm.writeControlData(oControl);

				oRm.writeClasses();
				oRm.write('/><label');

				oRm.addClass("eyDRoundCheckBoxTransLabel");

				oRm.writeClasses();
				oRm.write('for="' + oControl.getId() + '"></label></div>');
			}

		};

		return CheckBoxRenderer;

	}, /* bExport= */ true);