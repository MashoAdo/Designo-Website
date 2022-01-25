import React from "react";
import "../Styles/header-styles.css";
import "../Styles/reusable-styles.css";

import { Link } from "react-router-dom";

function Header({ isOpen, hideMenu, toggle }) {
	return (
		<header className="header-section">
			<div className="logo-menuBtn">
				<Link to="/" className="logo-wrapper">
					<div className="oval-logo"></div>
					<h1 className="designo-logo">DESIGNO</h1>
				</Link>

				<div
					id="menu-btn"
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
						<Link to="/about" className="nav-link" onClick={hideMenu}>
							OUR COMPANY
						</Link>
					</li>
					<li>
						<Link to="/locations" className="nav-link" onClick={hideMenu}>
							LOCATION
						</Link>
					</li>
					<li>
						<Link to="/contact" className="nav-link" onClick={hideMenu}>
							CONTANCT
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
