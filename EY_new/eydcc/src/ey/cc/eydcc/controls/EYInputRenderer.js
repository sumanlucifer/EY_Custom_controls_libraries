/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * Input renderer.
		 * @namespace
		 */
		var InputRenderer = {};

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
			InputRenderer.render = function (oRm, oControl) {

			var labelText = oControl.getLabeltext();
			var labelClass = oControl.getLabelclass();
			var inputClass = oControl.getInputclass();
			var placeholder =oControl.getPlaceholder();

			if (labelText) {
				oRm.write('<div ');
				oRm.writeControlData(oControl);
				oRm.addClass("eyDInputWrapper");

				oRm.writeClasses();
				oRm.addStyle("width", oControl.getWidth());
				oRm.addStyle("height", oControl.getHeight());
				oRm.writeStyles();
				oRm.write('><div');

				oRm.addClass("eyDInputInnerWrapper");

				oRm.writeClasses();
				oRm.write('>');
				oRm.write('<div');
				oRm.addClass(labelClass);

				oRm.writeClasses();
				oRm.write('>');
				oRm.writeEscaped(labelText);
				oRm.write('</div>');
				oRm.write('<Input');

			} else {
				oRm.write('<div ');
				oRm.writeControlData(oControl);
				oRm.addClass("eyDInputWrapper");
				oRm.addClass("eyDInputWrapperWithoutLabel");

				oRm.writeClasses();
				oRm.addStyle("width", oControl.getWidth());
				oRm.addStyle("height", oControl.getHeight());
				oRm.writeStyles();
				oRm.write('>');
				oRm.write('<Input');
				oRm.addStyle("padding", "5px");

				oRm.writeStyles();

			}

			oRm.addClass(inputClass);

			oRm.writeClasses();

			if (oControl.getValue()) {
				oRm.writeAttributeEscaped("value", oControl.getValue());
			}
				if (placeholder) {
				oRm.writeAttributeEscaped("placeholder", placeholder);
			}
		 
			if(labelText){
			oRm.write('></Input></div></div>');
			}
			else{
					oRm.write('></Input></div>');
			}

		};


		return InputRenderer;

	}, /* bExport= */ true);