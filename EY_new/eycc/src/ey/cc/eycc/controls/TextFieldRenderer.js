
sap.ui.define([],

	function () {

		var TextFieldRenderer = {};
		TextFieldRenderer.render = function (oRm, oControl) {
			
			var textArea = `
			<div>
			  <div class="placeholder"style="color:${oControl.getPlaceholderColor()}" >${oControl.getPlaceholder()}</div>
			    <div contentEditable="true" class="editor" id="${oControl.getId()+ '--editor'}" style="
			    	width:${oControl.getWidth()};
			    	max-width : ${oControl.getMaxWidth()};
			    	border:${oControl.getBorder()}" 
			    	>
					${oControl.getValue()}
				</div>
			</div>
			`;
			
			oRm.write(`<div style='display:inline-block; width:calc(${oControl.getWidth()} + 30px);'`);
			oRm.writeControlData(oControl);
			oRm.writeClasses();
			oRm.write(">");
	
			oRm.write(textArea);
			oRm.write("</div>");
		};
		return TextFieldRenderer;
	});