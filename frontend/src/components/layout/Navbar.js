import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../context/Auth/AuthContext";

const Navbar = () => {
	const { authenticated, logout } = useContext(AuthContext);

	const handleLogout = () => {
		logout();
	};

	const authLinks = (
		<>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/login">
					Login
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" exact to="/signup">
					Register
				</NavLink>
			</li>
		</>
	);

	const logoutButton = (
		<li className="float-right">
			<button className="btn btn-ligt" onClick={handleLogout}>
				Logout
			</button>
		</li>
	);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand m-2" href="/">
				TravelEasy
			</a>
			<ul className="navbar-nav">
				{authenticated && (
					<Fragment>
						<li className="nav-item">
							<NavLink className="nav-link" to="/explore">
								Explore
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/mytrips">
								MyTrips
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/newplan">
								NewTrip
							</NavLink>
						</li>
					</Fragment>
				)}
			</ul>
			<ul className="navbar-nav position-absolute end-0 m-2">
				{authenticated ? logoutButton : authLinks}
			</ul>
		</nav>
	);
};

export default Navbar;
