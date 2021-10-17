sap.ui.define([],

	function () {

		var StatusCardRenderer = {};
		StatusCardRenderer.render = function (oRm, oControl) {
			var cardMetadataPreContent = 
				`
				
				    <article class="card assignment-card course-id-2">
				      <header class="card-header card-backgrund-color">
				        <h2>${oControl.getTitle()}</h2>
				      </header>
				      <section class="card-body">
				        <div class="card-info">
				          <div class="card-info-element">
				            <div class="card-info-description">${oControl.getAttrLeft()}</div>
				            <div class="card-info-value">${oControl.getMesLeft()}</div>
				          </div>
				          <div class="card-info-element">
				            <div class="card-info-description">${oControl.getAttrCenter()}</div>
				            <div class="card-info-value">${oControl.getMesCenter()}</div>
				          </div>
				          <div class="card-info-element">
				            <div class="card-info-description">${oControl.getAttrRight()}</div>
				            <div class="card-info-value"><span class="card-info-deadline">${oControl.getMesRight()}</span></div>
				          </div>
				        </div>
				        <p class="card-body-delimiter"></p>
				        <p class="card-tags">
				`
				var cardMetadataPostContent = 
				`
					</p>
				      </section>
				      <footer class="card-footer">
			    		<p style="display: inline-block;"><span class="card-footer-text">${oControl.getStatusText()}</span></p>
				`
				
				var cardMetadataPostFooter = 
				`
					</footer>
				    </article>
				`
			
			oRm.write('<div style="width:calc(32vw - 50px); display:inline-block; margin-right:10px"');
			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.write(cardMetadataPreContent);
			if(oControl.getProperty("tags")){
				oControl.getProperty("tags").split(',').forEach(function(e){
					try{
						oRm.write(`<span class="card-tag">${e}</span>`)
					}catch(e){
						console.log(e);
					}
				}.bind(this));
			}
			oRm.write(cardMetadataPostContent);
			
			oRm.write('<div style="display: inline-block; float:right;">');
			if(oControl.getAggregation("actionArea")){
				oControl.getAggregation("actionArea").forEach(function(e){
					try{
						oRm.renderControl(e);
					}catch(e){
						console.log(e);
					}
				}.bind(this));
			}
			oRm.write('</div>');
			oRm.write(cardMetadataPostFooter);
			oRm.write("</div>");
		};
		return StatusCardRenderer;
	});