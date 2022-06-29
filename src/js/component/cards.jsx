import React from "react";

const Card = () => {
	return (
		<div className="card">
			<img src="http://placehold.jp/312x180.png"></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam.
				</p>
			</div>
			<div className="card-footer text-center">
				<a href="#" class="btn btn-primary">
					Find out More!
				</a>
			</div>
		</div>
	);
};

export default Card;