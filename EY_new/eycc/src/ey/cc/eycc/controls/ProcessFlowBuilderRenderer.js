sap.ui.define([
		"sap/ui/layout/Splitter",
		"sap/ui/layout/SplitterLayoutData",
		"./libs/go",
		"./helper/ProcessFlowBuilder/LinkTemplate",
		"./helper/ProcessFlowBuilder/NodeTemplate",
		"./helper/ProcessFlowBuilder/TemplateElement",
		"./libs/GoFigures",
		"./helper/ProcessFlowBuilder/ProcessFlowLayout",
		"ey/cc/eycc/controls/Button",
		"ey/cc/eycc/controls/ULText"
	],

	function (Splitter, SplitterLayoutData, Go,LinkTemplate,NodeTemplate,TemplateElement,GoFigures,ProcessFlowLayout,Button,ULText) {
		var ProcessFlowBuilderRenderer = {};
		var $ = go.GraphObject.make; 
		var linkTemplateBuilder = new LinkTemplate();
		var nodeTemplateBuilder = new NodeTemplate();
		var templateBuilder = new TemplateElement();
		var layoutBuilder = new ProcessFlowLayout();
		go.licenseKey = "73f04ee2b01c28c702d90776423d6bf919a57963c9841da30a0441f6eb086c1d2398bd7158d78ac686ea5efa1c2e95d8de963a7e904f013bb338dad847ebd6fdb13526b21c0e158dac5025c799ad28a2f97d72facbe077a6882cdbf6e3a8ca9d0cb8f4874ace0ba9397e5361507efd1ab6e9c978f802c4506c7298af";
		ProcessFlowBuilderRenderer.render = function (oRm, oControl) {
			oRm.write("<div");
			oRm.writeControlData(oControl);
			this.addCustomStyleClass(oRm, oControl);
			oRm.write(">");
			this.createLayout(oRm, oControl);
			oRm.write("</div>");
		};
		ProcessFlowBuilderRenderer.createLayout = function (oRm, oControl) {
			/*if(this.container){
				this.container.destroy();
			}*/
			/*this.container= new Splitter({
				height : oControl.getHeight(),
				width :  oControl.getWidth(),
				contentAreas : [
					
					new sap.m.Page(oControl.getId()+'--builder-area',{showHeader : false,layoutData:new SplitterLayoutData({size:'auto'})})
				]
			});
			if(!oControl.getIsViewOnly()){
				this.container.insertContentArea(new sap.m.Page(oControl.getId()+'--template-area',{showHeader : false,layoutData:new SplitterLayoutData({
						size : '200px'})
				}),0);
			}*/
			//oRm.renderControl(this.container);
			oRm.renderControl(oControl.getAggregation("asplitter"));
			/*oControl.getAggregation("asplitter").addEventDelegate({
			     "onAfterRendering": function () {
			     	setTimeout(function(){
						var goDiagram = this.createBuilder(oRm, oControl);
						if(!oControl.getIsViewOnly()) templateBuilder.create(oRm, oControl,goDiagram,'--template-area');	
			     		this.drawDiagram(oControl,goDiagram);
			     		oControl.mProperties._goDiagram = goDiagram;
			     	}.bind(this),100);
			     	var timer = setTimeout(function(e){
						if(Object.keys(oControl.mProperties._goDiagram).length){
							clearInterval(timer);
							this.attachEvents(oControl.mProperties._goDiagram,oControl);
						}
					}.bind(this),100)
			     }
			}, this);*/
		};
		ProcessFlowBuilderRenderer.createBuilder = function( oControl){
			var goDiagram;
			//if(go.Diagram.fromDiv(oControl.getId()+'--builder-area') == null ){
			 goDiagram = $(go.Diagram, oControl.getId()+'--builder-area',{
				grid: oControl.getShowGrid()?$( go.Panel, "Grid",$(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),$(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 })):null,
				linkTemplate : linkTemplateBuilder.create(oControl),
				nodeTemplate : nodeTemplateBuilder.create(oControl),
				//"animationManager.isInitial": false,
				 //initialPosition : new go.Point(10,10),
				 initialAutoScale: go.Diagram.Uniform
				// isEnabled : !oControl.getIsViewOnly()
			});
			if(oControl.getLayout().length>0){
				goDiagram.layout = layoutBuilder.create(oControl.getLayout());
			}
			goDiagram.contentAlignment = go.Spot.Center;
			goDiagram.initialDocumentSpot = go.Spot.MiddleTop;
			goDiagram.initialPosition = new go.Point(1,1);
			//}
			/*else{
				goDiagram = go.Diagram.fromDiv(oControl.getId()+'--builder-area');
			}*/
			return goDiagram;
		}
		ProcessFlowBuilderRenderer.drawDiagram = function(oControl,goDiagram){
			if(oControl.mProperties._goDiagram && !oControl.getIsViewOnly()){
				if(!oControl.getIsEdit()){
				var jsonData = JSON.parse(oControl.mProperties._goDiagram.model.toJSON());
				if(jsonData.nodeDataArray.length>0){
					goDiagram.model = oControl.mProperties._goDiagram.model; 
				}else{
					goDiagram.model = go.Model.fromJson(goDiagram.model.toJSON()); 
				}
				}else{
					goDiagram.model = go.Model.fromJson(oControl.getNodeLinksData()); 
				}
			}else{
				goDiagram.model = go.Model.fromJson(oControl.getNodeLinksData()); 
			}
			var pos = goDiagram.model.modelData.position;
    		if (pos) goDiagram.initialPosition = go.Point.parse(pos);
		}
		ProcessFlowBuilderRenderer.addCustomStyleClass = function(oRm, oControl){
			if(!oControl.aCustomStyleClasses){
				return;
			}
			oControl.aCustomStyleClasses.forEach(function (e) {
				oRm.addClass(e);
				oRm.writeClasses();
			}.bind(this));
		};
		ProcessFlowBuilderRenderer.attachEvents  = function(goDiagram,oControl){
			this.control = oControl;
			goDiagram.addDiagramListener("ObjectSingleClicked",
			function(e) {
				//Check if grapph is only read/view only mode
				
				/*********for display nodepress issue**********/
				
				// if(this.control.getIsViewOnly()){
				// 	return;
				// }
				
				
				//Check if link is pressed or node is pressed in builder area
				if(!e.subject.part.isTreeLink){
					if(this.control.getAggregation('templates')){ //condition check
							var layoutContent = this.control.getAggregation('templates').filter(function(f){
					if(f.getType() === e.subject.part.data.category){
						return true;
					}
				})
					}
				var nodeEvents = {"e":e,"node":e,settingsAreaContent:layoutContent};
				this.control.firePress(nodeEvents); 					
			}
			}.bind(this));
			goDiagram.addDiagramListener("ExternalObjectsDropped", function(e) {
        		var nodeEvents = {"e":e,"node":e};
					this.control.fireOnTemplateDrop(nodeEvents); 
    		}.bind(this));
    		goDiagram.addDiagramListener("LinkDrawn", function (e) {
					var linkEvents = {
					"e": e,
					"link": e
				};
				this.control.fireLinkValidation(linkEvents);
				if(this.control.getIsViewOnly()){
					this.control.get_goDiagram().commandHandler.deleteSelection();
					return;
				}
				var invalidData = this.control.getInvalidLinkData().invalidLinksData;
				if(invalidData !== undefined && invalidData.length > 0){
					var fromNode = e.subject.fromNode.data.category;
					var toNode = e.subject.toNode.data.category;
					var flag = invalidData.filter(function (e) {
						return e.fromNode === fromNode && e.toNode === toNode
					})
					if (flag.length !== 0) {
						this.control.get_goDiagram().commandHandler.deleteSelection();
					}
		    	}
			}.bind(this));
			goDiagram.addDiagramListener("SelectionDeleted", function(e) {
			var nodeEvents = {"e": e,"deletedNode": e};
			var selNode;
			e.subject.each(function(p){selNode= p})
			if(selNode.isTreeLink) this.control.fireOnLinkDeletion(nodeEvents);
			if(selNode.isTreeLeaf) this.control.fireOnNodeDeletion(nodeEvents);
			}.bind(this));
		}
		return ProcessFlowBuilderRenderer;
	});