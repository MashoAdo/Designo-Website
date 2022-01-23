import React from "react";

// styles
import "../LocationStyles/Location.css";

// image URLs
import australiaURLDesktop from "../assets/locations/desktop/image-map-australia.png";
import australiaURLTablet from "../assets/locations/tablet/image-map-australia.png";

import canadaURLDesktop from "../assets/locations/desktop/image-map-canada.png";
import canadaURLTablet from "../assets/locations/tablet/image-map-canada.png";

import unitedKingdomDesktop from "../assets/locations/desktop/image-map-united-kingdom.png";
import unitedKingdomTablet from "../assets/locations/tablet/image-map-uk.png";

// location component
import LocationComponent from "./LocationComponent";

function LoactionPage() {
	let screenWidth = window.innerWidth;

	return (
		<div className="locations-component-container">
			<LocationComponent
				imageURL={
					screenWidth < 600
						? canadaURLDesktop
						: screenWidth < 1200
						? canadaURLTablet
						: canadaURLDesktop
				}
				country="Canada"
				office="Designo Central Office"
				streetAddress="3886 Wellington Street"
				location="Toronto, Ontario M9C 3J5"
				phone="+1 253-863-8967"
				mail="contact@designo.co"
				// flexDirection="row-reverse"
			/>

			<LocationComponent
				imageURL={
					650 > screenWidth > 1200 ? australiaURLDesktop : australiaURLTablet
				}
				country="Australia"
				office="Designo AU Office"
				streetAddress="19 Balonne Street"
				location="Toronto, Ontario M9C 3J5"
				phone="(02) 6720 9092"
				mail="contact@designo.co"
				flexDirection="row"
				margin="0  0 0 30px"
			/>

			<LocationComponent
				imageURL={
					650 > screenWidth > 1200 ? unitedKingdomDesktop : unitedKingdomTablet
				}
				country="United Kingdom"
				office="Designo UK Office"
				streetAddress="13 Colorado Way"
				location="Rhyd-y-fro SA8 9GA"
				phone="078 3115 1400"
				mail="contact@designo.co"
				// flexDirection="row-reverse"
			/>
		</div>
	);
}

export default LoactionPage;
