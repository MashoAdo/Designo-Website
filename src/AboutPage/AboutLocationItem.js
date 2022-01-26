import React from "react";

// styles
import "../AboutStyles/AboutLocation.css";
import { Link } from "react-router-dom";

function AboutLocationItem({ name, svgComponent, margin }) {
	return (
		<Link to="/locations">
			<div className="about-location-item" style={{ marginBottom: margin }}>
				<div className="location-image-wrapper">{svgComponent}</div>

				<div className="location-info">
					<span>{name}</span>

					<button>SEE LOCATION</button>
				</div>
			</div>
		</Link>
	);
}

export default AboutLocationItem;
