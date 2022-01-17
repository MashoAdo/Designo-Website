import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Hero from "./components/Hero";
import Qualities from "./components/Qualities.js";
import Services from "./components/ServiceSection.js";
import Footer from "./components/Footer.js";

function App() {
	return (
		<div className="app">
			<Header />
			<body>
				<Hero />
				<Services />
				<Qualities />
			</body>
			<Footer />
		</div>
	);
}

export default App;
