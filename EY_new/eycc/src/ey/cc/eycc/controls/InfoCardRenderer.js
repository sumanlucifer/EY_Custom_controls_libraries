sap.ui.define([],

	function () {

		var InfoCardRenderer = {};
		InfoCardRenderer.render = function (oRm, oControl) {
			var infoCard = 
				`
				<div style="border: solid 1px #e9e9e9; background-color: #ffffff;display:inline-block;border-radius:5px;padding:1rem;margin:.5rem;width:${oControl.getWidth()};height:${oControl.getHeight()};font-family: EYInterstate;">
				  <img src="${oControl.getIcon()}" style="height:4rem;width:4rem;border-radius:5px;background: #c4c4cd59;"/>
				  <div style="margin-top:.5rem;font-size: 18px;  font-weight: bold;">${oControl.getTitle()}</div>
				  <div style="margin-top:.5rem;  width: 4rem; height:.3rem; background: #ffe600; border-radius:10px;"></div>
				  <div style="margin-top:1rem;font-family: EYInterstate;  font-size: 1rem;  font-weight: 300;   font-style: normal;  font-stretch: normal;
				  line-height: 1.19; font-style: normal;  font-stretch: normal;  line-height: 1.19;  letter-spacing: normal;  text-align: left;  color: #737384;">${oControl.getDescription()}</div>
			    </div>
				`
			
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.write(infoCard);
			oRm.write("</div>");
		};
		return InfoCardRenderer;
	});