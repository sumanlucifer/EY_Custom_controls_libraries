/*!
 * ${copyright}
 */

sap.ui.define([
		'sap/ui/Device',
		'sap/ui/core/library',
		'sap/ui/core/IconPool',
		'sap/m/library',
		'sap/ui/core/InvisibleText',
		"sap/base/security/encodeXML"
	],

	function (Device, coreLibrary, IconPool, library, InvisibleText, encodeXML) {
		"use strict";

		/**
		 * EYButton renderer.
		 * @namespace
		 */
		var EYButtonRenderer = {};

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
		EYButtonRenderer.render = function (oRm, oButton) {

			oRm.write("<button");
			oRm.writeControlData(oButton);
			oRm.addClass("sapMBtnBase eyTooltip");

			//	oRm.writeAttribute("style", "height:" +  oButton.getHeight()+";width:"+oButton.getWidth());
			/*	oRm.writeAttribute("style", "height:" +  oButton.getHeight());*/

			oRm.addStyle("height", oButton.getHeight());
			oRm.addStyle("background-color", oButton.getBackground());
			oRm.addStyle("border", oButton.getBorder());
			oRm.addStyle("border-radius", oButton.getBorderRadius());
			oRm.addStyle(" outline", "none");
			oRm.addStyle("cursor", "pointer");

			oRm.writeStyles();

			oRm.writeClasses();
			oRm.write(">");
			if( oButton.getToolTipText()){
			oRm.write("<span");	
			oRm.addClass("EYButtonTooltiptext");
			oRm.writeClasses();
			oRm.write(">");	
				oRm.write(oButton.getToolTipText());
				oRm.write("</span>");		
			}
			
			oRm.write("<span");
			oRm.writeAttribute("id", oButton.getId() + "-inner");
			oRm.addStyle("text-align", "left");
			oRm.addStyle("display", "flex");
			oRm.addStyle("box-sizing", "border-box");
			oRm.addStyle("padding", oButton.getPadding());
			oRm.addStyle("width", oButton.getWidth());
			oRm.addStyle("justify-content", oButton.getJustifyContent());

			oRm.writeStyles();
			oRm.write(">");
			if (oButton.getIcon()) {
				if (oButton.getIconFirst()) {
					this.writeImgHtml(oRm, oButton);
					oRm.write("<span class=\"eyText\"");
					oRm.writeAttribute("id", oButton.getId() + "-innerText");
					oRm.addStyle("text-align", "left");
					oRm.addStyle("overflow", "hidden");
					//	oRm.addStyle("padding-left", "10px");
					oRm.addStyle("text-overflow", "ellipsis");
					oRm.addStyle("color", oButton.getTextColor());
					//	oRm.addStyle("word-wrap", "unset");
					oRm.addStyle("height", oButton.getTextLineHeight());
					oRm.addStyle("line-height", oButton.getTextLineHeight());
					oRm.writeStyles();
					oRm.write(">");

					oRm.write(oButton.getText());
					oRm.write("</span>");
				} else {
					oRm.write("<span class=\"eyText\"");
					oRm.writeAttribute("id", oButton.getId() + "-innerText");
					oRm.addStyle("text-align", "left");
					oRm.addStyle("overflow", "hidden");
					//	oRm.addStyle("padding-left", "10px");
					oRm.addStyle("text-overflow", "ellipsis");
					oRm.addStyle("color", oButton.getTextColor());
					//	oRm.addStyle("word-wrap", "unset");
					oRm.addStyle("height", oButton.getTextLineHeight());
					oRm.addStyle("line-height", oButton.getTextLineHeight());
					oRm.writeStyles();
					oRm.write(">");

					oRm.write(oButton.getText());
					oRm.write("</span>");
					this.writeImgHtml(oRm, oButton);

				}

			} else {

				oRm.write("<span class=\"eyText\"");
				oRm.writeAttribute("id", oButton.getId() + "-innerText");
				oRm.addStyle("text-align", "left");
				oRm.addStyle("overflow", "hidden");
				//	oRm.addStyle("padding-left", "10px");
				oRm.addStyle("text-overflow", "ellipsis");
				oRm.addStyle("color", oButton.getTextColor());
				//	oRm.addStyle("word-wrap", "unset");
				oRm.addStyle("height", oButton.getTextLineHeight());
				oRm.addStyle("line-height", oButton.getTextLineHeight());
				oRm.writeStyles();
				oRm.write(">");

				oRm.write(oButton.getText());
				oRm.write("</span>");
			}
			oRm.write("</span>");
			//	oRm.writeControlData( oButton);
			oRm.write("</button>");

		};
		EYButtonRenderer.writeImgHtml = function (oRm, oButton) {
			oRm.renderControl(oButton._getImage((oButton.getId() + "-img"), oButton.getIcon(), oButton.getActiveIcon(), oButton.getIconDensityAware()));
		};

		return EYButtonRenderer;

	}, /* bExport= */ true);