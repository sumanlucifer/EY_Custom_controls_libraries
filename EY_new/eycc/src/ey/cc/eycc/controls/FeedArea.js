/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
    "./../library", "sap/ui/core/Control", "./FeedAreaRenderer",
], function(library, Control, FeedAreaRenderer, ChartJS, TreemapExt) {
    "use strict";

    var FeedArea = Control.extend("ey.cc.eycc.controls.FeedArea", {
        metadata: {
            library: "ey.cc.eycc",
            properties: {
                height: {
                    type: "string",
                    defaultValue: "100%"
                },
                width: {
                    type: "string",
                    defaultValue: "100%"
                },
                backgroundColor: {
                    type: "string",
                    defaultValue: "#ffffff"
                },
                fontSize: {
                    type: "string",
                    defaultValue: "1rem"
                },
                text: {
                    type: "string",
                    defaultValue: ""
                },
            },
            aggregations: {},
            events: {
                tagInvoked: {}
            }
        },
        onAfterRendering: function() {
            document.getElementById(this.getId() + '--editableArea').addEventListener("input", function(e) {
                var oldValue = e.target.getAttribute('previousValue');
                var newValue = e.target.innerText;

                if (data.split('@')[1]) {
                    this.fireEvent('tagInvoked', )
                }
            }.bind(this), false);
        },
        logger: function() {

        },
        renderer: FeedAreaRenderer
    });
    return FeedArea;
});