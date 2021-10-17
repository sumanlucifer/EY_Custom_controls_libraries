
sap.ui.define([],

	function () {

		var HeroBoxRenderer = {};
		HeroBoxRenderer.render = function (oRm, oControl) {
			var preBox = `
				<div style="width : ${oControl.getWidth()};  height:${oControl.getHeight()};color:${oControl.getColor()}; background-image : url('${oControl.getBgImage()}');  background-size: cover; ">
			`;
	        var postBox = `
				   </div>
			`;
			
			oRm.write("<div");
						oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.write(preBox);
			if(oControl.getAggregation("content")){
				oControl.getAggregation("content").forEach(function(e){
					try{
						oRm.renderControl(e);
					}catch(e){
						console.log(e);
					}
				}.bind(this));	
			}
			oRm.write(postBox);
			oRm.write("</div>");
		};
		return HeroBoxRenderer;
	});