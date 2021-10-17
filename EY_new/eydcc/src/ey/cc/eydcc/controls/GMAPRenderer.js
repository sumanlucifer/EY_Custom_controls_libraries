/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global', './GmapChart', 'sap/ui/vbm/Containers'],

	function (jQuery, GmapChart, vbmContainers) {
		"use strict";

		/**
		 * GMAP renderer.
		 * @namespace
		 */
		var GMAPRenderer = {};

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
		GMAPRenderer.render = function (oRm, oControl) {

			oRm.write("<div ");
			oRm.writeControlData(oControl);
			oRm.addStyle("display", "flex");
			oRm.addClass("eyMapDiv");
			oRm.writeClasses();
			oRm.writeStyles();
			oRm.write(">");
			oRm.write("<div");
			oRm.addStyle("width", "80%");
			oRm.writeStyles();
			oRm.write(">");
			oRm.renderControl(oControl.getAggregation("_gmap"));
			oControl.getAggregation("_gmap").destroyVos();
			var containerItems = oControl.getAggregation("varItems");
			var mapContainerItems = [];
			for (var i = 0; i < containerItems.length; i++) {
				var aData = containerItems[i].getBindingContext().getObject();
				var aradius="";
				if(oControl.getCycleTime()){
				  aradius=aData.cycleTimeRadius;                        	
				}else if(oControl.getFrequency()){
					aradius=aData.frequencyRadius;      
				}else  {
					aradius=aData.netValueRadius;  
				}
				var chartMarker = new GmapChart({
					press: oControl.openPopOver,
					radius: aradius,
					bgColor: "#56545F"
				});
				/*	Scordinate is for last selected coordinate and sCircle is for last selected circe,
					reuired to open the same popup while changing the variable selection*/

				if (aData.position === oControl.data("sCordinate")) {
					oControl.setSCircle(chartMarker);
				}
				chartMarker.data("cData", aData);
				chartMarker.data("oControl", oControl);
				//	containerItems[i].setItem(chartMarker);
				var mapContainerItem = new sap.ui.vbm.Container({
					position: aData.position
				});
				mapContainerItem.setItem(chartMarker);
				mapContainerItems.push(mapContainerItem);
			}
			oControl.getAggregation("_gmap").addVo(new sap.ui.vbm.Containers({
				items: mapContainerItems
			}));

			oRm.write("</div>");

			oRm.write("<div");
			oRm.writeAttribute("id", oControl.getId() + "-measures");
			oRm.writeControlData(oControl);
			oRm.addStyle("background-color", "rgba(196,196,205,0.2)");
			oRm.addStyle("width", "20%");
			oRm.writeStyles();
			oRm.write(">");
			oRm.write("<h2 style='padding-inline-start: 25px;'>Variables:</h2>");
			oRm.write("<ul");
			oRm.addStyle("padding-inline-start", "25px");
			oRm.writeStyles();
			oRm.write(">");
			oRm.write("<li><div>");

			if (oControl.getCycleTime()) {
				oRm.write(
					'<span class="checkmark"  id=' + oControl.getId() + "-cycleTime" +
					'><div class="checkmark_circle"></div><div class="checkmark_stem"></div> <div class="checkmark_kick"></div></span>'
				);
			} else {
				oRm.write(
					'<span class="checkmark"  id=' + oControl.getId() + "-cycleTime" +
					'><div class="uncheck_circle"></div><div class="checkmark_stem"></div> <div class="checkmark_kick"></div></span>'
				);
			}

			oRm.write("<span");
			oRm.addClass("decriptionText");
			oRm.writeClasses();
			oRm.write(">");
			oRm.writeEscaped("Cycle Time");
			oRm.write("</span>");
			oRm.write("</div>");
			/*	oRm.write("<span");
				//            oRm.addStyle("  background-color:", "#FFB46A;");
				oRm.addClass("rectangle");
				oRm.writeClasses();
				oRm.writeStyles();
				oRm.write(">");
				oRm.writeEscaped(oControl.getVariationsCount());
				oRm.write("</span>");*/
			oRm.write("</li>");
			oRm.write("<li><div>");

			if (oControl.getFrequency()) {
				oRm.write(
					'<span class="checkmark"  id=' + oControl.getId() + "-Freq" +
					'><div class="checkmark_circle"></div><div class="checkmark_stem"></div> <div class="checkmark_kick"></div></span>'
				);
			} else {
				oRm.write(
					'<span class="checkmark"  id=' + oControl.getId() + "-Freq" +
					'><div class="uncheck_circle"></div><div class="checkmark_stem"></div> <div class="checkmark_kick"></div></span>'
				);
			}

			oRm.write("<span");
			oRm.addClass("decriptionText");
			oRm.writeClasses();
			oRm.write(">");
			oRm.writeEscaped("Frequency");
			oRm.write("</span>");
			oRm.write("</div>");
			/*	oRm.write("<span");

				oRm.addStyle("background-color", "#FFB46A");
				oRm.addClass("rectangle");
				oRm.writeClasses();
				oRm.writeStyles();
				oRm.write(">");
				oRm.writeEscaped(oControl.getAnomaliesCount());
				oRm.write("</span>");*/
			oRm.write("</li>");
			oRm.write("<li><div>");

			if (oControl.getNetValue()) {
				oRm.write(
					'<span class="checkmark"  id=' + oControl.getId() + "-netVal" +
					'><div class="checkmark_circle"></div><div class="checkmark_stem"></div> <div class="checkmark_kick"></div></span>'
				);
			} else {
				oRm.write(
					'<span class="checkmark"  id=' + oControl.getId() + "-netVal" +
					'><div class="uncheck_circle"></div><div class="checkmark_stem"></div> <div class="checkmark_kick"></div></span>'
				);
			}
			oRm.write("<span");
			oRm.addClass("decriptionText");
			oRm.writeClasses();
			oRm.write(">");
			oRm.writeEscaped("Net Value");
			oRm.write("</span>");
			oRm.write("</div>");
		
			oRm.write("</li>");

			oRm.write("</ul>");
			oRm.write("</div>");
			oRm.write("</div>");

		};

		return GMAPRenderer;

	}, /* bExport= */ true);