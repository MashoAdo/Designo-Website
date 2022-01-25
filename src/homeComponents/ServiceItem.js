import React from "react";
import "../Styles/services.css";
import { ReactComponent as RightIcon } from "../assets/shared/desktop/icon-right-arrow.svg";

// import { Link } from "react-router-dom";

function ServiceItem({ name, backgroundImageUrl, path }) {
	return (
		<a href={path}>
			<div
				className="service-item"
				style={{ backgroundImage: `url(${backgroundImageUrl})` }}
			>
				<span className="service-title">{name}</span>
				<div className="view-project-container">
					<span className="view-project-text">VIEW PROJECTS</span>
					<RightIcon className="right-icon" />
				</div>
			</div>
		</a>
	);
}

export default ServiceItem;
