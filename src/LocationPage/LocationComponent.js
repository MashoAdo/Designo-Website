import React from "react";

function LocationComponent({
	imageURL,
	country,
	office,
	streetAddress,
	location,
	phone,
	mail,
	flexDirection,
	margin,
}) {
	return (
		<div
			className="location-component"
			style={{ flexDirection: flexDirection }}
		>
			<div className="map">
				<img src={imageURL} alt="map-img" />
			</div>
			<div className="location-details" style={{ margin: margin }}>
				<h2> {country} </h2>
				<div className="location-details-wrapper">
					<div className="address">
						<h3> {office} </h3>
						<p> {streetAddress} </p>
						<p> {location} </p>
					</div>

					<div className="contact-location">
						<h3>Contact</h3>
						<p>p : {phone}</p>
						<p>M : {mail}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LocationComponent;
