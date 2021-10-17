/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ey.cc.eydcc.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * Ey Custom Controls
		 *
		 * @namespace
		 * @name ey.cc.eydcc
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "ey.cc.eydcc",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"ey.cc.eydcc.controls.Example",
				"ey.cc.eydcc.controls.EYInput",
				"ey.cc.eydcc.controls.CheckBox",
				"ey.cc.eydcc.controls.Menu",
				"ey.cc.eydcc.controls.MenuItem",
				"ey.cc.eydcc.controls.VerticalStepBar",
				"ey.cc.eydcc.controls.VerticalStepItem",
				"ey.cc.eydcc.controls.RadioButton", 
				"ey.cc.eydcc.controls.Video", 
				"ey.cc.eydcc.controls.Container",
				"ey.cc.eydcc.controls.HorizontalStepBar",
				"ey.cc.eydcc.controls.HorizontalStepItem",
				"ey.cc.eydcc.controls.NavigationList",
				"ey.cc.eydcc.controls.NavigationListItem",
				"ey.cc.eydcc.controls.EYList",
				"ey.cc.eydcc.controls.EYListItem",
				"ey.cc.eydcc.controls.Panel",
				"ey.cc.eydcc.controls.Dialog",
				"ey.cc.eydcc.controls.VBox", 
				"ey.cc.eydcc.controls.EYButton",
				"ey.cc.eydcc.controls.Tile",
				"ey.cc.eydcc.controls.TabBar",
				"ey.cc.eydcc.controls.TabBarItem",
				"ey.cc.eydcc.controls.TileContainer", 
				"ey.cc.eydcc.controls.Slider",
				"ey.cc.eydcc.controls.EYPage",
				"ey.cc.eydcc.controls.EYArrow" 
			,"ey.cc.eydcc.controls.EYPage","ey.cc.eydcc.controls.GMAP","ey.cc.eydcc.controls.GmapChart","ey.cc.eydcc.controls.EYHome"],
			elements: []
		});

		/* eslint-disable */
		return ey.cc.eydcc;
		/* eslint-enable */

	}, /* bExport= */ false);