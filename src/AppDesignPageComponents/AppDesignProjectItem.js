import React from "react";
// styles
import "../Services-styles/WebDesignProjects.css";

function AppDesignProjectItem({ imageURL, title, description }) {
	return (
		<div className="project-item">
			<div className="project-image-wrapper">
				<img src={imageURL} alt="express-img" />
			</div>
			<div className="project-info">
				<h3 className="project-title">{title}</h3>
				<p className="project-description"> {description}</p>
			</div>
		</div>
	);
}

export default AppDesignProjectItem;
