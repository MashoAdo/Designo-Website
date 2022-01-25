import React from "react";
// components
import AppDesignHero from "./AppDesignHero";
import AppDesignProjectItem from "./AppDesignProjectItem";
import ServiceItem from "../homeComponents/ServiceItem";

// jpg files for project items
import airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../assets/app-design/desktop/image-faceit.jpg";
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";

// Jpg files for 2 remaining  service i.e app design and graphic design for all screen sizes
import graphicDesignMobile from "../assets/home/mobile/image-graphic-design.jpg";
import graphicDesignTablet from "../assets/home/tablet/image-graphic-design.jpg";
import graphicDesignDesktop from "../assets/home/desktop/image-graphic-design.jpg";

import webDesignMobile from "../assets/home/mobile/image-web-design.jpg";
import webDesignTablet from "../assets/home/tablet/image-web-design.jpg";
import webDesignDesktop from "../assets/home/desktop/image-web-design-large.jpg";
// assets/home/mobile/image-web-design.jpg

function AppDesignPage() {
	let screenWidth = window.innerWidth;

	return (
		<div className="app-design-page-container">
			<AppDesignHero />
			<div className="project-container">
				<AppDesignProjectItem
					imageURL={airfilter}
					title="AIRFILTER"
					description="Solving the problem of poor indoor air quality by filtering the air"
				/>
				<AppDesignProjectItem
					imageURL={eyecam}
					title="EYECAM"
					description="Product that lets you edit your favorite photos and videos at any time"
				/>
				<AppDesignProjectItem
					imageURL={faceit}
					title="FACEIT"
					description="Get to meet your favorite internet superstar with the faceit app"
				/>
				<AppDesignProjectItem
					imageURL={todo}
					title="TODO"
					description="A todo app that features cloud sync with light and dark mode"
				/>
				<AppDesignProjectItem
					imageURL={loopstudios}
					title="LOOPSTUDIOS"
					description="A VR experience app made for Loopstudios"
				/>
			</div>

			<div className="other-services">
				<ServiceItem
					path="/webDesign"
					backgroundImageUrl={
						screenWidth < 768
							? webDesignMobile
							: screenWidth < 1200
							? webDesignTablet
							: webDesignDesktop
					}
					name="Web Design"
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

export default AppDesignPage;
