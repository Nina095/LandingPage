import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid ">
				<a className="navbar-brand text-white" href="#">
					Start Bootstrap
				</a>

				<div
					className="collapse navbar-collapse flex-row-reverse"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled text-secondary"
								aria-current="page"
								href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled text-secondary"
								aria-current="page"
								href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled text-secondary"
								aria-current="page"
								href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;