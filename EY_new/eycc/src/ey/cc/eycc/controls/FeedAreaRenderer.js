sap.ui.define([],

    function() {

        var FeedAreaRenderer = {};
        FeedAreaRenderer.render = function(oRm, oControl) {
            var style = `
                background:${oControl.getBackgroundColor()};
                display:inline-block;
                width:${oControl.getWidth()};
                height:${oControl.getHeight()};
                padding : 10px;
                overflow: auto;
                font-size:${oControl.getFontSize()}
            `
            oRm.write("<div");
            oRm.writeControlData(oControl);
            oRm.writeClasses();
            oRm.write(">");
            oRm.write(`<div id=${oControl.getId()+'--editableArea'} contenteditable='true' style="${style}" `);
            oRm.write(`previousValue="${oControl.getText()}"`);
            oRm.write(">");
            oRm.write(oControl.getText());

            oRm.write("</div>");

        };

        return FeedAreaRenderer;
    });