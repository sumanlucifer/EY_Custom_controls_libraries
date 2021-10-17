sap.ui.define([],
	function () {
		"use strict";
		var ScrollContainerRenderer = {};
		ScrollContainerRenderer.render = function (oRm, oControl) {

			var overallContainer = `
									<div>
									  <table style="float:left;">
									`
			var tableColumnStart = `
									<tr>
								      <td>
								`;
			var tableColumnEnd = `
										</td>
								    </tr>
								`;

			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.write(overallContainer);
			if (oControl.getAggregation("fixedContent")) {
				oControl.getAggregation("fixedContent").forEach(function (e) {
					try {
						oRm.write(tableColumnStart);
						oRm.renderControl(e);
						oRm.write(tableColumnEnd);
					} catch (e) {
						console.log(e);
					}
				}.bind(this));
			}
			oRm.write("</table>");
			oRm.write("</div>");
			if (oControl.getAggregation("content")) {
				oControl.getAggregation("content").forEach(function (e) {
					try {
						oRm.renderControl(e);
					} catch (e) {
						console.log(e);
					}
				}.bind(this));
			}
			// oRm.write("</div>");
			oRm.write("<div");
		};

		return ScrollContainerRenderer;

	});