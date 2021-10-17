/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global',"sap/m/library", "sap/ui/Device", "sap/ui/core/library"],

	function (jQuery,library, Device, coreLibrary) {
		"use strict";

		/**
		 * Dialog renderer.
		 * @namespace
		 */
		var DialogRenderer = {};

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
	// shortcut for sap.m.DialogType
		var DialogType = library.DialogType;

		// shortcut for sap.m.DialogRoleType
		var DialogRoleType = library.DialogRoleType;

		// shortcut for sap.ui.core.ValueState
		var ValueState = coreLibrary.ValueState;

		/**
		 * Dialog renderer.
		 *
		 * @namespace
		 */
		var DialogRenderer = {};

		// Mapping of ValueState to style class
		DialogRenderer._mStateClasses = {};
		DialogRenderer._mStateClasses[ValueState.None] = "";
		DialogRenderer._mStateClasses[ValueState.Success] = "eyDDialogSuccess";
		DialogRenderer._mStateClasses[ValueState.Warning] = "eyDDialogWarning";
		DialogRenderer._mStateClasses[ValueState.Error] = "eyDDialogError";
		DialogRenderer._mStateClasses[ValueState.Information] = "eyDDialogInformation";

		/**
		 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
		 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
		 */
		DialogRenderer.render = function (oRm, oControl) {
			var id = oControl.getId(),
				sType = oControl.getType(),
				oHeader = oControl._getAnyHeader(),
				oSubHeader = oControl.getSubHeader(),
				bMessage = (sType === DialogType.Message),
				oLeftButton = oControl.getBeginButton(),
				oRightButton = oControl.getEndButton(),
				bHorizontalScrolling = oControl.getHorizontalScrolling(),
				bVerticalScrolling = oControl.getVerticalScrolling(),
				sState = oControl.getState(),
				bStretch = oControl.getStretch(),
				bStretchOnPhone = oControl.getStretchOnPhone() && Device.system.phone,
				bResizable = oControl.getResizable(),
				bDraggable = oControl.getDraggable(),
				oValueStateText = oControl.getAggregation("_valueState");

			// write the HTML into the render manager
			// the initial size of the dialog have to be 0, because if there is a large dialog content the initial size can be larger than the html's height (scroller)
			// The scroller will make the initial window width smaller and in the next recalculation the maxWidth will be larger.
			var initialWidth = oControl.getContentWidth() && oControl.getContentWidth() != 'auto' ? ' width: ' + oControl.getContentWidth() + ';' : '';
			var initialHeight = oControl.getContentHeight() && oControl.getContentHeight() != 'auto' ? ' height: ' + oControl.getContentHeight() + ';' : '';
			var initialStyles = "style='" + initialWidth + initialHeight + "'";

			oRm.write('<div ' + initialStyles);
			oRm.writeControlData(oControl);
			oRm.addClass("eyDDialog");
			oRm.addClass("eyDDialog-CTX");
			oRm.addClass("sapMPopup-CTX");

			if (oControl.isOpen()) {
				oRm.addClass("eyDDialogOpen");
			}

			if (window.devicePixelRatio > 1) {
				oRm.addClass("eyDDialogHighPixelDensity");
			}

			if (oControl._bDisableRepositioning) {
				oRm.addClass("eyDDialogTouched");
			}

			if (bStretch || (bStretchOnPhone)) {
				oRm.addClass("eyDDialogStretched");
			}

			oRm.addClass(DialogRenderer._mStateClasses[sState]);

			// No Footer
			var noToolbarAndNobuttons = !oControl._oToolbar && !oLeftButton && !oRightButton;
			var emptyToolbarAndNoButtons = oControl._oToolbar && oControl._isToolbarEmpty() && !oLeftButton && !oRightButton;
			if (noToolbarAndNobuttons || emptyToolbarAndNoButtons) {
				oRm.addClass("eyDDialog-NoFooter");
			}

			if (!oHeader) {
				oRm.addClass("eyDDialog-NoHeader");
			}

			// ARIA
			var sRole = oControl.getProperty("role");

			if (sState === ValueState.Error || sState === ValueState.Warning) {
				sRole = DialogRoleType.AlertDialog;
			}

			oRm.writeAccessibilityState(oControl, {
				role: sRole
			});

			if (oControl._forceDisableScrolling) {
				oRm.addClass("eyDDialogWithScrollCont");
			}

			if (oSubHeader && oSubHeader.getVisible()) {
				oRm.addClass("eyDDialogWithSubHeader");
				if (oSubHeader.getDesign() == library.ToolbarDesign.Info) {
					oRm.addClass("eyDDialogSubHeaderInfoBar");
				}
			}

			if (bMessage) {
				oRm.addClass("eyDMessageDialog");
			}

			if (!bVerticalScrolling) {
				oRm.addClass("eyDDialogVerScrollDisabled");
			}

			if (!bHorizontalScrolling) {
				oRm.addClass("eyDDialogHorScrollDisabled");
			}

			if (Device.system.phone) {
				oRm.addClass("eyDDialogPhone");
			}

			if (bDraggable && !bStretch) {
				oRm.addClass("eyDDialogDraggable");
			}

			// test dialog with sap-ui-xx-formfactor=compact
			if (library._bSizeCompact) {
				oRm.addClass("sapUiSizeCompact");
			}

			oRm.writeClasses();

			var sTooltip = oControl.getTooltip_AsString();

			if (sTooltip) {
				oRm.writeAttributeEscaped("title", sTooltip);
			}

			oRm.writeAttribute("tabindex", "-1");

			oRm.write(">");

			if (Device.system.desktop) {

				if (bResizable && !bStretch) {
					oRm.writeIcon("sap-icon://resize-corner", ["eyDDialogResizeHandler"], { "title" : ""});
				}

				// Invisible element which is used to determine when desktop keyboard navigation
				// has reached the first focusable element of a dialog and went beyond. In that case, the controller
				// will focus the last focusable element.
				oRm.write('<span id="' + oControl.getId() + '-firstfe" tabindex="0" class="eyDDialogFirstFE"></span>');
			}

			if (oHeader) {
				oHeader._applyContextClassFor("header");
				oRm.write("<header");
				oRm.addClass("eyDDialogTitle");
				oRm.writeClasses();
				oRm.write(">");
				oRm.renderControl(oHeader);
				oRm.write("</header>");
			}

			if (oSubHeader) {
				oSubHeader._applyContextClassFor("subheader");
				oRm.write("<header");
				oRm.addClass("eyDDialogSubHeader");
				oRm.writeClasses();
				oRm.write(">");
				oRm.renderControl(oSubHeader);
				oRm.write("</header>");
			}

			if (oValueStateText) {
				oRm.renderControl(oValueStateText);
			}

			oRm.write('<section id="' + id + '-cont" class="eyDDialogSection">');
			oRm.write('<div id="' + id + '-scroll" class="eyDDialogScroll">');
			oRm.write('<div id="' + id + '-scrollCont" class="eyDDialogScrollCont');

			if (oControl.getStretch() || initialHeight) {
				oRm.write(' eyDDialogStretchContent');
			}

			oRm.write('">');

			var aContent = oControl.getContent();

			for (var i = 0; i < aContent.length; i++) {
				oRm.renderControl(aContent[i]);
			}

			oRm.write("</div>");
			oRm.write("</div>");
			oRm.write("</section>");

			if (!(noToolbarAndNobuttons || emptyToolbarAndNoButtons)) {
				oRm.write("<footer");
				oRm.addClass("eyDDialogFooter");
				oRm.writeClasses();
				oRm.write(">");
				oControl._oToolbar._applyContextClassFor("footer");
				oRm.renderControl(oControl._oToolbar);
				oRm.write("</footer>");
			}

			if (Device.system.desktop) {
				// Invisible element which is used to determine when desktop keyboard navigation
				// has reached the last focusable element of a dialog and went beyond. In that case, the controller
				// will focus the first focusable element.
				oRm.write('<span id="' + oControl.getId() + '-lastfe" tabindex="0" class="eyDDialogLastFE"></span>');
			}

			oRm.write("</div>");
		};

		return DialogRenderer;

	}, /* bExport= */ true);