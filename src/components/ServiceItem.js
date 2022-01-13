import React from "react";
import "../Styles/services.css";
import { ReactComponent as RightIcon } from "../assets/shared/desktop/icon-right-arrow.svg";

function ServiceItem({ name }) {
	return (
		<div className="service-item">
			<span className="service-title">{name}</span>
			<div className="view-project-container">
				<span className="view-project-text">VIEW PROJECTS</span>
				<RightIcon className="right-icon" />
			</div>
		</div>
	);
}

export default ServiceItem;
