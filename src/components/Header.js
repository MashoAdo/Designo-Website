import React, { useState } from "react";
import "../Styles/menu-styles.css";

function Header() {
	// open/close menu
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<header className="header-section">
			<div className="logo-menuBtn">
				<div className="logo-wrapper">
					<div className="oval-logo"></div>
					<h1 className="designo-logo">DESIGNO</h1>
				</div>

				<div
					className={isOpen ? "menu-btn close-btn" : "menu-btn"}
					onClick={toggle}
				>
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
					<div className="menu-bar"></div>
				</div>
			</div>

			<nav className={isOpen && "hide-menu"}>
				<ul className="nav-list">
					<li>
						<a className="nav-link" href="#x">
							OUR COMPANY
						</a>
					</li>
					<li>
						<a className="nav-link" href="#x">
							LOCATIONS
						</a>
					</li>
					<li>
						<a className="nav-link" href="#x">
							CONTACT
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
