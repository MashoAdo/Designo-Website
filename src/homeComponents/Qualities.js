import React from "react";
import "../Styles/qualities.css";
import { ReactComponent as Passionate } from "../assets/home/desktop/illustration-passionate.svg";
import { ReactComponent as Resourceful } from "../assets/home/desktop/illustration-friendly.svg";
import { ReactComponent as Friendly } from "../assets/home/desktop/illustration-resourceful.svg";

function Qualities() {
	return (
		<div className="qualities-section">
			<div className="qualities-item">
				<Passionate className="qualities-icon" />
				<div>
					<h3>PASSIONATE</h3>
					<p>
						Each project starts with an in-depth brand research to ensure we
						only create products that serve a purpose. We merge art, design, and
						technology into exciting new solutions.
					</p>
				</div>
			</div>

			<div className="qualities-item">
				<Friendly className="qualities-icon" />

				<div>
					<h3>RESOURCEFUL</h3>
					<p>
						Everything that we do has a strategic purpose. We use an agile
						approach in all of our projects and value customer collaboration. It
						guarantees superior results that fulfill our clients needs.
					</p>
				</div>
			</div>

			<div className="qualities-item">
				<Resourceful className="qualities-icon" />
				<div>
					<h3>FRIENDLY</h3>
					<p>
						We are a group of enthusiastic folks who know how to put people
						first. Our success depends on our customers, and we strive to give
						them the best experience a company can provide.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Qualities;
