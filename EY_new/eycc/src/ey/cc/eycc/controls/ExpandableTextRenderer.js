sap.ui.define([
		"ey/cc/eycc/controls/Button"
	],

	function (Button) {
		
		var ExpandableTextRenderer = {};
		ExpandableTextRenderer.render = function (oRm, oControl) {
			var text = 
			`
			<style>
				.${oControl.getId()+'--style'} {
				  transition: width 0.6s, border-radius 0.6s, background 0.6s, box-shadow 0.6s;
				  width: 30px;
				  height: 30px;
				  border-radius: 15px;
				  border: none;
				  cursor: pointer;
				  font-family: EYInterstate;
				  font-size: 16px;
				  background: transparent;
				}
				.${oControl.getId()+'--style'} + label .search-icon {
				  color: black;
				}
				.${oControl.getId()+'--style'}:hover {
				  color: white;
				  background: #c8c8c8;
				}
				.${oControl.getId()+'--style'}:hover + label .search-icon {
				  color: white;
				}
				.${oControl.getId()+'--style'}:focus {
				  transition: width 0.6s cubic-bezier(0, 1.22, 0.66, 1.39), border-radius 0.6s, background 0.6s;
				  border: none;
				  outline: none;
				  box-shadow: none;
				  padding-left: 15px;
				  cursor: text;
				  width: ${oControl.getWidth()};
				  border-radius: auto;
				  background: #ebebeb;
				  color: black;
				}
				.${oControl.getId()+'--style'}:focus + label .search-icon {
				  color: black;
				}
				.${oControl.getId()+'--style'}:not(:focus) {
				  text-indent: -5000px;
				}
				
				.search-icon {
				  position: relative;
				  left: -32px;
				  top:5px;
				  color: white;
				  cursor: pointer;
			}

			</style>
				
			  <input id="${oControl.getId()+'--inner'}" type="text" class="${oControl.getId()+'--style'}" name="q" />
			  <label for="${oControl.getId()+'--inner'}">
			  <i class="material-icons search-icon" style="color:${oControl.getIconColor()}">${oControl.getIcon()}</i>
			  </label>
			`
			
			oRm.write("<div style='display:inline-block; margin: 5px;' width:${oControl.getIcon()}");
			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.write(text);
			oRm.write("</div>");
		};
		return ExpandableTextRenderer;
	});