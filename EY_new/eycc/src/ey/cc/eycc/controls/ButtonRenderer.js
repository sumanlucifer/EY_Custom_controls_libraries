sap.ui.define([],

	function () {

		var ButtonRenderer = {};
		ButtonRenderer.render = function (oRm, oControl) {
			var style=`background:${oControl.getBgColor()};color:${oControl.getTextColor()};display:${oControl.getVisible()?'block':'none'};text-transform: none;`;
			switch(oControl.getType()){
				case("miniIcon") :
					var button =
						`
						<button class="mdl-button mdl-js-button mdl-button--icon" style="${style}">
						  <i class="material-icons" style="color:${oControl.getIconColor()}">${oControl.getIcon()}</i>
						</button>
						`;
						break;
				case("textOnly") : 
					var button = 
					`
						<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style="${style}">
							<i class="material-icons" style="color:${oControl.getIconColor()}">${oControl.getIcon()}</i>
							${oControl.getText()}
						</button>
					`;
					break;
				case("profileView") : 
					var button = 
					`
						<button class="mdl-button mdl-js-button mdl-button--icon" style="${style}">
							<img style="height: 100%;" src="${oControl.getIcon()}"/>
						</button>
					`;
					break;
			}
			
			
			oRm.write("<div");

			oRm.writeControlData(oControl);
			oRm.writeClasses();
			oRm.write(">");
			oRm.write(button);
			oRm.write("</div>");
		};
		return ButtonRenderer;
	});