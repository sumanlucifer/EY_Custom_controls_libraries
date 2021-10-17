sap.ui.define([],

	function () {
		var HoverListItemRenderer = {};
		HoverListItemRenderer.render = function (oRm, oControl) {
			var containerBegin =
				`
				  <div class= "  ${oControl.getEnableHoverHighlight()? "containerBorder":"container"}" >
				    <div class="textContent ${oControl.getSelected()? oControl.getEnableHoverHighlight()? "borderModify" : "borderLeft" :''}">
				      <p class="${oControl.getEnableHoverHighlight()? "labelModify":"label"}" style="color:${oControl.getTitleColor()}">${oControl.getTitle()}</p>
				      <div class="info">${oControl.getInfo()}</div>
				    </div>
				    <div class="actions">
			    `
			var containerEnd =
				`     
				    </div>
				  </div>
				`
			var aActionItems = oControl.getAggregation("actionItems");
			if (aActionItems && oControl.get_aActionItems().length > 0) {
				aActionItems = [...oControl.get_aActionItems()];
			};
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.write(containerBegin);
			if (aActionItems) {
				oControl.set_aActionItems([...aActionItems]);
				oRm.renderControl(new sap.m.HBox({
					customData: {
						Type: "sap.ui.core.CustomData",
						key: "parent",
						value: oControl
					},
					items: aActionItems.map(function (e) {
						return e;
					})
				}));
			}

			oRm.write(containerEnd);
			oRm.write("</div>");
		};
		return HoverListItemRenderer;
	});