
sap.ui.define([],

	function () {

		var BadgeRenderer = {};
		BadgeRenderer.render = function (oRm, oControl) {
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("material-icons mdl-badge mdl-badge--overlap positionBadge");
			oRm.writeClasses();
			oRm.write("data-badge=");
			oRm.write(oControl.getText());
			oRm.write(">");
			
			oRm.write("account_box");
			oRm.write("&nbsp");
			oRm.write("</div>");
		};
		return BadgeRenderer;
	});