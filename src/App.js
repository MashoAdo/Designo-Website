import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
	return (
		<Router>
			<>
				<Header />

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
				</Routes>

				<Footer />
			</>
		</Router>
	);
}

export default App;
