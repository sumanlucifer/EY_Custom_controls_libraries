sap.ui.define(["ey/cc/eycc/controls/OverlayPopover", "ey/cc/eycc/controls/HoverListItem"],

	function (OverlayPopover, HoverListItem) {

		var AppNavigationRenderer = {};
		AppNavigationRenderer.render = function (oRm, oControl) {
			var popOver = new OverlayPopover({
				enableToolBar: false,
				autoClose: true,
				title: oControl.getTitle(),
				titleColor: oControl.getTitleColor(),
				backgroundColor: oControl.getBackgroundColor()
			});
			oControl.getAggregation("content").forEach(function (e) {
				popOver.addContent(e.clone(true));
			});
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.renderControl(popOver);
			oRm.write("</div>");
		};
		return AppNavigationRenderer;
	});