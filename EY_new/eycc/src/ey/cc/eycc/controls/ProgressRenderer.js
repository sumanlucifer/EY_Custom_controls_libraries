sap.ui.define([
        "ey/cc/eycc/controls/ULText"
    ],

    function(ULText) {

        var ProgressRenderer = {};
        ProgressRenderer.render = function(oRm, oControl) {
            var progress =
                `
								<div style="background:#e0e0e0;border-radius:10px;width:${oControl.getWidth()}">
								  <div 
									style="background:${oControl.getColor()}; 
									height:${oControl.getHeight()}; 
									width:${oControl.getPercentage()}%;
								    line-height: ${oControl.getHeight()};
									border-radius:20px;text-align:center;font-family:EYInterstate;color:#2e2e38;">
								  ${oControl.getText()}
								  </div>
								</div><br>

							`;
            // Start Rendering Controls Conditionally - Pinaki

            oRm.write("<div style='margin:5px'");
            oRm.writeControlData(oControl);
            this.addCustomStyleClass(oRm, oControl);
            oRm.write(">");
            oRm.write(progress);
            oRm.write("</div>");
        };
        ProgressRenderer.addCustomStyleClass = function(oRm, oControl) {
            if (!oControl.aCustomStyleClasses) {
                return;
            }
            oControl.aCustomStyleClasses.forEach(function(e) {
                oRm.addClass(e);
                oRm.writeClasses();
            }.bind(this));
        };
        return ProgressRenderer;
    });