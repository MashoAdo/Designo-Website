import React from "react";

// styles
import "../AboutStyles/AboutLocation.css";

function AboutLocationItem({ name, svgComponent, margin }) {
	return (
		<div className="about-location-item" style={{ marginBottom: margin }}>
			<div className="location-image-wrapper">{svgComponent}</div>

			<div className="location-info">
				<span>{name}</span>

				<button>SEE LOCATION</button>
			</div>
		</div>
	);
}

export default AboutLocationItem;
