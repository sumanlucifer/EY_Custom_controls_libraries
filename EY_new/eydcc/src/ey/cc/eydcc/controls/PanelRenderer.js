/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global','sap/m/library'],

	function (jQuery,library) {
		"use strict";

		/**
		 * Panel renderer.
		 * @namespace
		 */
	var ToolbarDesign = library.ToolbarDesign;

	/**
	 * Panel renderer
	 * @namespace
	 */
	var PanelRenderer = {};

	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *          oRm the RenderManager that can be used for writing to the render output buffer
	 * @param {sap.ui.core.Control}
	 *          oControl an object representation of the control that should be rendered
	 */
	PanelRenderer.render = function(oRm, oControl) {
		this.startPanel(oRm, oControl);

		this.renderHeader(oRm, oControl);

		this.renderContent(oRm, oControl);

		this.endPanel(oRm);
	};

	PanelRenderer.startPanel = function (oRm, oControl) {
		oRm.write("<div");
		oRm.writeControlData(oControl);
		oRm.addClass("eyDPanel");
		oRm.writeClasses();
		oRm.addStyle("width", oControl.getWidth());
		oRm.addStyle("height", oControl.getHeight());
		oRm.writeStyles();
		oRm.writeAccessibilityState(oControl, {
			role: oControl.getAccessibleRole().toLowerCase(),
			labelledby: oControl._getLabellingElementId()
		});
		oRm.write(">");
	};

	PanelRenderer.renderHeader = function (oRm, oControl) {
		var bIsExpandable = oControl.getExpandable(),
			bIsExpanded = oControl.getExpanded(),
			oHeaderTBar = oControl.getHeaderToolbar(),
			sHeaderClass;

		if (bIsExpandable) {
			// we need a wrapping div around icon and header
			// otherwise the border needed for both do not exact align
			oRm.write("<header");
			if (oHeaderTBar) {
				sHeaderClass = "eyDPanelWrappingDivTb";
			} else {
				sHeaderClass = "eyDPanelWrappingDiv";
			}

			oRm.addClass(sHeaderClass);
			if (bIsExpanded) {
				oRm.addClass(sHeaderClass + "Expanded");
			}

			oRm.writeClasses();
			oRm.write(">");

		
		}

		// render header
		var sHeaderText = oControl.getHeaderText();

		if (oHeaderTBar) {
			oHeaderTBar.setDesign(ToolbarDesign.Transparent, true);
			oHeaderTBar.addStyleClass("eyDPanelHeaderTB");
			oRm.renderControl(oHeaderTBar);

		} else if (sHeaderText || bIsExpandable) {
			oRm.write("<h1");
			oRm.addClass("eyDPanelHdr");
			oRm.writeClasses();
			oRm.writeAttribute("id", oControl.getId() + "-header");
			oRm.write(">");
			oRm.writeEscaped(sHeaderText);
			oRm.write("</h1>");
		}
			var oIcon = oControl._getIcon();
			if (bIsExpanded) {
				oIcon.addStyleClass("eyDPanelExpandableIconExpanded");
			} else {
				oIcon.removeStyleClass("eyDPanelExpandableIconExpanded");
			}

			oRm.renderControl(oIcon);
		if (bIsExpandable) {
			oRm.write("</header>");
		}
 
		var oInfoTBar = oControl.getInfoToolbar();

		if (oInfoTBar) {
			if (bIsExpandable) {
				// use this class as marker class to ease selection later in onAfterRendering
				oInfoTBar.addStyleClass("eyDPanelExpandablePart");
			}

			// render infoBar
			oInfoTBar.setDesign(ToolbarDesign.Info, true);
			oInfoTBar.addStyleClass("eyDPanelInfoTB");
			oRm.renderControl(oInfoTBar);
		}
	};

	PanelRenderer.renderContent = function (oRm, oControl) {
		this.startContent(oRm, oControl);

		this.renderChildren(oRm, oControl.getContent());

		this.endContent(oRm);
	};

	PanelRenderer.startContent = function (oRm, oControl) {
		oRm.write("<div");
		oRm.writeAttribute("id", oControl.getId() + "-content");
		oRm.addClass("eyDPanelContent");
		oRm.addClass("eyDPanelBG" + oControl.getBackgroundDesign());

		if (oControl.getExpandable()) {
			// use this class as marker class to ease selection later in onAfterRendering
			oRm.addClass("eyDPanelExpandablePart");
		}

		oRm.writeClasses();

		if (sap.ui.Device.browser.firefox) {
			// ensure that the content is not included in the tab chain
			// this happens in FF, when we have a scrollable content
			oRm.writeAttribute('tabindex', '-1');
		}

		oRm.write(">");
	};

	PanelRenderer.renderChildren = function (oRm, aChildren) {
		aChildren.forEach(oRm.renderControl, oRm);
	};

	PanelRenderer.endContent = function (oRm) {
		oRm.write("</div>");
	};

	PanelRenderer.endPanel = function (oRm) {
		oRm.write("</div>");
	};
		return PanelRenderer;

	}, /* bExport= */ true);