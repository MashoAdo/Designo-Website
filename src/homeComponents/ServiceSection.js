import React from "react";
import "../Styles/services.css";

import ServiceItem from "./ServiceItem";

// jpg urls for each sevice item for all screen sizes
import webDesignMobile from "../assets/home/mobile/image-web-design.jpg";
import webDesignTablet from "../assets/home/tablet/image-web-design.jpg";
import webDesignDesktop from "../assets/home/desktop/image-web-design-large.jpg";

import appDesignMobile from "../assets/home/mobile/image-app-design.jpg";
import appDesignTablet from "../assets/home/tablet/image-app-design.jpg";
import appDesignDesktop from "../assets/home/desktop/image-app-design.jpg";

import graphicDesignMobile from "../assets/home/mobile/image-graphic-design.jpg";
import graphicDesignTablet from "../assets/home/tablet/image-graphic-design.jpg";
import graphicDesignDesktop from "../assets/home/desktop/image-graphic-design.jpg";
// import { Link } from "react-router-dom";

function Services() {
	// get windows screen width
	let screenWidth = window.innerWidth;

	return (
		<div className="services-section">
			<ServiceItem
				// use different url for depending on screen size
				path="/webDesign"
				name="Web Design"
				backgroundImageUrl={
					screenWidth < 768
						? webDesignMobile
						: screenWidth < 1200
						? webDesignTablet
						: webDesignDesktop
				}
			/>

			<ServiceItem
				path="/appDesign"
				name="App Design"
				backgroundImageUrl={
					screenWidth < 768
						? appDesignMobile
						: screenWidth < 1200
						? appDesignTablet
						: appDesignDesktop
				}
			/>

			<ServiceItem
				path="/graphicDesign"
				name="Graphic Design"
				backgroundImageUrl={
					screenWidth < 768
						? graphicDesignMobile
						: screenWidth < 1200
						? graphicDesignTablet
						: graphicDesignDesktop
				}
			/>
		</div>
	);
}

export default Services;
