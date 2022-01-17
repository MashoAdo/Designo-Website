import React from "react";
import "../Styles/hero-styles.css";
import "../Styles/reusable-styles.css";
import { ReactComponent as Phone } from "../assets/phone.svg";

function Hero() {
	return (
		<div className="hero-section">
			<div className="hero-container">
				<div className="hero-content">
					<h2 className="hero-header">
						Award-winning custom designs and digital branding solutions
					</h2>
					<p>
						With over 10 years in the industry, we are experienced in creating
						fully responsive websites, app design, and engaging brand
						experiences. Find out more about our services.
					</p>
				</div>
				<button className="light-button">LEARN MORE</button>
			</div>
			<Phone />
		</div>
	);
}

export default Hero;
