import React from "react";
import CallToActionComponent from "./CallToActionComponent";
import FooterInformation from "./FooterInformation";

function Footer() {
	return (
		// relative position on the footer component to absolutely postion the <CallToActionComponent />
		<footer style={{ position: "relative" }}>
			<CallToActionComponent />
			<FooterInformation />
		</footer>
	);
}

export default Footer;
