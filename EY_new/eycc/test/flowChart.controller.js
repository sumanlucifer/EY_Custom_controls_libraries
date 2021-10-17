sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"ey/cc/eycc/controls/Button"
], function (Controller, History/*, ProcessFlowTemplate ProcessFlowBuilder*/, Button) {
	"use strict";
	return Controller.extend("eycc.test.flowChart", {
		onInit: function () {
		},
		functionPress: function (oEvent) {
			var nodeDetails = oEvent.getParameters().node.part.data;
			var model = this.getView().getModel();
			var type = oEvent.getSource().getType();
			//model.getProperty('/activeRuleBuilderObject').addNode(type, nodeDetails.key, nodeDetails.category, nodeDetails.text);
			/*	if (oEvent.getParameters().node.findLinksConnected().count !== 0) {
					model.getProperty("/activeRuleBuilderObject").linksConnected();
				}*/
		}, 
		nodePress: function (oEvent) {
			this.getView().byId('settingsArea').removeAllAggregation('content');
			
			this.getView().byId('settingsArea').addAggregation('content',oEvent.getParameter('settingsAreaContent')[0].getSettingsArea()[0].clone());
			setTimeout(function(e){
				this.getView().byId('settingsArea').open();				
			}.bind(this));
			var nodeDetails = oEvent.getParameters().node.subject.part.data;
			var connectedNode = oEvent.getParameters().node.subject.part;
			var nodeData;
			connectedNode.findNodesConnected().each(function (n) {
				var part1 = n.part;
				var key1 = part1.data.key;
				nodeData = part1.data;
			});
			var model = this.getView().getModel();
			//model.refresh(true);
			model.setProperty("/type12",nodeDetails.category);
			/*if (nodeData.category === 'Source') {
				var sourceData = model.getProperty("/ruleBuilderTransaction/projectColumns");
				model.setProperty("/testobj", sourceData);
			}*/
		},

	});
});