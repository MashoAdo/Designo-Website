import React from "react";

// styles
import "../AboutStyles/AboutDescription.css";

function AboutDescription({ imageURL, name, description, margin }) {
	return (
		<div className="about-description-item" style={{ marginBottom: margin }}>
			<div className="about-description-image-wrapper">
				<img src={imageURL} alt="about-img" />
			</div>
			<div className="about-description">
				<h2>{name}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default AboutDescription;
