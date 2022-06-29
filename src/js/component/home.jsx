import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./cards.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container ">
				<Jumbotron />
				<div className="row mb-4">
					<div className="col-md-3">
						<Card />
					</div>
					<div className="col-md-3">
						<Card />
					</div>
					<div className="col-md-3">
						<Card />
					</div>
					<div className="col-md-3">
						<Card />
					</div>
				</div>
			</div>
			<div className="container-fluid text-center bg-dark footer">
				<p className="text-secondary">
					Copyright @ Jasmine Landing Page{" "}
				</p>
			</div>
		</div>
	);
};

export default Home;
