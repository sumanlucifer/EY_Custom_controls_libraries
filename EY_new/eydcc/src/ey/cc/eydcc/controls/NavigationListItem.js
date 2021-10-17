/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control', 'sap/ui/core/Core', "sap/ui/core/Item", 'sap/ui/core/Icon',
		'./NavigationList', 'sap/ui/core/InvisibleText', 'sap/ui/core/Renderer', 'sap/ui/core/IconPool', "sap/ui/events/KeyCodes", './EYButton'
	],
	function (jQuery, library, Control, Core, Item, Icon,
		NavigationList, InvisibleText, Renderer, IconPool, KeyCodes, EYButton) {
		"use strict";

		/**
		 * Constructor for a new NavigationListItem Control.
		 *
		 * @param {string} [sId] id for the new control, generated automatically if no id is given
		 * @param {object} [mSettings] initial settings for the new control
		 *
		 * @class
		 * Some class description goes here.
		 * @extends  Control
		 *
		 * @author SAP SE
		 * @version ${version}
		 *
		 * @constructor
		 * @public
		 * @alias ey.cc.eydcc.controls.NavigationListItem
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var NavigationListItem = Item.extend("ey.cc.eydcc.controls.NavigationListItem", {
			metadata: {
				library: "ey.cc.eydcc",
				properties: {
					/**
					 * Specifies the icon for the item.
					 */
					icon: {
						type: "sap.ui.core.URI",
						group: "Misc",
						defaultValue: ''
					},
					uploadIcon: {
						type: "sap.ui.core.URI",
						group: "Misc",
						defaultValue: ''
					},
					/**
					 * Specifies if the item is expanded.
					 */
					expanded: {
						type: "boolean",
						group: "Misc",
						defaultValue: true
					},
					extraIcon: {
						type: "boolean",

						defaultValue: false
					},

					/**
					 * Specifies if the item has an expander.
					 */
					hasExpander: {
						type: "boolean",
						group: "Misc",
						defaultValue: true
					},

					/**
					 * Specifies if the item should be shown.
					 *
					 * @since 1.52
					 */
					visible: {
						type: "boolean",
						group: "Appearance",
						defaultValue: true
					}
				},
				defaultAggregation: "items",
				aggregations: {

					/**
					 * The sub items.
					 */
					items: {
						type: "ey.cc.eydcc.controls.NavigationListItem",
						multiple: true,
						singularName: "item"
					},

					_expandIconControl: {
						type: "sap.ui.core.Icon",
						multiple: false,
						visibility: "hidden"
					}
				},
				events: {
					/**
					 * Fired when this item is selected.
					 */
					select: {
						parameters: {
							/**
							 * The selected item.
							 */
							item: {
								type: "sap.ui.core.Item"
							}
						}
					},
					upload: {}
				}
			}
		});
		NavigationListItem.expandIcon = 'sap-icon://navigation-right-arrow';
		NavigationListItem.collapseIcon = 'sap-icon://navigation-down-arrow';

		NavigationListItem._getInvisibleText = function () {
			return this._invisibleText || (this._invisibleText = new InvisibleText().toStatic());
		};

		/**
		 * Initializes the control.
		 * @private
		 * @override
		 */
		NavigationListItem.prototype.init = function () {
			this._resourceBundle = Core.getLibraryResourceBundle("sap.ui.core");
			this._resourceBundleMLib = Core.getLibraryResourceBundle("sap.m");
		};

		/**
		 * If the item doesn't have a key, the function returns the ID of the NavigationListItem,
		 * so the NavigationList can remember the selected item.
		 *
		 * @private
		 */
		NavigationListItem.prototype._getUniqueKey = function () {

			var sKey = this.getKey();

			if (sKey) {
				return sKey;
			}

			return this.getId();
		};

		/**
		 * Returns the <code>sap.ui.core.Icon</code> control used to display the expand/collapse icon.
		 * @returns {sap.ui.core.Icon}
		 * @private
		 */
		NavigationListItem.prototype._getExpandIconControl = function () {
			var expandIconControl = this.getAggregation('_expandIconControl');
			if (!expandIconControl) {

				var expanded = this.getExpanded();

				expandIconControl = new Icon({
					src: expanded ? NavigationListItem.collapseIcon : NavigationListItem.expandIcon,
					visible: this.getItems().length > 0 && this.getHasExpander(),
					useIconTooltip: false,
					tooltip: this._getExpandIconTooltip(!expanded)
				}).addStyleClass('eyDNavLIExpandIcon');

				this.setAggregation("_expandIconControl", expandIconControl, true);
			}

			return expandIconControl;
		};

		/**
		 * Gets the expand/collapse icon tooltip.
		 * @private
		 */
		NavigationListItem.prototype._getExpandIconTooltip = function (expand) {

			if (!this.getEnabled()) {
				return '';
			}

			var text = expand ? 'Icon.expand' : 'Icon.collapse';

			return this._resourceBundle.getText(text);
		};

		/**
		 * Gets the tree level of this item.
		 * @private
		 */
		NavigationListItem.prototype.getLevel = function () {
			var level = 0;

			var parent = this.getParent();
			if (parent.getMetadata().getName() == 'ey.cc.eydcc.controls.NavigationListItem') {
				return parent.getLevel() + 1;
			}

			return level;
		};

		/**
		 * Gets the NavigationList control, which holds this item.
		 */
		NavigationListItem.prototype.getNavigationList = function () {
			var parent = this.getParent();

			while (parent && parent.getMetadata().getName() != 'ey.cc.eydcc.controls.NavigationList') {
				parent = parent.getParent();
			}

			return parent;
		};

		/**
		 * Creates a popup list.
		 * @private
		 */
		NavigationListItem.prototype.createPopupList = function () {

			var newSubItems = [],
				list = this.getNavigationList(),
				selectedItem = list.getSelectedItem(),
				popupSelectedItem,
				subItem,
				popupSubItem,
				subItems = this.getItems();

			for (var i = 0; i < subItems.length; i++) {

				subItem = subItems[i];

				if (subItem.getVisible()) {
					popupSubItem = new NavigationListItem({
						key: subItem.getId(),
						text: subItem.getText(),
						textDirection: subItem.getTextDirection(),
						enabled: subItem.getEnabled()
					});

					newSubItems.push(popupSubItem);

					if (selectedItem == subItem) {
						popupSelectedItem = popupSubItem;
					}
				}

			}

			var newGroup = new NavigationListItem({
				expanded: true,
				hasExpander: false,
				key: this.getId(),
				text: this.getText(),
				enabled: this.getEnabled(),
				textDirection: this.getTextDirection(),
				items: newSubItems
			});

			var navList = new NavigationList({
				itemSelect: this.onPopupItemSelect.bind(this),
				items: [
					newGroup
				]
			}).addStyleClass('eyDNavLIPopup');

			if (selectedItem == this) {
				popupSelectedItem = newGroup;
				navList.isGroupSelected = true;
			}

			navList.setSelectedItem(popupSelectedItem);

			return navList;
		};

		/**
		 * Handles popup item selection.
		 * @private
		 */
		NavigationListItem.prototype.onPopupItemSelect = function (event) {

			var item = event.getParameter('item');

			// get the real group item from the cloned one
			item = sap.ui.getCore().byId(item.getKey());

			item._selectItem(event);
		};

		/**
		 * Selects this item.
		 * @private
		 */
		NavigationListItem.prototype._selectItem = function (event) {

			var params = {
				item: this
			};

			this.fireSelect(params);

			var navList = this.getNavigationList();
			navList._selectItem(params);
		};

		/**
		 * Handles key down event.
		 * @private
		 */
		NavigationListItem.prototype.onkeydown = function (event) {

			if (event.isMarked('subItem')) {
				return;
			}

			event.setMarked('subItem');

			if (this.getLevel() > 0) {
				return;
			}

			var isRtl = sap.ui.getCore().getConfiguration().getRTL();

			//  jQuery.sap.KeyCodes.MINUS is not returning 189
			if ((event.shiftKey && event.which == 189) ||
				event.which == KeyCodes.NUMPAD_MINUS ||
				(event.which == KeyCodes.ARROW_RIGHT && isRtl) ||
				(event.which == KeyCodes.ARROW_LEFT && !isRtl)) {
				if (this.collapse()) {
					event.preventDefault();
					event.target = null;
				}
			} else if (event.which == KeyCodes.NUMPAD_PLUS ||
				(event.shiftKey && event.which == KeyCodes.PLUS) ||
				event.which == KeyCodes.ARROW_LEFT && isRtl ||
				event.which == KeyCodes.ARROW_RIGHT && !isRtl) {
				if (this.expand()) {
					event.preventDefault();
					event.target = null;
				}
			}
		};

		/**
		 * Expands the child items (works only on first-level items).
		 */
		NavigationListItem.prototype.expand = function (duration) {
			if (this.getExpanded() || !this.getHasExpander() ||
				this.getItems().length == 0 || this.getLevel() > 0) {
				return;
			}

			this.setProperty('expanded', true, true);
			this.$().find('.eyDNavLIGroup').attr('aria-expanded', true);

			var expandIconControl = this._getExpandIconControl();
			expandIconControl.setSrc(NavigationListItem.collapseIcon);
			expandIconControl.setTooltip(this._getExpandIconTooltip(false));

			var $container = this.$().find('.eyDNavLIGroupItems');
			$container.stop(true, true).slideDown(duration || 'fast', function () {
				$container.toggleClass('eyDNavLIHiddenGroupItems');
			});

			this.getNavigationList()._updateNavItems();

			return true;
		};

		/**
		 * Collapses the child items (works only on first-level items).
		 */
		NavigationListItem.prototype.collapse = function (duration) {
			if (!this.getExpanded() || !this.getHasExpander() ||
				this.getItems().length == 0 || this.getLevel() > 0) {
				return;
			}

			this.setProperty('expanded', false, true);
			this.$().find('.eyDNavLIGroup').attr('aria-expanded', false);

			var expandIconControl = this._getExpandIconControl();
			expandIconControl.setSrc(NavigationListItem.expandIcon);
			expandIconControl.setTooltip(this._getExpandIconTooltip(true));

			var $container = this.$().find('.eyDNavLIGroupItems');
			$container.stop(true, true).slideUp(duration || 'fast', function () {
				$container.toggleClass('eyDNavLIHiddenGroupItems');
			});

			this.getNavigationList()._updateNavItems();

			return true;
		};

		/**
		 * Handles tap event.
		 * @private
		 */
		NavigationListItem.prototype.ontap = function (event) {

			if (event.isMarked('subItem') || !this.getEnabled()) {
				return;
			}

			event.setMarked('subItem');
			event.preventDefault();

			var navList = this.getNavigationList();
			var source = sap.ui.getCore().byId(event.target.id);
			var level = this.getLevel();

			// second navigation level
			if (level == 1) {

				var parent = this.getParent();

				if (this.getEnabled() && parent.getEnabled()) {
					this._selectItem(event);
				}

				return;
			}

			// first navigation level
			if (navList.getExpanded() || this.getItems().length == 0) {

				if (!source || source.getMetadata().getName() != 'sap.ui.core.Icon' || !source.$().hasClass('eyDNavLIExpandIcon')) {
					this._selectItem(event);
					return;
				}

				if (this.getExpanded()) {
					this.collapse();
				} else {
					this.expand();
				}
			} else {
				var list = this.createPopupList();
				navList._openPopover(this, list);
			}
		};

		NavigationListItem.prototype.onsapenter = NavigationListItem.prototype.ontap;
		NavigationListItem.prototype.onsapspace = NavigationListItem.prototype.ontap;

		/**
		 * Renders the item.
		 * @private
		 */
		NavigationListItem.prototype.render = function (rm, control, index, length) {
			if (!this.getVisible()) {
				return;
			}

			if (this.getLevel() === 0) {
				this.renderFirstLevelNavItem(rm, control, index, length);
			} else {
				this.renderSecondLevelNavItem(rm, control, index, length);
			}
		};

		/**
		 * Renders the group item.
		 * @private
		 */
		NavigationListItem.prototype.renderGroupItem = function (rm, control, index, length) {

			var isListExpanded = control.getExpanded(),
				isNavListItemExpanded = this.getExpanded(),
				text = this.getText(),
				tooltip,
				ariaProps = {
					level: '1'
				};

			//checking if there are items level 2 in the NavigationListItem
			//of yes - there is need of aria-expanded property
			if (isListExpanded && this.getItems().length !== 0) {
				ariaProps.expanded = isNavListItemExpanded;
			}

			rm.write('<div');

			rm.addClass("eyDNavLIItem");
			rm.addClass("eyDNavLIGroup");

			if (!this.getEnabled()) {
				rm.addClass("eyDNavLIItemDisabled");
			} else {
				rm.write(' tabindex="-1"');
			}

			if (!isListExpanded || control.hasStyleClass("eyDNavLIPopup")) {
				tooltip = this.getTooltip_AsString() || text;
				if (tooltip) {
					rm.writeAttributeEscaped("title", tooltip);
				}

				ariaProps.role = 'menuitem';
				if (!control.hasStyleClass("eyDNavLIPopup")) {
					ariaProps.haspopup = true;
				}
			} else {
				ariaProps.role = 'treeitem';
			}

			rm.writeAccessibilityState(ariaProps);

			if (control.getExpanded()) {
				tooltip = this.getTooltip_AsString() || text;
				if (tooltip) {
					rm.writeAttributeEscaped("title", tooltip);
				}
			}

			rm.writeClasses();

			rm.write(">");

			this._renderIcon(rm);

			if (control.getExpanded()) {

				var expandIconControl = this._getExpandIconControl();
				expandIconControl.setVisible(this.getItems().length > 0 && this.getHasExpander());
				expandIconControl.setSrc(this.getExpanded() ? NavigationListItem.collapseIcon : NavigationListItem.expandIcon);
				expandIconControl.setTooltip(this._getExpandIconTooltip(!this.getExpanded()));

				this._renderText(rm);

				if (this.getExtraIcon()) {
					var uploadIcon = this._createUploadIcon();

					rm.renderControl(uploadIcon);
				}
				rm.renderControl(expandIconControl);
			}

			rm.write("</div>");
		};
		NavigationListItem.prototype._createUploadIcon = function () {
			var that = this;
			var icon = "";
			if (this.getUploadIcon()) {
				icon = this.getUploadIcon();
			} else {
				icon = "resources/ey/cc/eydcc/images/uploadicon.png";
			}
			var Btn = new EYButton({
				icon: icon,

				press: function (oEvent) {

					that.fireUpload();
				}
			}).addStyleClass('eyDNavUploadIcon');

			return Btn;
		};

		/**
		 * Renders the first-level navigation item.
		 * @private
		 */
		NavigationListItem.prototype.renderFirstLevelNavItem = function (rm, control, index, length) {
			var item,
				items = this._getVisibleItems(this),
				childrenLength = items.length,
				expanded = this.getExpanded(),
				isListExpanded = control.getExpanded();

			rm.write('<li ');
			rm.writeElementData(this);

			if (this.getEnabled() && !isListExpanded) {
				rm.write(' tabindex="-1"');
			}

			rm.write(">");

			this.renderGroupItem(rm, control, index);

			if (isListExpanded) {

				rm.write('<ul aria-hidden="true" ');

				rm.writeAttribute("role", "group");
				rm.addClass("eyDNavLIGroupItems");

				if (!expanded) {
					rm.addClass("eyDNavLIHiddenGroupItems");
				}

				rm.writeClasses();
				rm.write(">");

				for (var i = 0; i < childrenLength; i++) {
					item = items[i];
					item.render(rm, control, i, childrenLength);
				}

				rm.write("</ul>");
			}

			rm.write("</li>");
		};

		/**
		 * Renders the second-level navigation item.
		 * @private
		 */
		NavigationListItem.prototype.renderSecondLevelNavItem = function (rm, control, index, length) {

			var group = this.getParent();

			rm.write('<li');

			rm.writeElementData(this);

			rm.addClass("eyDNavLIItem");
			rm.addClass("eyDNavLIGroupItem");

			if (!this.getEnabled() || !group.getEnabled()) {
				rm.addClass("eyDNavLIItemDisabled");
			} else {
				rm.write(' tabindex="-1"');
			}

			var text = this.getText();

			var tooltip = this.getTooltip_AsString() || text;
			if (tooltip) {
				rm.writeAttributeEscaped("title", tooltip);
			}

			// ARIA
			rm.writeAccessibilityState({
				role: control.hasStyleClass("eyDNavLIPopup") ? 'menuitem' : 'treeitem',
				level: '2'
			});

			rm.writeClasses();

			rm.write(">");

			this._renderText(rm, 2);

			rm.write("</li>");
		};

		/**
		 * Renders an icon.
		 * @private
		 */
		NavigationListItem.prototype._renderIcon = function (rm) {
			var icon = this.getIcon(),
				iconInfo = IconPool.getIconInfo(icon);

			if (icon) {
				// Manually rendering the icon instead of using RenderManager's writeIcon. In this way title
				// attribute is not rendered and the tooltip of the icon does not override item's tooltip
				rm.write('<span');

				rm.addClass("sapUiIcon");
				rm.addClass("eyDNavLIGroupIcon");

				rm.writeAttribute("aria-hidden", true);

				if (iconInfo && !iconInfo.suppressMirroring) {
					rm.addClass("sapUiIconMirrorInRTL");
				}

				if (iconInfo) {
					rm.writeAttribute("data-sap-ui-icon-content", iconInfo.content);
					rm.addStyle("font-family", "'" + iconInfo.fontFamily + "'");
				}

				rm.writeClasses();
				rm.writeStyles();

				rm.write("></span>");
			} else {
				rm.write('<span class="sapUiIcon eyDNavLIGroupIcon" aria-hidden="true"></span>');
			}

		};

		/**
		 * Renders a text.
		 * @private
		 */
		NavigationListItem.prototype._renderText = function (rm, level) {
			rm.write('<span');
			if (level === 2) {

				rm.addClass("sapMSubItemText");
			} else {
				rm.addClass("sapMText");
			}
			rm.addClass("eyDNavLIText");
			rm.addClass("eyDNavLstTextBreakWord");

			rm.writeClasses();

			var textDir = this.getTextDirection();
			if (textDir !== sap.ui.core.TextDirection.Inherit) {
				rm.writeAttribute("dir", textDir.toLowerCase());
			}

			var textAlign = Renderer.getTextAlign(sap.ui.core.TextAlign.Begin, textDir);
			if (textAlign) {
				rm.addStyle("text-align", textAlign);
				rm.writeStyles();
			}

			rm.write(">");
			rm.writeEscaped(this.getText());
			rm.write("</span>");
		};

		/**
		 * Deselects this item.
		 * @private
		 */
		NavigationListItem.prototype._unselect = function () {

			var $this = this.$(),
				navList = this.getNavigationList();

			if (!navList) {
				return;
			}

			$this.removeClass('eyDNavLIItemSelected');

			if (navList.getExpanded()) {

				if (this.getLevel() === 0) {
					$this = $this.find('.eyDNavLIGroup');
				}

				$this.removeAttr('aria-selected');
			} else {
				$this.removeAttr('aria-pressed');
			}
		};

		/**
		 * Selects this item.
		 * @private
		 */
		NavigationListItem.prototype._select = function () {

			var $this = this.$(),
				navList = this.getNavigationList();

			if (!navList) {
				return;
			}

			$this.addClass('eyDNavLIItemSelected');

			if (navList.getExpanded()) {

				if (this.getLevel() === 0) {
					$this = $this.find('.eyDNavLIGroup');
				}

				$this.attr('aria-selected', true);
			} else {
				$this.attr('aria-pressed', true);

				navList._closePopover();
			}
		};

		/**
		 * Gets DOM references of the navigation items.
		 * @private
		 */
		NavigationListItem.prototype._getDomRefs = function () {
			var domRefs = [];

			if (!this.getEnabled()) {
				return domRefs;
			}

			var $this = this.$();

			domRefs.push($this.find('.eyDNavLIGroup')[0]);

			if (this.getExpanded()) {
				var subItems = $this.find('.eyDNavLIGroupItem');

				for (var i = 0; i < subItems.length; i++) {
					domRefs.push(subItems[i]);
				}
			}

			return domRefs;
		};

		/**
		 * Returns all the items aggregation marked as visible
		 * @param {ey.cc.eydcc.controls.NavigationList|ey.cc.eydcc.controls.NavigationListItem} control The control to check for visible items
		 * @return {ey.cc.eydcc.controls.NavigationListItem[]} All the visible NavigationListItems
		 * @private
		 */
		NavigationListItem.prototype._getVisibleItems = function (control) {
			var visibleItems = [];
			var items = control.getItems();
			var item;

			for (var index = 0; index < items.length; index++) {
				item = items[index];
				if (item.getVisible()) {
					visibleItems.push(item);
				}
			}

			return visibleItems;
		};

		NavigationListItem.prototype.onfocusin = function (event) {

			if (event.srcControl !== this) {
				return;
			}

			this._updateAccessibilityText();
		};

		NavigationListItem.prototype._updateAccessibilityText = function () {
			var invisibleText = NavigationListItem._getInvisibleText(),
				navList = this.getNavigationList(),
				bundle = this._resourceBundleMLib,
				accType = navList.getExpanded() ? bundle.getText("ACC_CTR_TYPE_TREEITEM") : '',
				$focusedItem = this._getAccessibilityItem(),
				mPosition = this._getAccessibilityPosition(),
				itemPosition = bundle.getText("LIST_ITEM_POSITION", [mPosition.index, mPosition.size]),
				selected = navList._selectedItem === this ? bundle.getText("LIST_ITEM_SELECTED") : '',
				itemText = navList.getExpanded() ? this.getText() : "",
				text = accType + " " + itemPosition + " " + selected + " " + itemText;

			invisibleText.setText(text);
			$focusedItem.addAriaLabelledBy(invisibleText.getId());
		};

		/**
		 * Returns the acc index and size
		 * @return {Object} The index and the size
		 * @private
		 */
		NavigationListItem.prototype._getAccessibilityPosition = function () {
			var parent = this.getParent(),
				visibleItems = this._getVisibleItems(parent),
				size = visibleItems.length,
				index = visibleItems.indexOf(this) + 1;

			return {
				index: index,
				size: size
			};
		};

		/**
		 * Returns the actual item, which holds the acc information
		 * @return {Object} The item, which holds the acc information
		 * @private
		 */
		NavigationListItem.prototype._getAccessibilityItem = function () {

			var $accItem = this.$();

			if (this.getLevel() === 0) {
				$accItem = $accItem.find('.eyDNavLIGroup');
			}

			return $accItem;
		};

		return NavigationListItem;

	}, /* bExport= */ true);