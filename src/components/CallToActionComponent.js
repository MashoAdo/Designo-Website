import React from "react";
import "../Styles/callToAction.css";

function CallToActionComponent() {
	return (
		<div className="call-to-action-container">
			<div className="call-to-action-wrapper">
				<div className="call-to-action">
					<h3>
						<span className="line-breaker">Let’s talk about</span> your project
					</h3>
					<p>
						<span className="line-breaker">
							Ready to take it to the next level? Contact us today and find out
						</span>
						how our expertise can help your business grow.
					</p>
				</div>
				<button>GET IN TOUCH</button>
			</div>
		</div>
	);
}

export default CallToActionComponent;
