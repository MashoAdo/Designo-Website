import React from "react";
import ServiceItem from "./ServiceItem";

function Services() {
	return (
		<div className="services-section">
			<ServiceItem name="Web Design" />
			<ServiceItem name="App Design" />
			<ServiceItem name="Graphic Design" />
		</div>
	);
}

export default Services;
