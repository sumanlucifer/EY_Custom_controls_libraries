/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global', './EYButton'],

	function (jQuery, EYButton) {
		"use strict";

		/**
		 * TabBar renderer.
		 * @namespace
		 */
		var TabBarRenderer = {};

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
		TabBarRenderer.render = function (oRm, oControl) {
			var firstItem = oControl.getItems()[0];
			var alignHeader = oControl.getAlignHeader();
			var alignTabContent = oControl.getAlignTabContent();
			var expand = oControl.getExpand();
			var type = oControl.getType();

			if (alignTabContent === "middle" && alignHeader === "left") {

				oRm.write('<div');
				oRm.writeControlData(oControl);
				if (expand) {
					oRm.addClass("eyDTabBarContentNoDsply");
				}
				if (type !== "black") {
					oRm.addClass("eyDITWrapper");
				}

				oRm.writeClasses();
				oRm.write(">");
				
				if (type === "black") {
					oRm.write('<div');
					oRm.addClass("eyQuickLink");
					oRm.writeClasses();
					oRm.write(">");
					oRm.write('<span');
					oRm.addClass("eyQuickLinkMarginLeft");
					oRm.writeClasses();
					oRm.write(">Quick Links");
					oRm.write("</span>");
					oRm.renderControl(oControl._createIcon());
					oRm.write("</div>");
				}
				
				oRm.write('<div');
				if (type === "black") {
					oRm.addClass("eyDITHBlack");
				} else {
					oRm.addClass("eyDITH");
				}
				oRm.writeClasses();
				oRm.write(">");
				oRm.write("<div");
				oRm.addClass("eyDITCustomHeader");
				oRm.writeClasses();
				oRm.write(">");
				$.each(oControl.getCustomHeader(), function (key, value) {
					if (key == 0) {
						value.addStyleClass('eyDITBSelected');
						this.oSelectedItem = value;
					}
					oRm.renderControl(value);
				});
				oRm.write("</div>");
				oRm.write('<div class="eyDITBHead"  >');
				$.each(oControl.getItems(), function (key, value) {
					if (key == 0) {
						value.addStyleClass('eyDITBSelected');
					}
					if (type === "black") {
						value.addStyleClass('eyDITBFilterBlack');
					} else {
						value.addStyleClass('eyDITBFilter');

					}
					oRm.renderControl(value);
				});
				oRm.write("</div>");
				if (expand) {
					if (type === "black") {
						oRm.write("<div style='width: 100px;'></div>");
					} else {
						oRm.renderControl(oControl._createIcon());
					}
				} else {
					oRm.write("<div style='width: 100px;'></div>");
				}

				oRm.write("</div>");

				/*		oRm.write('<div');
				oRm.writeControlData(oControl);
				
				oRm.writeClasses();
				oRm.write(">");
				oRm.write('<div');

				oRm.addClass("eyDITH");
				oRm.writeClasses();
				oRm.write(">");
				oRm.write("<div");
				oRm.addClass("eyDITCustomHeader");
				oRm.writeClasses();
				oRm.write(">");
				$.each(oControl.getCustomHeader(), function (key, value) {
					if (key == 0) {
						value.addStyleClass('eyDITBSelected');
					}
					oRm.renderControl(value);
				});
				oRm.write("</div>");
			
				oRm.write('<div class="eyDITBHead"  >');
				$.each(oControl.getItems(), function (key, value) {
					if (key == 0) {
						value.addStyleClass('eyDITBSelected');
					}
				
				});
				oRm.write("</div>");
				
			 
	oRm.write("<div style='width: 100px;'></div>");
				oRm.write("</div>")*/
				
			} else if (alignTabContent === "middle" && alignHeader === "right") {
				oRm.write('<div');
				oRm.writeControlData(oControl);
				if (expand) {
					oRm.addClass("eyDTabBarContentNoDsply");
				}
				if (type !== "black") {
					oRm.addClass("eyDITWrapper");
				}
				oRm.writeClasses();
				oRm.write(">");
				oRm.write('<div');

				if (type === "black") {
					oRm.addClass("eyDITHBlack");
				} else {
					oRm.addClass("eyDITH");
				}
				oRm.writeClasses();
				oRm.write("><div style='width: 100px;'></div>");

				oRm.write('<div class="eyDITBHead"  >');
				$.each(oControl.getItems(), function (key, value) {
					if (key == 0) {
						value.addStyleClass('eyDITBSelected');
					}
					oRm.renderControl(value);
				});
				oRm.write("</div>");

				oRm.write("<div");
				oRm.addClass("eyDITCustomHeader");
				oRm.writeClasses();
				oRm.write(">");
				$.each(oControl.getCustomHeader(), function (key, value) {
					if (key == 0) {
						value.addStyleClass('eyDITBSelected');
					}
					if (type === "black") {
						value.addStyleClass('eyDITBTextBlack');
					}
					oRm.renderControl(value);
				});
				oRm.write("</div>");
				oRm.write("</div>");
			} else {
				oRm.write('<div');
				oRm.writeControlData(oControl);
				if (expand) {
					oRm.addClass("eyDTabBarContentNoDsply");
				}
				if (type !== "black") {
					oRm.addClass("eyDITWrapper");
				}
				oRm.writeClasses();
				oRm.write(">");
				oRm.write('<div');

				if (type === "black") {
					oRm.addClass("eyDITHBlack");
				} else {
					oRm.addClass("eyDITH");
				}
				oRm.writeClasses();
				oRm.write(">");

				oRm.write('<div class="eyDITBHead"  >');
				$.each(oControl.getItems(), function (key, value) {
					if (key == 0) {
						value.addStyleClass('eyDITBSelected');

					}
					if (type === "black") {
						value.addStyleClass('eyDITBTextBlack');
					}
else{
	value.addStyleClass('eyDITBFilter');	
}
					oRm.renderControl(value);
				});
				oRm.write("</div>");

				oRm.write("<div");
				oRm.addClass("eyDITCustomHeader");
				oRm.writeClasses();
				oRm.write(">");
				$.each(oControl.getCustomHeader(), function (key, value) {
					if (key == 0) {
						value.addStyleClass('eyDITBSelected');
					}
					oRm.renderControl(value);
				});
				oRm.write("</div>");
				oRm.write("</div>");
			}
			// render outer content
			oRm.write("<div id='" + oControl.getId() + "-containerContent' ");
			oRm.addClass("eyDITBContainerContent");
			oRm.writeClasses();
			oRm.write(">");

			// render inner content
			oRm.write("<div id='" + oControl.getId() + "-content'  role='tabpanel' ");

			if (type === "black") {
				oRm.addClass("eyDITBContentBlack");
			} else {
				oRm.addClass("eyDITBContent");
			}
			oRm.writeClasses();
			if (firstItem) {
				oRm.writeAttribute('aria-labelledby', firstItem.getId());
			}

			oRm.write(">");

			var oContent = firstItem.getContent();
			// render the content
			if (oContent.length > 0) {
				for (var i = 0; i < oContent.length; i++) {
					oRm.renderControl(oContent[i]);
				}
			}

			oRm.write("</div>");

			// end outer content
			oRm.write("</div>");

		};
		return TabBarRenderer;

	}, /* bExport= */ true);