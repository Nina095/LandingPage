import React from "react";

const Card = () => {
	return (
		<div className="card">
			<img src="http://placehold.jp/312x180.png"></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a longer card with supporting text below as a
					natural lead-in to additional content. This content is a
					little bit longer.
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