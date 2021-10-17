/*!
 * ${copyright}
 */
// Provides control ey.ss.test.eygdscc.Example.
sap.ui.define([
	"./../library", "sap/ui/core/Control", "./TextFieldRenderer"
], function (library, Control, TextFieldRenderer) {
	"use strict";

	var TextField = Control.extend("ey.cc.eycc.controls.TextField", {
		metadata: {
			library: "ey.ss.eygdscc",
			properties: {
				text: {
					type: "string",
					defaultValue: null
				},
				placeholder: {
					type: "string",
					defaultValue: null
				},
				value: {
					type: "string",
					defaultValue: null
				},
				_caret: {
					type: "float",
					defaultValue: 1
				},
				width: {
					type: "string",
					defaultValue: "20rem"
				},
				maxWidth: {
					type: "string",
					defaultValue: "40rem"
				},
				placeholderColor: {
					type: "string",
					defaultValue: "#2e2e38F0;"
				},
				border: {
					type: "string",
					defaultValue: "3px solid #2e2e3820"
				},
			},
			events: {
				change: {}
			}
		},
		oninput : function(e){
			this.set_caret(this._getCaretValue());
			this.setValue(e.target.innerText);
			setTimeout(function(){
				this._setCaretValue(this.get_caret());
				this._moveCursorToEnd();
			}.bind(this),10);
			this.fireChange(e);
		},
		onAfterRendering : function(){
			$("div[contenteditable]").keypress(function (evt) {
			  var keycode = evt.charCode || evt.keyCode;
			  if (keycode  == 13) {
			    return false;
			  }
			});
		},
		renderer: TextFieldRenderer
	});
	TextField.prototype._getCaretValue = function(){
		if (window.getSelection && window.getSelection().getRangeAt) {
		    var range = window.getSelection().getRangeAt(0);
		    var selectedObj = window.getSelection();
		    var rangeCount = 0;
		    return range.startOffset + rangeCount ;
		}
		return -1;
	};
	TextField.prototype._setCaretValue = function(pos){
			var tag = document.getElementById(this.getId()+"--editor"); 
            var setpos = document.createRange(); 
            var set = window.getSelection(); 
            setpos.setStart(tag.childNodes[0], pos); 
            setpos.collapse(true); 
            set.removeAllRanges(); 
            set.addRange(setpos); 
            tag.focus(); 
	};
	TextField.prototype._moveCursorToEnd = function() {
		document.getElementById(this.getId()+"--editor").focus();
		if(document.getElementById(this.getId()+"--editor").innerText.length===1){
			document.execCommand('selectAll', false, null);
			document.getSelection().collapseToEnd();
		}
	};
	return TextField;
});