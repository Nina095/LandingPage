import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light mt-4 mb-4">
			<div className="p-4">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to Action!
					</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;