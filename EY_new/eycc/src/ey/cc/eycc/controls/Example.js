/*!
 * ${copyright}
 */
// Provides control ey.cc.eycc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./ExampleRenderer"
], function (library, Control, ExampleRenderer) {
	"use strict";

	/**
	 * Constructor for a new Example control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author SAP SE
	 * @version 1.0.0
	 *
	 * @constructor
	 * @public
	 * @alias ey.cc.eycc.controls.Example
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var Example = Control.extend("ey.cc.eycc.controls.Example", {
		metadata: {
			library: "ey.cc.eycc",
			properties: {
				/**
				 * text
				 */
				text: {
					type: "string",
					defaultValue: null
				}
			},
			events: {
				/**
				 * Event is fired when the user clicks on the control.
				 */
				press: {}
			}
		},
		renderer: ExampleRenderer
	});
	return Example;
}, /* bExport= */ true);