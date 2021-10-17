/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global', './EYButton'],

	function (jQuery, EYButton) {
		"use strict";

		/**
		 * Tile renderer.
		 * @namespace
		 */
		var TileRenderer = {};

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
		TileRenderer.render = function (oRm, oControl) {

			var btn = new EYButton({

				background: "rgba(196, 196, 205, 0.35)",
				padding: "14px",
				// border:"1px solid",
				borderRadius: "10px",
				justifyContent: "Center",

				// icon:"sap-icon://accelerated",
				icon: "resources/ey/cc/eydcc/images/ic_search.svg"
			}).addStyleClass("eyDTileIcon");

			var type = oControl.getType();
			/*	if (type === "type3") {*/
			oRm.write("<div");
			oRm.writeControlData(oControl);
			if (type === "type3") {
				oRm.addClass("eyDTileTypeSecond");
			} else if (type === "type2") {
				oRm.addClass("eyDTileTypeSecond");
			} else if (type === "type1") {
				oRm.addClass("eyDTile");
			} else if (type === "type4") {
				oRm.addClass("eyDTileTypeFour");
			}
			oRm.writeClasses();

			oRm.write(">");
			if (type === "type4") {
				oRm.renderControl(btn);
			}
			oRm.write("<div ");
			if (type === "type3") {
				oRm.addClass("eyDTileTitleNoPadding");
			} else if (type === "type2") {

				oRm.addClass("eyDTileCheckMarkWrapper");
				oRm.writeClasses();

				oRm.write(">");
				oRm.write("<div ");
				oRm.addClass("eyDTileTitleNoPadding");

			} else if (type === "type1") {
				oRm.addClass("eyDTileTitle");
			} else if (type === "type4") {
				oRm.addClass("eyDTileTypeFourTitle");
			}

			oRm.writeClasses();

			oRm.write(">");
			oRm.writeEscaped(oControl.getTitle());
			oRm.write('</div>');
			if (type === "type3") {
				oRm.write("<div");

				oRm.addClass("eyDTileTypeSecondNumer");
				oRm.writeClasses();

				oRm.write(">");
			} else if (type === "type2") {
				oRm.write("<span");
				oRm.addClass("eyDTileCheckMark");
				oRm.writeClasses();

				oRm.write(">");

				oRm.write("<div");
				oRm.addClass("eyDTileCheckMark_circle");
				oRm.writeClasses();

				oRm.write("></div>");
				oRm.write("<div");
				oRm.addClass("eyDTileCheckMark_stem");
				oRm.writeClasses();

				oRm.write("></div>");
				oRm.write("<div");
				oRm.addClass("eyDTileCheckMark_kick");
				oRm.writeClasses();

				oRm.write("></div>");

				oRm.write("</span></div>");
				oRm.write("<div");

				oRm.addClass("eyDTileTypeSecondNumer");
				oRm.writeClasses();

				oRm.write(">");
			} else if (type === "type1") {
				oRm.write("<div");

				oRm.addClass("eyDTileNumer");
				oRm.writeClasses();

				oRm.write(">");
			}
			if (type !== "type4") {
				oRm.write("<span");
				oRm.addClass("eyDInfoNumber");
				oRm.writeClasses();
				oRm.write(">");
				oRm.writeEscaped(oControl.getNumber());
				oRm.write("</span>");

				oRm.write("<span");
				oRm.addClass("eyDInfoDesc");
				oRm.writeClasses();
				oRm.write(">");
				oRm.writeEscaped(oControl.getInfoDesc());
				oRm.write("</span>");

				//	oRm.writeClasses();
				oRm.write("</div>");
			}
			if (type === "type1") {
				oRm.write("<div");

				oRm.addClass("eyDTileInfoText");
				oRm.writeClasses();

				oRm.write(">");

				oRm.writeEscaped(oControl.getInfoText());
				oRm.write("</div>");
			} else if (type === "type4") {
				oRm.write("<div");

				oRm.addClass("eyDTileTypeFourDescr");
				oRm.writeClasses();

				oRm.write(">");

				oRm.writeEscaped(oControl.getInfoText());
				oRm.write("</div>");
			}
			oRm.write("</div>");
			/*	} else if (type === "type2") {
					oRm.write("<div");
					oRm.writeControlData(oControl);
					oRm.addClass("eyDTileTypeSecond");
				 
					oRm.writeClasses();

					oRm.write(">");
					oRm.write("<div class='eyDTileCheckMarkWrapper'><div class='eyDTileTitleNoPadding'>");
					oRm.writeEscaped(oControl.getTitle());
					oRm.write(
						'</div><span class="eyDTileCheckMark">  <div class="eyDTileCheckMark_circle"/>    <div class="eyDTileCheckMark_stem"/>    <div class="eyDTileCheckMark_kick"/></span></div>'
					);
					oRm.write("<div class='eyDTileTypeSecondNumer'>");
					oRm.writeEscaped(oControl.getNumber());
					oRm.write("</div>");

					oRm.write("</div>");
				} else {
					oRm.write("<div");
					oRm.writeControlData(oControl);
					oRm.addClass("eyDTile");
					oRm.writeClasses();
					oRm.write(">");
					oRm.write("<div class='eyDTileTitle'>");
					oRm.writeEscaped(oControl.getTitle());
					oRm.write("</div>");
					oRm.write("<div class='eyDTileNumer'>");
					oRm.writeEscaped(oControl.getNumber());
					oRm.write("</div>");
					oRm.write("<div class='eyDTileInfoText'>");
					oRm.writeEscaped(oControl.getInfoText());
					oRm.write("</div>");
					oRm.write("</div>");
				}*/

		};

		return TileRenderer;

	}, /* bExport= */ true);