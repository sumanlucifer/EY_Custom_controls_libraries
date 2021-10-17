sap.ui.define([
    "./../library", "sap/ui/core/Control", "./OverlayPopoverRenderer"
], function(library, Control, OverlayPopoverRenderer) {
    "use strict";
    var OverlayPopover = Control.extend("ey.cc.eycc.controls.OverlayPopover", {
        metadata: {
            library: "ey.cc.eycc",
            properties: {
                title: {
                    type: "string",
                    defaultValue: ''
                },
                backgroundColor: {
                    type: "string",
                    defaultValue: 'rgba(55, 55, 55, 0.8)'
                },
                enableToolBar: {
                	type: "boolean",
                	defaultValue: false
                },
                autoClose: {
                    type: "boolean",
                    defaultValue: false
                },
                titleColor: {
                    type: "string",
                    defaultValue: "#ffe600"
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
        onAfterRendering: function(event, a, b) {
            if (!this.getProperty('autoClose')) {
                return;
            }
            // Code for auto close -- commented do not delete
            $('html').on('click', function(e) {
                if (document.getElementById(this.getId()).contains(e.target)) {
                    return;
                }
                this.close();
            }.bind(this));
        },
        renderer: OverlayPopoverRenderer
    });
    OverlayPopover.prototype.open = function() {
        if (sap.ui.Device.system.phone) {
            document.getElementById(this.getId()).style.left = "0%";
            document.getElementById(this.getId()).style.width = "100%";
        } else {
            document.getElementById(this.getId()).style.left = "75%";
            document.getElementById(this.getId()).style.width = "23.5%";
        }
    };
    OverlayPopover.prototype.close = function() {
        if (sap.ui.Device.system.phone) {
            document.getElementById(this.getId()).style.left = "100%";
            document.getElementById(this.getId()).style.width = "0%";
        } else {
            document.getElementById(this.getId()).style.left = "100%";
            document.getElementById(this.getId()).style.width = "0%";
        }
    };
    return OverlayPopover;
});