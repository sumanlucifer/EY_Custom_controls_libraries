sap.ui.define([
	"./../library", "sap/ui/core/Control", "./HoverListItemRenderer", "sap/m/ListItemBase"
], function (library, Control, HoverListItemRenderer, ListItemBase) {
	"use strict";

	var HoverListItem = ListItemBase.extend("ey.cc.eycc.controls.HoverListItem", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				title: {
					type: "string",
					defaultValue: " "
				},
				titleColor: {
					type: "string",
					defaultValue: "#333"
				},
				info: {
					type: "string",
					defaultValue: " "
				},
				enableHoverHighlight: {
                    type: "boolean",
                    defaultValue: false
                },
				_aActionItems: {
					type: "object",
					defaultValue: []
				}
			},
			aggregations: {
				actionItems: {
					type: "sap.ui.core.Control",
					multiple: true,
					visibility: "public",
					defaultValue: []
				}
			},
			events: {
				itemSelect: {},
				actionItemPress:{}
				
			}
		},
		renderer: HoverListItemRenderer
	});
	HoverListItem.prototype.onclick = function (oEvent, source) {
		var control = oEvent.srcControl;
		if (control.getMetadata().getName() !== 'ey.cc.eycc.controls.HoverListItem') {
			this.fireActionItemPress(oEvent, this);
			return;
		}
		control.getList().removeSelections();
		control.setSelected(true);
		control.getList().rerender();
		this.fireItemSelect(oEvent, this);
	};
	HoverListItem.prototype.setSelect = function (select) {
		this.getList().removeSelections();
		this.setSelected(select);
		this.getList().rerender();
	};
	return HoverListItem;
});