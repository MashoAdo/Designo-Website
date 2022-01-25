import React from "react";
import AboutDescription from "./AboutDescription";
import AboutHero from "./AboutHero";
import AboutLocation from "./AboutLocations";

// jpg
import worldClassPhotoMobile from "../assets/about/mobile/image-world-class-talent.jpg";
import worldClassPhotoTablet from "../assets/about/tablet/image-world-class-talent.jpg";
import worldClassPhotoDesktop from "../assets/about/desktop/image-world-class-talent.jpg";

import realDealMobile from "../assets/about/mobile/image-real-deal.jpg";
import realDealTablet from "../assets/about/tablet/image-real-deal.jpg";
import realDealDesktop from "../assets/about/desktop/image-real-deal.jpg";

function AboutPage() {
	let screenWidth = window.innerWidth;

	return (
		<div>
			<AboutHero />
			<AboutDescription
				imageURL={
					screenWidth < 650
						? worldClassPhotoMobile
						: screenWidth < 1200
						? worldClassPhotoTablet
						: worldClassPhotoDesktop
				}
				name="World-class talent"
				description="We are a crew of strategists, problem-solvers, and technologists.
					Every design is thoughtfully crafted from concept to launch, ensuring
					success in its given market. We are constantly updating our skills in
					a myriad of platforms. Our team is multi-disciplinary and we are not
					merely interested in form — content and meaning are just as important.
					We give great importance to craftsmanship, service, and prompt
					delivery. Clients have always been impressed with our high-quality
					outcomes that encapsulates their brand’s story and mission."
			/>
			<AboutLocation />
			<AboutDescription
				imageURL={
					screenWidth < 650
						? realDealMobile
						: screenWidth < 1200
						? realDealTablet
						: realDealDesktop
				}
				name="The real deal"
				description="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.

We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
				"
				margin="310px"
			/>
		</div>
	);
}

export default AboutPage;
