
sap.ui.define([],

	function () {

		var BadgeRenderer = {};
		BadgeRenderer.render = function (oRm, oControl) {
			var preBar = `
				<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				  <header class="mdl-layout__header">
				    <div class="mdl-layout__header-row">`;
	        var postBar = `
				    </div>
				  </header>
				</div>
			`;
			oRm.write("<div");
			
			oRm.writeControlData(oControl);
			this.addCustomStyleClass(oRm, oControl);
			oRm.write(">");
			oRm.write(preBar);
			oControl.getAggregation("content").forEach(function(e){
				try{
					oRm.renderControl(e);
				}catch(e){
					console.log(e);
				}
			}.bind(this));
			oRm.write(postBar);
			oRm.write("</div>");
		};
		BadgeRenderer.addCustomStyleClass = function(oRm, oControl){
			if(!oControl.aCustomStyleClasses){
				return;
			}
			oControl.aCustomStyleClasses.forEach(function (e) {
				oRm.addClass(e);
				oRm.writeClasses();
			}.bind(this));
		};
		return BadgeRenderer;
	});