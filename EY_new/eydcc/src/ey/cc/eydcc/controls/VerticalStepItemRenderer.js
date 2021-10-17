/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * VerticalStepItem renderer.
		 * @namespace
		 */
		var VerticalStepItemRenderer = {};

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
		VerticalStepItemRenderer.render = function (oRm, oControl) {

		var design = oControl.getDesign();
			/*	var copy = oControl.clone(true);*/
			if (design === 'standard') {
				oRm.write("<li ");
				oRm.writeControlData(oControl);

				oRm.addClass('eyDVrtStepPrsBar-item');
				oRm.writeClasses();
				oRm.write(">");

				oRm.write("<span class='eyDVrtStepPrsBarStandrdItemTtl'>" + oControl.getTitle() + "</span><div");
				oRm.addClass('eyDVrtStepPrsBarStandardItmDsrContainer');
				oRm.writeClasses();
				oRm.write('>');
				oRm.write('<div');
				oRm.addClass('eyDVrtStepPrsBarItmDsr');
				oRm.writeClasses();
				oRm.write('>');
				oRm.writeEscaped(oControl.getDescription());

				oRm.write("</div><a class='eyDVrtStepPrsBarItmLink' tabindex='0'  ");
				//oRm.writeControlData(copy);
				oRm.write(">" + oControl.getLinktext() + "</a></div>");
				oRm.write("</li>");
			} else {
				oRm.write("<li ");
				oRm.writeControlData(oControl);
			 
				oRm.addClass('eyDVrtStepPrsBar-Lightitem');
				oRm.writeClasses();
				oRm.write(">");

				oRm.write("<span class='eyDVrtStepPrsBarLightItemTtl'>" + oControl.getTitle() + "</span><div");
				oRm.addClass('eyDVrtStepPrsBarLightItmDsrContainer');
				oRm.writeClasses();
				oRm.write('>');
				oRm.write('<div');
				oRm.addClass('eyDVrtStepPrsBarItmDsr');
				oRm.writeClasses();
				oRm.write('>');
				oRm.writeEscaped(oControl.getDescription());

				oRm.write("</div>");
				if (oControl.getLinktext()) {
					oRm.write("<a class='eyDVrtStepPrsBarItmLink' tabindex='0'  ");
					//oRm.writeControlData(copy);
					oRm.write(">" + oControl.getLinktext() + "</a>");
				}

				oRm.write("</div>");
				oRm.write("</li>");
			}

		};

		return VerticalStepItemRenderer;

	}, /* bExport= */ true);