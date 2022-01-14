import React from "react";
import "../Styles/callToAction.css";

function CallToActionComponent() {
	return (
		<div className="call-to-action-container">
			<div className="call-to-action-wrapper">
				<div className="call-to-action">
					<h3>Let’s talk about your project</h3>
					<p>
						Ready to take it to the next level? Contact us today and find out
						how our expertise can help your business grow.
					</p>
				</div>
				<button>GET IN TOUCH</button>
			</div>
		</div>
	);
}

export default CallToActionComponent;
