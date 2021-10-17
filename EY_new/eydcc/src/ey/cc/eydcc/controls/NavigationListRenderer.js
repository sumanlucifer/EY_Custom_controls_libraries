/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global'],

	function (jQuery) {
		"use strict";

		/**
		 * NavigationList renderer.
		 * @namespace
		 */
		var NavigationListRenderer = {};

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
	NavigationListRenderer.render = function (rm, control) {
			var role,
				visibleGroupsCount,
				groups = control.getItems(),
				expanded = control.getExpanded(),
				visibleGroups = [];

			rm.write("<ul");
			rm.writeControlData(control);

			var width = control.getWidth();
			if (width && expanded) {
				rm.addStyle("width", width);
			}
			rm.writeStyles();

			rm.addClass("eyDNavLI");

			if (!expanded) {
				rm.addClass("eyDNavLICollapsed");
			}

			rm.writeClasses();

			// ARIA
			role = !expanded || control.hasStyleClass("eyDNavLIPopup") ? 'menubar' : 'tree';

			rm.writeAttribute("role", role);

			rm.write(">");

			//Checking which groups should render
			groups.forEach(function(group) {
				if (group.getVisible()) {
					visibleGroups.push(group);
				}
			});

			// Rendering the visible groups
			visibleGroups.forEach(function(group, index) {
				group.render(rm, control, index, visibleGroupsCount);
			});

			rm.write("</ul>");
		};

		return NavigationListRenderer;

	}, /* bExport= */ true);