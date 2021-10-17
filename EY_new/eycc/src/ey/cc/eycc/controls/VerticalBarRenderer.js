sap.ui.define([],

	function () {

		var VerticalBarRenderer = {};
		VerticalBarRenderer.render = function (oRm, oControl) {
			var bar =	`<div style="width:${oControl.getWidth()};height:${oControl.getHeight()};background:${oControl.getColor()};	display: inline-block;border-radius:10px"/> `;
			
			
			oRm.write("<div");
			oRm.writeControlData(oControl);
			this.addCustomStyleClass(oRm, oControl);
			oRm.write(">");
			oRm.write(bar);
			oRm.write("</div>");
		};
		VerticalBarRenderer.addCustomStyleClass = function(oRm, oControl){
			if(!oControl.aCustomStyleClasses){
				return;
			}
			oControl.aCustomStyleClasses.forEach(function (e) {
				oRm.addClass(e);
				oRm.writeClasses();
			}.bind(this));
		};
		return VerticalBarRenderer;
	});