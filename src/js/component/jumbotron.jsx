import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light mt-4 mb-4">
			<div className="p-4">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
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