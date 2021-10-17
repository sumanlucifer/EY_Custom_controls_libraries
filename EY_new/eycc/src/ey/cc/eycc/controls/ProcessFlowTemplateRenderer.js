sap.ui.define([],

	function () {

		var ProcessFlowTemplateRenderer = {};
		ProcessFlowTemplateRenderer.render = function (oRm, oControl) {
			oRm.write("<div");

			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.write("</div>");
		};
		return ProcessFlowTemplateRenderer;
	});