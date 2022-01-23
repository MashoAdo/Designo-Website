import React from "react";

// styles
import "../ContactStyles/ContactCard.css";
import { ReactComponent as ErrorComponent } from "../assets/contact/desktop/icon-error.svg";

function ContactCard() {
	return (
		<div className="card-component">
			<div className="contact-intro">
				<h2>Contact Us </h2>
				<p>
					Ready to take it to the next level? Let's talk about your project or
					idea and find out how we can help your business grow. If you are
					looking for unique digital experiences that's relatable to your user,
					drop us a line.
				</p>
			</div>

			<div className="form-container">
				<form>
					<input placeholder="Rose Caldwell" name="fullName" type="text" />
					<input type="email" name="email" placeholder="Email Address" />
					<input type="tel" name="tel" placeholder="Phone" />
					<textarea placeholder="Your Message" rows=" 5"></textarea>
				</form>

				<button className="submit-button">SUBMIT</button>
			</div>
		</div>
	);
}

export default ContactCard;
