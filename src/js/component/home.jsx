import React from "react";
import Navbar from "/workspace/react-hello/src/js/component/navbar.jsx";
import Jumbotron from "/workspace/react-hello/src/js/component/jumbotron.jsx";
import Card from "/workspace/react-hello/src/js/component/cards.jsx";

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
				<p className="text-secondary h-100 ">
					Copyright @ Jasmine React Landing Page{" "}
				</p>
			</div>
		</div>
	);
};

export default Home;
