import React from "react";

import AboutLocationItem from "./AboutLocationItem";

// styles
import "../AboutStyles/AboutLocation.css";

// // svgs
import { ReactComponent as Canada } from "../assets/shared/desktop/illustration-canada.svg";
import { ReactComponent as Australia } from "../assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as UnitedKingdom } from "../assets/shared/desktop/illustration-united-kingdom.svg";

function AboutLocation() {
	let screenWidth = window.innerWidth;

	return (
		<div className="about-location-container">
			<AboutLocationItem
				svgComponent={<Canada />}
				name="Canada"
				margin={screenWidth < 1200 ? "40px" : "0"}
			/>
			<AboutLocationItem
				svgComponent={<Australia />}
				name="Australia"
				margin={screenWidth < 1200 ? "40px" : "0"}
			/>
			<AboutLocationItem
				svgComponent={<UnitedKingdom />}
				name="United Kingdom"
				margin="0"
			/>
		</div>
	);
}

export default AboutLocation;
