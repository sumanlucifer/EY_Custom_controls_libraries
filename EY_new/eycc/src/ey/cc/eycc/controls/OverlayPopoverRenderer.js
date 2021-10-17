sap.ui.define([
        "ey/cc/eycc/controls/ULText",
        "ey/cc/eycc/controls/Button"
    ],
    function(ULText, Button) {
        var OverlayPopoverRenderer = {};
        OverlayPopoverRenderer.render = function(oRm, oControl) {

            oRm.write(
                `<div  style="position: fixed;width: 98%;padding: 1rem;height: 98%;top: 0;overflow-y: auto;
				left: 100%;right: 0;margin-bottom: 1rem; background-color: ${oControl.getBackgroundColor()};    
				z-index: 100;transition: .5s ease;"`
            );
            oRm.writeControlData(oControl);
            oRm.writeClasses();
            oRm.write(">");

            var overlayContent = new sap.m.Toolbar({
                design: "Transparent",
                style: "Clear",
                content: [
                    new ULText({
                        text: oControl.getTitle(),
                        textColor: oControl.getTitleColor()
                    }),
                    new sap.m.ToolbarSpacer(),
                    new Button({
                        icon: 'close',
                        type: "miniIcon",
                        iconColor: "white",
                        press: function() {
                            oControl.close()
                        }.bind(this)
                    })
                ]
            }).addStyleClass("sapUiSmallMarginEnd").addStyleClass("sapUiMediumMarginBottom");
            var renderOverlay = oControl.getEnableToolBar() ? overlayContent : oControl.getTitle();
            if(oControl.getEnableToolBar()){
            	 oRm.renderControl(renderOverlay);
            }else{
            	oRm.write("<div");
			    oRm.addStyle("color", oControl.getTitleColor());
			     oRm.addStyle("padding-left", "0.5rem");
			    oRm.writeStyles();
			    oRm.write(">");
            	oRm.write(renderOverlay);
            	oRm.write("</div>");
            }

            if (oControl.getAggregation("content")) {
                oControl.getAggregation("content").forEach(function(e) {
                    try {
                        oRm.renderControl(e);
                    } catch (e) {
                        console.log(e);
                    }
                }.bind(this));
            }
            oRm.write("</div>");

        };
        return OverlayPopoverRenderer;
    });