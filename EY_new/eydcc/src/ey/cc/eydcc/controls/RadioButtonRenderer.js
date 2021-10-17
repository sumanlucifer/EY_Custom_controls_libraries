/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global','sap/ui/core/ValueStateSupport', 'sap/ui/core/library', 'sap/ui/Device'],

	function (jQuery,ValueStateSupport, coreLibrary, Device) {
		"use strict";

		/**
		 * RadioButton renderer.
		 * @namespace
		 */
	
	// shortcut for sap.ui.core.ValueState
	var ValueState = coreLibrary.ValueState;


	/**
	 * RadioButton renderer.
	 * @namespace
	 */
	var RadioButtonRenderer = {};

	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
	 * @param {sap.ui.core.Control} oRadioButton an object representation of the control that should be rendered
	 */
	RadioButtonRenderer.render = function(oRm, oRadioButton) {

		this.addWOuterDivStyles(oRm, oRadioButton);
		this.addInnerDivStyles(oRm, oRadioButton);

		this.renderSvg(oRm, oRadioButton);
		this.renderInput(oRm, oRadioButton);

		this.closeDiv(oRm);
		oRm.renderControl(oRadioButton._oLabel);

		this.renderTooltip(oRm, oRadioButton);
		this.closeDiv(oRm);
	};

	RadioButtonRenderer.addWOuterDivStyles = function(oRm, oRadioButton) {
		var sId = oRadioButton.getId(),
			bEnabled = oRadioButton.getEnabled(),
			bNonEditableParent = !oRadioButton.getProperty("editableParent"),
			bNonEditable = !oRadioButton.getEditable() || bNonEditableParent,
			bInErrorState = ValueState.Error === oRadioButton.getValueState(),
			bInWarningState = ValueState.Warning === oRadioButton.getValueState(),
			bInSuccessState = ValueState.Success === oRadioButton.getValueState(),
			bInInformationState = ValueState.Information === oRadioButton.getValueState(),
			bUseEntireWidth = oRadioButton.getUseEntireWidth();

		// Radio Button style class
		oRm.addClass("eyDRb");

		// write the HTML into the render manager
		oRm.write("<div"); // Control - DIV
		oRm.writeControlData(oRadioButton);

		if (bUseEntireWidth) {
			oRm.addStyle("width", oRadioButton.getWidth());
			oRm.writeStyles();
		}

		var sTooltipWithStateMessage = ValueStateSupport.enrichTooltip(oRadioButton, oRadioButton.getTooltip_AsString());
		if (sTooltipWithStateMessage) {
			oRm.writeAttributeEscaped("title", sTooltipWithStateMessage);
		}

		// ARIA
		oRm.writeAccessibilityState(oRadioButton, {
			role: "radio",
			posinset: oRadioButton.getProperty("posinset"),
			setsize: oRadioButton.getProperty("setsize"),
			readonly: bNonEditableParent || undefined,
			selected: null, // Avoid output aria-selected
			checked: oRadioButton.getSelected() === true ? true : undefined, // aria-checked=false is default value and must not be set explicitly
			disabled: bNonEditable ? true : undefined, // Avoid output aria-disabled=false when the button is editable
			labelledby: { value: sId + "-label", append: true },
			describedby: { value: (sTooltipWithStateMessage ? sId + "-Descr" : undefined), append: true }
		});

		// Add classes and properties depending on the state
		if (oRadioButton.getSelected()) {
			oRm.addClass("eyDRbSel");
		}

		if (!bEnabled) {
			oRm.addClass("eyDRbDis");
		}

		if (bNonEditable) {
			oRm.addClass("eyDRbRo");
		}

		if (bInErrorState) {
			oRm.addClass("eyDRbErr");
		}

		if (bInWarningState) {
			oRm.addClass("eyDRbWarn");
		}

		if (bInSuccessState) {
			oRm.addClass("eyDRbSucc");
		}

		if (bInInformationState) {
			oRm.addClass("eyDRbInfo");
		}

		oRm.writeClasses();

		if (bEnabled) {
			oRm.writeAttribute("tabindex", oRadioButton.hasOwnProperty("_iTabIndex") ? oRadioButton._iTabIndex : 0);
		}

		oRm.write(">"); // DIV element
	};

	RadioButtonRenderer.addInnerDivStyles = function(oRm, oRadioButton) {
		var bReadOnly = this.isButtonReadOnly(oRadioButton);

		oRm.write("<div ");
		oRm.addClass('eyDRbB');

		if (!bReadOnly && Device.system.desktop) {
			oRm.addClass('eyDRbHoverable');
		}

		oRm.writeClasses();
		oRm.write(">");
	};

	RadioButtonRenderer.renderSvg = function(oRm, oRadioButton) {
		var sId = oRadioButton.getId();

		oRm.write("<svg xmlns='http://www.w3.org/2000/svg' version='1.0'");
		oRm.addClass('eyDRbSvg');
		oRm.writeClasses();
		oRm.write(">");

		oRm.write('<circle stroke="black" r="50%" stroke-width="1" fill="none"');
		oRm.addClass("eyDRbBOut");

		//set an id on this this to be able to focus it, on ApplyFocusInfo (rerenderAllUiAreas)
		oRm.writeAttribute("id", sId + "-Button");
		oRm.writeClasses();
		oRm.write(">");
		oRm.write("</circle>");

		oRm.write('<circle r="35%" stroke-width="10"');
		oRm.addClass("eyDRbBInn");
		oRm.writeClasses();
		oRm.write(">");
		oRm.write("</circle>");

		oRm.write("</svg>");
	};

	RadioButtonRenderer.renderInput = function (oRm, oRadioButton) {
		var sId = oRadioButton.getId(),
			bReadOnly = this.isButtonReadOnly(oRadioButton);

		// Write the real - potentially hidden - HTML RadioButton element
		oRm.write("<input type='radio' tabindex='-1'");
		oRm.writeAttribute("id", sId + "-RB");
		oRm.writeAttributeEscaped("name", oRadioButton.getGroupName());
		if (oRadioButton.getSelected()) {
			oRm.writeAttribute("checked", "checked");
		}

		if (bReadOnly) {
			oRm.writeAttribute("readonly", "readonly");
			oRm.writeAttribute("disabled", "disabled");
		}

		oRm.write(" />"); // Close RadioButton-input-element
	};

	RadioButtonRenderer.renderTooltip = function (oRm, oRadioButton) {
		var sId = oRadioButton.getId(),
			sTooltipWithStateMessage = ValueStateSupport.enrichTooltip(oRadioButton, oRadioButton.getTooltip_AsString());

		if (sTooltipWithStateMessage && sap.ui.getCore().getConfiguration().getAccessibility()) {
			// for ARIA, the tooltip must be in a separate SPAN and assigned via aria-describedby.
			// otherwise, JAWS does not read it.
			oRm.write("<span id=\"" + sId + "-Descr\" style=\"display: none;\">");
			oRm.writeEscaped(sTooltipWithStateMessage);
			oRm.write("</span>");
		}
	};

	RadioButtonRenderer.isButtonReadOnly = function(oRadioButton) {

		var bEnabled = oRadioButton.getEnabled(),
			bNonEditableParent = !oRadioButton.getProperty("editableParent"),
			bNonEditable = !oRadioButton.getEditable() || bNonEditableParent;

		return !bEnabled || bNonEditable;

	};

	RadioButtonRenderer.closeDiv = function (oRm) {
		oRm.write("</div>");
	};

		return RadioButtonRenderer;

	}, /* bExport= */ true);