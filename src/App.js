import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "./App.css";

// home page
import Header from "./homeComponents/Header.js";
import Hero from "./homeComponents/Hero";
import Qualities from "./homeComponents/Qualities.js";
import Services from "./homeComponents/ServiceSection.js";
import Footer from "./homeComponents/Footer.js";

// secondary Pages
import WebDesignPage from "./WebDesignPageComponents/WebDesignPage";
import AppDesignPage from "./AppDesignPageComponents/AppDesignPage";
import GraphicDesignPage from "./GraphicDesignPageComponents/GraphicDesignPage";
import AboutPage from "./AboutPage/AboutPage";
import LoactionPage from "./LocationPage/LoactionPage";
import ContactPage from "./ContactComponent/ContactPage";

function App() {
	// open/close menu
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	function removeMenu() {
		setIsOpen(false);
	}

	return (
		<Router>
			<div className="app">
				<Header isOpen={isOpen} hideMenu={removeMenu} toggle={toggle} />

				<Routes>
					<Route
						path="/"
						element={
							<body>
								<Hero />
								<Services />
								<Qualities />
							</body>
						}
					/>

					<Route path="/webDesign" element={<WebDesignPage />} />

					<Route path="/appDesign" element={<AppDesignPage />} />

					<Route path="/graphicDesign" element={<GraphicDesignPage />} />

					<Route path="/about" element={<AboutPage />} />

					<Route path="/locations" element={<LoactionPage />} />

					<Route path="/contact" element={<ContactPage />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
