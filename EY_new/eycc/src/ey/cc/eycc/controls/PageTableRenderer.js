sap.ui.define(["ey/cc/eycc/controls/Button"],

	function (Button) {

		var PageTableRenderer = {};
		PageTableRenderer.createColumns = function (oControl, table) {
			var aColumns = oControl.getColumns();
			aColumns.forEach(function (e) {
				table.addColumn(
					new sap.ui.table.Column({
						hAlign : "Center",
						sortProperty: e.path,
						filterProperty: e.path,
						showFilterMenuEntry: true,
						showSortMenuEntry: true,
						resizable : true,
						autoResizable : true,
						label: new sap.m.Label({
							text: e.name
						}),
						template: e.template,
						width: e.width?e.width:null
					})
				);
			});
		};
		PageTableRenderer.render = function (oRm, oControl) {
			var table = new sap.ui.table.Table({
				alternateRowColors : true,
				busyIndicatorDelay : 100,
				enableColumnReordering : true,
				enableSelectAll : false,
				showColumnVisibilityMenu:true,
				selectionMode : sap.ui.table.SelectionMode.None,
				visibleRowCount :10,
				rowHeight : 40,
				rows: {
					path : oControl.getPath()
				}
			}).setModel(oControl.getModel());

			this.createColumns(oControl, table);

			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.renderControl(table);
			oRm.write("</div>");
		};
		return PageTableRenderer;
	});