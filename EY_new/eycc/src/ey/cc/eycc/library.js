/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ey.cc.eycc.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
    function() {

        "use strict";

        /**
         * EY Smart Custom Controls
         *
         * @namespace
         * @name ey.cc.eycc
         * @author SAP SE
         * @version 1.0.0
         * @public
         */

        // delegate further initialization of this library to the Core
        sap.ui.getCore().initLibrary({
            name: "ey.cc.eycc",
            version: "1.0.0",
            dependencies: ["sap.ui.core"],
            types: [],
            interfaces: [],
            controls: [
                "ey.cc.eycc.controls.Example",
                "ey.cc.eycc.controls.Badge",
                "ey.cc.eycc.controls.AppBar",
                "ey.cc.eycc.controls.Button",
                "ey.cc.eycc.controls.ULText",
                "ey.cc.eycc.controls.InfoCard",
                "ey.cc.eycc.controls.Card",
                "ey.cc.eycc.controls.VerticalBar",
                "ey.cc.eycc.controls.HeroBox",
                "ey.cc.eycc.controls.KPIChartTile",
                "ey.cc.eycc.controls.Charts",
                "ey.cc.eycc.controls.ScrollContainer",
                "ey.cc.eycc.controls.Progress",
                "ey.cc.eycc.controls.PageTable",
                "ey.cc.eycc.controls.HoverListItem",
                "ey.cc.eycc.controls.ExpandableText",
                "ey.cc.eycc.controls.OverlayPopover",
                "ey.cc.eycc.controls.ProcessFlowBuilder",
                "ey.cc.eycc.controls.ProcessFlowTemplate",
                "ey.cc.eycc.controls.TextField",
                "ey.cc.eycc.controls.Treemap",
                "ey.cc.eycc.controls.AppNavigation",
                "ey.cc.eycc.controls.FeedArea",
                "ey.cc.eycc.controls.StatusCard"
            ],
            elements: []
        });

        /* eslint-disable */
        return ey.cc.eycc;
        /* eslint-enable */

    }, /* bExport= */ false);