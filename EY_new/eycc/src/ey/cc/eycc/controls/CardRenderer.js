sap.ui.define(["ey/cc/eycc/controls/ULText"],

	function (ULText) {

		var CardRenderer = {};
		CardRenderer.render = function (oRm, oControl) {
			var cardFooter =
				`<div>
				<h2 style="font-size: 14px;font-weight: bold;color: #737384;padding-left: 1rem;">${oControl.getLabelB()}</h2>
				<div style="font-size: 13px;color: #c4c4cd;margin-left: 1.0rem;margin-top: -2.5rem;">${oControl.getValueB()}</div>
				<h2 style="font-size: 14px;font-weight: bold;color: #737384;margin-top: -57px;margin-left: 16rem;">${oControl.getLabelR()}</h2>
				<div style="padding-top: 0.5rem;font-size: 13px; color: #c4c4cd;margin-top: -3rem;margin-left: 16rem;">${oControl.getValueR()}</div>
			</div>`
			var cardHeader =
				`<div style="border: solid 1px #e9e9e9; background-color: #ffffff;display:inline-block;border-radius:5px;padding:0rem;margin:.5rem;width:${oControl.getWidth()};height:${oControl.getHeight()};" class="demo-card-wide mdl-card mdl-shadow--2dp">
				<div style="justify-content: space-between;" class="mdl-card__title">`

			var cardButton = `<div style="display: flex;" class="mdl-card__menu">`
			var cardButtonclose = `</div>`

			var title = new ULText({
				text: oControl.getTitle(),
				ulColor: '#ffe600',
				ulWidth: '50%'
			})
			var cardHeaderClose = `</div>`
			var cardBody =
				`<div>
				<h2 style="font-size: 14px;font-weight: 300;line-height:0.14;color:#737384;padding-left: 1rem;">${oControl.getDescriptionL()}</h2>
				</div>
				<div style="font-size: 13px;font-weight: bold;line-height: 1.19;padding-left: 1rem;color: #2e2e38;height:1.19rem;">${oControl.getDescription()}</div>`
			var cardBodyClose = `</div>`

			oRm.write("<div style='display:inline-block;'");
			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.write(cardHeader);
			oRm.renderControl(title);
			oRm.write(cardButton);
			if (oControl.getAggregation("actionItems")) {
				oControl.getAggregation("actionItems").forEach(function (e) {
					try {
						oRm.renderControl(e);
					} catch (e) {
						console.log(e);
					}
				}.bind(this));
			}
			oRm.write(cardButtonclose);
			oRm.write(cardHeaderClose);
			oRm.write(cardBody);
			oRm.write(cardFooter);
			oRm.write(cardBodyClose);
			oRm.write("</div>");
		};
		return CardRenderer;
	});