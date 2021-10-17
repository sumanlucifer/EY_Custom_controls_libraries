/*!
 * ${copyright}
 */

// Provides control ey.cc.eydcc.
sap.ui.define(['jquery.sap.global', './../library', 'sap/ui/core/Control', 'sap/ui/vbm/AnalyticMap', './libs/ChartJS', 'sap/m/Popover',
		'./GmapChart', 'sap/m/HBox', 'sap/m/VBox', 'sap/m/Text'
	],
	function (jQuery, library, Control, AnalyticMap, ChartJS, Popover, GmapChart, HBox, VBox, Text) {
		"use strict";

		/**
		 * Constructor for a new GMAP Control.
		 *
		 * @param {string} [sId] id for the new control, generated automatically if no id is given
		 * @param {object} [mSettings] initial settings for the new control
		 *
		 * @class
		 * Some class description goes here.
		 * @extends  Control
		 *
		 * @author SAP SE
		 * @version ${version}
		 *
		 * @constructor
		 * @public
		 * @alias ey.cc.eydcc.controls.GMAP
		 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
		 */
		var oGMAP = Control.extend("ey.cc.eydcc.controls.GMAP", {
			metadata: {

				library: "eymap.eymap",
				properties: {

					cycleTime: {
						type: "boolean",
						group: "Misc",
						defaultValue: true
					},
					frequency: {
						type: "boolean",
						group: "Misc",
						defaultValue: false
					},
					netValue: {
						type: "boolean",
						group: "Misc",
						defaultValue: false
					},

					sCircle: {
						type: "object",
						group: "Misc",
						defaultValue: null
					}

				},
				aggregations: {
					varItems: {
						type: "sap.ui.vbm.Container",
						multiple: true,
						singularName: "varItem"
					},
					_AnItems: {
						type: "sap.ui.vbm.Container",
						multiple: true,
						visibility: "hidden"
					},
					_ProItems: {
						type: "sap.ui.vbm.Container",
						multiple: true,
						visibility: "hidden"
					},
					_AuItems: {
						type: "sap.ui.vbm.Container",
						multiple: true,
						visibility: "hidden"
					},
					_containers: {
						type: "sap.ui.vbm.Containers",
						multiple: false,
						visibility: "hidden"
					},
					_gmap: {
						type: "sap.ui.vbm.AnalyticMap",
						multiple: false,
						visibility: "hidden"
					}

				},
				events: {

					/**
					 * Event is fired when the user clicks on the control.
					 */
					press: {}

				}
			},

			init: function () {

				this.setAggregation("_gmap", new AnalyticMap({
						regionClick: function (evt) {
							//evt.stopPropagation();
						},
						regionContextMenu: function (evt) {
							//evt.stopPropagation();
						}
					})

					.addStyleClass("sapUiTinyMarginTopBottom"));
				//            this.getAggregation("_gmap").

			}
		});

		oGMAP.prototype.openPopOver = function (oEvent) {
				var oControl = oEvent.getSource().data().oControl;
				var aData = oEvent.getSource().data().cData;
				var aDataMeasure, measureText;
				//clear previous selected coordiantes
				//	oControl.setSCordinate("");
				//assign the current coordiante

				if (oControl.getCycleTime()) {
					aDataMeasure = aData.cycleTime;
					measureText = "Avg Cycle Time";
				} else if (oControl.getFrequency()) {
					aDataMeasure = aData.frequency;
					measureText = "Total Frequency";
				} else if (oControl.getNetValue()) {
					aDataMeasure = aData.netValue;
					measureText = "Total Net Value";
				}

				var chartPopup = new Popover({

					customHeader: new HBox({
						items: [new Text({
							text: "Region\xa0:"
						}).addStyleClass("eymarkedText eyHeaderText"), new Text({
							text: "\xa0" + aData.country
						}).addStyleClass("eyHeaderText")]
					}).addStyleClass("sapUiSmallMarginBegin sapUiSmallMarginTop"),
					footer: new VBox({
						items: [
							new Text({
								text: measureText
							}).addStyleClass("eychartPopUpText sapUiTinyMarginTop sapUiTinyMarginBottom "),
							new Text({
								text: aDataMeasure
							}).addStyleClass("eyFooterText")
						]

					}).addStyleClass("sapUiSmallMarginBegin sapUiSmallMarginEnd sapUiSmallMarginBottom footerVBox"),
					afterOpen: function (evt) {
						//	oControl.setSCordinate(aData.position);
						oControl.data("sCordinate", aData.position);
					},
					afterClose: function (evt) {
					//	oControl.data("sCordinate", "");
						this.destroy();
					}
				});
				//	if (oControl.getVariations()) {

				var varChartMarker = new GmapChart({
					radius: "10",
					bgColor: "#60E6E1"
				});
				var varDiv = new HBox().addStyleClass("sapUiSmallMargin");
				var varChartMarkerDes = new Text({
					text: " -\xa0\xa0\xa0\Standard Variants"
				}).addStyleClass("eychartPopUpText");
				varDiv.addItem(varChartMarker);
				varDiv.addItem(new Text({
					text: aData.variations
						//width: "28px"
				}).addStyleClass("sapUiTinyMarginBegin eychartPopUpText eychartPopTextMinwidth"));
				varDiv.addItem(varChartMarkerDes);
				chartPopup.addContent(varDiv);

				//	}
				//	if (oControl.getAnomalies()) {

				var anChartMarker = new GmapChart({
					radius: "10",
					bgColor: "#FFB46A"
				});
				//anChartMarker.updateData(anData);
				var anDiv = new HBox().addStyleClass("sapUiSmallMargin");
				var anChartMarkerDes = new Text({
					text: " -\xa0\xa0\xa0\Non-Standard Variants"
				}).addStyleClass("eychartPopUpText");
				anDiv.addItem(anChartMarker);
				anDiv.addItem(new Text({
					text: aData.Anomalies
						//	width: "28px"
				}).addStyleClass("sapUiTinyMarginBegin eychartPopUpText eychartPopTextMinwidth"));
				anDiv.addItem(anChartMarkerDes);
				chartPopup.addContent(anDiv);

				//	}
				//	if (oControl.getAutomationIndex()) {

				var auInChartMarker = new GmapChart({
					radius: "10",
					bgColor: "#8CE8AD"
				});
				//	auInChartMarker.updateData(auInData);
				var auInDiv = new HBox().addStyleClass("sapUiSmallMargin");
				var auInChartMarkerDes = new Text({
					text: " -\xa0\xa0\xa0\Incomplete"
				}).addStyleClass("eychartPopUpText");
				auInDiv.addItem(auInChartMarker);
				auInDiv.addItem(new Text({
					text: aData.Incomplete
						//	width: "28px"
				}).addStyleClass("sapUiTinyMarginBegin eychartPopUpText eychartPopTextMinwidth"));
				auInDiv.addItem(auInChartMarkerDes);
				chartPopup.addContent(auInDiv);

				//	}
				//	if (oControl.getProcessInterr()) {

				var prInChartMarker = new GmapChart({
					radius: "10",
					bgColor: "#87D3F2"
				});
				var prInInDiv = new HBox().addStyleClass("sapUiSmallMargin");
				var prInChartMarkerDes = new Text({
					text: " -\xa0\xa0\xa0\Process Interruption"
				}).addStyleClass("eychartPopUpText");
				prInInDiv.addItem(prInChartMarker);
				prInInDiv.addItem(new Text({
					text: aData.ProcessIn
						//	width: "28px"
				}).addStyleClass("sapUiTinyMarginBegin eychartPopUpText eychartPopTextMinwidth"));
				prInInDiv.addItem(prInChartMarkerDes);
				chartPopup.addContent(prInInDiv);

				//	}

				chartPopup.openBy(oEvent.getSource());
			},
			oGMAP.prototype.onAfterRendering = function (oRm, oControl) {
				var self = this;
				$("#" + oRm.srcControl.getId() + "-cycleTime").click(function () {
					//	self.anomaliesEvent(oRm.srcControl);
					self.setCycleTime(true);
					self.setFrequency(false);
					self.setNetValue(false);
				});

				$("#" + oRm.srcControl.getId() + "-Freq").click(function () {
					self.setCycleTime(false);
					self.setFrequency(true);
					self.setNetValue(false);
				});

				$("#" + oRm.srcControl.getId() + "-netVal").click(function () {
					self.setCycleTime(false);
					self.setFrequency(false);
					self.setNetValue(true);
				});

				self.refreshPieChart(oRm.srcControl);
			};

		oGMAP.prototype.refreshPieChart = function (oControl) {
			//	aItem.setVisible(true);
			var vosItems = oControl.getAggregation("_gmap").getVos()[0].getItems();
			$.each(vosItems, function (index, value) {
				var aItem = value.getItem();
				aItem.setVisible(true);
			});

			if (oControl.getSCircle()) {
				setTimeout(function () {
					oControl.getSCircle().firePress();
				}, 100);

			}

		};

		return oGMAP;

	}, /* bExport= */ true);