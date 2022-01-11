import React from "react";
// import { ReactComponent as OvalLogo } from "../assets/Oval.svg";
// import { ReactComponent as DesignoLogo } from "../assets/DESIGNO.svg";
import "../Styles/menu-styles.css";

function Header() {
	return (
		<header className="header-section">
			<div className="logo-menuBtn">
				<div className="logo-wrapper">
					<div className="oval-logo"></div>
					<h1 className="designo-logo">DESIGNO</h1>
				</div>

				<div className="menu-btn">
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
				</div>
			</div>

			<nav className="nav">
				<ul className="nav-list">
					<li>
						<a className="nav-link" href="#">
							OUR COMPANY
						</a>
					</li>
					<li>
						<a className="nav-link" href="#">
							LOCATIONS
						</a>
					</li>
					<li>
						<a className="nav-link" href="#">
							CONTACT
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
