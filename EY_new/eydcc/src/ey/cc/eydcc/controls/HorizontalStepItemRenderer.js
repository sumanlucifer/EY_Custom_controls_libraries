/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * HorizontalStepItem renderer.
		 * @namespace
		 */
		var HorizontalStepItemRenderer = {};

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
		HorizontalStepItemRenderer.render = function (oRm, oControl) {
			oRm.write("<li ");
			oRm.writeControlData(oControl);

			oRm.writeClasses();
			oRm.write(">");
			var topTitle = oControl.getToptitle();
			var topSubTitle = oControl.getTopsubtitle();
			var bottomTitle = oControl.getBottomtitle();
			var bottomSubTitle = oControl.getBottomsubtitle();
			var src = oControl.getSrc();
			if(oControl.getInlineBottomHorizontal()){
				oRm.write(
					'<div></div><div class="eyDHztInlineBarItem eyDHztInlineBarBottomItem"> <div class="eyDHztPrsBarItemBottomWrapper">' +
					oControl.getImgText() +
					'</div></div><div  style="display:block;margin-top: 20px;"><span class="eyDHztPrsBottomBarItemBtmTitle" style="display:block;margin-top: -10px;">' +
					bottomTitle + '</span><span class="eyDHztPrsBottomBarItemBtmSubTitle" style="display:block;">' +
					bottomSubTitle + '</span></div>'
				);
			}
			else if (bottomTitle !== "" && topTitle === "" && topSubTitle === "" && bottomSubTitle === "") {
				oRm.write(
					'<div></div><div class="eyDHztPrsBarItem"> <div class="eyDHztPrsBarItemIconWrapper"><img class="eyDHztPrsBarItemIcon"  src="' +
					src +
					'" alt="Image is not valid"></div></div><div class="eyDHztPrsBarItemBtmTitle">' + bottomTitle + '</div></li>'
				);
			} else if (bottomTitle !== "" && topTitle === "" && topSubTitle === "" && bottomSubTitle !== "") {
				oRm.write(
					'<div></div><div class="eyDHztPrsBarItem"> <div class="eyDHztPrsBarItemIconWrapper"><img class="eyDHztPrsBarItemIcon"  src="' +
					src +
					'" alt="Image is not valid"></div></div><div  style="display:block;margin-top: 20px;"><span class="eyDHztPrsBarItemBtmTitle" style="display:block;margin-top: -10px;">' +
					bottomTitle + '</span><span class="eyDHztPrsBarItemBtmTitle" style="display:block;">' +
					bottomSubTitle + '</span></div>');
			} else if (bottomSubTitle === "" && topTitle !== "" && topSubTitle === "" && bottomSubTitle === "") {

				oRm.write('<div class="eyDHztPrsBarItemTopSnglTitle"><span style="display:block;"></span><span style="display:block;">' +
					topTitle +
					'</span></div><div class="eyDHztPrsBarItem"> <div class="eyDHztPrsBarItemIconWrapper"><img class="eyDHztPrsBarItemIcon"  src="' +
					src +
					'" alt="Image is not valid"></div></div><div></div>');
			} else if (bottomSubTitle === "" && topTitle !== "" && topSubTitle !== "" && bottomSubTitle === "") {
				oRm.write('<div class="eyDHztPrsBarItemTopDblTitle"><span style="display:block;">' + topTitle +
					'</span><span style="display:block;">' + topSubTitle +
					'</span></div><div class="eyDHztPrsBarItem"> <div class="eyDHztPrsBarItemIconWrapper"><img class="eyDHztPrsBarItemIcon"  src="' +
					src +
					'" alt="Image is not valid"></div></div><div></div>');

			} else {
				oRm.write(
					'<div></div><div class="eyDHztPrsBarItem"> <img class="eyDHztPrsBarItemIcon"  src="' + src +
					'" alt="Image is not valid"></div><div>bottomTitle</div></li>'
				);
			}
			oRm.write(
				'</li>'
			);

		};

		return HorizontalStepItemRenderer;

	}, /* bExport= */ true);