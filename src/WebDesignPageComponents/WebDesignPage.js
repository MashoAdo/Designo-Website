import React from "react";

// project component
import WebDesignProjectItem from "./WebDesignProjectItem.js";

// jpg files
import express from "../assets/web-design/desktop/image-express.jpg";
import transfer from "../assets/web-design/desktop/image-transfer.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";

// other service i.e app design and graphic design jps for all screen sizes
import appDesignMobile from "../assets/home/mobile/image-app-design.jpg";
import appDesignTablet from "../assets/home/tablet/image-app-design.jpg";
import appDesignDesktop from "../assets/home/desktop/image-app-design.jpg";

import graphicDesignMobile from "../assets/home/mobile/image-graphic-design.jpg";
import graphicDesignTablet from "../assets/home/tablet/image-graphic-design.jpg";
import graphicDesignDesktop from "../assets/home/desktop/image-graphic-design.jpg";

// components
import WebDesignHero from "./WebDesignHero";
import ServiceItem from "../homeComponents/ServiceItem";

function WebDesignPage() {
	let screenWidth = window.innerWidth;

	return (
		<div className="web-design-page-container">
			<WebDesignHero />

			<div className="project-container">
				<WebDesignProjectItem
					imageURL={express}
					title="Express"
					description="A multi-carrier shipping website for ecommerce businesses"
				/>
				<WebDesignProjectItem
					imageURL={transfer}
					title="Transfer"
					description="Site for low-cost money transfers and sending money within seconds"
				/>
				<WebDesignProjectItem
					imageURL={photon}
					title="Photon"
					description="A state-of-the-art music player with high-resolution audio and DSP effects"
				/>
				<WebDesignProjectItem
					imageURL={builder}
					title="Builder"
					description="Connects users with local contractors based on their location"
				/>
				<WebDesignProjectItem
					imageURL={blogr}
					title="Blogr"
					description="Blogr is a platform for creating an online blog or publication"
				/>
				<WebDesignProjectItem
					imageURL={camp}
					title="Camp"
					description="Get expert training in coding, data, design, and digital marketing"
				/>
			</div>

			<div className="other-services">
				<ServiceItem
					path="/appDesign"
					backgroundImageUrl={
						screenWidth < 768
							? appDesignMobile
							: screenWidth < 1200
							? appDesignTablet
							: appDesignDesktop
					}
					name="App Design"
				/>
				<ServiceItem
					path="/graphicDesign"
					backgroundImageUrl={
						screenWidth < 768
							? graphicDesignMobile
							: screenWidth < 1200
							? graphicDesignTablet
							: graphicDesignDesktop
					}
					name="Graphic Design"
				/>
			</div>
		</div>
	);
}

export default WebDesignPage;
