/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * Container renderer.
		 * @namespace
		 */
		var ContainerRenderer = {};

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
		ContainerRenderer.render = function (oRm, oControl) {

				oRm.write("<div");

				//next, render the control infoRmation, this handles your sId (you must do this for your control to be properly tracked by ui5).
				oRm.writeControlData(oControl);
				oRm.writeClasses();
				oRm.write(">");

				//next, iterate over the content aggregation, and call the renderer for each control
				$(oControl.getContent()).each(function () {
					oRm.renderControl(this);
				});

				//and obviously, close off our div
				oRm.write("</div>");
			};

		return ContainerRenderer;

	}, /* bExport= */ true);