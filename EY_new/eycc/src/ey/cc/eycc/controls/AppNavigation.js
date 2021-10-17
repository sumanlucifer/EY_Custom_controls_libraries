sap.ui.define([
    "./../library", "sap/ui/core/Control", "./AppNavigationRenderer"
], function(library, Control, AppNavigationRenderer) {
    "use strict";
    var AppNavigation = Control.extend("ey.cc.eycc.controls.AppNavigation", {
        metadata: {
            library: "ey.cc.eycc",
            properties: {
                title: {
                    type: "string",
                    defaultValue: ''
                },
                titleColor: {
                    type: "string",
                    defaultValue: 'rgba(128,128,128,0.8)'
                },
                backgroundColor: {
                    type: "string",
                    defaultValue: 'rgba(55, 55, 55, 0.7)'
                }

            },
            aggregations: {
                content: {
                    type: "sap.ui.core.Control",
                    multiple: true,
                    visibility: "public"
                }
            }
        },
        renderer: AppNavigationRenderer
    });
    AppNavigation.prototype.open = function (oEvent, source) {
    	var getPopoverContent = $("#" + this.getId()).children("div").attr("id");
    	/* temporary getId() method*/
		var popOverInstance = sap.ui.getCore().byId(getPopoverContent);
		popOverInstance.open();
		
	};
    return AppNavigation;
});