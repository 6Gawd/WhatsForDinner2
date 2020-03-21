import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper center-align">
					<ul>
						<li>
							<Link to="/list">List</Link>
						</li>
						<li>
							<Link to="/recipes">Recipes</Link>
						</li>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
