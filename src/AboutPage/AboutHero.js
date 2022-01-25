import React from "react";

// style
import "../AboutStyles/AboutHero.css";

// hero jpg
import heroJpgMobile from "../assets/about/mobile/image-about-hero.jpg";
import heroJpgTable from "../assets/about/tablet/image-about-hero.jpg";
import heroJpgDesktop from "../assets/about/desktop/image-about-hero.jpg";

function AboutHero() {
	let screenWidth = window.innerWidth;

	return (
		<div className="about-hero-container">
			<div className="about-hero-image-wrapper">
				<img
					src={
						screenWidth < 650
							? heroJpgMobile
							: screenWidth < 1200
							? heroJpgTable
							: heroJpgDesktop
					}
					alt="hero-jpg"
				/>
			</div>

			<div className="about-hero-info">
				<h2>About Us</h2>
				<p>
					Founded in 2010, we are a creative agency that produces lasting
					results for our clients. We’ve partnered with many startups,
					corporations, and nonprofits alike to craft designs that make real
					impact. We’re always looking forward to creating brands, products, and
					digital experiences that connect with our clients’ audiences.
				</p>
			</div>
		</div>
	);
}

export default AboutHero;
