sap.ui.define([],

    function() {

        var TreemapRenderer = {};
        TreemapRenderer.render = function(oRm, oControl) {
            var chartCanvas = `<canvas style="margin-top:15px;width:90%;  height:80%;" id="${oControl.getId()+'--treemap'}"></canvas>`;
            var divStyle = ` style = "width:${oControl.getWidth()};height:${oControl.getHeight()}; display:inline-block;"`

            oRm.write("<div" + divStyle);
            oRm.writeControlData(oControl);
            this.addCustomStyleClass(oRm, oControl);
            oRm.write(">");

            oRm.write(chartCanvas);
            oRm.write("</div>");
        };
        TreemapRenderer.addCustomStyleClass = function(oRm, oControl) {
            if (!oControl.aCustomStyleClasses) {
                return;
            }
            oControl.aCustomStyleClasses.forEach(function(e) {
                oRm.addClass(e);
                oRm.writeClasses();
            }.bind(this));
        };
        return TreemapRenderer;
    });