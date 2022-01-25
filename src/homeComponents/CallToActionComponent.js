import React from "react";
import { Link } from "react-router-dom";
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

				<Link to="/contact" className="cta-button">
					GET IN TOUCH
				</Link>
			</div>
		</div>
	);
}

export default CallToActionComponent;
