import React from "react";
import GraphicDesignHero from "./GraphicDesignHero";
import GraphicDesignProjectItem from "./GraphicDesignProjectItem";

// jpg files for project items
import boxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import sceince from "../assets/graphic-design/desktop/image-science.jpg";
import change from "../assets/graphic-design/desktop/image-change.jpg";

// Jpg files for 2 remaining  service i.e app design and graphic design for all screen sizes
import graphicDesignMobile from "../assets/home/mobile/image-app-design.jpg";
import graphicDesignTablet from "../assets/home/tablet/image-app-design.jpg";
import graphicDesignDesktop from "../assets/home/desktop/image-app-design.jpg";
// designo-webapp\src\assets\home\mobile\image-app-design.jpg
import ServiceItem from "../homeComponents/ServiceItem";
function GraphicDesignPage() {
	let screenWidth = window.innerWidth;

	return (
		<div className="app-design-page-container">
			<GraphicDesignHero />
			<div className="project-container">
				<GraphicDesignProjectItem
					imageURL={change}
					title="TIM BROWN"
					description="A book cover designed for Tim Brown’s new release, ‘Change’"
				/>
				<GraphicDesignProjectItem
					imageURL={boxedWater}
					title="BOXED WATER"
					description="A simple packaging concept made for Boxed Water"
				/>
				<GraphicDesignProjectItem
					imageURL={sceince}
					title="SCIENCE!"
					description="A poster made in collaboration with the Federal Art Project"
				/>
			</div>

			<div className="other-services">
				<ServiceItem
					backgroundImageUrl={
						screenWidth < 768
							? graphicDesignMobile
							: screenWidth < 1200
							? graphicDesignTablet
							: graphicDesignDesktop
					}
					name="Graphic Design"
				/>

				<ServiceItem
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

export default GraphicDesignPage;
