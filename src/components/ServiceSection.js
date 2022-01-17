import React from "react";
import ServiceItem from "./ServiceItem";
import webDesign from "../assets/home/mobile/image-web-design.jpg";
import appDesign from "../assets/home/mobile/image-app-design.jpg";
import graphicDesign from "../assets/home/mobile/image-graphic-design.jpg";

function Services() {
	// get windows screen width
	let screenWidth = window.screen.availWidth;

	console.log(screenWidth);

	return (
		<div className="services-section">
			<ServiceItem backgroundImageUrl={webDesign} name="Web Design" />
			<ServiceItem backgroundImageUrl={appDesign} name="App Design" />
			<ServiceItem backgroundImageUrl={graphicDesign} name="Graphic Design" />
		</div>
	);
}

export default Services;
