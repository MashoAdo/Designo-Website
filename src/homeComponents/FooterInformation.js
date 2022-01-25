import React from "react";
import "../Styles/footer-information.css";
import darkLogo from "../assets/shared/desktop/logo-light.png";
import { ReactComponent as Facebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Youtube } from "../assets/shared/desktop/icon-youtube.svg";
import { ReactComponent as Twitter } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../assets/shared/desktop/icon-instagram.svg";

function FooterInformation() {
	return (
		<div className="footer-information">
			<div className="footer-top">
				<img src={darkLogo} className="dark-logo" alt="dark-logo" />

				<div className="line-separator-one"></div>
				<ul className="footer-links-container">
					<li className="footer-link">
						<a href="/about" rel="noreferrer">
							OUR COMPANY
						</a>
					</li>
					<li className="footer-link">
						<a href="/locations" rel="noreferrer">
							LOCATIONS
						</a>
					</li>
					<li className="footer-link">
						<a href="/contact" rel="noreferrer">
							CONTACT
						</a>
					</li>
				</ul>
			</div>

			<div className="line-separator-two"></div>

			<div className="footer-bottom">
				<div className="address-contacts">
					<div>
						<span>Designo Central Office</span>
						<br></br>
						<small>3886 Wellington Street</small>
						<br></br>

						<small>Toronto, Ontario M9C 3J5</small>
					</div>
					<div>
						<span>Contact Us (Central Office)</span>
						<br></br>

						<small>P : +1 253-863-8967</small>
						<br></br>

						<small>M : contact@designo.co</small>
					</div>
				</div>
				<div className="socials">
					<a href="http://www.facebook.com/" target="_blank">
						<Facebook />
					</a>
					<a href="http://www.youtube.com/" target="_blank">
						<Youtube />
					</a>
					<a href="http://www.twitter.com/" target="_blank">
						<Twitter />
					</a>
					<a href="http://www.pinterest.com/" target="_blank">
						<Pinterest />
					</a>
					<a href="http://www.instagram.com/" target="_blank">
						<Instagram />
					</a>
				</div>
			</div>
		</div>
	);
}

export default FooterInformation;
