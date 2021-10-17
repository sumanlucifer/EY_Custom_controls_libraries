sap.ui.define([
	"./../library", "sap/ui/core/Control", "./ProcessFlowBuilderRenderer","./helper/ProcessFlowBuilder/LinkTemplate",
		"./helper/ProcessFlowBuilder/NodeTemplate",
		"./helper/ProcessFlowBuilder/TemplateElement",
		"./helper/ProcessFlowBuilder/ProcessFlowLayout"
], function (library, Control, ProcessFlowBuilderRenderer,LinkTemplate,NodeTemplate,TemplateElement,ProcessFlowLayout) {
	"use strict";
	var linkTemplateBuilder = new LinkTemplate();
		var nodeTemplateBuilder = new NodeTemplate();
		var templateBuilder = new TemplateElement();
		var layoutBuilder = new ProcessFlowLayout();
	var ProcessFlowBuilder = Control.extend("ey.cc.eycc.controls.ProcessFlowBuilder", {
		metadata: {
			library: "ey.ss.test.eygdscc",
			properties: {
				_goDiagram: {
					type: "object",
					defaultValue: null
				},
				showGrid: {
					type: "boolean",
					defaultValue: false
				},
				nodeLinksData: {
					type: "object",
					defaultValue: {}
				},
				linksTextVisible: {
					type: "boolean",
					defaultValue: false
				},
				isViewOnly: {
					type: "boolean",
					defaultValue: false
				},
				isEdit: {
					type: "boolean",
					defaultValue: false
				},
				linksTextColor: {
					type: "string",
					defaultValue: '#000000'
				},
				fillColorBG: {
					type: "string",
					defaultValue: '#FAE539'
				},
				edgeTextVisible: {
					type: "boolean",
					defaultValue: false
				},
				layout: {
					type: "string",
					defaultValue: ''
				},
				id: {
					type: "string",
					defaultValue: ''
				},
				height: {
					type: "string",
					defaultValue: '500px'
				},
				layoutSize: {
					type: "string",
					defaultValue: '1411px'
				},
				width: {
					type: "string",
					defaultValue: '100%'
				},
				invalidLinkData: {
					type: "object",
					defaultValue: {}
				}
			},
			aggregations: {
				asplitter: {
					type: "sap.ui.core.Control",
					multiple: false,
					visibility: "public"
				},
				templates: {
					type: "ey.cc.eycc.controls.ProcessFlowTemplate",
					multiple: true,
					visibility: "public"
				}
			},
			events: {
				press: {},
				onTemplateDrop: {},
				linkValidation: {},
				onNodeDeletion: {},
				onLinkDeletion:{}
			}
		},
		init: function () {
			this.setAggregation("asplitter", new sap.ui.layout.Splitter({
				height: this.getHeight(),
				width: this.getWidth(),
				contentAreas: [

					new sap.m.Page(this.getId() + '--builder-area', {
						showHeader: false,
						layoutData: new sap.ui.layout.SplitterLayoutData({
							size: 'auto'//this.getLayoutSize()
						})
					})
				]
			}));
			
			if (!this.getIsViewOnly()) {
				this.getAggregation("asplitter").insertContentArea(new sap.m.Page(this.getId() + '--template-area', {
					showHeader: false,
					layoutData: new sap.ui.layout.SplitterLayoutData({
						size: '200px'
					})
				}), 0);
			}		 
			
		},
		onBeforeRendering: function (e) {
			var template = this.getAggregation("asplitter").getContentAreas()[0];
			if(this.getIsViewOnly()){
							var len = this.getAggregation("asplitter").getContentAreas().length;
							if(len > 1){
								template.getLayoutData().setSize('0px');
								template.getLayoutData().setResizable(false);
							}
						}else{
							template.getLayoutData().setSize('200px');
							template.getLayoutData().setResizable(true);
							}
		},
		onAfterRendering: function (e) {
			var that = this;
			setTimeout(function(){
						var goDiagram = that.getRenderer().createBuilder( that);
						if(!that.getIsViewOnly()) templateBuilder.create( that,goDiagram,'--template-area');	
			     		that.getRenderer().drawDiagram(that,goDiagram);
			     		that.mProperties._goDiagram = goDiagram;
			     	}.bind(this),100);
			    
			     	var timer = setTimeout(function(e){
						if(Object.keys(that.get_goDiagram()).length){
							clearInterval(timer);
							that.getRenderer().attachEvents(that.mProperties._goDiagram,that);
						}
					}.bind(this),100)
		},
		renderer: ProcessFlowBuilderRenderer
	});
	ProcessFlowBuilder.prototype.clearModel = function() {
		if(this.get_goDiagram()){
		this.setIsEdit(true);
		var modelChart = JSON.parse(this.get_goDiagram().model.toJSON());
		modelChart.nodeDataArray = [];
		modelChart.linkDataArray = [];
		this.get_goDiagram().model = go.Model.fromJson(JSON.stringify(modelChart));
		
		}
	};

	return ProcessFlowBuilder;
});